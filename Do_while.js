
//1.calcular la media aritmetica de los numero en un array usando do while.
function calcularMedia(array) {
    let suma = 0;
    let i = 0; 
    do {
        suma += array[i];
        i++;
    }
    while (i < array.length);

    return suma / array.length;
}

let numeros2 = [1,2,3,4,5,6,7,8,9,10];
let media2 = calcularMedia(numeros2);
console.log("La media aritmética es: " + media2);

//2.lgoritmo para imprimir números del 1 al 10 con metodo do while y funcion
function imprimirNumeros() {
    let i = 1; 
    do {
        console.log(i);
        i++;
    }
    while (i <= 10);
}   
imprimirNumeros();

console.log("----------------------------------------");    

function factorial(numero) {
    let resultado = 1;
    let i = 1;  
    do {
        resultado *= i;
        i++;
    }

    while (i <= numero);

    return resultado;
}

//3.Algoritmo para sumar los primeros 10 números con metodo do while y funcion

function sumarPrimerosDiez() {
     let suma = 0;  
     let j = 1;

     do {
         suma += j; 
         j++;
     } while (j <= 10);

     console.log("la suma de los primeros 10 numeros es: " + suma);
     console.log("----------------------------------------");
}
sumarPrimerosDiez();

//4.Algoritmo para generar la tabla de un numero dado por argumento en una función con metodo do while y funcion

function tablaMultiplicar(numero) {
    let i = 1;
    do {
        console.log(numero + " x " + i + " = " + (numero * i));
        i++; 
    } while (i <= 10);      
}

tablaMultiplicar(9);
console.log("----------------------------------------");

