const usuario = localStorage.getItem('user');
const datostorage = JSON.parse(localStorage.getItem('datos'));

const preguntas = JSON.parse(sessionStorage.getItem('preguntas_'));
const respuestas = JSON.parse(sessionStorage.getItem('respuestas_'));

//////informacion
/////////////////////////////
///obtener objetos de preguntas y de respuestas
const categorias = [
  {idcategoria: 1, nombrecategoria:'muy facil', valorcategoria: 500},
  {idcategoria: 2, nombrecategoria:'facil', valorcategoria: 1000},
  {idcategoria: 3, nombrecategoria:'intermedia', valorcategoria: 1500},
  {idcategoria: 4, nombrecategoria:'dificil', valorcategoria: 2500},
  {idcategoria: 5, nombrecategoria:'muy dificil', valorcategoria: 4500},
]

///////
const titulo = document.querySelector('h1');
const btnRetiro = document.querySelector('#btnretiro');
const btnSalir = document.querySelector('#btnsalir');
var imagen = document.querySelector('img');
var preguntavista = document.querySelector('#pregunta');

////botones de respuestas
var btn1 = document.querySelector('#res1');
var btn2 = document.querySelector('#res2');
var btn3 = document.querySelector('#res3');
var btn4 = document.querySelector('#res4');

/////confirmar respuesta en texto bajo la imagen
var confirma = document.querySelector('#confirm');

////PUNTAJE
var pun = document.querySelector('#puntaje');
var acum = document.querySelector('#acumulado');
var p = 0;
var acumulated = p;
pun.innerHTML = p;
acum.innerHTML = acumulated;
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

///CONTADOR DE PREGUNTAS
var numeropregunta = document.querySelector('#numeropregunta');
var cp = 1;
var idpreguntaanterior = 0;
numeropregunta.innerHTML = cp;
/////

///SONIDOS
var sndperder = document.querySelector('#perder');
var sndganar = document.querySelector('#ganar');
var sndselect = document.querySelector('#select');
var sndavance = document.querySelector('#avance');
var sndcorrect = document.querySelector('#correct');

var historial=[];
if(datostorage){
    historial = datostorage;
}
if(!usuario){
  console.log("NO HAY USER");
  window.location="./index.html";
}

var preguntascategoria = preguntas.filter(pr => pr.idcategoria == r);
var preguntaactual;
var opcionesrespuestas;

var datos = {
    user: usuario ? usuario.toUpperCase() : 'N.N',
    ronda: 1,
    puntos: 0,
    tiempo: 0,
    fecha: ''
}

var {user, ronda, puntos, tiempo, fecha} = datos;

titulo.textContent= `Hola ${user}, Escoge la opción correcta`;

btnRetiro.addEventListener("click", ()=>{
  /////* PREGUNTAR POR LOS PUNTOS, PARA QUE NO GUARDE CON 0 PTS
  ////* SI SE RETIRA EN LA PRIMERA LO LLEVE AL INICIO
    Swal.fire({
        title: 'Desea retirarse?',
        html: `El juego terminará con la siguiente puntuación: <br>
        <b>${p} puntos</b> y un tiempo de <b>${t} segundos</b>`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, retirarme!',
        cancelButtonText: 'No, continuar!'
      }).then((result) => {
        if (result.isConfirmed) {
          if(p > 0 ){
            acumulated = p;
            guardaDatos(true);
          }else{
            localStorage.removeItem('user');
            window.location="./index.html";
          }
        }
      })
})

btnSalir.addEventListener("click",()=>{
  localStorage.removeItem('user');
  window.location="./index.html";
})

btnSalir.setAttribute('hidden', '');
btnRetiro.removeAttribute('hidden');

///ordenar aleatorio preguntas y respuestas
function ordenAleatorio(arr){
  for(var i =arr.length-1 ; i>0 ;i--){
      var j = Math.floor( Math.random() * (i + 1) ); //random index
      [arr[i],arr[j]]=[arr[j],arr[i]]; // swap
  }
}

