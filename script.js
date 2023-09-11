// Verificar si hay resultados guardados en el almacenamiento local y cargarlos
const resultados = JSON.parse(localStorage.getItem("resultados")) || [];

function actualizarResultadosEnPantalla() {
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = "";

  for (let i = 0; i < resultados.length; i++) {
    const resultado = resultados[i];
    const resultadoElement = document.createElement("p");
    resultadoElement.textContent = `Resultado ${i + 1}: ${resultado}`;
    resultadosDiv.appendChild(resultadoElement);
  }
}

function realizarOperacion() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, ingrese números válidos.");
    return;
  }

  let result;
  let operationSymbol;

  if (operation === "multiplicar") {
    result = num1 * num2;
    operationSymbol = "*";
  } else if (operation === "dividir") {
    if (num2 === 0) {
      alert("No se puede dividir por cero.");
      return;
    }
    result = num1 / num2;
    operationSymbol = "/";
  }

  resultados.push(result);

  // Guardar los resultados en el almacenamiento local
  localStorage.setItem("resultados", JSON.stringify(resultados));

  document.getElementById("resultado").innerHTML = `El resultado de ${num1} ${operationSymbol} ${num2} es: ${result}`;

  // Actualizar resultados en pantalla
  actualizarResultadosEnPantalla();
}

// Llamada inicial para cargar resultados almacenados
actualizarResultadosEnPantalla();
