// Lógica del quiz. Lee PREGUNTAS de preguntas.js (cargado antes con <script> clásico).
(function () {
  "use strict";

  var el = {
    quiz: document.getElementById("quiz"),
    resultado: document.getElementById("resultado"),
    tema: document.getElementById("tema"),
    contador: document.getElementById("contador"),
    barra: document.getElementById("barra-progreso"),
    relleno: document.getElementById("relleno"),
    pregunta: document.getElementById("pregunta"),
    opciones: document.getElementById("opciones"),
    explicacion: document.getElementById("explicacion"),
    siguiente: document.getElementById("siguiente"),
    puntaje: document.getElementById("puntaje"),
    mensaje: document.getElementById("mensaje"),
    reiniciar: document.getElementById("reiniciar")
  };

  var total = typeof PREGUNTAS === "undefined" ? 0 : PREGUNTAS.length;
  var actual = 0;
  var aciertos = 0;
  var respondida = false;

  function actualizarProgreso(completadas) {
    el.relleno.style.width = (completadas / total) * 100 + "%";
    el.barra.setAttribute("aria-valuemax", String(total));
    el.barra.setAttribute("aria-valuenow", String(completadas));
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
    actualizarProgreso(actual);

    el.opciones.textContent = "";
    p.opciones.forEach(function (texto, i) {
      var boton = document.createElement("button");
      boton.type = "button";
      boton.className = "opcion";
      boton.setAttribute("data-indice", String(i));
      boton.textContent = texto;
      boton.addEventListener("click", function () { responder(i); });
      el.opciones.appendChild(boton);
    });
  }

  function responder(elegida) {
    if (respondida) return;
    respondida = true;

    var p = PREGUNTAS[actual];
    var acerto = elegida === p.correcta;
    if (acerto) aciertos++;

    var botones = el.opciones.querySelectorAll(".opcion");
    botones.forEach(function (b, i) {
      b.disabled = true;
      if (i === p.correcta) b.classList.add("correcta");
      else if (i === elegida) b.classList.add("incorrecta");
    });

    el.explicacion.textContent = "";
    var veredicto = document.createElement("strong");
    veredicto.textContent = acerto ? "Correcto. " : "Incorrecto. ";
    el.explicacion.appendChild(veredicto);
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
    var proporcion = aciertos / total;
    el.mensaje.textContent =
      proporcion === 1 ? "Respondiste todo bien. Dominas los conceptos del curso." :
      proporcion >= 0.6 ? "Vas bien. Repasa las preguntas que fallaste y vuelve a intentarlo." :
      "Te conviene repasar N1, N2 y el Taller antes de volver a jugar.";
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

  if (!total) {
    el.pregunta.textContent = "No hay preguntas cargadas. Revisa preguntas.js.";
    return;
  }
  mostrarPregunta();
})();
