import { createTestServer } from '@pothos/test-utils';
import schema from './schema';

// prisma.$on('query', (e) => {
//   console.log(`Query: ${e.query}, ${e.params}`);
//   console.log(`Duration: ${e.duration}ms`);
// });

// prisma.$use((params, next) => {
//   console.log(JSON.stringify(params, null, 2));

//   return next(params);
// });

const server = createTestServer({ schema, context: () => ({ user: { id: 1 } }) });

server.listen(3000, () => {
  console.log('🚀 Server started at http://127.0.0.1:3000');
});
