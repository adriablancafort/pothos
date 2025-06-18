# @giraphql/plugin-complexity

## 4.1.2

### Patch Changes

- 1622740: update dependencies

## 4.1.1

### Patch Changes

- cd7f309: Update dependencies

## 4.1.0

### Minor Changes

- 27af377: replace eslint and prettier with biome

## 4.0.2

### Patch Changes

- Updated dependencies [777f6de]
  - @pothos/core@4.0.2

## 4.0.1

### Patch Changes

- 9bd203e: Fix graphql peer dependency version to match documented minumum version
- Updated dependencies [9bd203e]
  - @pothos/core@4.0.1

## 4.0.0

### Major Changes

- 29841a8: Release Pothos v4 🎉 see https://pothos-graphql.dev/docs/migrations/v4 for more details

### Patch Changes

- c1e6dcb: update readmes
- Updated dependencies [c1e6dcb]
- Updated dependencies [29841a8]
  - @pothos/core@4.0.0

## 4.0.0-next.1

### Patch Changes

- update readmes
- Updated dependencies
  - @pothos/core@4.0.0-next.1

## 4.0.0-next.0

### Major Changes

- 29841a8: Release Pothos v4 🎉 see https://pothos-graphql.dev/docs/migrations/v4 for more details

### Patch Changes

- Updated dependencies [29841a8]
  - @pothos/core@4.0.0-next.0

## 3.13.1

### Patch Changes

- 1ecea46: revert accidental pinning of graphql peer dependency

## 3.13.0

### Minor Changes

- 2f23a1af: fix bug when limits are zero

## 3.12.1

### Patch Changes

- 4c6bc638: Add provinance to npm releases

## 3.12.0

### Minor Changes

- bf0385ae: Add new PothosError classes

## 3.11.7

### Patch Changes

- d4d41796: Update dev dependencies

## 3.11.6

### Patch Changes

- 6f00194c: Fix an issue with esm import transform

## 3.11.5

### Patch Changes

- b12f9122: Fix issue with esm build script

## 3.11.4

### Patch Changes

- 9fa27cf7: Transform dynamic type imports in d.ts files

## 3.11.3

### Patch Changes

- 3a82d645: Apply esm transform to esm d.ts definitions

## 3.11.2

### Patch Changes

- 218fc68b: Fix script for copying ems d.ts definitions

## 3.11.1

### Patch Changes

- 67531f1e: Create separate typescript definitions for esm files

## 3.11.0

### Minor Changes

- 11929311: Update type definitions to work with module: "nodeNext"

## 3.10.2

### Patch Changes

- aa18acb7: update dev dependencies

## 3.10.1

### Patch Changes

- a76616e0: Don't allow negative size in complexity multipliers

## 3.10.0

### Minor Changes

- d67764b5: Make options objecst on toSchema, queryType, and mutationType optional

## 3.9.1

### Patch Changes

- 3f5d2a92: Use fieldComplexity from both builder and toSchema options

## 3.9.0

### Minor Changes

- c82d5719: add builder option for calculating complexity based on field

## 3.8.0

### Minor Changes

- 76d50bb4: Fix import of cjs graphql file in esm pothos

## 3.7.0

### Minor Changes

- 85da3312: Add createComplexityRule method for creating a standard graphql validator"
- 94138077: Add option to disable complexity checks

## 3.6.1

### Patch Changes

- 4bcc04b6: Allow to configure `complexityError` via options.

## 3.6.0

### Minor Changes

- 3a7ff291: Refactor internal imports to remove import cycles

### Patch Changes

- 3a7ff291: Update dev dependencies

## 3.5.0

### Minor Changes

- f58ad8fa: Add complexityFromQuery util for calculating complexity without running a request
- f58ad8fa: Add complexityError option for customizing errors thrown when query exceeds complixity
  limits

## 3.4.0

### Minor Changes

- ecb2714c: Add types entry to export map in package.json and update dev dependencies

  This should fix compatibility with typescripts new `"moduleResolution": "node12"`

## 3.3.0

### Minor Changes

- 241a385f: Add peer dependency on @pothos/core

## 3.2.0

### Minor Changes

- 6279235f: Update build process to use swc and move type definitions to dts directory

### Patch Changes

- 21a2454e: update dev dependencies

## 3.1.2

### Patch Changes

- a7d95fca: Fix bug with \_\_typename selected in a Union fragment

## 3.1.1

### Patch Changes

- 03aecf76: update .npmignore

## 3.1.0

### Minor Changes

- 4ad5f4ff: Normalize resolveType and isTypeOf behavior to match graphql spec behavior and allow
  both to be optional

### Patch Changes

- 43ca3031: Update dev dependencies

## 3.0.1

### Patch Changes

- 2d9b21cd: Use workspace:\* for dev dependencies on pothos packages

## 3.0.0

### Major Changes

- 4caad5e4: Rename GiraphQL to Pothos

## 2.5.0

### Minor Changes

- 1d62c1ff: Handle \_\_typename in complexity plugin

## 2.4.0

### Minor Changes

- 9307635a: Migrate build process to use turborepo

## 2.3.2

### Patch Changes

- 2b08f852: Fix syntax highlighting in docs and update npm README.md files"

## 2.3.1

### Patch Changes

- c6aa732: graphql@15 type compatibility fix

## 2.3.0

### Minor Changes

- 48e9fd8: Add missing exports field to package.json

## 2.2.0

### Minor Changes

- 42d210c: Use type only imports to resolve circular dependencies

## 2.1.0

### Minor Changes

- 6d6d54e: Add complexity plugin
