// 2. Una tienda de moda que vende productos cheveres contrata a un programador y le piden armar un array de objetos ( ¿por qué le pedirian esto, no? ) de productos que contengan las siguientes propiedades / características.
// Hint: Obviamente un buen programador nunca debe olvidar la propiedad id para identificar a cada producto...
// nombre
// categoría
// colores → array
// precio
// stock
// descripción
// imagen (link a una imagen) 

//PRODUCTO MÁS CARO

const productos = [
    {
        id: 1,
        nombre: "Pez volador con control remoto",
        categoria: "juguete",
        colores:["amarillo patito", "verde loro","arcoiris","animal print","payaso"],
        precio: 500,
        stock: 18,
        descripcion:"pez volador  a control remoto en diversos colores, para jugar o decorativo",
        imagen:"https://i.pinimg.com/originals/b1/16/db/b116db6cc40c656777f716d5bb9810b5.jpg"
    },
    {
        id: 2,
        nombre: "Laberinto para regalar dinero",
        categoria: "juguete",
        colores:["azul", "amarillo","rojo","rosa"],
        precio: 800,
        stock: 20,
        descripcion:"hay una forma interesante de regalar dinero con este laberinto. Y es que solo es posible acceder al dinero si se resuelve el puzle. Una forma curiosa y bastante inútil de regalar dinero",
        imagen:"https://images-na.ssl-images-amazon.com/images/I/71tPBUQtYWL._AC_SX425_.jpg"
    },
    {
        id: 3,
        nombre: "PLAteclado",
        categoria: "computacion",
        colores:["celeste", "negro","marmol","violeta"],
        precio: 1500,
        stock: 300,
        descripcion:"dias de trabajo eternos,si no tienes tiempo de salir a comer, este teclado puede ser una buena opción.",
        imagen:"https://1.bp.blogspot.com/-rdwtJl-eXIU/UOyQE82P1bI/AAAAAAAAC_s/DOfM_lqKVPk/s1600/tecladoloco.jpg"
    },
    {
        id: 4,
        nombre: "cesped de pared",
        categoria: "decoracion",
        colores:"verde",
        precio: 850,
        stock: 50,
        descripcion:"vivis en un monoambiente y queres un poco de naturaleza, este cuadro es para vos, podesregarlo para que crezcan flores y treboles.",
        imagen:"http://3.bp.blogspot.com/-ltN9Ahg0CSw/UOyQHn5u1XI/AAAAAAAAC_0/qQUzT1xMBRA/s400/verdeenoficina.jpg"
    },
    {
        id: 5,
        nombre: "titeres de dedos",
        categoria: "entretenimiento",
        colores:["unicornio","dinosaurio","tigre","duende","elefante"],
        precio: 280,
        stock: 50,
        descripcion:"entrentene a  tus sobrinos o hijos con estos mini titeres de dedo",
        imagen:"https://rcdn.rolloid.net/uploads/2017/01/22-extranos-objetos-que-no-sabias-ni-que-existian-1484040110.jpg"
    },
    {
        id: 6,
        nombre: "abrazote",
        categoria: "decoracion",
        colores:["marron","verde","rosa","amarillo"],
        precio: 800,
        stock: 60,
        descripcion:"Las noches de soledad se han terminado con esta fabulosa almohada que te hará compañía durante los días de soledad.Util para quienes no queremos dormir con otros humanos",
        imagen:"https://rcdn.rolloid.net/uploads/2017/01/22-extranos-objetos-que-no-sabias-ni-que-existian-1484040542.jpg"
    },
    {
        id: 7,
        nombre: "Ojotas limpia limpia",
        categoria: "limpieza",
        colores:["rojo","verde","rosa","amarillo"],
        precio: 800,
        stock: 30,
        descripcion:"que mejor que limpiar sin darte cuenta, estas ojotas son la solucion para tu hogar",
        imagen:"https://i.pinimg.com/originals/b7/f8/dd/b7f8dd596c0a3cae5c8eed4698bbcd41.jpg"
    },
    {
        id: 8,
        nombre: "Chinelas nocturnas con luz led",
        categoria: "indumentaria",
        colores:["rojo","verde","rosa","amarillo", "arcoiris","negro"],
        precio: 500,
        stock: 50,
        descripcion:"no prendas mas las luces a la noche, estas ojotas te acompañan en tu travesia al baño",
        imagen:"https://ugc.kn3.net/i/760x/http://2.bp.blogspot.com/_3MH8UjUHOLc/S22bR7PPq2I/AAAAAAAAcww/k9M8NDTQwLY/s400/unusual_stuff_24.jpg"
    }
]

const maxPrice = (productos) => {
    let max = 0;
    for (let producto of productos) {
        if(producto.precio > 0) {
            max = producto.precio;
        }
    }

    return max;
}

const minimo = stock => Math.min(...stock)

const minStock = (productos = productos) => {
    const stock = [];
    for (producto of productos) stock.push(producto.stock);

}

const maxColores = (productos) => {
    //mostrar que producto tiene más colores. 
    let maximo, index = 0;
    for (let i = 0; i < productos.length; i++) {
        if (productos.colores.length >= maximo) {
            maximo = productos.colores.length;
            index = i;
        }
    }

    console.log(productos[index].nombre)
}

const maxColoresV2 = (productos) => {
    const cantidades = productos.map(producto => producto.colores.length);

    const position = cantidades.indexOf(Math.max(...cantidades))
    console.log(position)
}

maxColoresV2(productos);