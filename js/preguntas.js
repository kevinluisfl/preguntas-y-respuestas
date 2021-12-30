const usuario = localStorage.getItem('user');
const datostorage = JSON.parse(localStorage.getItem('datos'));

//////informacion
/////////////////////////////
///crear objeto de preguntas y de respuestas
const categorias = [
  {idcategoria: 1, nombrecategoria:'muy facil', valorcategoria: 5},
  {idcategoria: 2, nombrecategoria:'facil', valorcategoria: 10},
  {idcategoria: 3, nombrecategoria:'intermedia', valorcategoria: 15},
  {idcategoria: 4, nombrecategoria:'dificil', valorcategoria: 20},
  {idcategoria: 5, nombrecategoria:'muy dificil', valorcategoria: 25},
]

const preguntas = [
  {idpregunta: 1, pregunta:'¿Cuál es el animal nacional de Australia?', idcategoria: 1, valor: 5, url:'https://www.esl-idiomas.com/sites/default/files/styles/hero_banner_mobile/public/country/esl-australia-language-stay-hero.jpg?itok=VhTZThXQ'},
  {idpregunta: 2, pregunta:'¿Cuántos días le toma a la tierra dar una vuelta a la órbita del sol?', idcategoria: 1, valor: 5, url:'https://concepto.de/wp-content/uploads/2019/02/traslacion-de-la-tierra-portada-1.jpg'},
  {idpregunta: 3, pregunta:'¿Cuál es el país más pequeño del mundo?', idcategoria: 2, valor: 10, url:'https://www.geoenciclopedia.com/wp-content/uploads/2018/10/banderas-paises.jpg'},
  {idpregunta: 4, pregunta:'¿Cuál es la capital de Canadá?', idcategoria: 2, valor: 10, url:'https://www.liberal.com.mx/wp-content/uploads/2021/03/canada-foto-shutterstock.jpg'},
  {idpregunta: 5, pregunta:'¿Cuál es el río más largo del mundo?', idcategoria: 3, valor: 15, url:'https://www.hola.com/imagenes/viajes/2014032170330/rios-mundo-dia-mundial-agua/0-932-783/los-rios-mas-importantes-del-planeta-e.jpg'},
  {idpregunta: 6, pregunta:'¿Cuál es la obra más famosa de Edvard Munch?', idcategoria: 5, valor: 25, url:'https://biografiadee.com/wp-content/uploads/2020/02/edvard-munch.jpeg'},
  {idpregunta: 7, pregunta:'¿Qué artista pinto el techo de la Capilla Sixtina en Roma?', idcategoria: 4, valor: 20, url:'https://4.bp.blogspot.com/-3-Ip6B7ImYA/WZw01UhwOUI/AAAAAAAAM8c/vrOKSLuNQM0Qilx-KcG3qwh2JUnIEpkwwCLcBGAs/s1600/capilla-sixtina-roma.jpg'},
  {idpregunta: 8, pregunta:'¿Quién inventó la World Wide Web?', idcategoria: 5, valor: 25, url:'https://definicionde.es/wp-content/uploads/2019/03/definicion-de-world-wide-web.jpg'},
  {idpregunta: 9, pregunta:'¿Cuántas teclas tiene un piano?', idcategoria: 4, valor: 20, url:'https://files.soniccdn.com/imagehosting/2a/7639_640.jpg'},
  {idpregunta: 10, pregunta:'¿Qué nave llegó a la luna en 1969?', idcategoria: 3, valor: 15, url:'http://c.files.bbci.co.uk/02BA/production/_107889600_package1.jpg'},
  {idpregunta: 11, pregunta:'¿Qué conductor de la Formula 1 ha ganado más campeonatos?', idcategoria: 3, valor: 15, url:'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2015/12/19/14505420071916.jpg'},
  {idpregunta: 12, pregunta:'¿Cuál fue la primer película de Disney?', idcategoria: 2, valor: 10, url:'https://www.elespectador.com/resizer/Y16IQG5kUVi137v9OasVaHdsXdk=/657x0/filters:format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/SNBM454ZBFDSXCR6PS7SW7RAXE.jpg'},
  {idpregunta: 13, pregunta:'¿Cuál fue el primer país en aprobar el sufragio femenino?', idcategoria: 5, valor: 25, url:'https://www.gaceta.unam.mx/wp-content/uploads/2021/06/210701-aca3-des-f1-sufragio-femenino.jpg'},
  {idpregunta: 14, pregunta:'¿En qué año se disolvió la Unión Soviética?', idcategoria: 4, valor: 20, url:'https://cdni.rt.com/actualidad/public_images/ff6/ff6e8e6a3415a6450f44febe5258eb81_article.jpg'},
  {idpregunta: 15, pregunta:'¿Cuál es la montaña más alta del mundo?', idcategoria: 1, valor: 5, url:'https://www.aventura-amazonia.com/laravel-filemanager/files/shares/Manaslu.jpg'},
]

