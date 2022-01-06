const usuario = localStorage.getItem('user');
const datostorage = JSON.parse(localStorage.getItem('datos'));

//////informacion
/////////////////////////////
///obtener objetos de preguntas y de respuestas
const categorias = JSON.parse(localStorage.getItem('categorias'));
localStorage.removeItem('categorias');

const preguntas = JSON.parse(localStorage.getItem('preguntas'));
localStorage.removeItem('preguntas');

const respuestas = JSON.parse(localStorage.getItem('respuestas'));
localStorage.removeItem('respuestas');

var preguntaactual;
///////

const titulo = document.querySelector('h1');
const btnRetiro = document.querySelector('#btnretiro');

////botones de respuestas
var btn1 = document.querySelector('#res1');
var btn2 = document.querySelector('#res2');
var btn3 = document.querySelector('#res3');
var btn4 = document.querySelector('#res4');

/////confirmar respuesta en texto bajo la imagen
var confirma = document.querySelector('#confirm');

////PUNTAJE
var pun = document.querySelector('#puntaje');
var p = 0;
pun.innerHTML = p;
////

////TIEMPO
var tem = document.querySelector('#tiempo');
var t = 0;
tem.innerHTML = t;
var ban = true;
window.setInterval(function(){
  if(ban){
    t++;
    tem.innerHTML = t;
    }
},1000);
////

////RONDA
var ron = document.querySelector('#ronda');
var r = 1;
ron.innerHTML = r;
////

///SONIDOS
var sndperder = document.querySelector('#perder');
var sndganar = document.querySelector('#ganar');

var historial=[];
if(localStorage.getItem('datos') !== null){
    historial = datostorage;
}


var datos = {
    user: usuario ? usuario.toUpperCase() : 'N.N',
    puntos: 0,
    tiempo: 0,
    fecha: ''
}

var {user, puntos, tiempo, fecha} = datos;

titulo.textContent= `Hola ${user}, Escoge la opción correcta`;

window.onload = cargarPregunta();

btnRetiro.addEventListener("click", ()=>{
  /////* PREGUNTAR POR LOS PUNTOS, PARA QUE NO GUARDE CON 0 PTS
  ////* SI SE RETIRA EN LA PRIMERA LO LLEVE AL INICIO
    Swal.fire({
        title: 'Desea retirarse?',
        html: `El juego terminará con el siguiente acumulado: <br>
        <b>${p} puntos</b> y un tiempo de <b>${t} segundos</b>`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, retirarme!'
      }).then((result) => {
        if (result.isConfirmed) {
          if(p == 0){
            window.location="./index.html";
          }else{
            guardaDatos();
          }
        }
      })
})

/////FUNCION PARA GUARDAR DATOS
function guardaDatos(){
    ///parar contador
    ban = false;
    ///formatear fecha
    var date = new Date();
    datos= {...datos, puntos: p, tiempo: t, fecha: date.toLocaleString()};
    ///pasar datos al historial
    historial.push(datos);
    localStorage.removeItem('datos');
    ////pasar datos al localstorage
    localStorage.setItem('datos', JSON.stringify(historial));
    ////redireccionar al page puntajes
    window.location="./puntajes.html";
    localStorage.removeItem('user');
}

