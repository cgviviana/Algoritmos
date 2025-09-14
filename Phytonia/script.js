let currentChallenge = 0;
let xp = 0;

const challenges = [
  {
    teoria: `
      <h3>Reto 1: Mostrar un mensaje en pantalla</h3>
      <p>En Python usamos <code>print()</code> para mostrar información en pantalla.</p>
      <p>Todo lo que escribas entre comillas se mostrará exactamente como lo escribes.</p>
      <p><strong>Ejemplo:</strong></p>
      <pre><code>print("Hola, galaxia")</code></pre>
    `,
    instruccion: "Escribe un mensaje usando <code>print()</code>.",
    validacion: code => code.trim() === 'print("Hola, galaxia")',
    salida: () => "Hola, galaxia"
  },
  {
    teoria: `
      <h3>Reto 2: Guardar un dato en una variable</h3>
      <p>Una <strong>variable</strong> es como una caja donde guardamos información.</p>
      <p>Para guardar texto, usamos comillas. Ejemplo:</p>
      <pre><code>nombre = "Luna"</code></pre>
    `,
    instruccion: "Crea una variable llamada <code>nombre</code> y asígnale tu nombre.",
    validacion: code => code.trim().replace(/\s+/g, '') === 'nombre="Luna"',
    salida: () => "Variable guardada correctamente: Luna"
  },
  {
    teoria: `
      <h3>Reto 3: Mostrar lo que hay en una variable</h3>
      <p>Si quieres mostrar lo que hay en una variable, <strong>no uses comillas</strong>.</p>
      <pre><code>print(nombre)</code></pre>
    `,
    instruccion: "Muestra la variable <code>nombre</code> en pantalla usando <code>print()</code>.",
    validacion: code => code.trim() === 'print(nombre)',
    salida: () => "Luna"
  },
  {
    teoria: `
      <h3>Reto 4: Mostrar texto y variables</h3>
      <p>Puedes juntar texto con variables usando <strong>coma</strong> en <code>print()</code>.</p>
      <pre><code>print("Hola", nombre)</code></pre>
    `,
    instruccion: "Muestra un mensaje saludando a la variable <code>nombre</code>.",
    validacion: code => code.trim() === 'print("Hola", nombre)',
    salida: () => "Hola Luna"
  },
  {
    teoria: `
      <h3>Reto 5: Escribir varios mensajes</h3>
      <p>Puedes usar varias instrucciones <code>print()</code> una tras otra.</p>
      <pre><code>
print("Soy una cadete")
print("Estoy aprendiendo Python")
      </code></pre>
    `,
    instruccion: "Escribe dos mensajes diferentes usando <code>print()</code>.",
    validacion: code => code.includes('print') && code.split('\n').length >= 2,
    salida: () => "Soy una cadete\nEstoy aprendiendo Python"
  },
  {
    teoria: `
      <h3>Reto 6: Jugar con los espacios</h3>
      <p>Python muestra los espacios exactamente como los escribes.</p>
      <p>Intenta:</p>
      <pre><code>print("Hola        mundo")</code></pre>
    `,
    instruccion: "Escribe un mensaje con varios espacios entre palabras.",
    validacion: code => code.includes("print") && code.includes("     "),
    salida: () => "Hola        mundo"
  },
  {
    teoria: `
      <h3>Reto 7: Dejar comentarios</h3>
      <p>Un <strong>comentario</strong> empieza con <code>#</code> y no se ejecuta.</p>
      <pre><code>
# Este es un comentario
print("Viviana")
      </code></pre>
    `,
    instruccion: "Escribe un comentario y luego muestra un mensaje en pantalla.",
    validacion: code => code.includes("#") && code.includes('print("Viviana")'),
    salida: () => "Viviana"
  },
  {
    teoria: `
      <h3>Reto 8: Simular una conversación</h3>
      <p>Puedes usar varias líneas de <code>print()</code> para simular un diálogo.</p>
      <pre><code>
print("Bot: Hola")
print("Tú: Hola Bot")
      </code></pre>
    `,
    instruccion: "Simula una conversación de 2 líneas con <code>print()</code>.",
    validacion: code => code.includes("Bot") && code.includes("Tú"),
    salida: () => "Bot: Hola\nTú: Hola Bot"
  }
];

// Carga inicial
window.onload = () => {
  cargarReto();
};

// Mostrar reto actual
function cargarReto() {
  const reto = challenges[currentChallenge];
  document.getElementById("theory").innerHTML = reto.teoria;
  document.getElementById("instructions").innerHTML = `<p><strong>Instrucción:</strong> ${reto.instruccion}</p>`;
  document.getElementById("codeInput").value = "";
  document.getElementById("output").innerText = "";
  document.getElementById("feedback").innerText = "";
}

// Validar código
function checkCode() {
  const userCode = document.getElementById("codeInput").value.trim();
  const reto = challenges[currentChallenge];

  if (reto.validacion(userCode)) {
    xp += 10;
    document.getElementById("feedback").innerText = `✅ ¡Correcto! Ganaste 10 XP. Total: ${xp} XP`;
    document.getElementById("feedback").style.color = "#00ff88";
    document.getElementById("output").innerText = reto.salida();
  } else {
    document.getElementById("feedback").innerText = "❌ Revisa tu código. ¿Escribiste igual al ejemplo? ¿Faltan comillas o paréntesis?";
    document.getElementById("feedback").style.color = "#ff4d4d";
    document.getElementById("output").innerText = "";
  }
}

// Siguiente reto
function nextChallenge() {
  if (currentChallenge < challenges.length - 1) {
    currentChallenge++;
    cargarReto();
  } else {
    document.getElementById("theory").innerHTML = "<h2>🎉 ¡Nivel 1 completado!</h2>";
    document.getElementById("instructions").innerHTML = `<p>Total ganado: <strong>${xp} XP</strong></p>`;
    document.getElementById("codeInput").style.display = "none";
    document.getElementById("output").innerText = "";
    document.getElementById("feedback").innerText = "";
    document.getElementById("nextBtn").style.display = "none";
  }
}
