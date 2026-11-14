---
name: crear-pregunta
description: Crea una pregunta nueva para el quiz de repaso de AI for Developers y la agrega a preguntas.js. Úsala cuando pidan agregar, crear o escribir preguntas para el quiz.
---

# Crear pregunta para el quiz

Sigue estos pasos en orden. Si piden varias preguntas, repite los pasos 2 a 4 por cada una y corre el paso 5 al final.

## 1. Lee preguntas.js para no repetir temas

Lee `preguntas.js` completo. Anota los `id` y los conceptos que ya cubren las preguntas. La pregunta nueva debe tratar un concepto distinto de N1, N2 o Taller. No sirve preguntar lo mismo con otras palabras.

## 2. Escribe la pregunta y sus 4 opciones

- `pregunta`: una sola idea, clara, que termina en "?".
- 1 opción correcta, precisa y sin ambigüedad.
- 3 opciones falsas basadas en errores comunes de quien empieza con agentes y LLMs. Por ejemplo: creer que el modelo recuerda entre llamadas, que más contexto siempre es mejor, que un MCP hace falta aunque exista una CLI o que la skill carga completa desde el inicio.
- Las 4 opciones deben tener largo y tono parecidos, para que la correcta no se note por la forma.
- Evita "Todas las anteriores" y "Ninguna de las anteriores".
- Cambia la posición de la correcta respecto de las últimas preguntas, para que no caiga siempre en el mismo índice.

## 3. Escribe la explicación

- `explicacion`: 140 caracteres o menos, contando espacios.
- Di por qué la correcta es correcta. Si cabe, nombra el error de la opción falsa más tentadora.
- Español neutro, con tú, sin emojis.

## 4. Agrega la pregunta al final de PREGUNTAS

Agrégala como el último elemento del arreglo `PREGUNTAS` en `preguntas.js`. El arreglo es JSON estricto:

- Comillas dobles en claves y textos.
- Pon una coma después del `}` de la pregunta que antes era la última. No dejes coma después de la nueva.
- `id` en kebab-case, único, con el tema como prefijo, por ejemplo `n2-hooks-cuando-corren`.
- `tema`: `"N1"`, `"N2"` o `"Taller"`.
- `correcta`: número de 0 a 3 que apunta a la opción correcta.

```json
{
  "id": "n2-ejemplo",
  "tema": "N2",
  "pregunta": "¿...?",
  "opciones": [
    "...",
    "...",
    "...",
    "..."
  ],
  "correcta": 2,
  "explicacion": "..."
}
```

No edites `app.js`, `index.html` ni `marca/`.

## 5. Valida

Corre:

```bash
node herramientas/validar-preguntas.mjs
```

Si reporta errores, corrígelos en `preguntas.js` y vuelve a correrlo hasta que diga que todas las preguntas son correctas. Al terminar, muestra al usuario la pregunta nueva, cuál opción es la correcta y el resultado del validador.
