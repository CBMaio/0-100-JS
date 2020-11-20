// [NoLength]​ Crear una función que retorne la cantidad de caracteres de un texto.
// a. Nota: Esto es posible hacerlo dentro de javascript con .length. Implementar
// un ciclo para resolver el problema.

const length = (string) => {
    let numCh = 0;
    for (ch of string) {
        numCh++;
    }

    return numCh;
}
