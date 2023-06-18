import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  format: ["esm"],
  target: "es2020",
});