//////////FUNCION AL CARGAR Y AL CAMBIAR PREGUNTA
function cargarPregunta(){

  ////volver clases preseleccion
  btn1.setAttribute('class', "btn btn-outline-secondary");
  btn2.setAttribute('class', "btn btn-outline-secondary");
  btn3.setAttribute('class', "btn btn-outline-secondary");
  btn4.setAttribute('class', "btn btn-outline-secondary");
  ////habilitar los botones de respuestas
  btn1.removeAttribute('disabled');
  btn2.removeAttribute('disabled');
  btn3.removeAttribute('disabled');
  btn4.removeAttribute('disabled');

  ///ordenar aleatorio preguntas y respuestas
  function ordenAleatorio(arr){
    for(var i =arr.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) ); //random index
        [arr[i],arr[j]]=[arr[j],arr[i]]; // swap
    }
  }

  var preguntascategoria = preguntas.filter(pr => pr.idcategoria == r);
  ordenAleatorio(preguntascategoria);

  ///////* escoger una pregunta dependiendo la ronda (1,2,3,4,5)
  // var preguntaactual = preguntascategoria.find(pr => pr.idcategoria == r);
  preguntaactual = preguntascategoria[0];

  //////filtrar respuestas de esa pregunta
  var opcionesrespuestas = respuestas.filter(re => re.idpregunta == preguntaactual.idpregunta);
  ordenAleatorio(opcionesrespuestas);
  //////* quedaria un objeto con la pregunta, y un array con las 4 respuestas
  //////* asignarle un value al boton respuestas.correcta

  ////PREGUNTA- h3 id = preguntas.pregunta
  var preguntavista = document.querySelector('#pregunta');
  preguntavista.textContent = preguntaactual.pregunta;

  ////* IMAGEN- img atributo src, cambiar preguntas.url
  var imagen = document.querySelector('img');
  imagen.setAttribute('src', preguntaactual.url);
  imagen.alt = preguntaactual.alt;
  console.log(imagen.alt);

  ////* RESPUESTAS- button id = res1 - res4, textContent = respuestas.respuesta
  btn1.textContent = opcionesrespuestas[0].respuesta;
  btn1.setAttribute('value', opcionesrespuestas[0].correcta);

  btn2.textContent = opcionesrespuestas[1].respuesta;
  btn2.setAttribute('value', opcionesrespuestas[1].correcta);

  btn3.textContent = opcionesrespuestas[2].respuesta;
  btn3.setAttribute('value', opcionesrespuestas[2].correcta);

  btn4.textContent = opcionesrespuestas[3].respuesta;
  btn4.setAttribute('value', opcionesrespuestas[3].correcta);

}
////////FIN FUNCION


btn1.addEventListener("click", ()=>{
  btn1.setAttribute('class', "btn btn-warning");
  compruebaRespuesta(btn1);
})
btn2.addEventListener("click", ()=>{
  btn2.setAttribute('class', "btn btn-warning");
  compruebaRespuesta(btn2);
})
btn3.addEventListener("click", ()=>{
  btn3.setAttribute('class', "btn btn-warning");
  compruebaRespuesta(btn3);
})
btn4.addEventListener("click", ()=>{
  btn4.setAttribute('class', "btn btn-warning");
  compruebaRespuesta(btn4);
})

function compruebaRespuesta(btn){
 ////deshabilitar
 btn1.setAttribute('disabled', '');
 btn2.setAttribute('disabled', '');
 btn3.setAttribute('disabled', '');
 btn4.setAttribute('disabled', '');
 setTimeout(function() { 
  var valorpunto = 0;
   if(btn.value == 'true'){
     btn.setAttribute('class', "btn btn-success");
     confirma.style.color = 'green';
     confirma.textContent = 'Es correcto!';
     categorias.forEach(cat => {
       if(cat.idcategoria == preguntaactual.idcategoria){
        valorpunto = cat.valorcategoria
        }
     })
     p+=valorpunto;
     pun.innerHTML = p;

   }else{
    sndperder.play();
     btn.setAttribute('class', "btn btn-danger");
     confirma.style.color = 'red';
     confirma.textContent = 'Te equivocaste, mejor suerte la próxima!';
   }

   setTimeout(function (){
     if(btn.value == 'true'){
       console.log("SIGUIENTE PREGUNTA");
        confirma.textContent = '';
        r++;
       ////* cuando la ronda sea mayor que la cantidad de categorias, mostrar mensaje de victoria
        if(r > categorias.length){
          sndganar.play();
          console.log("NO HAY MÁS CATEGORIAS");
          ban = false; ///para detener el tiempo
          Swal.fire({
            title: `Felicidades! ${user}`,
            text: 'lograste responder todas las preguntas correctamente.',
            imageUrl: 'https://media.giphy.com/media/J5GhsPx9UnxOXOIWJa/giphy.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'celebración',
            showConfirmButton: false,
            allowOutsideClick: false,
          })
          setTimeout(function (){
            sndganar.pause()
            guardaDatos()
          },5000);
        }else{
          ////mostrar la ronda en pantalla
          ron.innerHTML = r;
          ////funcion que carga las nuevas preguntas
          cargarPregunta();
        }
     }else{
      Swal.fire({
        title: 'Revancha?',
        showDenyButton: true,
        confirmButtonText: 'Si, revancha',
        denyButtonText: `No gracias`,
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("VOLVER A INTENTAR");
          window.location="./preguntas.html";
        } else if (result.isDenied) {
          console.log("VOLVER AL INICIO");
            window.location="./index.html";
        }
      })
     }
   }, 1000)

 }, 1250);

}