//////////FUNCION AL CARGAR Y AL CAMBIAR PREGUNTA
function cargarPregunta(){
  ban = true;
  /** se coloca la imagen de carga mientras se obtine la imagen de la pregunta*/
  imagen.setAttribute('src', './img/cargando.gif');
  // sndtime.play();
  // sndtime.loop=true; //probar esto con un sonido corto
  /** remover valor respuesta correcta*/
  btn1.removeAttribute('value');
  btn2.removeAttribute('value');
  btn3.removeAttribute('value');
  btn4.removeAttribute('value');
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

  /**Se filtra con el anterior id, para que el nuevo array no tenga esa pregunta, se evita repetirla asi */
  var preguntastemp = preguntascategoria.filter(pr => pr.idpregunta != idpreguntaanterior);
  preguntascategoria = preguntastemp;
  ordenAleatorio(preguntastemp);

  /** La pregunta a mostrar es la primera que tenga el array despues de ordenar aleatoriamente */
  preguntaactual = preguntastemp[0];

  ////* IMAGEN- img atributo src, cambiar preguntas.url
  imagen.setAttribute('src', preguntaactual.url);
  imagen.alt = preguntaactual.alt;
  console.log(imagen.alt);

  ////PREGUNTA- h3 id = preguntas.pregunta
  preguntavista.textContent = preguntaactual.pregunta;

  //////filtrar respuestas de esa pregunta
  opcionesrespuestas = respuestas.filter(re => re.idpregunta == preguntaactual.idpregunta);
  ordenAleatorio(opcionesrespuestas);
  //////* quedaria un objeto con la pregunta, y un array con las 4 respuestas
  //////* asignarle un value al boton respuestas.correcta

  ////* RESPUESTAS- button id = res1 -- res4, textContent = respuestas.respuesta
  btn1.textContent = "A. "+opcionesrespuestas[0].respuesta;

  btn2.textContent = "B. "+opcionesrespuestas[1].respuesta;

  btn3.textContent = "C. "+opcionesrespuestas[2].respuesta;

  btn4.textContent = "D. "+opcionesrespuestas[3].respuesta;

}
////////FIN FUNCION

btn1.addEventListener("click", ()=>{
  sndselect.play();
  btn1.setAttribute('value', opcionesrespuestas[0].correcta);
  btn1.setAttribute('class', "btn btn-warning");
  compruebaRespuesta(btn1);
})
btn2.addEventListener("click", ()=>{
  sndselect.play();
  btn2.setAttribute('value', opcionesrespuestas[1].correcta);
  btn2.setAttribute('class', "btn btn-warning");
  compruebaRespuesta(btn2);
})
btn3.addEventListener("click", ()=>{
  sndselect.play();
  btn3.setAttribute('value', opcionesrespuestas[2].correcta);
  btn3.setAttribute('class', "btn btn-warning");
  compruebaRespuesta(btn3);
})
btn4.addEventListener("click", ()=>{
  sndselect.play();
  btn4.setAttribute('value', opcionesrespuestas[3].correcta);
  btn4.setAttribute('class', "btn btn-warning");
  compruebaRespuesta(btn4);
})

