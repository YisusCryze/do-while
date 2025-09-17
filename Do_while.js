
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

function tablaDeMultiplicar(number) {
    let i = 0;
    console.log("---------------------------------------------");
    console.log("     Tabla de multiplicar del " + number);
    console.log("---------------------------------------------");
    do {
        console.log("           " + number + " X " + i + " = " + number * i);
        i++;
    } while (i <= 10);
}
tablaDeMultiplicar(7);

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

//5.  Algoritmo para calcular el factorial de un número con metodo do while y funcion

function calcularFactorial(numero) {
    
    let n = Math.abs(numero);

    let factorial = 1;
    let i = 1;

    do {
        factorial *= i;
        i++;
    } while (i <= n);

    return factorial;
}

console.log(calcularFactorial(5));   
console.log(calcularFactorial(-5));  
console.log(calcularFactorial(0));   

//6. Escribe una función que reciba un array de números y devuelva un nuevo array que contenga solo los números pares do while*/

function filtrarPares(numeros) {
    let numerosPares = [];
    let i = 0;
    do {
        if (numeros[i] % 2 === 0) {
            numerosPares.push(numeros[i]);
        }
        i++;
    } while (i < numeros.length);
    return numerosPares;
}
let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filtrarPares(arrayNumeros));

//7. Implementa una función que calcule la suma de los cuadrados de los primeros N números naturales.

function sumaCuadrados(N) {
    let suma = 0;
    let o = 1;
    do {
        suma += o * o;
        o++;
    } while (o <= N);
    return suma;
}   
console.log("La suma de los cuadrados de los primeros 5 números naturales es: " + sumaCuadrados(5));
console.log("----------");

//8. Escribe una función que calcule la potencia de un número (base^exponente) utilizando un ciclo for, sin usar el operador de potencia **.

function potencia(base, exponente) {
    let resultado = 1;
    let p = 1;
    do {
        resultado *= base;
        p++;
    } while (p <= exponente);
    return resultado;
}
console.log("2 elevado a la 3 es: " + potencia(2, 3));
console.log("----------");

//9. Desarrolla una función que genere y devuelva los primeros N términos de la serie de Fibonacci.

function fibonacci(N) {
    let fib = [0, 1];
    let q = 2;
    do {
        fib[q] = fib[q - 1] + fib[q - 2];
        q++;
    } while (q < N);
    return fib.slice(0, N);
}
console.log("Los primeros 7 términos de la serie de Fibonacci son: " + fibonacci(7));
console.log("----------");

//10. Desarrolla una función que genere el total de las tablas de multiplicar dado un numero entero.

function tablasMultiplicar(numero) {
    let resultadoTablas = [];
    let r = 1;
    do {
        let tabla = [];
        let s = 1;
        do {
            tabla.push(r * s); 
            s++;
        }
        while (s <= 10);
        resultadoTablas.push(tabla);
        r++;
    } while (r <= numero);
    return resultadoTablas;
}

console.log("Tablas de multiplicar hasta el 5:");
console.log(tablasMultiplicar(5));

