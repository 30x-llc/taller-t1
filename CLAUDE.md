# Quiz de repaso · AI for Developers

Quiz web para repasar los conceptos de N1, N2 y el Taller del curso AI for Developers (30X). Cualquier estudiante lo abre en su navegador, responde una pregunta a la vez, ve por qué cada respuesta es correcta o incorrecta y termina con su puntaje, sin instalar nada.

## Archivos

- `index.html`: la página del quiz.
- `app.js`: la lógica del quiz.
- `preguntas.js`: las preguntas, en la constante `PREGUNTAS`.
- `marca/marca.css`: el design system del curso. No lo edites.
- `herramientas/validar-preguntas.mjs`: revisa el formato de las preguntas.
- `herramientas/servidor.mjs`: servidor local en http://127.0.0.1:8765 para probar el quiz en un navegador.

## Reglas del producto

- La página abre con doble clic en `index.html`. Sin frameworks, sin npm y sin librerías externas. Carga `preguntas.js` y `app.js` con `<script>` clásico, sin `type="module"` y sin `fetch`.
- Muestra 1 pregunta a la vez, con una barra de progreso. Al elegir una opción, marca la correcta, muestra la explicación y habilita "Siguiente".
- Al final muestra el puntaje como "X de N" y un botón "Jugar de nuevo".
- Cada botón de opción lleva `data-indice` con su posición (0 a 3). Así se puede probar con Playwright.

## Design system

- Usa las variables y las clases de `marca/marca.css`: `.barra`, `.eyebrow`, `.titulo`, `.tarjeta`, `.boton`, `.opcion`, `.progreso`, `.cifra`.
- El logo va en la barra con `<img src="marca/logo-30x.svg" alt="30X">`. Nunca escribas "30X" como texto en lugar del logo.
- Solo colores de `marca/marca.css`. El lima `#e9ff7b` va solo en destellos: el botón principal, el punto del eyebrow, la barra `.progreso` y la respuesta correcta.
- Textos en español neutro, con tú. Sin emojis.

## Formato de cada pregunta

`id` en kebab-case, `tema` (N1, N2 o Taller), `pregunta` que termina en "?", `opciones` con exactamente 4 textos, `correcta` de 0 a 3 y `explicacion` de 140 caracteres o menos.

Después de cambiar preguntas, corre `node herramientas/validar-preguntas.mjs`.

## Probar en el navegador

El MCP de Playwright bloquea `file://`. Para abrir el quiz en un navegador, deja corriendo en segundo plano `node herramientas/servidor.mjs` y abre http://127.0.0.1:8765. No uses python.
