# Change Log

## 4.1.2

### Patch Changes

- 1622740: update dependencies

## 4.1.1

### Patch Changes

- cd7f309: Update dependencies

## 4.1.0

### Minor Changes

- 27af377: replace eslint and prettier with biome

## 4.0.1

### Patch Changes

- 9bd203e: Fix graphql peer dependency version to match documented minumum version

## 4.0.0

### Major Changes

- 29841a8: Release Pothos v4 🎉 see https://pothos-graphql.dev/docs/migrations/v4 for more details

### Patch Changes

- c1e6dcb: update readmes
- bdcb8cd: Fix prismaFieldWithInput

## 4.0.0-next.2

### Patch Changes

- update readmes

## 4.0.0-next.1

### Patch Changes

- Fix prismaFieldWithInput

## 4.0.0-next.0

### Major Changes

- 29841a8: Release Pothos v4 🎉 see https://pothos-graphql.dev/docs/migrations/v4 for more details

## 3.49.0

### Minor Changes

- cea5c66: Update sentry plugin to be compatible with sentry v8

## 3.48.1

### Patch Changes

- 9db5200: Improve handling of mismatched result sizes in dataloaders

## 3.48.0

### Minor Changes

- 1483e74: PothosError now extends GraphQL error

## 3.47.0

### Minor Changes

- f8fb4e6b: Add support for $inferType and $inferInput helpers on Refs

## 3.46.0

### Minor Changes

- 27b0638d: Update plugin imports so that no named imports are imported from files with side-effects

## 3.45.0

### Minor Changes

- 0c042150: Allow globalConnectionFields to be overwritten on specific connections

## 3.44.0

### Minor Changes

- b3259d3e: Make parent and args available in connection and edge fields of prisma connections

## 3.43.1

### Patch Changes

- 4c6bc638: Add provinance to npm releases

## 3.43.0

### Minor Changes

- cd1558a3: Included `idFieldOptions` when creating the Node interface’s ID field.

## 3.42.0

### Minor Changes

- cd98256e: Add `nodeQueryOptions.args` and `nodesQueryOptions.args` to allow setting arg options on
  the `node` and `nodes` queries

## 3.41.0

### Minor Changes

- fe288457: update deno

## 3.40.0

### Minor Changes

- 487b810a: Add support for @interfaceObject and @composeDirective

## 3.39.0

### Minor Changes

- 22041db0: Add default isTypeOf for loadableNode
- 68c94e4f: Support parsing globalIDs for loadableNode

### Patch Changes

- d2b02b79: Fix a few issues with globalID parsing

## 3.38.0

### Minor Changes

- 42bf6190: Allow unionType to receive types as a thunk

## 3.37.0

### Minor Changes

- ec411ea1: Allow / unwrap Promises in "expose" type fields

## 3.36.0

### Minor Changes

- bf0385ae: Add new PothosError classes

## 3.35.0

### Minor Changes

- 252ba5fb: Add nodeField and edgesField options to edge/connection builders

## 3.34.1

### Patch Changes

- be5bff07: Update `resolveArrayConnection` return type to reflect that it always returns a non-null
  `ConnectionShape`

## 3.34.0

### Minor Changes

- 5c6e0abb: Add option for disabling node and nodes fields

## 3.33.0

### Minor Changes

- 85687927: Added support for running authScopes when a subscroption is created rather than when
  subscription values are resolved

## 3.32.0

### Minor Changes

- 75d13217: Export utils for formatting prisma cursors

## 3.31.0

### Minor Changes

- c3db3bcd: Enable adding interfaces to connections and edges

### Patch Changes

- fd08a9d9: allow readonly lists to be exposed and improve inference of t.expose fields

## 3.30.2

### Patch Changes

- bf6a6d2b: make directives plugin more compatible with older versions of graphql.js

## 3.30.1

### Patch Changes

- 15d19a38: Fix hasNextPage when paginating backwards with resolveOffsetConnection

## 3.30.0

### Minor Changes

- cd1c0502: Add support for nested lists
- 99bc6574: Add initial support for reusable prisma connections

## 3.29.0

### Minor Changes

- d4d41796: Add new `treatErrorsAsUnauthorized` option for better handling of thrown errors

### Patch Changes

- d4d41796: Update dev dependencies

## 3.28.6

### Patch Changes

- 6f00194c: Fix an issue with esm import transform

## 3.28.5

### Patch Changes

- b12f9122: Fix issue with esm build script

## 3.28.4

### Patch Changes

- d350f842: update dev deps

## 3.28.3

