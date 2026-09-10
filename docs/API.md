# `@sebastienrousseau/tsconfig-config` API Specification

Comprehensive schema, property definitions, and exported options reference for `@sebastienrousseau/tsconfig-config`.

---

## Description

Shareable TypeScript configuration presets for base, Node.js, and web application targets.

---

## Programmatic Entrypoints

| Specifier | Module Type | Target Runtime | Path |
| :--- | :--- | :--- | :--- |
| `.` (default) | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `@sebastienrousseau/tsconfig-config` | Dual (CJS/ESM) | Node.js >= 18 | `index.cjs` / `index.mjs` |
| `index.d.ts` | TypeScript | TypeScript >= 5.0 | Type declarations |

---

## Feature & Property Reference

### 1. Base Compiler Preset

- **Description**: Strict type-checking foundation (`base`)
- **Scope**: Production & Development
- **Status**: Stable & Active

### 2. Node.js Target Preset

- **Description**: Optimized for modern Node.js runtimes with NodeNext resolution (`node`)
- **Scope**: Production & Development
- **Status**: Stable & Active

### 3. Web Browser Preset

- **Description**: Optimized for client-side bundlers with DOM library inclusion (`web`)
- **Scope**: Production & Development
- **Status**: Stable & Active

### 4. Strict Mode Defaults

- **Description**: Enforces strict null checks, no implicit any, and exhaustive switch checks
- **Scope**: Production & Development
- **Status**: Stable & Active

