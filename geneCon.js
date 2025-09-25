import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { extname, join } from 'path';

function readFilesRecursively(
  dir,
  allowedExt = ['.js', '.ts', '.json', '.tsx'],
  depth = 0,
  maxDepth = 5
) {
  let output = '';

  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch (err) {
    console.error(`Failed to read directory ${dir}:`, err);
    return '';
  }

  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;

    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      if (depth < maxDepth) {
        output += `\n# Directory: ${fullPath}\n`;
        output += readFilesRecursively(
          fullPath,
          allowedExt,
          depth + 1,
          maxDepth
        );
      }
    } else {
      const ext = extname(entry.name);
      if (allowedExt.includes(ext)) {
        try {
          const content = readFileSync(fullPath, 'utf-8');
          output += `\n===== File: ${fullPath} =====\n`;
          output += content + '\n';
        } catch (err) {
          console.error(`Failed to read file ${fullPath}:`, err);
        }
      }
    }
  }

  return output;
}

console.log('Reading src/ files...');

const srcDir = './src';
const fileContents = readFilesRecursively(srcDir);

try {
  writeFileSync('srcFilesContent.txt', fileContents);
  console.log('✅ srcFilesContent.txt generated successfully.');
} catch (err) {
  console.error('❌ Failed to write srcFilesContent.txt:', err);
}