### Patch Changes

- 9fa27cf7: Transform dynamic type imports in d.ts files

## 3.28.2

### Patch Changes

- 3a82d645: Apply esm transform to esm d.ts definitions

## 3.28.1

### Patch Changes

- 67531f1e: Create separate typescript definitions for esm files

## 3.28.0

### Minor Changes

- 11929311: Update type definitions to work with module: "nodeNext"

## 3.27.2

### Patch Changes

- aa18acb7: update dev dependencies

## 3.27.1

### Patch Changes

- a76616e0: Don't allow negative size in complexity multipliers

## 3.27.0

### Minor Changes

- cf93c7c9: Fix some edge cases with how option objects become optional when no arguments are
  required

## 3.26.0

### Minor Changes

- 631dea27: Move some checks from isTypeOf to resovleType to improve performance and allow nodes
  without isTypeOf checks

## 3.25.0

### Minor Changes

- d67764b5: Make options objecst on toSchema, queryType, and mutationType optional

## 3.24.2

### Patch Changes

- e297e78a: Support typescript@4.8

## 3.24.1

### Patch Changes

- 3f5d2a92: Use fieldComplexity from both builder and toSchema options

## 3.24.0

### Minor Changes

- c82d5719: add builder option for calculating complexity based on field

## 3.23.0

### Minor Changes

- 76d50bb4: Fix import of cjs graphql file in esm pothos

## 3.22.0

### Minor Changes

- c9b02338: Support context when using custom gloablID encoding or decoding

## 3.21.0

### Minor Changes

- 390e74a7: Add `idFieldOptions` to relay plugin options

## 3.20.0

### Minor Changes

- c5b1e2d3: Only use abstractReturnShapeKey when resolveType is not provided

## 3.19.0

### Minor Changes

- 33789284: Update cursor encoding to work in deno

## 3.18.0

### Minor Changes

- 2bb5db96: Added new nodesOnConnections option for adding a nodes field on connections

## 3.17.0

### Minor Changes

- 09572175: Add builder options for default union and result type options

## 3.16.1

### Patch Changes

- c102f522: Fix withAuth on prismaObject fields builders

## 3.16.0

### Minor Changes

- 3a7ff291: Refactor internal imports to remove import cycles

### Patch Changes

- 3a7ff291: Update dev dependencies

## 3.15.0

### Minor Changes

- ad928594: Add defaultConnectionTypeOptions and defaultEdgeTypeOptions

### Patch Changes

- 04ed2b0c: Fix args in plugin methods on connection fields sometimes not being typed correctly

## 3.14.0

### Minor Changes

- 7311904e: Add ability to accept an inputTypeRef for builder.mutationField
- 7311904e: Add withAuth method to return a field builder to allow custom auth context with other
  plugin methods

### Patch Changes

- 7311904e: Fix nullability option when using t.expose with a list type
- 7311904e: Update dev deps

## 3.13.1

### Patch Changes

- c8f75aa1: Update dev dependencies

## 3.13.0

### Minor Changes

- 79e69c2b: Add resolveCursorConnection helper for relay plugin

## 3.12.0

### Minor Changes

- 32cb5073: Fix resolveType not being correctly applied for interfaces when isTypeOf is not used

## 3.11.1

### Patch Changes

- 4e5756ca: Update dev dependencies

## 3.11.0

### Minor Changes

- 1735eb40: Add edgeObject method to relay plugin

## 3.10.0

### Minor Changes

- ecb2714c: Add types entry to export map in package.json and update dev dependencies

  This should fix compatibility with typescripts new `"moduleResolution": "node12"`

## 3.9.2

### Patch Changes

- 89f09498: Fix issue with argument mapping utils that caused nested lists of input objects to be
  transformed incorrectly in the relay plugin

## 3.9.1

### Patch Changes

- 205a8c73: Recactor internal imports to reduce imports from index files

## 3.9.0

### Minor Changes

- ce1063e3: Add new tracinig packages

### Patch Changes

- 040d0664: Use direct imports rather than importing from index files where possible

## 3.8.0

### Minor Changes

- f0741c42: Set typename on field configs based on usage rather than field builder constructor.

## 3.7.1

### Patch Changes

- 6e4ccc7b: Fix loadable refs when used with builder.objectType

## 3.7.0

### Minor Changes

- 9a0ae33e: Omit resolver for exposed fields with matching names to improve perfomance in
  graphql-jit

## 3.6.3

### Patch Changes

- 971f1aad: Update dev dependencies

## 3.6.2

### Patch Changes

