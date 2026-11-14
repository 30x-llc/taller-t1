// Servidor local para probar el quiz en el navegador. Uso: node herramientas/servidor.mjs
// Abre http://127.0.0.1:8765. Escucha solo en tu máquina. Sirve solo los archivos de esta carpeta. Ctrl+C lo detiene.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { join, normalize, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const puerto = Number(process.env.PUERTO || 8765);
const tipos = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".png": "image/png", ".json": "application/json" };

createServer(async (pedido, respuesta) => {
  const ruta = decodeURIComponent(new URL(pedido.url, "http://x").pathname);
  const archivo = normalize(join(raiz, ruta === "/" ? "index.html" : ruta));
  if (!archivo.startsWith(raiz.endsWith(sep) ? raiz : raiz + sep) && archivo !== join(raiz, "index.html")) {
    respuesta.writeHead(403).end("Prohibido");
    return;
  }
  try {
    const contenido = await readFile(archivo);
    respuesta.writeHead(200, { "Content-Type": tipos[extname(archivo)] || "application/octet-stream" }).end(contenido);
  } catch {
    respuesta.writeHead(404).end("No existe");
  }
}).listen(puerto, "127.0.0.1", () => console.log(`Quiz en http://127.0.0.1:${puerto}`));
