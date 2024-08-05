/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "node:fs/promises";
import express, { Request, Response } from "express";
import { ViteDevServer } from "vite";

// Constants
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 3000;
const base = process.env.BASE || "/";

// Cached production assets
let templateHtml = "";
let ssrManifest: string | undefined;

// Types
interface RenderResult {
  head?: string;
  html?: string;
}

// Create http server
const app = express();

// Vite server
let vite: ViteDevServer | undefined;

async function startServer() {
  // Load production assets
  if (isProduction) {
    templateHtml = await fs.readFile("./dist/client/index.html", "utf-8");
    ssrManifest = await fs.readFile("./dist/client/.vite/ssr-manifest.json", "utf-8");
  }

  // Add Vite or respective production middlewares
  if (!isProduction) {
    const { createServer } = await import("vite");
    vite = await createServer({
      server: { middlewareMode: true },
      appType: "custom",
      base,
    });
    app.use(vite.middlewares);
  } else {
    const compression = (await import("compression")).default;
    const sirv = (await import("sirv")).default;
    app.use(compression());
    app.use(base, sirv("./dist/client", { extensions: [] }));
  }

  // Serve HTML
  app.use("*", async (req: Request, res: Response) => {
    try {
      const url = req.originalUrl.replace(base, "");
      let template: string;
      let render: (url: string, manifest?: string) => Promise<RenderResult>;

      if (!isProduction) {
        // Always read fresh template in development
        template = await fs.readFile("./index.html", "utf-8");
        template = await vite!.transformIndexHtml(url, template);
        render = (await vite!.ssrLoadModule("/src/entry-server.ts")).render;
      } else {
        template = templateHtml;
        render = (await import("./dist/server/entry-server.js")).render as unknown as (
          url: string,
          manifest?: string
        ) => Promise<RenderResult>;
      }

      const rendered = await render(url, ssrManifest);
      const html = template
        .replace(`<!--app-head-->`, rendered.head ?? "")
        .replace(`<!--app-html-->`, rendered.html ?? "");

      res.status(200).set({ "Content-Type": "text/html" }).send(html);
    } catch (e: any) {
      vite?.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  // Start http server
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
}

startServer();
