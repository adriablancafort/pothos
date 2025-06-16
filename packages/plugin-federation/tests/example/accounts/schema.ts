import SchemaBuilder from '@pothos/core';
import DirectivesPlugin from '@pothos/plugin-directives';
import FederationPlugin from '../../../src';

const builder = new SchemaBuilder<{
  DefaultFieldNullability: true;
  FederationPolicies: 'user:policy';
}>({
  plugins: [DirectivesPlugin, FederationPlugin],
  directives: {
    useGraphQLToolsUnorderedDirectives: true,
  },
});

interface User {
  id: string;
  name: string;
  birthDate: string;
  username: string;
}

const users: User[] = [
  {
    id: '1',
    name: 'Ada Lovelace',
    birthDate: '1815-12-10',
    username: '@ada',
  },
  {
    id: '2',
    name: 'Alan Turing',
    birthDate: '1912-06-23',
    username: '@complete',
  },
];

const UserType = builder.objectRef<User>('User').implement({
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    username: t.exposeString('username', {
      shareable: true,
    }),
    expensiveField: t.string({
      resolve: () => 'expensive',
      cost: 10,
    }),
    paginatedItems: t.field({
      type: ['String'],
      resolve: () => ['item1', 'item2'],
      listSize: {
        assumedSize: 100,
        slicingArguments: ['first', 'after'],
        sizedFields: ['totalCount'],
        requireOneSlicingArgument: true,
      },
    }),
  }),
});

builder.asEntity(UserType, {
  key: builder.keyDirective(builder.selection<{ id: string }>('id'), true),
  resolveReference: (user) => users.find(({ id }) => user.id === id),
});

builder.queryType({
  fields: (t) => ({
    me: t.field({
      type: UserType,
      resolve: () => users[0],
    }),
  }),
});

const Media = builder.objectRef<{ id: string }>('Media').implement({
  fields: (t) => ({
    id: t.exposeID('id'),
    test: t.string({
      resolve: () => 'test field from interfaceObject',
      cost: 5,
    }),
  }),
});

builder.asEntity(Media, {
  interfaceObject: true,
  key: builder.selection<{ id: string }>('id'),
  resolveReference: (ref) => ref,
});

export const schema = builder.toSubGraphSchema({
  linkUrl: 'https://specs.apollo.dev/federation/v2.9',
  federationDirectives: [
    '@key',
    '@shareable',
    '@inaccessible',
    '@tag',
    '@interfaceObject',
    '@cost',
    '@listSize',
  ],
});
