const assert = require("assert");
const cjsConfig = require("../index.cjs");

async function runTests() {
  console.log("Testing @sebastienrousseau/tsconfig-config...");

  assert(cjsConfig && typeof cjsConfig === "object", "CJS config must be an object");
  assert(cjsConfig.base.compilerOptions.strict === true, "Strict mode must be enabled");

  console.log("✅ tsconfig-config validation tests passed!");
}

runTests().catch((err) => {
  console.error("❌ Test failed:", err);
  process.exit(1);
});
