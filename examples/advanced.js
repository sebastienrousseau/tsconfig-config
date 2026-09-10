// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

/**
 * Advanced tsconfig extension example
 */
const base = require("../index.cjs");
const custom = {
  ...base.node,
  compilerOptions: {
    ...base.node.compilerOptions,
    jsx: "react-jsx",
  },
};
console.log("Configured custom JSX option:", custom.compilerOptions.jsx);
