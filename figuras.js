const PI = Math.PI;

// Código del Cuadrado:

console.group('Cuadrados');

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado ** 2;
} 
console.groupEnd();

// Código de Triángulo:

console.group('Triángulos');

function perimetroTriangulo(lado, lado2, base) {
    resultado = lado + lado2 + base;
    return resultado;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

// Código de Circulo:

console.group('Circulos');

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    let diametro = diametroCirculo(radio);
    return Math.round((diametro * PI) * 100) /100; // dos decimales
}

function areaCirculo(radio) {
    resultado = (radio ** 2) * PI;
    return parseFloat(resultado.toFixed(2));
}
console.groupEnd();


// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    let input = document.getElementById('InputCuadrado');
    let value = input.value;

    let perimetro = perimetroCuadrado(value);
    alert(`El perimetro del cuadrado es: ${perimetro}`);
}


function calcularAreaCuadrado() {
    let input = document.getElementById('InputCuadrado');
    let value = input.value;

    let area = areaCuadrado(value);
    alert(area);
}


function calcularPerimetroTriangulo() {
    let ladoA = parseFloat(document.getElementById('ladoATriangulo').value);
    let ladoB = parseFloat(document.getElementById('ladoBTriangulo').value);
    let base = parseFloat(document.getElementById('baseTriangulo').value);

    perimetro = perimetroTriangulo(ladoA, ladoB, base);
    alert(perimetro);
}


function calcularAreaTriangulo() {
    let base = parseFloat(document.getElementById('baseTriangulo').value);
    let altura = parseFloat(document.getElementById('alturaTriangulo').value);

    area = areaTriangulo(base, altura);
    alert(area);
}

function calcularAlturaTriangulo() {
    let ladoA = parseInt(document.getElementById('ladoATriangulo').value);
    let ladoB = parseInt(document.getElementById('ladoBTriangulo').value);
    let base = parseInt(document.getElementById('baseTriangulo').value);

    if (ladoA === ladoB && ladoA != base) {
        let altura = Math.sqrt(ladoA**2 - (ladoB**2 / 4));
        altura = parseFloat(altura.toFixed(2));
        alert(`La altura del triangulo isoceles es: ${altura}`);
        document.getElementById('alturaTriangulo').value = altura;
    } else {
        alert('Este triangulo NO es isosceles.');
    }
}


function calcularPerimetroCirculo() {
    let radio = document.getElementById('radioCirculo').value;

    perimetro = perimetroCirculo(radio);
    alert(perimetro);
}


function calcularAreaCirculo() {
    let radio = document.getElementById('radioCirculo').value;

    area = areaCirculo(radio);
    alert(area);
}