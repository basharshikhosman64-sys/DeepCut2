import { readdirSync, writeFileSync } from "fs";
import { join } from "path";

function generateStructure(dir, prefix = "", depth = 0, maxDepth = 2) {
  if (depth > maxDepth) return "";

  let structure = "";
  let entries;

  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch (err) {
    console.error(`Failed to read directory ${dir}:`, err);
    return "";
  }

  entries.forEach((entry, index) => {
    if (entry.name === "node_modules" || entry.name.startsWith(".")) {
      // skip node_modules and hidden folders
      return;
    }

    const isLast = index === entries.length - 1;
    const pointer = isLast ? "└── " : "├── ";

    structure += prefix + pointer + entry.name + "\n";

    if (entry.isDirectory()) {
      const newPrefix = prefix + (isLast ? "    " : "│   ");
      structure += generateStructure(join(dir, entry.name), newPrefix, depth + 1, maxDepth);
    }
  });

  return structure;
}

const projectDir = "./";
console.log("Scanning project structure...");

const structure = generateStructure(projectDir);

try {
  writeFileSync("projectStructure.txt", structure);
  console.log("✅ projectStructure.txt generated successfully.");
} catch (err) {
  console.error("❌ Failed to write projectStructure.txt:", err);
}
