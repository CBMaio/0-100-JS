// 1. [Piloto]
// Crear un script que defina e inicialice una variable de tipo cadena de caracteres donde almacenemos el nombre de un miembro del grupo y otra variable de tipo entera donde se almacena su edad. Imprimir cada variable en una línea distinta en pantalla. 

const piloto = () => {
    let nombre = 'Melina';
    let edad = 22;

    console.log(nombre);
    console.log(edad);
}


// 2. [Basic]
// Crear un script que permita ingresar a una persona su nombre, su correo y su edad. Mostrar un mensaje en pantalla y en la consola diciendo: Hola [nombre], te enviaremos un mail a [correo]

const basic = () => {

    const nombreUsuario = prompt('Ingrese su nombre');
    const correoUsuario = prompt('Ingrese su correo electrónico');
    const edadUsuario = parseInt(prompt('Ingrese su edad'));
    let mensaje = `Hola ${nombreUsuario}! Te enviaremos un mail a ${correoUsuario}`
    console.log(mensaje);
    alert(mensaje);

}

// 3. [Ensalada]
// Escribir un script en el cual se ingresen 6 números enteros. Con estos se debe
//  calcular la  suma de los 3 primeros y el producto entre el tercero, el cuarto y el 5to y
//  sumarle el sexto

const ensalada = () => {
    const numeros = [];
    for (let i = 0; i < 6; i++) {
        numeros.push(parseInt(prompt('Ingrese un número entero')));
    }

    let operacion1 = numeros[0] + numeros [1] + numeros [2];
    let operacion2 = (numeros[3] * numeros[4] * numeros[5]) + numeros[6];
}

// 4. [Apus]
// Crear un script que permita simular de forma muy básica el mecanismo de una caja registradora. El usuario debe insertar el nombre del producto, la cantidad y el precio unitario. En la pantalla mostrar: “Gracias por comprar x unidades de x articulo. Total: Total a abonar.

const apus = () => {
    const producto = prompt('Nombre del producto:');
    const cantidad = parseInt(prompt('Cantidad:'));
    const precioU = parseFloat(prompt('Precio por unidad:'));
    const precioTotal = (precioU * cantidad).toFixed(2);
    const mensaje = `Gracias por comprar ${cantidad} unidades de ${producto}. Total: $${precioTotal}.`;

    document.write(mensaje);
}

// 5. [ElProfesor]
// Confeccionar un programa que permita al usuario ingresar 2 notas y calcular:
//         a. Suma total
//         b. Promedio
//         c. Nota máxima

const elProfesor = () => {
    const nota1 = parseFloat(prompt('Ingrese Nota 1'));
    const nota2 = parseFloat(prompt('Ingrese Nota 2'));
    const suma = nota1 + nota2;
    const promedio = (suma / 2).toFixed(2);
    let notaMaxima;
    if (nota1 > nota2) {
        notaMaxima = nota1
    } else {
        notaMaxima = nota2
    };

    document.write(`La suma de ${nota1} y ${nota2} es igual a ${suma}. El promedio es de ${promedio}, y la nota máxima es ${notaMaxima}`);
}


// 6. [Passwords]
// Solicitar que se ingrese dos veces una clave. Mostrar un mensaje si son iguales.

const password = () => {
    const clave1 = prompt('Ingrese una clave');
    const clave2 = prompt('Vuelva a ingresar la clave');
    if(clave1 === clave2) {
        alert('Contraseña correcta');
    } else {
        alert('Intentelo nuevamente');
    };
}

// 7. [Movie]
// Se ingresan por teclado 4 números, si todos los valores ingresados son menores a 23, imprimir en la página ‘Todos los números son menores al número establecido. 

const movie = () => {
    const numeros = []
    for(let i = 1; i < 5; i++){
        numeros.push(parseFloat(prompt(`Ingrese número ${i}`)))
    }
    if(numeros.every(numero => numero < 23)) {
        document.write('Todos los números son menores al número establecido.')
    } else {
        document.write('Hay números mayores a 23. Vuelve a intentarlo.')
    }
}

//8 - [Nine] Crear un script que muestre la tabla de multiplicar del 9.

const nine = () => {
    for (let i = 1; i <= 10; i++) {
        let result = 9 * i;
        let message = `9 x ${i} = ${result}`
    }
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


// 12. [LaClase]
// Confeccionar un script que permita a un usuario ingresar nombre de alumno y notas en distintos vectores (condición de finalización → alumno = “”). Al finalizar la carga se pide:
//         a.  Cantidad de alumnos cargados 
//         b. Cantidad de alumnos aprobados (nota >=6)
//         c. Cantidad de alumnos promocionados
//         d. Alumno/s con mayor nota (si son muchos mostrarlos todos)
//         e. Alumno/s con menor nota
//         f. Media de aprobados (Promedio de todos los alumnos aprobados)
//         g. Media de desaprobados (Promedio de todos los alumnos desaprobados)
//         h. Ordenar y mostrar los nombres de los alumnos por orden alfabético
//         i. Cantidad de notas pares y cantidad de notas impares.

const laClase = () => {
    const alumnos = [];
    const notas = [];
    const aprobadosArr = [];
    const desaprobadosArr = [];
    const promocionados = 0;
    let aprobados = 0; 
    let alumno;
    let pares = 0;
    let impares = 0;

    while(alumno !== '') {
        alumno = prompt('Ingrese nombre: ');
        if (alumno !== '') {
            alumnos.push(alumno);
            notas.push(parseFloat(prompt('Ingrese nota: ')));
        }
    }

    // A - CANTIDAD DE ALUMNOS CARGADOS 
    const cantidadAlumnos = alumnos.length;

    for (let i = 0; i < notas.length; i++) {
        notas[i] % 2 === 0 ? pares++ : impares++;

        if (notas[i] >= 6) {
            aprobados++;
            aprobadosArr.push(notas[i]);
            if (notas[i] >= 7){
                promocionados++;
            } 
        } else {
            desaprobadosArr.push(notas[i])
        }
    }
    
    const promedioAprobados = calcularPromedios(aprobadosArr);
    const promedioDesaprobados = calcularPromedios(desaprobadosArr);
    const alumnosOrden = alumnos.sort();

}

const calcularPromedios = (notas) => {
    let total = 0
    for(let i = 0; i < notas.length; i++){
        total += notas[i];
    }

    const promedio = total / notas.length;
    return promedio;
}