function compruebaRespuesta(btn){
  ban = false; ///para detener el tiempo
  ////deshabilitar
  btn1.setAttribute('disabled', '');
  btn2.setAttribute('disabled', '');
  btn3.setAttribute('disabled', '');
  btn4.setAttribute('disabled', '');
  setTimeout(function() { 
    sndselect.pause();
    sndselect.currentTime = 0;
    var valorpunto = 0;
    if(btn.value == 'true'){
      sndcorrect.play();
      btn.setAttribute('class', "btn btn-success");
      confirma.style.color = 'green';
      // confirma.textContent = `Es correcto! &#x1F44F;`;
      confirma.innerHTML = `Es correcto! &#x1F44F;`;
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
      // confirma.textContent = `Te equivocaste, mejor suerte la próxima! &#x1F4A2;`;
      confirma.innerHTML = `Te equivocaste, mejor suerte la próxima! &#x1F4A2;`;
    }

    setTimeout(function (){
      if(btn.value == 'true'){
        console.log("SIGUIENTE PREGUNTA");
        confirma.textContent = '';
        if(cp >= 5){
          sndavance.play();
          acumulated = p;
          r++;
          cp = 1;
          idpreguntaanterior = 0;
          preguntascategoria = preguntas.filter(pr => pr.idcategoria == r);

          Swal.fire({
            title: `Felicidades! ${user}`,
            html: `<h3>Avanzas a la ronda</h3> <h2>${r}</h2>`,
            imageUrl: 'https://media.giphy.com/media/26BGKJGlwVl02OXrW/giphy.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'round avanced',
            showConfirmButton: false,
            allowOutsideClick: false,
            showCloseButton: true,
            timer: 3000
          })
          setTimeout(function (){
            cargarPregunta();
          },3000);
        }else{
          cp += 1;
          idpreguntaanterior = preguntaactual.idpregunta;
          ///funcion que carga las nuevas preguntas
          cargarPregunta();
        }
        ////* cuando la ronda sea mayor que la cantidad de categorias, mostrar mensaje de victoria
        if(r > categorias.length){
          r--;
          sndganar.play();
          console.log("NO HAY MÁS CATEGORIAS");
          ban = false;
          Swal.fire({
            title: `Lo lograste! ${user}`,
            text: 'Respondiste todas las preguntas correctamente.',
            html: `Obtuviste el siguiente puntaje:<br>
                    <b>${p} puntos</b> y un tiempo de <b>${t} segundos</b>`,
            imageUrl: 'https://media.giphy.com/media/J5GhsPx9UnxOXOIWJa/giphy.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'victoy',
            showConfirmButton: false,
            allowOutsideClick: false,
            showCloseButton: true,
          })
          setTimeout(function (){
            sndganar.pause();
            guardaDatos(true);
          },5000);
        }else{
          ////mostrar la ronda en pantalla
          ron.innerHTML = r;
          acum.innerHTML = acumulated;
          numeropregunta.innerHTML = cp;
        }
      }else{
        if(acumulated > 0){
          // guardaAcumulado();
          guardaDatos(false);
        }
        btnRetiro.setAttribute('hidden', '');
        btnSalir.removeAttribute('hidden');
        Swal.fire({
          title: 'Otro intento?',
          html: `Obtuviste el siguiente acumulado: <br>
                <b>${acumulated} puntos</b> y un tiempo de <b>${t} segundos</b>`,
          showDenyButton: true,
          imageUrl: 'https://media.giphy.com/media/gV0qVmjmLr4k/giphy.gif',
          imageWidth: 400,
          imageHeight: 200,
          confirmButtonText: 'Si, otro!',
          denyButtonText: `No gracias`,
        }).then((result) => {
          if (result.isConfirmed) {
            console.log("VOLVER A INTENTAR");
            window.location="./preguntas.html";
          } else if (result.isDenied) {
            console.log("VOLVER AL INICIO");
            localStorage.removeItem('user');
            window.location="./index.html";
          }
        })
      }
    }, 1250)

  }, 3000);

}

/////FUNCION PARA GUARDAR DATOS
function guardaDatos(fin){
  ///parar contador
  ban = false;
  ///formatear fecha
  var date = new Date();
  datos= {...datos, ronda: r, puntos: acumulated, tiempo: t, fecha: date.toLocaleString()};
  ///pasar datos al historial
  historial.push(datos);
  localStorage.removeItem('datos');
  ////pasar datos al localstorage
  localStorage.setItem('datos', JSON.stringify(historial));
  if(fin){
    ////redireccionar al page puntajes
    localStorage.removeItem('user');
    window.location="./puntajes.html";
  }
}

/////FUNCION PARA GUARDAR ACUMULADO
function guardaAcumulado(){
  ///parar contador
  ban = false;
  ///formatear fecha
  var date = new Date();
  datos= {...datos, ronda: r, puntos: acumulated, tiempo: t, fecha: date.toLocaleString()};
  ///pasar datos al historial
  historial.push(datos);
  localStorage.removeItem('datos');
  ////pasar datos al localstorage
  localStorage.setItem('datos', JSON.stringify(historial));
}

window.onload = cargarPregunta();