import { createRequire } from "module";
import { franc } from "franc";
const require = createRequire(import.meta.url);

const langs = require("langs");
const colors = require("colors");
const input = process.argv[2];

const langCode = franc(input);
if (langCode === "und") {
  console.log("try more text");
} else {
  const language = langs.where("3", langCode);
  console.log(`Best guess is: ${language.name.red}`.green);
}
