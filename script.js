const prompt = require("prompt-sync")();

function numeroFactorial() {
  while (true) {
    const entrada = prompt("Ingresa un número para calcular factorial: ");

    if (entrada === null) {
      console.log("Operación cancelada.");
      return null;
    }

    const texto = entrada.trim();
    const numero = Number(texto);

    if (texto === "" || isNaN(numero)) {
      console.error("Error: debes ingresar un número. Intenta de nuevo.");
      continue;
    }

    if (!Number.isInteger(numero) || numero < 0) {
      console.error("Error: el factorial solo se calcula para enteros positivos (o 0). Intenta de nuevo.");
      continue;
    }

    return numero;
  }
}

function factorial(n) {
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

// Construye el texto de la operación: "1 x 2 x 3 x 4"
function operacionEnTexto(n) {
  if (n === 0) return "1";
  const factores = [];
  for (let i = 1; i <= n; i++) {
    factores.push(i);
  }
  return factores.join(" x ");
}

const numero = numeroFactorial();

if (numero !== null) {
  console.log(`${numero}! = ${operacionEnTexto(numero)}`);
  console.log(`Resultado: ${factorial(numero)}`);
}