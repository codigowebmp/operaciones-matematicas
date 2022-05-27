//seleccionamos los elementos del DOM
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let respuesta_usuario = document.querySelector("#respuesta_usuario");
let msj_correccion = document.querySelector("#msj_correccion");
let operacion = document.querySelector("#operacion");
let operacion_actual;
//en n1 y n2 voy a guardar los numeros aletarios de cada operacion
let n1, n2;

//funcion suma
function btnSumar() {
    //limpiamos el div contenedor de las correcciones
    msj_correccion.innerHTML = "";
    //agregamos la clase activa al boton suma y la quitamos del resto
    activarBoton("suma");
    operacion_actual = "+";
    //asignamos la operacion suma a la etiqueta
    operacion.innerHTML = " + ";
    //generamos los numeros aletarios de la suma
    nuevaSuma();
}

function nuevaSuma() {
    //generamos dos numeros aletarios entre 0 y 9
    n1 = parseInt(Math.random() * 10);
    n2 = parseInt(Math.random() * 10);
    //asignamos los numeros a las etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    //colocamos el curso en el input
    respuesta_usuario.focus();
}

//Funcion producto
function btnProducto() {
    //limpiamos el div contenedor de las correcciones
    msj_correccion.innerHTML = "";
    //agregamos la clase activa al boton producto y la quitamos del resto
    activarBoton("producto");
    operacion_actual = "*";
    //asignamos la operacion suma a la etiqueta
    operacion.innerHTML = " x ";
    //generamos los numeros aletarios de la suma
    nuevoProducto();
}

function nuevoProducto() {
    //generamos dos numeros aletarios entre 0 y 9
    n1 = parseInt(Math.random() * 10);
    n2 = parseInt(Math.random() * 10);
    //asignamos los numeros a las etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    //colocamos el curso en el input
    respuesta_usuario.focus();
}

//funcion resta
function btnResta() {
    //limpiamos el div contenedor de las correcciones
    msj_correccion.innerHTML = "";
    //agregamos la clase activa al boton suma y la quitamos del resto
    activarBoton("resta");
    operacion_actual = "-";
    //asignamos la operacion suma a la etiqueta
    operacion.innerHTML = " - ";
    //generamos los numeros aletarios de la suma
    nuevaResta();
}

function nuevaResta() {
    //generamos dun numeros aletarios entre 5 y 10
    n1 = parseInt(Math.random() * 5 + 5);
    //generamos un numero aleatorio entre 0 y 5
    n2 = parseInt(Math.random() * 5);
    //asignamos los numeros a las etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    //colocamos el curso en el input
    respuesta_usuario.focus();
}

//funcion división
function btnDivision() {
    //limpiamos el div contenedor de las correcciones
    msj_correccion.innerHTML = "";
    //agregamos la clase activa al boton suma y la quitamos del resto
    activarBoton("division");
    operacion_actual = "/";
    //asignamos la operacion suma a la etiqueta
    operacion.innerHTML = " / ";
    //generamos los numeros aletarios de la suma
    nuevaDivision();
}

function nuevaDivision() {
    //aqui voy a guardar los divisores del numero a dividr
    let divisores = [];

    //generamos un numero aletorio entre 1 y 10
    n1 = parseInt(Math.random() * 9 + 1);

    //encontramos los divisores del numero generado y lo guardamos en el arreglo
    for (var i = 1; i <= n1; i++) {
        if (n1 % i === 0) { //es divisor
            divisores.push(i);
        }
    }

    //seleccionamos un posiciòn aleatorio de los numeros que son divisores
    let pos = parseInt(Math.random() * (divisores.length));

    n2 = divisores[pos];
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    respuesta_usuario.focus();
}

//funcion que controla si la respuesta es correcta
function corregir() {
    //si el usuario no ha ingresado nada no continuo
    if (respuesta_usuario.value == "") {
        return;
    }

    let solucion;
    //armo la operacion que se genero en una variable y veo cual es su reslutado
    //En este caso el operador + es para concatener las cadenas
    let operacion = n1 + operacion_actual + n2;
    solucion = eval(operacion);

    //creo un elemento i para agregar el icono de correcto o incorrecto
    var i = document.createElement("i");
    //controlo si coincide lo que el usuario respondio con la solucion
    if (respuesta_usuario.value == solucion) {
        i.className = "fa-regular fa-face-grin";
    } else {
        i.className = "fa-regular fa-face-frown";
    }

    //agrego el elemento al contenedor de las correciones
    msj_correccion.appendChild(i);

    //controlo que tipo de operacion estoy para genera una nueva operacion
    if (operacion_actual == "+") {
        nuevaSuma();
    } else if (operacion_actual == "-") {
        nuevaResta();
    } else if (operacion_actual == "*") {
        nuevoProducto();
    } else if (operacion_actual == "/") {
        nuevaDivision();
    }

    //limpio el input
    respuesta_usuario.value = "";
}

//agrego al input el evento onkeydown para detectar cuando se presiona Enter Y 
//llamar directamente a la funcion corregir()
respuesta_usuario.onkeydown = function(e) {
    var ev = document.all ? window.event : e;
    if (ev.keyCode == 13) {
        corregir();
    }
}


//Esta funcion la creamos luego, cuando tengamos listo los estilos
function activarBoton(idBoton) {
    document.getElementById("suma").className = "";
    document.getElementById("resta").className = "";
    document.getElementById("producto").className = "";
    document.getElementById("division").className = "";
    document.getElementById(idBoton).className = "activado";
}