import { execute, printSchema } from 'graphql';
import { gql } from 'graphql-tag';
import { builderWithNonRequireInputs } from './example/builder';
import schema from './example/schema';

describe('example schema', () => {
  it('generates expected schema', () => {
    expect(printSchema(schema)).toMatchSnapshot();
    expect(printSchema(builderWithNonRequireInputs.toSchema({}))).toMatchSnapshot();
  });

  describe('query', () => {
    it('returns expected result', async () => {
      const query = gql`
        query {
          exampleQuery(input: { id: "123" }) {
            id
          }
          withOptions(custom: { id: "123" }) {
            id
          }
          obj {
            exampleObjectField(input: { id: "123" }) {
              id
            }
            withOptions(custom: { id: "123" }) {
              id
            }
          }
          iface {
            __typename
            exampleInterfaceField(input: { id: "123" }) {
              id
            }
            withOptions(custom: { id: "123" }) {
              id
            }
          }
          withValidation(input: { email: "test@test.com" }) {
            email
          }
          withValidationInvalid: withValidation(input: { email: "test" }) {
            email
          }
          prismaFieldWithInput(input: { id: "1" }) {
            id
          }
        }
      `;

      const result = await execute({
        schema,
        document: query,
        contextValue: {},
      });

      expect(result).toMatchInlineSnapshot(`
        {
          "data": {
            "exampleQuery": "123",
            "iface": {
              "__typename": "ObjWithInterface",
              "exampleInterfaceField": "123",
              "withOptions": "123",
            },
            "obj": {
              "exampleObjectField": "123",
              "withOptions": "123",
            },
            "prismaFieldWithInput": {
              "id": "1",
            },
            "withOptions": "123",
            "withValidation": "test@test.com",
            "withValidationInvalid": null,
          },
          "errors": [
            [GraphQLError: [
          {
            "origin": "string",
            "code": "invalid_format",
            "format": "email",
            "pattern": "/^(?!\\\\.)(?!.*\\\\.\\\\.)([A-Za-z0-9_'+\\\\-\\\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\\\-]*\\\\.)+[A-Za-z]{2,}$/",
            "path": [
              "input",
              "email"
            ],
            "message": "Invalid email address"
          }
        ]],
          ],
        }
      `);
    });
  });

  describe('mutations', () => {
    it('returns expected result', async () => {
      const query = gql`
        mutation {
          exampleMutation(input: { id: "123" }) {
            id
          }
          withOptions(custom: { id: "123" }) {
            id
          }
        }
      `;

      const result = await execute({
        schema,
        document: query,
        contextValue: {},
      });

      expect(result).toMatchInlineSnapshot(`
        {
          "data": {
            "exampleMutation": "123",
            "withOptions": "123",
          },
        }
      `);
    });
  });
});
