# Repository Guide

## Overview
This repository contains a React Native library (`reactnative-forceupdate`) and an example application under the `example/` folder. The library source code lives in `src/` and unit tests are in `src/__tests__/`. The project uses Yarn workspaces and requires Node.js 18.

## Development
- Install dependencies with `yarn` from the repository root. Do **not** use `npm`.
- Run the following before committing any change:
  - `yarn lint` – ESLint with Prettier rules
  - `yarn typecheck` – TypeScript compilation without emitting files
  - `yarn test` – Jest unit tests
- Pre‑commit hooks run ESLint and TypeScript checks (see `lefthook.yml`). Commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.
- The example application can be run with `yarn example <platform>` where `<platform>` is `start`, `android`, `ios` or `web`.

## Building and Publishing
- Build the library with `yarn prepare` (uses `react-native-builder-bob`).
- Releases are handled via `yarn release` which uses `release-it`.

## Continuous Integration
GitHub Actions (`.github/workflows/ci.yml`) run `yarn lint`, `yarn typecheck`, `yarn test` with coverage, build the library and the web example.

## Pull Requests
Keep pull requests focused and small. Verify that lint, typecheck and tests pass before creating the PR. Use clear commit messages in the Conventional Commit format.
