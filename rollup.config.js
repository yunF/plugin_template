import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default {
  input: "index.js",
  output: [
    {
      file: "dist/main.umd.js",
      format: "umd",
      name: "bundleName"
    },
    {
      file: "dist/main.es.js",
      format: "es"
    },
    {
      file: "dist/main.cjs.js",
      format: "cjs"
    },
    {
      file: "dist/main.min.js",
      format: "iife",
      name: "bundleName",
      plugins: [terser()]
    }
  ],
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs()
  ]
};
