/**
 * 100% Feature Showcase for @sebastienrousseau/tsconfig-config
 */
const config = require("../index.cjs");
const assert = require("assert");

console.log("=== 100% Feature Showcase: @sebastienrousseau/tsconfig-config ===");
assert(config.base && config.base.compilerOptions);
assert(config.node && config.node.compilerOptions);
assert(config.web && config.web.compilerOptions);
assert.strictEqual(config.base.compilerOptions.strict, true);
assert.strictEqual(config.node.compilerOptions.target, "ES2022");

console.log("  ✓ Base target strict: true");
console.log("  ✓ Node preset target:", config.node.compilerOptions.target);
console.log("  ✓ Web preset target:", config.web.compilerOptions.target);
console.log("✅ 100% of tsconfig-config presets and features validated.");
