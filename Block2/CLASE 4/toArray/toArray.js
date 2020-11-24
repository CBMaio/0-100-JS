// 10. [toArray] ​ Crear una función que reciba un string y lo convierta en un array de
// caracteres.

const toArray = (str) => {
    const newArr = str.split('');
    return newArr;
}

console.log(toArray('hola'))