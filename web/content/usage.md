---
title: "Usage — @sebastienrousseau/tsconfig-config"
description: "How to use and configure @sebastienrousseau/tsconfig-config."
layout: "doc"
---

# Usage

`@sebastienrousseau/tsconfig-config` can be consumed across all standard module formats.

## CommonJS

```javascript
module.exports = require("@sebastienrousseau/tsconfig-config");
```

## ES Modules

```javascript
import config from "@sebastienrousseau/tsconfig-config";
export default config;
```

## In `package.json`

```json
{
  "tsconfig": "@sebastienrousseau/tsconfig-config"
}
```
