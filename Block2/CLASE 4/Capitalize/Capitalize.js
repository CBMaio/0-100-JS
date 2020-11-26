// 9. [Capitalize] ​ Crear una función que convierta un string “hola mundo” y retorne “Hola
// Mundo”

const capitalize = (str) => {
  str = str.split(' ');
  for(let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }

  str = str.join(' ');
  return str;
};

console.log(capitalize("hola mundo"));