const respuestas = [
  {idrespuesta: 1, respuesta:'Canguro', idpregunta: 1, correcta: true},
  {idrespuesta: 2, respuesta:'Conejo', idpregunta: 1, correcta: false},
  {idrespuesta: 3, respuesta:'Vaca', idpregunta: 1, correcta: false},
  {idrespuesta: 4, respuesta:'León', idpregunta: 1, correcta: false},
  {idrespuesta: 5, respuesta:'365', idpregunta: 2, correcta: true},
  {idrespuesta: 6, respuesta:'29', idpregunta: 2, correcta: false},
  {idrespuesta: 7, respuesta:'333', idpregunta: 2, correcta: false},
  {idrespuesta: 8, respuesta:'360', idpregunta: 2, correcta: false},
  {idrespuesta: 9, respuesta:'El Vaticano', idpregunta: 3, correcta: true},
  {idrespuesta: 10, respuesta:'Italia', idpregunta: 3, correcta: false},
  {idrespuesta: 11, respuesta:'Colombia', idpregunta: 3, correcta: false},
  {idrespuesta: 12, respuesta:'Irak', idpregunta: 3, correcta: false},
  {idrespuesta: 13, respuesta:'Ottawa', idpregunta: 4, correcta: true},
  {idrespuesta: 14, respuesta:'Oslo', idpregunta: 4, correcta: false},
  {idrespuesta: 15, respuesta:'New York', idpregunta: 4, correcta: false},
  {idrespuesta: 16, respuesta:'Madrid', idpregunta: 4, correcta: false},
  {idrespuesta: 17, respuesta:'Nilo', idpregunta: 5, correcta: true},
  {idrespuesta: 18, respuesta:'Amazonas', idpregunta: 5, correcta: false},
  {idrespuesta: 19, respuesta:'Tiger', idpregunta: 5, correcta: false},
  {idrespuesta: 20, respuesta:'Misisipi', idpregunta: 5, correcta: false},
  {idrespuesta: 21, respuesta:'El grito', idpregunta: 6, correcta: true},
  {idrespuesta: 22, respuesta:'Universo', idpregunta: 6, correcta: false},
  {idrespuesta: 23, respuesta:'Los Granjeros', idpregunta: 6, correcta: false},
  {idrespuesta: 24, respuesta:'Creación', idpregunta: 6, correcta: false},
  {idrespuesta: 25, respuesta:'Miguel Ángel', idpregunta: 7, correcta: true},
  {idrespuesta: 26, respuesta:'Leonardo Da Vinci', idpregunta: 7, correcta: false},
  {idrespuesta: 27, respuesta:'Salvador Dalí', idpregunta: 7, correcta: false},
  {idrespuesta: 28, respuesta:'Picasso', idpregunta: 7, correcta: false},
  {idrespuesta: 29, respuesta:'Tim Berners-Lee', idpregunta: 8, correcta: true},
  {idrespuesta: 30, respuesta:'Linus Torvals', idpregunta: 8, correcta: false},
  {idrespuesta: 31, respuesta:'Bill Gates', idpregunta: 8, correcta: false},
  {idrespuesta: 32, respuesta:'Steve Jobs', idpregunta: 8, correcta: false},
  {idrespuesta: 33, respuesta:'88', idpregunta: 9, correcta: true},
  {idrespuesta: 34, respuesta:'65', idpregunta: 9, correcta: false},
  {idrespuesta: 35, respuesta:'47', idpregunta: 9, correcta: false},
  {idrespuesta: 36, respuesta:'90', idpregunta: 9, correcta: false},
  {idrespuesta: 37, respuesta:'Apollo 11', idpregunta: 10, correcta: true},
  {idrespuesta: 38, respuesta:'Apollo 10', idpregunta: 10, correcta: false},
  {idrespuesta: 39, respuesta:'Spuknit', idpregunta: 10, correcta: false},
  {idrespuesta: 40, respuesta:'Rocket 4', idpregunta: 10, correcta: false},
  {idrespuesta: 41, respuesta:'Michael Schumacher', idpregunta: 11, correcta: true},
  {idrespuesta: 42, respuesta:'Juan Pablo Montoya', idpregunta: 11, correcta: false},
  {idrespuesta: 43, respuesta:'Ayrton Senna', idpregunta: 11, correcta: false},
  {idrespuesta: 44, respuesta:'Fernando Alonso', idpregunta: 11, correcta: false},
  {idrespuesta: 45, respuesta:'Blanca Nieves, 1937', idpregunta: 12, correcta: true},
  {idrespuesta: 46, respuesta:'El Rey León, 1994', idpregunta: 12, correcta: false},
  {idrespuesta: 47, respuesta:'Toy Story, 1995', idpregunta: 12, correcta: false},
  {idrespuesta: 48, respuesta:'Mickey Mouse, 1926', idpregunta: 12, correcta: false},
  {idrespuesta: 49, respuesta:'Nueva Zelanda', idpregunta: 13, correcta: true},
  {idrespuesta: 50, respuesta:'España', idpregunta: 13, correcta: false},
  {idrespuesta: 51, respuesta:'EE.UU', idpregunta: 13, correcta: false},
  {idrespuesta: 52, respuesta:'Francia', idpregunta: 13, correcta: false},
  {idrespuesta: 53, respuesta:'1991', idpregunta: 14, correcta: true},
  {idrespuesta: 54, respuesta:'1975', idpregunta: 14, correcta: false},
  {idrespuesta: 55, respuesta:'1989', idpregunta: 14, correcta: false},
  {idrespuesta: 56, respuesta:'1946', idpregunta: 14, correcta: false},
  {idrespuesta: 57, respuesta:'Everest', idpregunta: 15, correcta: true},
  {idrespuesta: 58, respuesta:'Fuji', idpregunta: 15, correcta: false},
  {idrespuesta: 59, respuesta:'Aconcagua', idpregunta: 15, correcta: false},
  {idrespuesta: 60, respuesta:'Alpes', idpregunta: 15, correcta: false},
]

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
  /////PREGUNTAR POR LOS PUNTOS, PARA QUE NO GUARDE CON 0 PTS
  ////SI SE RETIRA EN LA PRIMERA LO LLEVE AL INICIO
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
      })
})


