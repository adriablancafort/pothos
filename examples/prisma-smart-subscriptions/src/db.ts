import { PrismaClient } from '../prisma/client';
import { pubsub } from './pubsub';

export const db = new PrismaClient();

db.$use(async (params, next) => {
  const { model } = params;

  const result = await next(params);
  if (
    params.action === 'create' ||
    params.action === 'update' ||
    params.action === 'delete' ||
    params.action === 'deleteMany' ||
    params.action === 'updateMany' ||
    params.action === 'createMany'
  ) {
    console.log(`🚀 ${params.action} ${params.model}`);
    pubsub.publish(`dbUpdated${model}`, {});
  }
  // See results here
  return result;
});
