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
  },
  {
    "id": "taller-claude-md-cuando-carga",
    "tema": "Taller",
    "pregunta": "¿Cuándo entra el CLAUDE.md del proyecto al contexto de Claude Code?",
    "opciones": [
      "Solo cuando lo mencionas en el prompt",
      "Solo en la primera sesión del proyecto",
      "Al iniciar cada sesión, completo",
      "Cuando Claude decide leerlo con una herramienta"
    ],
    "correcta": 2,
    "explicacion": "CLAUDE.md se carga completo al iniciar cada sesión. Por eso conviene que sea corto: ocupa contexto siempre."
  },
  {
    "id": "taller-que-es-mcp",
    "tema": "Taller",
    "pregunta": "¿Qué es un servidor MCP para un agente como Claude Code?",
    "opciones": [
      "Un modelo más pequeño que ayuda al principal",
      "Una memoria donde el agente guarda conversaciones",
      "Un ajuste que reentrena el modelo con tus datos",
      "Un programa que le expone herramientas por un protocolo"
    ],
    "correcta": 3,
    "explicacion": "MCP es un protocolo: el servidor ofrece herramientas y el agente las llama. No cambia el modelo ni le da memoria."
  },
  {
    "id": "taller-hook-vs-instruccion",
    "tema": "Taller",
    "pregunta": "¿Qué ganas al validar preguntas.js con un hook en vez de pedirlo en CLAUDE.md?",
    "opciones": [
      "El harness lo corre siempre, aunque el modelo lo olvide",
      "El modelo entiende mejor qué debe validar",
      "La validación queda guardada en su memoria",
      "Claude decide en cada caso si conviene correrlo"
    ],
    "correcta": 0,
    "explicacion": "Un hook lo ejecuta el harness en cada evento. Una instrucción en CLAUDE.md depende de que el modelo la siga."
  },
  {
    "id": "taller-cuando-corre-posttooluse",
    "tema": "Taller",
    "pregunta": "¿Cuándo se ejecuta un hook PostToolUse en Claude Code?",
    "opciones": [
      "Antes de que el modelo lea tu mensaje",
      "Justo después de que una herramienta termina",
      "Solo cuando cierras la sesión",
      "Cada vez que el modelo piensa una respuesta"
    ],
    "correcta": 1,
    "explicacion": "PostToolUse corre cuando una herramienta termina, por ejemplo tras un Edit. Así puede validar el resultado al instante."
  }
];
