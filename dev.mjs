import { createServer } from "node:http";
import { readFile } from "node:fs/promises";

const port = 4173;
createServer(async (_request, response) => {
  try {
    const html = await readFile("index.html");
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(html);
  } catch {
    response.writeHead(500);
    response.end("Unable to load page");
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Local: http://127.0.0.1:${port}`);
});
