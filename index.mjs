import { createRequire } from "module";

const require = createRequire(import.meta.url);
const base = require("./base.json");
const node = require("./node.json");
const web = require("./web.json");

export default {
  base,
  node,
  web,
};