//////////FUNCION AL CARGAR Y AL CAMBIAR PREGUNTA
function cargarPregunta(){

  btn1.setAttribute('class', "btn btn-outline-secondary");
  btn2.setAttribute('class', "btn btn-outline-secondary");
  btn3.setAttribute('class', "btn btn-outline-secondary");
  btn4.setAttribute('class', "btn btn-outline-secondary");
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
  console.log(preguntascategoria);

  ///////escoger una pregunta dependiendo la ronda (1,2,3,4,5)
  // var preguntaactual = preguntascategoria.find(pr => pr.idcategoria == r);
  preguntaactual = preguntascategoria[0];
  console.log(preguntaactual);

  //////filtrar respuestas de esa pregunta
  var opcionesrespuestas = respuestas.filter(re => re.idpregunta == preguntaactual.idpregunta);
  ordenAleatorio(opcionesrespuestas);
  console.log(opcionesrespuestas);
  //////* quedaria un objeto con la pregunta, y un array con las 4 respuestas
  //////* asignarle un value al boton respuestas.correcta

  ////PREGUNTA- h3 id = preguntas.pregunta
  var preguntavista = document.querySelector('#pregunta');
  preguntavista.textContent = preguntaactual.pregunta;

  ////IMAGEN- img atributo src, cambiar preguntas.url
  var imagen = document.querySelector('img');
  imagen.setAttribute('src', preguntaactual.url);

  ////RESPUESTAS- button id = res1 - res4, textContent = respuestas.respuesta
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
  console.log(btn1.value);
  btn1.setAttribute('class', "btn btn-warning");
  compruebaRespuesta(btn1);
})
btn2.addEventListener("click", ()=>{
  console.log(btn2.value);
  btn2.setAttribute('class', "btn btn-warning");
  compruebaRespuesta(btn2);
})
btn3.addEventListener("click", ()=>{
  console.log(btn3.value);
  btn3.setAttribute('class', "btn btn-warning");
  compruebaRespuesta(btn3);
})
btn4.addEventListener("click", ()=>{
  console.log(btn4.value);
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
     console.log(valorpunto);
     p+=valorpunto;
     pun.innerHTML = p;

   }else{
     btn.setAttribute('class', "btn btn-danger");
     confirma.style.color = 'red';
     confirma.textContent = 'Te equivocaste, mejor suerte la próxima!';
   }

   setTimeout(function (){
     if(btn.value == 'true'){
       console.log("SIGUIENTE PREGUNTA");
        confirma.textContent = '';
        r++;
       ////cuando la ronda sea 5, mostrar mensaje de victoria
        if(r > 5){
          ////mensaje, mandar a puntajes.html
          console.log("NO HAY MÁS CATEGORIAS");
          return;
        }else{
          ron.innerHTML = r;
          ////funcion que carga las nuevas preguntas
          cargarPregunta();
        }
     }else{
       console.log("VOLVER AL INICIO");
       window.location="./index.html";
     }
   }, 1500)

 }, 1500);

}

////* al seleccionar cambiar class de btn-outline-secondary a btn-warning
////* asignar atributo disabled para no cambie eleccion
////* esperar y cambiar la class de la correcta por btn-success
////* en seleccion  incorrecta cambiar la class de btn-warning a btn-danger

///al comprobar respuesta cargar nuevos datos de siguiente pregunta
///actualizar puntuacion, ronda 

////cambiar categoria
////Crear mensaje alert con gif al completar las 5 preguntas correctamente
