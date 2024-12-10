

function sumar(num1,num2) {
    return Number (num1) + Number (num2);
}

function restar(num1,num2) {
    return num1-num2;
}

function multiplicar(num1,num2) {
    return num1*num2;
}

function dividir(num1,num2) {
    return num1/num2;
}  

let num1 = prompt("Introduce el primer número:");
let num2 = prompt("Introduce el segundo número:");
let num3 = prompt("Introduce el tercer número:");


console.log("Testeo de Operaciones/Calculadora");


console.log(`Sumar: ${sumar (Number (num1), Number (num2))}`);
console.log(`Restar: ${restar(Number(num1), Number(num2))}`);
console.log(`Multiplicar: ${multiplicar(Number(num1), Number(num2))}`);
console.log(`Dividir: ${dividir(Number(num1), Number(num2))}`);
console.log(`División con cero: ${dividir(Number(num1), 0)}`);



function cuadradoDeUnNumero(num1, num2) {
    if (num1==num2) {
        return multiplicar (num2, num2)
    }
    return multiplicar(num1, num1);
}

function promedioDeTresNumeros(num1, num2, num3) {
    return sumar (Number(num1),Number (num2)+ Number(num3)) / 3;
}

function calcularPorcentaje(num1, num2) {
    return multiplicar (num1,num2) / 100;
}

function generadorDePorcentaje(num1, num2) {
    return dividir (num1,num2) * 100;
}



function verificarParidad(num1) {
    if (num1 % 2 === 0) {
        return `${num1} es par.`;
    } 
    else {
        return `${num1} es impar.`;
    }
}
