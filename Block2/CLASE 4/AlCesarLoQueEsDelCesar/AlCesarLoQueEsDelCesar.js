// 11. [AlCesarLoQueEsDelCesar] ​ Implementar una función que pueda aplicar el cifrado
// del césar. (Googlear)

const cifradoCesar = (str, num) => {
  const abc = "abcdefghijklmnñopqrstuvwxyz";
  const arrayAbc = abc.split("");
  const newArr = [];
  for (letter of str) {
    const index = arrayAbc.indexOf(letter);
    const newLetter = arrayAbc[index + num];
    newArr.push(newLetter);
  }

  const newStr = newArr.join('')

  return newStr;
};

console.log(cifradoCesar("hola", 1));
