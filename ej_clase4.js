// 1. Armar una función para retornar el reverso de un string (prohibido usar funciones de javascript)
// 2. Permitirle al usuario cargar 3 nombres y 3 notas de alumnos (concepto de arrays paralelos)
// a. Mostrar el alumno con MAYOR nota
// b. Mostrar el alumno con MENOR nota
// c. Promedio de todos los alumnos

// Todo el código debe estar resuelto en arrow functions. 


const reverse = (string) => {
    const arrString = [];
    for (let i = string.length - 1; i >= 0; i--) {
        arrString.push(string[i]);
    }

    let newString = arrString.join('');
    return newString;

}

const ingresoDatos = () => {
    const alumnos = [];
    const notas = [];

    for (let i = 0; i < 3; i++) {
        alumnos.push(prompt(`Ingrese nombre de alumno ${i + 1}`));
        notas.push(parseFloat(prompt(`Ingrese nota de alumno ${i + 1}`)));
    }
    
    const masNota = mayorNota(notas)
    const menosNota = menorNota(notas)

    console.log(`La mayor nota es ${notas[masNota]}, alumno ${alumnos[masNota]}`);
    console.log(`La menor nota es ${notas[menosNota]},  alumno ${alumnos[menosNota]}`);
    console.log(`El promedio es ${promedio(notas)}`);
}

const mayorNota = (notas) => {
    let mayor = notas[0];
    let indexMay = 0;
    for (let i = 0; i < notas.length; i++) {
        if (mayor < notas[i]) {
            mayor = notas[i];
            indexMay = i;
        } else {
            mayor = mayor;
            indexMay = indexMay;
        }
    }

    return indexMay; 
}


const menorNota = (notas) => {
    let menor = notas[0]; 
    let indexMen = 0;
    for (let i = 0; i < notas.length; i++) {
        if (menor > notas[i]) {
            menor = notas[i];
            indexMen = i;
        } else {
            menor = menor;
            indexMen = indexMen;
        }
    }

    return indexMen
}

const promedio = (notas) => {
    let total = 0;
    let promedio

    for (let i = 0; i < notas.length; i++) {
        total += notas[i];
    }
    
    promedio = (total / notas.length).toFixed(2);

    return promedio;
}

ingresoDatos()
