//8 - [Nine] Crear un script que muestre la tabla de multiplicar del 9.

for (let i = 1; i <= 10; i++) {
    let result = 9 * i;
    let message = `9 x ${i} = ${result}`
}



// 9 - [DeTodo] Crear un script que permita al usuario ingresar un número y muestre la tabla de multiplicar y la suma de los mismos. (Ejemplo: El usuario ingresa el numero 4)
// 4x1 = 4
// 4x2 = 8
// ….

// 4+8+12+16 = 40

/* console.log(calculate(5)) */

const calculate = (num) => {
    let totalSum = 0;
    for (let i = 1; i <= 10; i++) {
        const result = num * i;
        console.log(`${num} x ${i} = ${result}`);
        totalSum += result
    }

    console.log(`La suma de todos los resultados es igual a = ${totalSum}`);
}



// 10. [LaFabrica]
// En una empresa trabajan 5 empleados cuyos sueldos oscilan entre $100 y $500, realizar un programa que lea los sueldos que cobra cada empleado e informe cuántos empleados cobran entre $100 y $300 y cuántos cobran más de $300. Además el programa deberá informar el importe que gasta la empresa en sueldos al personal (grupo)

/* sueldos([100, 250, 400, 180, 390]) */

const sueldos = (sueldos) => {
    let sueldosMenores = 0;
    let sueldosMayores = 0;
    let totalSueldos = 0;

    for (let i = 0; i < sueldos.length; i ++) {
        sueldos[i] <= 300  ? sueldosMenores++ : sueldosMayores++; 
        totalSueldos += sueldos[i];
    }

    console.log(`Hay ${sueldosMenores} sueldos entre $300 y $100, ${sueldosMayores} mayores a $300, y el total destinado a sueldos es de ${totalSueldos}`)
}

//  11. [newArray]
//  Crear un vector con 5 valores aleatorios comprendidos entre 1 y 1000. Luego extraer los dos últimos elementos sumarlos y mostrarlos. Imprimir también el tamaño final del vector
// Recordar que const nro=1+(Math.random()*1000); permite generar un número 
// aleatorio.


const createArray = () => {
    const arr = [];
    for (let i = 0; i < 5; i++){
        const number = Math.round(1+Math.random() * 1000);
        arr.push(number)
    }
    
    const num1 = arr[arr.length - 2];
    const num2 = arr[arr.length - 1]; 
    const suma = num1 + num2

    console.log(arr)
    console.log(`La suma de ${num1} y ${num2} es ${suma}`);

}
