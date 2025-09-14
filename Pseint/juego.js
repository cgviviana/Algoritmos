function simular() {
  const codigo = document.getElementById("codigo").value;
  const output = document.getElementById("output");
  const feedback = document.getElementById("feedback");

  const lineas = codigo.trim().split("\n").map(l => l.trim());

  output.innerHTML = "";
  feedback.innerHTML = "";

  // Validaciones básicas
  if (lineas[0] !== "Inicio" || lineas[lineas.length - 1] !== "Fin") {
    feedback.style.color = "red";
    feedback.textContent = "❌ Tu algoritmo debe comenzar con 'Inicio' y terminar con 'Fin'.";
    return;
  }

  const pasos = lineas.slice(1, -1);
  const instruccionesEscribir = pasos.filter(l => l.startsWith("Escribir"));

  if (instruccionesEscribir.length < 3) {
    feedback.style.color = "orange";
    feedback.textContent = "⚠️ Necesitas al menos 3 pasos usando 'Escribir'.";
    return;
  }

  // Mostrar salida simulada
  output.innerHTML = instruccionesEscribir.map(l => l.replace("Escribir", "")).join("\n");
  feedback.style.color = "lightgreen";
  feedback.textContent = "✅ ¡Muy bien! Ganaste 10XP por completar el reto.";
}
