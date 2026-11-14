// Preguntas del quiz. El arreglo entre corchetes es JSON estricto: comillas dobles y sin comas al final.
const PREGUNTAS = [
  {
    "id": "n1-sin-memoria",
    "tema": "N1",
    "pregunta": "¿Qué recuerda la API de un LLM entre 2 llamadas seguidas?",
    "opciones": [
      "Toda la conversación anterior",
      "Nada: cada llamada manda otra vez todo el contexto",
      "Solo los últimos 5 mensajes",
      "Lo que guardó en su memoria interna"
    ],
    "correcta": 1,
    "explicacion": "La API no guarda estado. El harness reenvía la conversación completa en cada llamada."
  },
  {
    "id": "n2-carga-skill",
    "tema": "N2",
    "pregunta": "¿Qué carga Claude Code de una skill al iniciar la sesión?",
    "opciones": [
      "El SKILL.md completo",
      "Solo el nombre y la descripción",
      "Los scripts de la carpeta de la skill",
      "Nada hasta que escribes /skill"
    ],
    "correcta": 1,
    "explicacion": "La descripción carga siempre. El cuerpo del SKILL.md entra solo cuando la skill se usa."
  },
  {
    "id": "n2-cli-o-mcp",
    "tema": "N2",
    "pregunta": "Tu agente tiene tu terminal y tienes la CLI gh instalada. ¿Qué usas para leer un issue de GitHub?",
    "opciones": [
      "La CLI gh",
      "Un MCP, siempre",
      "Un hook",
      "Copiar y pegar desde el navegador"
    ],
    "correcta": 0,
    "explicacion": "Si existe la CLI y el agente tiene tu terminal, la CLI basta. El MCP sirve donde no hay CLI."
  }
];
