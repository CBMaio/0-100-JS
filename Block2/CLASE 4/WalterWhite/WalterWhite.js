// [WalterWhite]​ Crear una función que retorne la cantidad de espacios en blanco de
// un texto

const spaces = (string) => {
    let numSpaces = 0;
    for(letter of string) {
        letter === ' ' ? numSpaces++ : null;
    }

    return numSpaces;
}

console.log(spaces('h    o '));