- 8e6a4723: Fix issue with setting input requiredness in with-input plugin

## 3.6.1

### Patch Changes

- 7d69b286: Fix field names that match intrinsic object properties (eg constructor)

## 3.6.0

### Minor Changes

- 6279235f: Update build process to use swc and move type definitions to dts directory

### Patch Changes

- 21a2454e: update dev dependencies

## 3.5.0

### Minor Changes

- c0bdbc1b: update deno packages
- c0bdbc1b: Fix type for InputFieldRef.kind

## 3.4.3

### Patch Changes

- cf4a2d14: cleanup style and comments

## 3.4.2

### Patch Changes

- 31f9e8be: Fix isTypeOf check not handling \_\_typename correctly

## 3.4.1

### Patch Changes

- 03aecf76: update .npmignore

## 3.4.0

### Minor Changes

- 4ad5f4ff: Normalize resolveType and isTypeOf behavior to match graphql spec behavior and allow
  both to be optional

### Patch Changes

- 43ca3031: Update dev dependencies

## 3.3.1

### Patch Changes

- ab4a9ae4: Fix some type compatibility issues when skipLibCheck is false

## 3.3.0

### Minor Changes

- eb9c33b8: Add loadManyWithoutCache option to dataloader to avoid double caching in loadableNode

## 3.2.0

### Minor Changes

- 7593d24f: Add loadableList method to dataloader plugin for handling one-to-many relations

## 3.1.0

### Minor Changes

- 11b02e73: Fix some issues with type inference on nullable connections

## 3.0.0

### Major Changes

- 4caad5e4: Rename GiraphQL to Pothos

## 2.20.0

### Minor Changes

- afa16607: Fixed types for serialize in scalarType options

## 2.19.0

### Minor Changes

- 9307635a: Migrate build process to use turborepo

## 2.18.1

### Patch Changes

- c6aa732: graphql@15 type compatibility fix

## 2.18.0

### Minor Changes

- aeef5e5: Update dependencies

## 2.17.0

### Minor Changes

- 9107f29: Update dependencies (includes graphql 16)

## 2.16.0

### Minor Changes

- 17db3bd: Make type refs extendable by plugins

## 2.15.4

### Patch Changes

- c976bfe: Update dependencies

## 2.15.3

### Patch Changes

- 4150f92: Fixed esm transformer for path-imports from dependencies

## 2.15.2

### Patch Changes

- b4b8381: Updrade deps (typescript 4.4)

## 2.15.1

### Patch Changes

- f04be64: Update dependencies

## 2.15.0

### Minor Changes

- a4c87cf: Use ".js" extensions everywhere and add module and exports to package.json to better
  support ems in node

## 2.14.0

### Minor Changes

- 06e11f9: Pass context to query option of relation and relatedConnection fields

## 2.13.2

### Patch Changes

- f13208c: bump to fix latest tag

## 2.13.1

### Patch Changes

- 9ab8fbc: re-release previous version due to build-process issue

## 2.13.0

### Minor Changes

- 3dd3ff14: Updated dev dependencies, switched to pnpm, and added changesets for releases

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 2.12.0 - 2021-08-03

#### 🚀 Updates

