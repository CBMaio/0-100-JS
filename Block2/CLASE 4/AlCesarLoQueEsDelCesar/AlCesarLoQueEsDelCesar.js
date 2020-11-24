// 11. [AlCesarLoQueEsDelCesar] ​ Implementar una función que pueda aplicar el cifrado
// del césar. (Googlear)

const cifradoCesar = (str, num) => {
  const abc = "abcdefghijklmnñopqrstuvwxyz";
  const arrayAbc = abc.split("");
  const newArr = [];
  for (letter of str) {
    let index = arrayAbc.indexOf(letter);
    let newIndex = index + num;
    if (newIndex >= arrayAbc.length) {
      newIndex = newIndex - arrayAbc.length;
    }
    const newLetter = arrayAbc[newIndex];
    newArr.push(newLetter);
  }

  const newStr = newArr.join("");

  return newStr;
};

console.log(cifradoCesar("xyz", 2));
