// 9. [Capitalize] ​ Crear una función que convierta un string “hola mundo” y retorne “Hola
// Mundo”

const capitalize = (str) => {
  const arr = str.split(" ");
  const newArr = [];
  let newStr;
  for (let i = 0; i < arr.length; i++) {
    const firstLetter = arr[i].charAt(0).toUpperCase();
    const word = arr[i].slice(1);
    newArr.push(firstLetter + word);
    newStr = newArr.join(" ");
  }

  return newStr;
};

console.log(capitalize("hola mundo"));
