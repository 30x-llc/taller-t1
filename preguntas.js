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
    "id": "taller-claude-md-sesion",
    "tema": "Taller",
    "pregunta": "¿Cuándo lee Claude Code el CLAUDE.md de tu proyecto?",
    "opciones": [
      "Solo cuando lo mencionas en el prompt",
      "Una vez al instalarlo, y lo guarda para siempre",
      "Al iniciar cada sesión, y queda en el contexto",
      "Solo cuando una skill le pide leerlo"
    ],
    "correcta": 2,
    "explicacion": "Se carga al iniciar cada sesión y viaja en el contexto. No hace falta mencionarlo ni pedírselo a una skill."
  },
  {
    "id": "taller-que-es-mcp",
    "tema": "Taller",
    "pregunta": "¿Qué es un servidor MCP?",
    "opciones": [
      "Un modelo más pequeño que ayuda a Claude",
      "Un archivo de instrucciones que se lee al iniciar",
      "Un script que corre antes de cada acción",
      "Un programa que le da herramientas al agente"
    ],
    "correcta": 3,
    "explicacion": "Un servidor MCP expone herramientas con un protocolo estándar. No es un modelo, ni un CLAUDE.md, ni un hook."
  },
  {
    "id": "taller-hook-vs-instruccion",
    "tema": "Taller",
    "pregunta": "¿Qué hace distinto a un hook de una instrucción en CLAUDE.md?",
    "opciones": [
      "El harness lo ejecuta siempre, sin depender del modelo",
      "El modelo decide si lo ejecuta según el contexto",
      "Es una sugerencia que el modelo puede ignorar",
      "Solo se ejecuta cuando escribes /hooks"
    ],
    "correcta": 0,
    "explicacion": "El harness corre el hook en cada evento configurado. Una instrucción en CLAUDE.md depende de que el modelo la siga."
  }
];
