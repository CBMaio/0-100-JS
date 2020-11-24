// ¿Cuántos libros hay en la librería?
// Pide un límite inferior y superior (a través de inputs)  para el precio y muestra todos los libros cuyo precio esta en ese intervalo (al tocar un botón).
// Pide un titulo a través de un input, y muestra el título y el año de publicación de los libros cuyo título empiece por la cadena introducida.
// Muestra todos los títulos de los libros con la lista de sus autores.

const books = [
  {
    title: {
      _lang: "en",
      __text: "Everyday Italian",
    },
    author: "Giada De Laurentiis",
    year: "2005",
    price: "30.00",
    _category: "COOKING",
  },
  {
    title: {
      _lang: "en",
      __text: "Harry Potter",
    },
    author: "J K. Rowling",
    year: "2005",
    price: "29.99",
    _category: "CHILDREN",
  },
  {
    title: {
      _lang: "en",
      __text: "XQuery Kick Start",
    },
    author: [
      "James McGovern",
      "Per Bothner",
      "Kurt Cagle",
      "James Linn",
      "Vaidyanathan Nagarajan",
    ],
    year: "2003",
    price: "49.99",
    _category: "WEB",
  },
  {
    title: {
      _lang: "en",
      __text: "Learning XML",
    },
    author: "Erik T. Ray",
    year: "2003",
    price: "39.95",
    _category: "WEB",
  },
];

const booksLength = books.length;

const reset = () => {
  const list = document.getElementById("listBooks");
  const text = document.getElementById("results");
  list.textContent = "";
  text.textContent = "";
};

const showResults = (arr) => {
  const text = document.getElementById("results");
  const list = document.getElementById("listBooks");

  if (arr.length === 0) {
    text.textContent = "No se encontraron resultados";
  } else {
    text.textContent = `Hay ${arr.length} ${
      arr.length === 1 ? "coincidencia" : "coincidencias"
    }:`;
    for (el of arr) {
      const element = document.createElement("li");
      element.textContent = el;
      list.appendChild(element);
    }
  }
};

const prices = () => {
  reset();
  const minPrice = document.getElementById("minPrice").value;
  const maxPrice = document.getElementById("maxPrice").value;
  const coincidencias = [];

  for (book of books) {
    if (book.price >= minPrice && book.price <= maxPrice) {
      coincidencias.push(book.title.__text);
    }
  }

  showResults(coincidencias);

};

const titles = () => {
  reset();
  const title = document.getElementById("nameBook").value.toLowerCase();
  const coincidencias = [];

  for (book of books) {
      if(title !== ''){
          if (book.title.__text.toLowerCase().includes(title))
          coincidencias.push(book.title.__text);
      }
  }

    showResults(coincidencias);
};
