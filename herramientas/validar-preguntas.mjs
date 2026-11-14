// Valida preguntas.js. Uso manual: node herramientas/validar-preguntas.mjs
// Como hook PostToolUse, Claude Code manda por stdin el JSON de la herramienta.
// Sale con 0 si todo está bien y con 2 si hay errores; los errores van por stderr para que Claude los lea.
import { readFileSync, existsSync } from "node:fs";
import { join, basename } from "node:path";

const raiz = process.env.CLAUDE_PROJECT_DIR || process.cwd();

let editado = null;
if (!process.stdin.isTTY) {
  try {
    const entrada = readFileSync(0, "utf8");
    if (entrada.trim()) editado = JSON.parse(entrada)?.tool_input?.file_path ?? null;
  } catch { /* sin stdin válido: valida igual */ }
}
// Como hook, solo actúa cuando el archivo editado es preguntas.js.
if (editado && basename(editado) !== "preguntas.js") process.exit(0);

const ruta = join(raiz, "preguntas.js");
if (!existsSync(ruta)) { console.error(`No encuentro ${ruta}`); process.exit(2); }

const texto = readFileSync(ruta, "utf8");
const inicio = texto.indexOf("[");
const fin = texto.lastIndexOf("]");
let preguntas;
try {
  preguntas = JSON.parse(texto.slice(inicio, fin + 1));
} catch (e) {
  console.error(`preguntas.js: el arreglo no es JSON estricto (${e.message}). Usa comillas dobles y quita las comas al final.`);
  process.exit(2);
}

const errores = [];
const ids = new Set();
const TEMAS = ["N1", "N2", "Taller"];
preguntas.forEach((p, i) => {
  const donde = `Pregunta ${i + 1} (${p.id ?? "sin id"})`;
  if (!p.id || !/^[a-z0-9-]+$/.test(p.id)) errores.push(`${donde}: "id" debe ser kebab-case, por ejemplo "n2-que-es-mcp".`);
  if (ids.has(p.id)) errores.push(`${donde}: el id está repetido.`);
  ids.add(p.id);
  if (!TEMAS.includes(p.tema)) errores.push(`${donde}: "tema" debe ser uno de ${TEMAS.join(", ")}.`);
  if (!p.pregunta || !p.pregunta.trim().endsWith("?")) errores.push(`${donde}: "pregunta" debe terminar en "?".`);
  if (!Array.isArray(p.opciones) || p.opciones.length !== 4) errores.push(`${donde}: debe tener exactamente 4 opciones y tiene ${p.opciones?.length ?? 0}.`);
  if (!Number.isInteger(p.correcta) || p.correcta < 0 || p.correcta > 3) errores.push(`${donde}: "correcta" debe ser un número de 0 a 3.`);
  if (!p.explicacion || p.explicacion.length > 140) errores.push(`${donde}: "explicacion" debe existir y tener 140 caracteres o menos (tiene ${p.explicacion?.length ?? 0}).`);
});

if (errores.length) {
  console.error(`validar-preguntas: ${errores.length} error(es) en preguntas.js\n- ${errores.join("\n- ")}`);
  process.exit(2);
}
console.log(`validar-preguntas: ${preguntas.length} preguntas correctas.`);
