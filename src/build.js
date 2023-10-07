import * as esbuild from "esbuild";

esbuild.build({
  entryPoints: ["src/entry.js"],
  bundle: true,
  format: "esm",
  outdir: "dist",
});
