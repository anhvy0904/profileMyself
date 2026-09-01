const fs = require('fs');
const path = require('path');

const binDir = path.join(__dirname, '..', 'node_modules', '.bin');
if (!fs.existsSync(binDir)) {
  fs.mkdirSync(binDir, { recursive: true });
}

// Binaries to link
const bins = [
  { name: 'next', target: '../next/dist/bin/next' },
  { name: 'tsc', target: '../typescript/bin/tsc' },
  { name: 'tsserver', target: '../typescript/bin/tsserver' },
  { name: 'tailwindcss', target: '../tailwindcss/lib/cli.js' }
];

for (const b of bins) {
  // .cmd wrapper for Windows cmd/powershell
  const cmdContent = `@ECHO off
GOTO start
:find_dp0
SET dp0=%~dp0
EXIT /b
:start
SETLOCAL
CALL :find_dp0

IF EXIST "%dp0%\\node.exe" (
  SET "_prog=%dp0%\\node.exe"
) ELSE (
  SET "_prog=node"
  SET PATHEXT=%PATHEXT:;.JS;=;%
)

endLocal & goto #_undefined_# 2>NUL || "%_prog%"  "%dp0%\\${b.target}" %*
`;

  // Unix/bash wrapper
  const shContent = `#!/bin/sh
basedir=$(dirname "$(echo "$0" | sed -e 's,\\\\,/,g')")

case \`uname\` in
    *CYGWIN*|*MINGW*|*MSYS*)
        if command -v cygpath > /dev/null 2>&1; then
            basedir=\`cygpath -w "$basedir"\`
        fi
    ;;
esac

if [ -x "$basedir/node" ]; then
  exec "$basedir/node"  "$basedir/${b.target}" "$@"
else
  exec node  "$basedir/${b.target}" "$@"
fi
`;

  fs.writeFileSync(path.join(binDir, `${b.name}.cmd`), cmdContent);
  fs.writeFileSync(path.join(binDir, b.name), shContent);
}

// Generate CJS helpers for @swc/helpers if needed
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
      const content = fs.readFileSync(path.join(esmDir, file), 'utf8');
      
      let cjsContent = content
        .replace(/export\s+default\s+function\s+([a-zA-Z0-9_]+)/g, 'function $1')
        .replace(/export\s+default\s+([a-zA-Z0-9_]+);?/g, '')
        + `\nif (typeof exports !== 'undefined') { Object.defineProperty(exports, '__esModule', { value: true }); exports._ = ${file.replace(/\.js$/, '')}; exports.default = ${file.replace(/\.js$/, '')}; }\n`;

      fs.writeFileSync(path.join(cjsDir, cjsFile), cjsContent);
    }
  }
}

console.log('Setup of .bin and @swc/helpers/cjs completed successfully.');
