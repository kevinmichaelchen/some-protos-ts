import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import fg from 'fast-glob';
import * as path from "path";

const tsFiles = fg.sync(['gen/**/*.ts']);

console.log("tsFiles", tsFiles)

// "gen/ts/some-protos/idl/some/protos/greeter/v1beta1/greeter.ts" => "gen/ts/some-protos/idl"
const getPrefix = p => p === "" || p.endsWith("idl") ? p : getPrefix(path.dirname(p))

// full path will be something like:
// gen/ts/some-protos/idl/some/protos/greeter/v1beta1/greeter.ts
const getOutputDir = fullPath => path.join("dist", fullPath.substring(getPrefix(fullPath).length))

const configs = tsFiles && tsFiles.map(tsFile => ({
  external: ['long', 'protobufjs/minimal'],
  input: tsFile,
  output: {
    dir: getOutputDir(tsFile),
    format: 'cjs'
  },
  plugins: [
    peerDepsExternal(),
    typescript(),
  ]
}))

export default configs;