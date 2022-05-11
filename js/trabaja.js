document.addEventListener("DOMContentLoaded", function(event) {
    var divtrabaja = document.getElementById("trabaja");

    // Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arraytrabaja") == null) {
        array = [];
        localStorage.setItem("arraytrabaja", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("array"));
    }

    // Poblando el div que muestra los  productos
    var listadotrabaja = JSON.parse(localStorage.getItem("arraytrabaja"));
    var divtrabaja = document.getElementById("trabaja");
    listadotrabaja.forEach(element => {
        divtrabaja.innerHTML = divtrabaja.innerHTML + '<div class="card"><div class="card-body"><h5 class="card-title"> Empleo escogido : ' + element["opciones"] +'</h5 > <div  class = "card-text"><p> Descripcion : '+ element["descripcion"] +'<br> Fecha de cierre : '+element["fecha"]+'<br> Correo de Contacto : '+element["correo"]+' </p>  </div></div></div>';
    });
    return false;
});

// Esta función se llama cuando se hace clic en el botón de Registrar
// de la página de productos
function registrartrabaja() {
    var nombre = document.getElementById("opciones");
    var descripcion= document.getElementById("descripcion");
    var fecha = document.getElementById("fecha");
    var correo=document.getElementById("correo");

    //Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arraytrabaja") == null) {
        array = [];
        localStorage.setItem("arraytrabaja", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arraytrabaja"));
    }

    // Agregando un nuevo producto al array
    array.push({ "opciones": nombre.value ,"descripcion":descripcion.value,"fecha":fecha.value,"correo":correo.value});


    // Guardando en el localStorage el nuevo array
    localStorage.setItem("arraytrabaja", JSON.stringify(array));

    // Recuperando el array de productos del localStorage
    // para volverlo a mostrar
    var listadotrabaja = JSON.parse(localStorage.getItem("arraytrabaja"));

    // Obteniendo el div donde se muestran los productos
    var divtrabaja = document.getElementById("trabaja");

    // Recorriendo el array de productos que viene del localStorage
    listadotrabaja.forEach(element => {
        // Se añade cada producto al div como un card
        divtrabaja.innerHTML = divtrabaja.innerHTML + '<div class="card"><div class="card-body"><h5 class="card-title"> Empleo escogido :' + element["opciones"] + ' </h5> <div  class = "card-text"><p> Descripcion: '+ element["descripcion"] +'<br> Fecha de cierre : '+element["fecha"]+'<br> Correo de Contacto : '+element["correo"]+' </p> </div></div>';
    });
    document.getElementById("info1trabaja").style = "display:block;";
    return false;
}