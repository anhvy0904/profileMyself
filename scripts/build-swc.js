const fs = require('fs');
const path = require('path');

const esmDir = path.join(__dirname, '..', 'node_modules', '@swc', 'helpers', 'esm');
const cjsDir = path.join(__dirname, '..', 'node_modules', '@swc', 'helpers', 'cjs');

if (!fs.existsSync(cjsDir)) {
  fs.mkdirSync(cjsDir, { recursive: true });
}

if (fs.existsSync(esmDir)) {
  const files = fs.readdirSync(esmDir);
  for (const file of files) {
    if (file.endsWith('.js')) {
      const cjsFile = file.replace(/\.js$/, '.cjs');
      let content = fs.readFileSync(path.join(esmDir, file), 'utf8');

      // Convert imports: import { _xyz as _ } from "./_xyz.js"; -> const { _ } = require("./_xyz.cjs");
      content = content.replace(
        /import\s*\{\s*([a-zA-Z0-9_]+)\s+as\s+([a-zA-Z0-9_]+)\s*\}\s*from\s*['"]\.\/([^'"]+)\.js['"];?/g,
        'var { $2: $1 } = require("./$3.cjs");'
      );
      content = content.replace(
        /import\s*([a-zA-Z0-9_]+)\s*from\s*['"]\.\/([^'"]+)\.js['"];?/g,
        'var $1 = require("./$2.cjs");'
      );

      // Convert exports: export { _xyz as _ }; -> exports._ = _xyz; exports.default = _xyz;
      content = content.replace(
        /export\s*\{\s*([a-zA-Z0-9_]+)\s+as\s+_\s*\};?/g,
        'exports._ = $1;\nexports.default = $1;'
      );

      // Convert default exports if any
      content = content.replace(
        /export\s+default\s+([a-zA-Z0-9_]+);?/g,
        'exports.default = $1;'
      );

      const header = '"use strict";\nObject.defineProperty(exports, "__esModule", { value: true });\n';
      fs.writeFileSync(path.join(cjsDir, cjsFile), header + content);
    }
  }
  console.log('Successfully generated all @swc/helpers/cjs files with proper CommonJS syntax.');
}
