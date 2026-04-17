# Contributing

This guide provides instructions for contributing to this Capacitor plugin.

## Developing

### Local Setup

1. Fork and clone the repo.
2. Install the dependencies to use the plugin.

   ```shell
   npm install
   ```

3. Install SwiftLint if you're on macOS.

   ```shell
   brew install swiftlint
   ```

### Scripts

#### `npm run build`

Build the plugin web assets and generate plugin API documentation using [`@capacitor/docgen`](https://github.com/ionic-team/capacitor-docgen).

It will compile the TypeScript code from `src/` into ESM JavaScript in `dist/esm/`. These files are used in apps with bundlers when your plugin is imported.

Then, Rollup will bundle the code into a single file at `dist/plugin.js`. This file is used in apps without bundlers by including it as a script in `index.html`.

#### `npm run verify`

Build and validate the web and native projects.

This is run in CI to verify that the plugin builds for all platforms.

#### `npm run lint` / `npm run fmt`

Check formatting and code quality, autoformat/autofix if possible.

The `lint` command is run in CI. We recommend running `lint` and/or `fmt` before opening a PR,

## Publishing

There is a `prepublishOnly` hook in `package.json` which prepares the plugin before publishing, so all you need to do is run:

```shell
npm publish
```

> **Note**: The [`files`](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#files) array in `package.json` specifies which files get published. If you rename files/directories or add files elsewhere, you may need to update it.
