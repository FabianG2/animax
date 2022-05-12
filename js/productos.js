document.addEventListener("DOMContentLoaded", function(event) {
    var divProductos = document.getElementById("productos");

    // Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arrayProductos") == null) {
        array = [];
        localStorage.setItem("arrayProductos", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("array"));
    }

    // Poblando el div que muestra los  productos
    var listadoProductos = JSON.parse(localStorage.getItem("arrayProductos"));
    var divProductos = document.getElementById("productos");
    listadoProductos.forEach(element => {
        divProductos.innerHTML = divProductos.innerHTML + '<div class="card"><div class="card-body"><h5 class="card-title"> Evento escogido: ' + element["opciones"] +'</h5 > <div  class = "card-text"><p> Duracion y costos : '+ element["duracion"] +'<br> Correo de Contacto : '+element["correo"]+' </p>  </div></div></div>';
    });
    return false;
});

// Esta función se llama cuando se hace clic en el botón de Registrar
// de la página de productos
function registrarProducto() {
    var nombre = document.getElementById("opciones");
    var  duracion = document.getElementById("duracion");
    var correo=document.getElementById("correo");

    //Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arrayProductos") == null) {
        array = [];
        localStorage.setItem("arrayProductos", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayProductos"));
    }

    // Agregando un nuevo producto al array
    array.push({ "opciones": nombre.value ,"duracion":duracion.value,"correo":correo.value});


    // Guardando en el localStorage el nuevo array
    localStorage.setItem("arrayProductos", JSON.stringify(array));

    // Recuperando el array de productos del localStorage
    // para volverlo a mostrar
    var listadoProductos = JSON.parse(localStorage.getItem("arrayProductos"));

    // Obteniendo el div donde se muestran los productos
    var divProductos = document.getElementById("productos");

    // Recorriendo el array de productos que viene del localStorage
    listadoProductos.forEach(element => {
        // Se añade cada producto al div como un card
        divProductos.innerHTML = divProductos.innerHTML + '<div class="card"><div class="card-body"><h5 class="card-title"> Evento escogido :' + element["opciones"] + ' </h5> <div  class = "card-text"><p> Duracion y costos : '+ element["duracion"]+'<br> Correo de Contacto : '+element["correo"]+' </p> </div></div>';
    });
    document.getElementById("info1productos").style = "display:block;";
    return false;
}