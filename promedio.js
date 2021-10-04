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
  let resultado_input_promedio = document.getElementById('ResultadoInputPromedio');
  resultado_input_promedio.innerText = 'El promedio es: ' + calcularMediaAritmetica(numberListPromedio);
}

function resetListPromedio() {
  while(numberListPromedio.length > 0) {
    numberListPromedio.pop();
  }

  let lista_de_numeros = document.getElementById('NumberListPromedio');
  lista_de_numeros.innerText = numberListPromedio;
  document.getElementById('ResultadoInputPromedio').innerText = '';
}

// Codigo de la Mediana

var numberListMediana = [];


function agregarNumeroMediana() {
  let number_input = document.getElementById('InputNumberMediana');
  let number_value = number_input.value;

  numberListMediana.push(parseInt(number_value));
  number_input.value = '';
  ordenarListaMediana();
  
  let lista_de_numeros = document.getElementById('NumberListMediana');
  
  lista_de_numeros.innerText = numberListMediana;
}

function ordenarListaMediana() {
  numberListMediana.sort(function(a, b) {
    return a - b;
  });
  return numberListMediana;
}

function medianaListEsPar() {
  if (numberListMediana.length % 2 == 0) {
    return true;
  } else {
    return false;
  }
}


function calcularMediana() {
  ordenarListaMediana();
  let mitadListMediana = parseInt(numberListMediana.length / 2);
  if (!medianaListEsPar()) {
    return numberListMediana[mitadListMediana];
  } else {
    let elemento1 = numberListMediana[mitadListMediana];
    let elemento2 = numberListMediana[mitadListMediana - 1];

    let promedio = calcularMediaAritmetica([elemento1, elemento2]);
    return promedio;
  }
}

function mostrarResultadoMediana() {
  let resultado = calcularMediana();

  let resultado_input_mediana = document.getElementById('ResultadoInputMediana');
  resultado_input_mediana.innerText = 'La mediana es : ' + resultado;
}


function resetListMediana() {
  while(numberListMediana.length > 0) {
    numberListMediana.pop();
  }

  let lista_de_numeros = document.getElementById('NumberListMediana');
  lista_de_numeros.innerText = numberListMediana;
  document.getElementById('ResultadoInputMediana').innerText = '';
}