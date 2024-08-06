let viajes=[
    {   img: "./assets/img/trekking.jpeg",
        detalle:"TREKKING",
        ubicacion:"Cerro Santa Lucía",
        texto:"Modalidad de excurcionismo que consiste en recorrer a pie largas distancias o zonas determinadas, generalmente de alta montaña y poco frecuentadas por eñ turismo convencional",
    },
    {
        img:"./assets/img/natacion.jpeg",
        detalle: "NATACION" ,
        ubicacion: "Lago de tu casa" ,
        texto: "Deporte o ejercicio que consiste en nadar; en las pruebas de natación se compite en velocidad, en cualquiera de los cuatro estilos: braza, crol, espalda y mariposa.",
    },
    {
        img:"./assets/img/ferry.jpg",
        detalle: "FERRY",
        ubicacion: "Lago Neptuno",
        texto: "Embarcación que realiza alternativamente el misco recorrido entre dos pintos; especialmente la de grandes dimensiones destinada al transporte de cargas pesadas o pasajeros.",
    },
]

//elegir que actividad se quiere ver
let actividad=document.getElementById("actividades")
actividad.addEventListener("change", eleccion);
    function eleccion (){
        const opcion=actividad.value;
         agregaractividad(viajes[opcion])
    
}

// inyectar la actividad elegida en la pagina
function agregaractividad(viaje){
    const{img, detalle, ubicacion, texto} = viaje;

    let card = `
        <div class="card" style="width: 35rem;">
            <div class="card-img-container">
                <img src="${img}" class="card-img-top" alt="...">
                <div id="hoover" class="card">
                    <p class="detalle">${detalle}</p>
                    <i class="fa-solid fa-location-pin"><span class="ubicacion">${ubicacion}</span></i>
                </div>
            </div>
            <div class="card-body">
              <p class="card-text">${texto}</p>
              <a href="#" class="card-link">Conocer más</a> <br>
              <a href="#" class="btn btn-light">Agendar actividad</a>
            </div>
        </div>        
    `
    document.getElementById("agregar").innerHTML=card;
   
    // para que aparezca el hoover
   const escuchar = document.querySelector(".card-img-container")
    escuchar.addEventListener("mouseover",aparece);
    escuchar.addEventListener("mouseout",desaparece)
}

// agregar el hoover para cada opcion

function aparece(){
    document.getElementById("hoover").style.visibility="visible"
}

function desaparece(){
   document.getElementById("hoover").style.visibility="hidden"
}