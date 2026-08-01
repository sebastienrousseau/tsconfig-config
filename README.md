<!-- SPDX-License-Identifier: ISC -->

<p align="center">
  <img src="https://cloudcdn.pro/tsconfig-config/v1/logos/tsconfig-config.svg" alt="tsconfig-config logo" width="128" />
</p>

<h1 align="center">@sebastienrousseau/tsconfig-config</h1>

<p align="center">
  Shared TypeScript compiler configuration rules for Base, Node.js, and Web targets.
</p>

<p align="center">
  <a href="https://github.com/sebastienrousseau/tsconfig-config/actions"><img src="https://img.shields.io/github/actions/workflow/status/sebastienrousseau/tsconfig-config/ci.yml?style=for-the-badge&logo=github" alt="Build Status" /></a>
  <a href="https://www.npmjs.com/package/@sebastienrousseau/tsconfig-config"><img src="https://img.shields.io/npm/v/@sebastienrousseau/tsconfig-config.svg?style=for-the-badge&color=fc8d62&logo=npm" alt="npm package" /></a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/sebastienrousseau/tsconfig-config"><img src="https://img.shields.io/ossf-scorecard/github.com/sebastienrousseau/tsconfig-config?style=for-the-badge&label=OpenSSF%20Scorecard&logo=openssf" alt="OpenSSF Scorecard" /></a>
  <a href="https://github.com/sebastienrousseau/tsconfig-config/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-ISC-blue.svg?style=for-the-badge" alt="License" /></a>
</p>

---

## Contents

**Getting Started**
- [Install](#install) — npm, pnpm, yarn, bun
- [Quick Start](#quick-start) — configuration in under a minute

**Configuration Reference**
- [Capabilities & Features](#capabilities--features) — design rationale & defaults
- [Module Compatibility](#module-compatibility) — Dual CJS/ESM & TypeScript declarations
- [Integration Guide](#integration-guide) — setup in popular toolchains

**Operational & Quality**
- [Development & Verification](#development--verification) — running tests & validation
- [Security & Attestation](#security--attestation) — supply chain security & SLSA attestation
- [License](#license) — ISC License

---

## Install

### Package Managers

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

### Version Matrix

| Tool | Supported Version | Package Version |
|---|---|---|
| Node.js | `>=18.0.0` | `1.0.0` |
| TypeScript (tsc) | Latest Stable | `1.0.0` |

---

## Quick Start

### In `package.json`

```json
"extends": "@sebastienrousseau/tsconfig-config/node.json"
```

### In CommonJS Configuration (`tsconfig.json`)

```js
const configs = require("@sebastienrousseau/tsconfig-config");
```

### In ES Module Configuration (`config.mjs`)

```js
import configs from "@sebastienrousseau/tsconfig-config";
```

---

## Capabilities & Features

| Capability | Details |
|---|---|
| **2026 Ready** | Engineered to conform strictly to modern ECMAScript and TypeScript (tsc) standards. |
| **Zero Side Effects** | Pure configuration exports with zero unnecessary runtime overhead. |
| **Dual Export** | Native support for both CommonJS (`require`) and ES Modules (`import`). |
| **TypeScript Support** | Includes first-class TypeScript definition files (`index.d.ts`). |

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

---

## Development & Verification

### Local Testing

```bash
# Clone the repository
git clone https://github.com/sebastienrousseau/tsconfig-config.git
cd tsconfig-config

# Run the validation test suite
npm test
```

---

## Security & Attestation

- **SLSA Level 3**: Every package build is signed with keyless provenance via GitHub Actions.
- **Dependency Auditing**: Automated vulnerability scans via `npm audit` and OpenSSF Scorecards.
- **Zero Unpinned Dependencies**: Strict dependency management prevents supply chain vulnerabilities.

---

## License

[ISC License](LICENSE) © [Sebastien Rousseau](https://github.com/sebastienrousseau)
