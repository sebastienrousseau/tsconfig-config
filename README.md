<!-- SPDX-License-Identifier: ISC -->

<p align="center">
  <img src="./tsconfig-config.svg" alt="tsconfig-config logo" width="128" />
</p>

<h1 align="center">@sebastienrousseau/tsconfig-config</h1>

<p align="center">
  Shared TypeScript compiler configuration rules for Base, Node.js, and Web targets.
</p>

<p align="center">
  <a href="https://github.com/sebastienrousseau/tsconfig-config/actions"><img src="https://img.shields.io/github/actions/workflow/status/sebastienrousseau/tsconfig-config/ci.yml?branch=main&style=for-the-badge&logo=github" alt="Build Status" /></a>
  <a href="https://www.npmjs.com/package/@sebastienrousseau/tsconfig-config"><img src="https://img.shields.io/npm/v/@sebastienrousseau%2Ftsconfig-config?style=for-the-badge&color=fc8d62&logo=npm" alt="npm package" /></a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/sebastienrousseau/tsconfig-config"><img src="https://img.shields.io/ossf-scorecard/github.com/sebastienrousseau/tsconfig-config?style=for-the-badge&label=OpenSSF%20Scorecard&logo=openssf" alt="OpenSSF Scorecard" /></a>
  <a href="https://github.com/sebastienrousseau/tsconfig-config/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-ISC-blue?style=for-the-badge" alt="License" /></a>
</p>

---

## Contents

**Getting Started**
- [Installation](#installation) — Package manager commands
- [Quick Start](#quick-start) — Configure in under a minute

**Features & Rule Showcase**
- [Strict Type Checking & Modern Module Resolution](#strict-type-checking-modern-module-resolution) — Code comparison
- [Module Compatibility](#module-compatibility) — Dual CJS/ESM & TypeScript declarations

**Governance & Quality**
- [Development & Testing](#development--testing) — Local validation
- [Security & Compliance](#security--compliance) — SLSA attestation & vulnerability policy
- [Author & License](#author--license) — Open source license

---

## Installation

Install using your preferred package manager:

```bash
# npm
npm install --save-dev @sebastienrousseau/tsconfig-config

# pnpm
pnpm add -D @sebastienrousseau/tsconfig-config

# yarn
yarn add -D @sebastienrousseau/tsconfig-config

# bun
bun add -d @sebastienrousseau/tsconfig-config
```

---

## Quick Start

### In `package.json`

```json
{
  "tsconfig": "@sebastienrousseau/tsconfig-config"
}
```

### In CommonJS Configuration

```js
module.exports = require("@sebastienrousseau/tsconfig-config");
```

### In ES Module Configuration

```js
import config from "@sebastienrousseau/tsconfig-config";
export default config;
```

---

## Strict Type Checking & Modern Module Resolution

Includes strict null checks, NodeNext module resolution, and declaration map generation.

### Before (Unstandardized)

```javascript
// tsconfig.json
{
  "compilerOptions": {}
}
```

### After (@sebastienrousseau/tsconfig-config Enforced)

```javascript
// tsconfig.json
{
  "extends": "@sebastienrousseau/tsconfig-config/node.json"
}
```

---

## Module Compatibility

This package exports dual module entrypoints via `package.json` `exports`:

```json
"exports": {
  ".": {
    "types": "./index.d.ts",
    "import": "./index.mjs",
    "require": "./index.cjs"
  }
}
```

Full TypeScript definitions (`index.d.ts`) are included for rich IDE autocomplete and inline JSDoc tooltips.

---

## Development & Testing

```bash
# Clone repository
git clone https://github.com/sebastienrousseau/tsconfig-config.git
cd tsconfig-config

# Run validation tests
npm test
```

---

## Security & Compliance

- **SLSA Level 3 Provenance**: Builds are cryptographically signed with keyless provenance via GitHub Actions.
- **Automated Security Audit**: Monitored continuously with CodeQL and Dependabot.
- **Commit Signatures**: All commits are SSH/GPG signed.
- See [SECURITY.md](SECURITY.md) for vulnerability reporting procedures.

---

## Author & License

Developed and maintained by **[Sebastien Rousseau](https://github.com/sebastienrousseau)**.

Released under the [ISC License](LICENSE).
