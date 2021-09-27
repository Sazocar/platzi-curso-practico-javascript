// Replica el comportamiento del siguiente código que usa la sentencia 
// switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

// switch (tipoDeSuscripcion) {
//    case "Free":
//        console.log("Solo puedes tomar los cursos gratis");
//        break;
//    case "Basic":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//        break;
//    case "Expert":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//        break;
//    case "ExpertPlus":
//        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//        break;
// }

if (tipoDeSuscripcion === 'Free') {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === 'Basic') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === 'Expert') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === 'ExpertPlus') {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

// Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i = 0;

while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}

// Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. 
// Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, 
// volvemos a empezar.

// Pista: puedes usar la función prompt de JavaScript.

let answer = 0;
let correct_answer = 4

while (answer !== correct_answer) {
    answer = prompt('¿Cual es el resultado de 2 + 2?');
    answer *= 1;
}

// Crea una función que pueda recibir cualquier array como parámetro e imprima su 
// primer elemento.

var names = ['Simón', 'Katiuska', 'Daniel', 'Ninoska'];

function printFirstElement(names) {
    console.log(names[0]);
}

// Crea una función que pueda recibir cualquier array como parámetro e imprima 
// todos sus elementos uno por uno (no se vale imprimir el array completo).

var names = ['Simón', 'Katiuska', 'Daniel', 'Ninoska'];

function printArray(names) {
    for (var name of names) {
        console.log(name);
    }
}