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
    return lado + lado2 + base;
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