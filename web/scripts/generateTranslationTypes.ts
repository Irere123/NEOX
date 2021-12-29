import * as fs from "fs";
import { join } from "path";
import * as prettier from "prettier";
import { traverseTranslations } from "./traverseTranslations";

const s = `
// this is autogenerated by running \`yarn gen:i18:keys\`
export type TranslationKeys =
${traverseTranslations()
  .map((k) => `  "${k}"`)
  .join("|\n")}
`;

fs.writeFileSync(
  join(__dirname, "../src/generated/translationKeys.ts"),
  prettier.format(s, { parser: "babel", useTabs: true })
);
