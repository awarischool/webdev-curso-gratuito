console.log("🤖 O programa foi carregado");

let pegarParametros = window.location.search;
console.log("Parametros: ", pegarParametros);
let parametros = new URLSearchParams(pegarParametros);
let parametroValor = parametros.get('valor');
console.log("Valor: ", parametroValor)

function validar(valor) {
  if (isNaN(valor)) return alert("Valor inválido!")

  if (typeof (valor) === "number") {
    return Math.abs(valor)
  } else {
    alert("Valor inválido!")
  }
}


// Aqui abaixo vai o resto do programa / script

let bolso = document.getElementById("bolso");

bolso.innerHTML = validar(Number(parametroValor));
