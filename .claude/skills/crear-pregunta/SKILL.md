---
name: crear-pregunta
description: Agrega una pregunta nueva al quiz de repaso en preguntas.js. Úsala cuando pidan agregar, crear o escribir preguntas para el quiz.
---

# Crear una pregunta para el quiz

Sigue estos pasos en orden. Si piden varias preguntas, repite los pasos 2 a 4 por cada una y corre el paso 5 al final.

## 1. Lee preguntas.js para no repetir temas

Lee `preguntas.js` completo. Fíjate en los `id`, el `tema` y lo que pregunta cada una. La pregunta nueva tiene que tratar un concepto que todavía no esté cubierto. Si el concepto ya existe, elige otro o pregúntale al usuario.

## 2. Escribe 1 opción correcta y 3 falsas

- La opción correcta debe ser verdadera sin ambigüedad.
- Basa las 3 opciones falsas en errores comunes de quien empieza: confusiones típicas, ideas que suenan razonables pero están mal, o conceptos vecinos que se mezclan. Nada de opciones absurdas o de relleno.
- Las 4 opciones deben tener largo y estilo parecidos para que la correcta no se note.
- Pon la correcta en una posición de 0 a 3 y no la dejes siempre en el mismo lugar. Revisa en qué posición quedaron las correctas de las preguntas que ya existen.

## 3. Escribe la explicación

- 140 caracteres o menos. Cuéntalos antes de guardar.
- Explica por qué la correcta es correcta. Si queda espacio, di cuál es el error de las falsas.

## 4. Agrega la pregunta al final de PREGUNTAS

Agrégala como último elemento del arreglo `PREGUNTAS` en `preguntas.js`, con este formato:

```json
{
  "id": "taller-ejemplo-en-kebab-case",
  "tema": "Taller",
  "pregunta": "¿Texto de la pregunta?",
  "opciones": [
    "Opción 0",
    "Opción 1",
    "Opción 2",
    "Opción 3"
  ],
  "correcta": 2,
  "explicacion": "Explicación de 140 caracteres o menos."
}
```

Reglas:
- `id` en kebab-case, único, que empiece por el tema (`n1-`, `n2-` o `taller-`).
- `tema` es `N1`, `N2` o `Taller`.
- `pregunta` termina en "?".
- `opciones` tiene exactamente 4 textos.
- `correcta` es un número de 0 a 3.
- El arreglo es JSON estricto: comillas dobles y sin coma después del último elemento. Pon una coma después de la pregunta que antes era la última.
- Español neutro, con tú, sin emojis.

## 5. Valida

Corre:

```bash
node herramientas/validar-preguntas.mjs
```

Si sale con errores, corrígelos y vuelve a correrlo hasta que diga que todas las preguntas están correctas. Al terminar, muéstrale al usuario la pregunta nueva y la opción correcta.
