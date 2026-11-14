// Lógica del quiz. Lee la constante global PREGUNTAS de preguntas.js.
(function () {
  "use strict";

  var el = {
    quiz: document.getElementById("quiz"),
    resultado: document.getElementById("resultado"),
    barra: document.getElementById("barra-progreso"),
    progreso: document.querySelector(".progreso"),
    tema: document.getElementById("tema"),
    contador: document.getElementById("contador"),
    pregunta: document.getElementById("pregunta"),
    opciones: document.getElementById("opciones"),
    explicacion: document.getElementById("explicacion"),
    siguiente: document.getElementById("siguiente"),
    puntaje: document.getElementById("puntaje"),
    mensajeFinal: document.getElementById("mensaje-final"),
    reiniciar: document.getElementById("reiniciar")
  };

  var total = PREGUNTAS.length;
  var actual = 0;
  var aciertos = 0;
  var respondida = false;

  function actualizarProgreso(completadas) {
    var porcentaje = total ? Math.round((completadas / total) * 100) : 0;
    el.barra.style.width = porcentaje + "%";
    el.progreso.setAttribute("aria-valuenow", String(porcentaje));
  }

  function mostrarPregunta() {
    var p = PREGUNTAS[actual];
    respondida = false;

    el.tema.textContent = p.tema;
    el.contador.textContent = "Pregunta " + (actual + 1) + " de " + total;
    el.pregunta.textContent = p.pregunta;
    el.explicacion.hidden = true;
    el.explicacion.textContent = "";
    el.siguiente.hidden = true;
    el.siguiente.textContent = actual === total - 1 ? "Ver resultado" : "Siguiente";

    el.opciones.textContent = "";
    p.opciones.forEach(function (texto, indice) {
      var boton = document.createElement("button");
      boton.type = "button";
      boton.className = "opcion";
      boton.setAttribute("data-indice", String(indice));
      boton.textContent = texto;
      boton.addEventListener("click", function () { responder(indice); });
      el.opciones.appendChild(boton);
    });

    actualizarProgreso(actual);
  }

  function responder(elegida) {
    if (respondida) return;
    respondida = true;

    var p = PREGUNTAS[actual];
    var acerto = elegida === p.correcta;
    if (acerto) aciertos++;

    var botones = el.opciones.querySelectorAll(".opcion");
    botones.forEach(function (boton, indice) {
      boton.disabled = true;
      if (indice === p.correcta) boton.classList.add("correcta");
      else if (indice === elegida) boton.classList.add("incorrecta");
    });

    var etiqueta = document.createElement("strong");
    etiqueta.textContent = acerto ? "Correcto. " : "Incorrecto. ";
    el.explicacion.textContent = "";
    el.explicacion.appendChild(etiqueta);
    el.explicacion.appendChild(document.createTextNode(p.explicacion));
    el.explicacion.hidden = false;

    actualizarProgreso(actual + 1);
    el.siguiente.hidden = false;
    el.siguiente.focus();
  }

  function siguiente() {
    actual++;
    if (actual < total) mostrarPregunta();
    else mostrarResultado();
  }

  function mostrarResultado() {
    el.quiz.hidden = true;
    el.resultado.hidden = false;
    el.puntaje.textContent = aciertos + " de " + total;

    var proporcion = total ? aciertos / total : 0;
    if (proporcion === 1) el.mensajeFinal.textContent = "Respondiste todo bien. Dominas los conceptos del repaso.";
    else if (proporcion >= 0.7) el.mensajeFinal.textContent = "Muy bien. Repasa las preguntas que fallaste y vuelve a intentarlo.";
    else el.mensajeFinal.textContent = "Vale la pena repasar los temas que fallaste. Juega de nuevo cuando quieras.";

    el.reiniciar.focus();
  }

  function reiniciar() {
    actual = 0;
    aciertos = 0;
    el.resultado.hidden = true;
    el.quiz.hidden = false;
    mostrarPregunta();
  }

  el.siguiente.addEventListener("click", siguiente);
  el.reiniciar.addEventListener("click", reiniciar);

  if (total === 0) {
    el.pregunta.textContent = "Todavía no hay preguntas en preguntas.js.";
    return;
  }
  mostrarPregunta();
})();
