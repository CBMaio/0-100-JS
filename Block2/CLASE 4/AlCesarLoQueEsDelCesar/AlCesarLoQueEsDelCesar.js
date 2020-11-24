// 11. [AlCesarLoQueEsDelCesar] ​ Implementar una función que pueda aplicar el cifrado
// del césar. (Googlear)

const cifradoCesar = (str, num) => {
  const abc = "abcdefghijklmnñopqrstuvwxyz";
  const arrayAbc = abc.split("");
  const newArr = [];
  const pattern = /[A-Za-z]/
  for (letter of str) {
    if (!pattern.test(letter)) {
      newArr.push(letter);
    } else {
      let index = arrayAbc.indexOf(letter);
      let newIndex = index + num;
      if (newIndex >= arrayAbc.length) {
        newIndex = newIndex - arrayAbc.length;
      }
      const newLetter = arrayAbc[newIndex];
      newArr.push(newLetter); 
    }
  }

  const newStr = newArr.join('');

  return newStr;
};

console.log(cifradoCesar("?. k", 2));
