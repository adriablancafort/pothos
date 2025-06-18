import { createContextCache, isThenable, type MaybePromise, type SchemaTypes } from '@pothos/core';
import DataLoader, { type Options } from 'dataloader';
import type { GraphQLResolveInfo } from 'graphql';

export function rejectErrors<T>(
  val: MaybePromise<readonly (Error | T)[]>,
): MaybePromise<(Promise<T> | T)[]> {
  if (isThenable(val)) {
    return val.then(rejectErrors);
  }

  return val.map((item) => (item instanceof Error ? Promise.reject(item) : item));
}

const getAllDataLoaders = createContextCache(() => new Set<DataLoader<unknown, unknown>>());

function addDataloader<K, V, C>(context: object, loader: DataLoader<K, V, C>) {
  const loaderSet = getAllDataLoaders(context);

  loaderSet.add(loader);

  return loader;
}

export function clearAllDataLoaders(context: object) {
  const loaderSet = getAllDataLoaders(context);

  for (const loader of loaderSet) {
    loader.clearAll();
  }
}

export function loadAndSort<K, V, C, LoadResult, Args = never>(
  load: (keys: K[], context: C, args: Args, info: GraphQLResolveInfo) => MaybePromise<LoadResult>,
  toKey: false | ((val: V) => K) | undefined,
) {
  if (!toKey) {
    return load;
  }

  return async (keys: K[], context: C, args: Args, info: GraphQLResolveInfo) => {
    const list = await load(keys, context, args, info);
    const map = new Map<K, V>();
    const results: (V | null)[] = [];

    for (const val of list as V[]) {
      if (val instanceof Error) {
        throw val;
      }

      if (val != null) {
        map.set(toKey(val), val);
      }
    }

    for (let i = 0; i < keys.length; i += 1) {
      results[i] = map.get(keys[i]) ?? null;
    }

    return results;
  };
}

export function dataloaderGetter<K, V, C>(
  loaderOptions: Options<K, V, C> | undefined,
  load: (keys: K[], context: SchemaTypes['Context']) => Promise<readonly (Error | V)[]>,
  toKey: ((val: V) => K) | undefined,
  sort: boolean | ((val: V) => K) | undefined,
) {
  const loader = (sort ? loadAndSort(load, typeof sort === 'function' ? sort : toKey) : load) as (
    keys: readonly K[],
    context: SchemaTypes['Context'],
  ) => Promise<V[]>;

  return createContextCache((context: object) =>
    addDataloader(context, new DataLoader<K, V, C>((keys) => loader(keys, context), loaderOptions)),
  );
}

export function pathDataloaderGetter<K, V, C, Args>(
  loaderOptions: Options<K, V, C> | undefined,
  load: (
    keys: K[],
    context: SchemaTypes['Context'],
    args: Args,
    info: GraphQLResolveInfo,
  ) => Promise<readonly (Error | V)[]>,
  toKey: ((val: V) => K) | undefined,
  sort: boolean | ((val: V) => K) | undefined,
  byPath?: boolean,
) {
  const cache = createContextCache(() => new Map<string, DataLoader<K, V, C>>());

  const loader = (sort ? loadAndSort(load, typeof sort === 'function' ? sort : toKey) : load) as (
    keys: readonly K[],
    context: SchemaTypes['Context'],
    args: Args,
    info: GraphQLResolveInfo,
  ) => Promise<V[]>;

  return (args: Args, ctx: SchemaTypes['Context'], info: GraphQLResolveInfo) => {
    const key = byPath ? cacheKey(info.path) : '*';
    const map = cache(ctx);

    if (!map.has(key)) {
      map.set(
        key,
        addDataloader(
          ctx,
          new DataLoader<K, V, C>((keys) => loader(keys, ctx, args, info), loaderOptions),
        ),
      );
    }

    return map.get(key)!;
  };
}

export function cacheKey(path: GraphQLResolveInfo['path'] | undefined) {
  if (!path) {
    // Root
    return '*';
  }

  let key = String(path.key);
  let current = path.prev;

  while (current) {
    key = `${typeof current.key === 'number' ? '*' : current.key}.${key}`;
    current = current.prev;
  }

  return key;
}
