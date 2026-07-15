import { watch } from "fs";

const PORT = 3000;

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

  return result.success;
};

await build();
console.log("Initial build done.");

const clients = new Set<ReadableStreamDefaultController>();

const LIVE_RELOAD_SCRIPT = `
<script>
  new EventSource("/__livereload").onmessage = () => location.reload();
</script>
`;

Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/__livereload") {
      let controller: ReadableStreamDefaultController;
      const stream = new ReadableStream({
        start(c) {
          controller = c;
          clients.add(c);
        },
        cancel() {
          clients.delete(controller);
        },
      });
      return new Response(stream, {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        },
      });
    }

    const pathname = url.pathname === "/" ? "/index.html" : url.pathname;

    for (const base of ["./public", "./dist"]) {
      const file = Bun.file(base + pathname);
      if (await file.exists()) {
        if (pathname.endsWith(".html")) {
          const html = await file.text();
          return new Response(html.replace("</body>", `${LIVE_RELOAD_SCRIPT}</body>`), {
            headers: { "Content-Type": "text/html" },
          });
        }
        return new Response(file);
      }
    }

    return new Response("Not found", { status: 404 });
  },
});

watch("./src", { recursive: true }, async (_event, filename) => {
  if (filename === "dev.ts") return;

  const ok = await build();
  console.log(`[${new Date().toLocaleTimeString()}] Rebuilt${ok ? "" : " (with errors)"}.`);

  for (const controller of clients) {
    controller.enqueue("data: reload\n\n");
  }
});

console.log(`Dev server running at http://localhost:${PORT}`);
