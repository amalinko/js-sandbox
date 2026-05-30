import { watch } from "fs";

const build = async () => {
  const result = await Bun.build({
    entrypoints: ["./src/main.ts"],
    outdir: "./dist",
    sourcemap: "inline",
    target: "browser",
  });

  if (!result.success) {
    for (const msg of result.logs) console.error(msg);
  }
};

await build();
console.log("Initial build done.");

watch("./src", { recursive: true }, async () => {
  await build();
  console.log(`[${new Date().toLocaleTimeString()}] Rebuilt.`);
});

Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const pathname = url.pathname === "/" ? "/index.html" : url.pathname;

    for (const base of ["./public", "./dist"]) {
      const file = Bun.file(base + pathname);
      if (await file.exists()) return new Response(file);
    }

    return new Response("Not found", { status: 404 });
  },
});

console.log("Dev server running at http://localhost:3000");
