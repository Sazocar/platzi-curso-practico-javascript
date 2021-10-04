//  Codigo para el Promedio

var numberListPromedio = [];

function calcularMediaAritmetica(numberListPromedio) {
  let sumaNumberList = 0;

  for (let i = 0; i < numberListPromedio.length; i++) {
    sumaNumberList += numberListPromedio[i];
  }

  // const sumaLista = lista.reduce(
  //   function (valorAcumulado = 0, nuevoElemento) {
  //     return valorAcumulado + nuevoElemento;
  //   }
  // );

  const promedioLista = sumaNumberList / numberListPromedio.length;

  return promedioLista;
}

function agregarNumeroPromedio() {
  let number_input = document.getElementById('InputNumberPromedio');
  let number_value = number_input.value;

  numberListPromedio.push(parseInt(number_value));
  number_input.value = '';
  
  let lista_de_numeros = document.getElementById('NumberListPromedio');
  
  lista_de_numeros.innerText = numberListPromedio;
}

function mostrarResultadoPromedio() {
  let resultado_input = document.getElementById('ResultadoInputPromedio');
  resultado_input.innerText = 'El promedio es: ' + calcularMediaAritmetica(numberListPromedio);
}

function resetListPromedio() {
  while(numberListPromedio.length > 0) {
    numberListPromedio.pop();
  }

  let lista_de_numeros = document.getElementById('NumberListPromedio');
  lista_de_numeros.innerText = numberListPromedio;
  document.getElementById('ResultadoInputPromedio').innerText = '';
}