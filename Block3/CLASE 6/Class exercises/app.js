// 1. Cargar el nombre y apellido dentro de dos inputs type = "text" y al apretar un boton mostrar la concatenacion de estos strings en un tercer input de tipo text

// 2. Replicar la calculadora (+, -) y que una vez resuelto el calculo pasados 2 segundos limpiar los inputs 

const mostrarResultado = () => {
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const resultado = document.getElementById("resultado");

    const nombreCompleto = `${nombre.value} ${apellido.value}`;
    resultado.value = nombreCompleto;
}


const reset = () => {
    document.getElementById('num1').value = null;  
    document.getElementById('num2').value = null;
    document.getElementById('totalOp').value = null;
}

const calcular = (op) => {
    let res = document.getElementById('totalOp');
    let num1 = parseInt(document.getElementById('num1').value) || 0;  
    let num2 = parseInt(document.getElementById('num2').value) || 0;
    res.value = (op === '+' ? num1 + num2 : num1 - num2);
    setTimeout(() => reset(), 2000)
};

