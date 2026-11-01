// Kleiner lokaler Server für den Übersetzer: http://localhost:4380
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { join, normalize, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const WURZEL = dirname(fileURLToPath(import.meta.url));
const PORT = 4380;
const TYPEN = {
  ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".mjs": "text/javascript",
  ".json": "application/json", ".webmanifest": "application/manifest+json", ".png": "image/png", ".svg": "image/svg+xml"
};

createServer(async (anfrage, antwort) => {
  let pfad = decodeURIComponent(new URL(anfrage.url, "http://x").pathname);
  if (pfad === "/") { antwort.writeHead(302, { Location: "/app/" }); return antwort.end(); }
  if (pfad.endsWith("/")) pfad += "index.html";
  const datei = join(WURZEL, normalize(pfad));
  if (!datei.startsWith(WURZEL)) { antwort.writeHead(403); return antwort.end(); }
  try {
    const inhalt = await readFile(datei);
    antwort.writeHead(200, { "Content-Type": TYPEN[extname(datei)] || "application/octet-stream", "Cache-Control": "no-cache" });
    antwort.end(inhalt);
  } catch {
    antwort.writeHead(404); antwort.end("Nicht gefunden");
  }
}).listen(PORT, "127.0.0.1", () => console.log(`Übersetzer läuft auf http://localhost:${PORT}`));