- update deno ([16ba12c](https://github.com/hayes/giraphql/commit/16ba12c))

**Note:** Version bump only for package @giraphql/deno

## 2.11.0 - 2021-07-30

#### 🚀 Updates

- add prisma plugin ([d427c82](https://github.com/hayes/giraphql/commit/d427c82))

**Note:** Version bump only for package @giraphql/deno

## 2.10.0 - 2021-07-29

#### 🚀 Updates

- update deno ([a38003b](https://github.com/hayes/giraphql/commit/a38003b))

#### 🐞 Fixes

- create start and end cursors even if edges are null
  ([64b9d2f](https://github.com/hayes/giraphql/commit/64b9d2f))

**Note:** Version bump only for package @giraphql/deno

### 2.9.1 - 2021-07-10

**Note:** Version bump only for package @giraphql/deno

### 2.9.0 - 2021-07-04

**Note:** Version bump only for package @giraphql/deno

## 2.9.0-alpha.0 - 2021-07-04

#### 🚀 Updates

- add early warning for undefined refs to simplify debugging of circular import issues
  ([095b68b](https://github.com/hayes/giraphql/commit/095b68b))

#### 📦 Dependencies

- upgrade typescript ([675f6a2](https://github.com/hayes/giraphql/commit/675f6a2))

**Note:** Version bump only for package @giraphql/deno

## 2.8.0 - 2021-07-02

#### 🚀 Updates

- update deno ([382775e](https://github.com/hayes/giraphql/commit/382775e))

**Note:** Version bump only for package @giraphql/deno

## 2.7.0 - 2021-06-30

#### 🚀 Updates

- support async refinements in validation plugin
  ([276876d](https://github.com/hayes/giraphql/commit/276876d))

**Note:** Version bump only for package @giraphql/deno

### 2.6.1 - 2021-06-29

#### 📘 Docs

- update docs to include links to error plugin
  ([46db92d](https://github.com/hayes/giraphql/commit/46db92d))

**Note:** Version bump only for package @giraphql/deno

### 2.6.0 - 2021-06-28

**Note:** Version bump only for package @giraphql/deno

## 2.6.0-alpha.1 - 2021-06-28

#### 🚀 Updates

- update docs and deno ([4f131b0](https://github.com/hayes/giraphql/commit/4f131b0))

**Note:** Version bump only for package @giraphql/deno

## 2.6.0-alpha.0 - 2021-06-28

#### 🚀 Updates

- add errors plugin ([88509b4](https://github.com/hayes/giraphql/commit/88509b4))

**Note:** Version bump only for package @giraphql/deno

## 2.5.0 - 2021-06-11

#### 🚀 Updates

- make field options args optional when empty
  ([ae71648](https://github.com/hayes/giraphql/commit/ae71648))
- update deno ([61f4b5a](https://github.com/hayes/giraphql/commit/61f4b5a))

#### 📦 Dependencies

- update dev deps ([813d9d0](https://github.com/hayes/giraphql/commit/813d9d0))

**Note:** Version bump only for package @giraphql/deno

## 2.4.0 - 2021-06-10

#### 🚀 Updates

- update deno ([d7350f9](https://github.com/hayes/giraphql/commit/d7350f9))

**Note:** Version bump only for package @giraphql/deno

## 2.3.0 - 2021-05-28

#### 🚀 Updates

- update deno ([d6365c4](https://github.com/hayes/giraphql/commit/d6365c4))

**Note:** Version bump only for package @giraphql/deno

### 2.2.1 - 2021-05-13

#### 📘 Docs

- add docs for loadableNode ([1ae01e8](https://github.com/hayes/giraphql/commit/1ae01e8))
- remove changelogs from deno dir ([952109e](https://github.com/hayes/giraphql/commit/952109e))

**Note:** Version bump only for package @giraphql/deno

## 2.2.0 - 2021-05-12

#### 🚀 Updates

- update deno ([7d11693](https://github.com/hayes/giraphql/commit/7d11693))
- update deno ([ab02c25](https://github.com/hayes/giraphql/commit/ab02c25))

**Note:** Version bump only for package @giraphql/deno

## 2.1.0 - 2021-05-10

#### 🚀 Updates

- add esm build for all packages ([d8bbdc9](https://github.com/hayes/giraphql/commit/d8bbdc9))

#### 🐞 Fixes

- fix issue with yarn run v1.22.10 ([03444ee](https://github.com/hayes/giraphql/commit/03444ee))

**Note:** Version bump only for package @giraphql/deno

### 2.0.0 - 2021-05-09

#### 🐞 Fixes

- update docs for deno ([44e1f30](https://github.com/hayes/giraphql/commit/44e1f30))

#### 📘 Docs

- sync docs changes to deno ([ce2ffc5](https://github.com/hayes/giraphql/commit/ce2ffc5))

**Note:** Version bump only for package @giraphql/deno

### 2.0.0-alpha.1 - 2021-05-08

#### 🐞 Fixes

- set deno version to 2.0 and remove auto-release
  ([cd91f6d](https://github.com/hayes/giraphql/commit/cd91f6d))

**Note:** Version bump only for package @giraphql/deno

## 0.1.0-alpha.0 - 2021-05-08

#### 🚀 Updates

- add deno support for dataloader plugin
  ([720ba01](https://github.com/hayes/giraphql/commit/720ba01))

#### 🐞 Fixes

- add deno files after deno-build ([3f4f94b](https://github.com/hayes/giraphql/commit/3f4f94b))

**Note:** Version bump only for package @giraphql/deno

### 0.0.1 - 2021-05-05

#### 📘 Docs

- use deno.land url in readme ([4db29fa](https://github.com/hayes/giraphql/commit/4db29fa))

**Note:** Version bump only for package @giraphql/deno

### 0.0.1-alpha.0 - 2021-05-05

**Note:** Version bump only for package @giraphql/deno
