const usuario = localStorage.getItem('user');
const datostorage = JSON.parse(localStorage.getItem('datos'));

//////informacion
/////////////////////////////
///obtener objetos de preguntas y de respuestas
const categorias = [
  {idcategoria: 1, nombrecategoria:'muy facil', valorcategoria: 5},
  {idcategoria: 2, nombrecategoria:'facil', valorcategoria: 10},
  {idcategoria: 3, nombrecategoria:'intermedia', valorcategoria: 15},
  {idcategoria: 4, nombrecategoria:'dificil', valorcategoria: 20},
  {idcategoria: 5, nombrecategoria:'muy dificil', valorcategoria: 25},
]

var preguntas = [
{idpregunta: 1, pregunta:' ¿Cuál es el animal nacional de Australia?', idcategoria: 1, alt: 'australia', url:'https://www.esl-idiomas.com/sites/default/files/styles/hero_banner_mobile/public/country/esl-australia-language-stay-hero.jpg?itok=VhTZThXQ'},
{idpregunta: 2, pregunta:' ¿Cuántos días le toma a la tierra dar una vuelta a la órbita del sol?', idcategoria: 1, alt: 'translacion terrestre', url:'https://concepto.de/wp-content/uploads/2019/02/traslacion-de-la-tierra-portada-1.jpg'},
{idpregunta: 3, pregunta:' ¿Cuál es el país más pequeño del mundo?', idcategoria: 2, alt: 'pais más pequeño', url:'https://www.geoenciclopedia.com/wp-content/uploads/2018/10/banderas-paises.jpg'},
{idpregunta: 4, pregunta:' ¿Cuál es la capital de Canadá?', idcategoria: 2, alt: 'canadá', url:'https://www.liberal.com.mx/wp-content/uploads/2021/03/canada-foto-shutterstock.jpg'},
{idpregunta: 5, pregunta:' ¿Cuál es el río más largo del mundo?', idcategoria: 3, alt: 'rio más largo', url:'https://www.hola.com/imagenes/viajes/2014032170330/rios-mundo-dia-mundial-agua/0-932-783/los-rios-mas-importantes-del-planeta-e.jpg'},
{idpregunta: 6, pregunta:' ¿Cuál es la obra más famosa de Edvard Munch?', idcategoria: 5, alt: 'edvard munch', url:'https://loff.it/wp-content/uploads/2017/12/loffit-edvard-munch-pintor-02-600x450.jpeg'},
{idpregunta: 7, pregunta:' ¿Qué artista pinto el techo de la Capilla Sixtina en Roma?', idcategoria: 4, alt: 'capilla sixtina', url:'https://4.bp.blogspot.com/-3-Ip6B7ImYA/WZw01UhwOUI/AAAAAAAAM8c/vrOKSLuNQM0Qilx-KcG3qwh2JUnIEpkwwCLcBGAs/s1600/capilla-sixtina-roma.jpg'},
{idpregunta: 8, pregunta:' ¿Quién inventó la World Wide Web?', idcategoria: 5, alt: 'world wide web', url:'https://definicionde.es/wp-content/uploads/2019/03/definicion-de-world-wide-web.jpg'},
{idpregunta: 9, pregunta:' ¿Cuántas teclas tiene un piano?', idcategoria: 4, alt: 'piano', url:'https://files.soniccdn.com/imagehosting/2a/7639_640.jpg'},
{idpregunta: 10, pregunta:' ¿Qué nave llegó a la luna en 1969?', idcategoria: 3, alt: 'alunizaje', url:'http://c.files.bbci.co.uk/02BA/production/_107889600_package1.jpg'},
{idpregunta: 11, pregunta:' ¿Qué conductor de la Formula 1 ha ganado más campeonatos?', idcategoria: 3, alt: 'formula 1', url:'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2015/12/19/14505420071916.jpg'},
{idpregunta: 12, pregunta:' ¿Cuál fue la primer película de Disney?', idcategoria: 2, alt: 'disney', url:'https://www.elespectador.com/resizer/Y16IQG5kUVi137v9OasVaHdsXdk=/657x0/filters:format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/SNBM454ZBFDSXCR6PS7SW7RAXE.jpg'},
{idpregunta: 13, pregunta:' ¿Cuál fue el primer país en aprobar el sufragio femenino?', idcategoria: 5, alt: 'sufragio femenino', url:'https://www.gaceta.unam.mx/wp-content/uploads/2021/06/210701-aca3-des-f1-sufragio-femenino.jpg'},
{idpregunta: 14, pregunta:' ¿En qué año se disolvió la Unión Soviética?', idcategoria: 4, alt: 'disolucion unión soviética', url:'https://cdni.rt.com/actualidad/public_images/ff6/ff6e8e6a3415a6450f44febe5258eb81_article.jpg'},
{idpregunta: 15, pregunta:' ¿Cuál es la montaña más alta del mundo?', idcategoria: 1, alt: 'montaña más alta del mundo', url:'https://www.aventura-amazonia.com/laravel-filemanager/files/shares/Manaslu.jpg'},
{idpregunta: 16, pregunta:' ¿Cuál es la capital de Indonesia?', idcategoria: 5, alt: 'indonesia', url:'https://static.nationalgeographic.es/files/styles/image_3200/public/3243.600x450.jpg?w=710&h=533'},
{idpregunta: 17, pregunta:' ¿Cuál de los cinco sentidos se desarrolla el primero?', idcategoria: 4, alt: '5 sentidos', url:'http://imgs.globovision.com/4daRlBwzdvnS0KNChs8xc-PrhK4=/847x0/smart/c371a915ee6f452ab18f42727f3400c3'},
{idpregunta: 18, pregunta:' ¿Qué país africano fue fundado en 1847 por esclavos americanos liberados?', idcategoria: 5, alt: 'africa', url:'https://eacnur.org/files/mapa_de_africa_800x782.png'},
{idpregunta: 19, pregunta:' ¿Quién fue la primera voz de Mickey Mouse?', idcategoria: 3, alt: 'mickey mouse', url:'https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2017/11/17/582611.jpg'},
{idpregunta: 20, pregunta:' ¿Qué palabra significa “hijo de” en los apellidos escoceses?', idcategoria: 4, alt: 'escoceses', url:'https://www.juventudrebelde.cu/thumbs/425x/crc/images/medias/2014/09/40346-fotografia-g.jpg'},
{idpregunta: 21, pregunta:' ¿En qué país se encuentra el pico Aconcagua?', idcategoria: 3, alt: 'aconcagua', url:'https://media-cdn.tripadvisor.com/media/photo-s/14/68/80/e1/aconcagua.jpg'},
{idpregunta: 22, pregunta:' ¿Cuántos jugadores tiene un equipo de voleibol?', idcategoria: 2, alt: 'volleyball', url:'https://conceptodefinicion.de/wp-content/uploads/2021/11/voleibol_1.jpg'},
{idpregunta: 23, pregunta:' ¿Qué país está entre Perú y Colombia?', idcategoria: 1, alt: 'suramerica', url:'https://www.directfutbol.com/wp-content/uploads/2020/07/Mapa_Sudamerica_10paises-453x480.jpg'},
{idpregunta: 24, pregunta:' ¿Quién fue el primer presidente de Estados Unidos?', idcategoria: 2, alt: 'presidentes EE.UU', url:'https://ichef.bbci.co.uk/news/640/cpsprodpb/11EE0/production/_92204437_fptppp.jpg'},
{idpregunta: 25, pregunta:' ¿Quién dijo: “Hitler me ha copiado el bigote”?', idcategoria: 1, alt: 'el dictador', url:'https://www.efeeme.com/wp-content/uploads/el-gran-dictador-06-05-12-a.jpg'},

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
{idrespuesta: 61, respuesta:'Jakarta', idpregunta: 16, correcta: true},
{idrespuesta: 62, respuesta:'Seúl', idpregunta: 16, correcta: false},
{idrespuesta: 63, respuesta:'Katmandú', idpregunta: 16, correcta: false},
{idrespuesta: 64, respuesta:'Myanmar', idpregunta: 16, correcta: false},
{idrespuesta: 65, respuesta:'Olfato', idpregunta: 17, correcta: true},
{idrespuesta: 66, respuesta:'Gusto', idpregunta: 17, correcta: false},
{idrespuesta: 67, respuesta:'Tacto', idpregunta: 17, correcta: false},
{idrespuesta: 68, respuesta:'Oído', idpregunta: 17, correcta: false},
{idrespuesta: 69, respuesta:'Liberia', idpregunta: 18, correcta: true},
{idrespuesta: 70, respuesta:'Guinea', idpregunta: 18, correcta: false},
{idrespuesta: 71, respuesta:'Somalia', idpregunta: 18, correcta: false},
{idrespuesta: 72, respuesta:'Chad', idpregunta: 18, correcta: false},
{idrespuesta: 73, respuesta:'Walt Disney', idpregunta: 19, correcta: true},
{idrespuesta: 74, respuesta:'J.R.R. Tolkien', idpregunta: 19, correcta: false},
{idrespuesta: 75, respuesta:'Philip K. Dick ', idpregunta: 19, correcta: false},
{idrespuesta: 76, respuesta:'Frederic Skinner', idpregunta: 19, correcta: false},
{idrespuesta: 77, respuesta:'Mac', idpregunta: 20, correcta: true},
{idrespuesta: 78, respuesta:'Son', idpregunta: 20, correcta: false},
{idrespuesta: 79, respuesta:'Ez', idpregunta: 20, correcta: false},
{idrespuesta: 80, respuesta:'Sonen', idpregunta: 20, correcta: false},
{idrespuesta: 81, respuesta:'Argentina', idpregunta: 21, correcta: true},
{idrespuesta: 82, respuesta:'Chile', idpregunta: 21, correcta: false},
{idrespuesta: 83, respuesta:'Bolivia', idpregunta: 21, correcta: false},
{idrespuesta: 84, respuesta:'Perú', idpregunta: 21, correcta: false},
{idrespuesta: 85, respuesta:'Seis', idpregunta: 22, correcta: true},
{idrespuesta: 86, respuesta:'Cinco', idpregunta: 22, correcta: false},
{idrespuesta: 87, respuesta:'Siete', idpregunta: 22, correcta: false},
{idrespuesta: 88, respuesta:'Cuatro', idpregunta: 22, correcta: false},
{idrespuesta: 89, respuesta:'Ecuador', idpregunta: 23, correcta: true},
{idrespuesta: 90, respuesta:'Paraguay', idpregunta: 23, correcta: false},
{idrespuesta: 91, respuesta:'Brasil', idpregunta: 23, correcta: false},
{idrespuesta: 92, respuesta:'Venezuela', idpregunta: 23, correcta: false},
{idrespuesta: 93, respuesta:'George Washington', idpregunta: 24, correcta: true},
{idrespuesta: 94, respuesta:'Abraham Lincoln', idpregunta: 24, correcta: false},
{idrespuesta: 95, respuesta:'Thomas Jefferson', idpregunta: 24, correcta: false},
{idrespuesta: 96, respuesta:'Andrew Jackson', idpregunta: 24, correcta: false},
{idrespuesta: 97, respuesta:'Charlie Chaplin', idpregunta: 25, correcta: true},
{idrespuesta: 98, respuesta:'Millard Fillmore', idpregunta: 25, correcta: false},
{idrespuesta: 99, respuesta:'Alphonso Capone', idpregunta: 25, correcta: false},
{idrespuesta: 100, respuesta:'Chespirito', idpregunta: 25, correcta: false},
]

///////

const titulo = document.querySelector('h1');
const btnRetiro = document.querySelector('#btnretiro');
const btnSalir = document.querySelector('#btnsalir');

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

var preguntaactual;
var preguntascategoria = preguntas.filter(pr => pr.idcategoria == r);
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
        html: `El juego terminará con el siguiente acumulado: <br>
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
            guardaDatos();
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

/////FUNCION PARA GUARDAR DATOS
function guardaDatos(){
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
    ////redireccionar al page puntajes
    localStorage.removeItem('user');
    window.location="./puntajes.html";
}

//////////FUNCION AL CARGAR Y AL CAMBIAR PREGUNTA
function cargarPregunta(){
  ban = true;
  // sndtime.play();
  // sndtime.loop=true; //probar esto con un sonido corto
  ////volver clases preseleccion
  btn1.setAttribute('class', "btn btn-outline-secondary");
  btn2.setAttribute('class', "btn btn-outline-secondary");
  btn3.setAttribute('class', "btn btn-outline-secondary");
  btn4.setAttribute('class', "btn btn-outline-secondary");
  ////habilitar los botones de respuestas
  btn1.removeAttribute('value');
  btn2.removeAttribute('value');
  btn3.removeAttribute('value');
  btn4.removeAttribute('value');

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

  var preguntastemp = preguntascategoria.filter(pr => pr.idpregunta != idpreguntaanterior);
  preguntascategoria = preguntastemp;
  ordenAleatorio(preguntastemp);

  ///////* escoger una pregunta dependiendo la ronda (1,2,3,4,5)
  // var preguntaactual = preguntastemp.find(pr => pr.idcategoria == r);
  preguntaactual = preguntastemp[0];

  //////filtrar respuestas de esa pregunta
  opcionesrespuestas = respuestas.filter(re => re.idpregunta == preguntaactual.idpregunta);
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

  ////* RESPUESTAS- button id = res1 -- res4, textContent = respuestas.respuesta
  btn1.textContent = opcionesrespuestas[0].respuesta;

  btn2.textContent = opcionesrespuestas[1].respuesta;

  btn3.textContent = opcionesrespuestas[2].respuesta;

  btn4.textContent = opcionesrespuestas[3].respuesta;

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
            html: `Avanzas a la ronda <b>${r}</b>`,
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
          Swal.fire({
            title: `Lo lograste! ${user}`,
            text: 'Respondiste todas las preguntas correctamente.',
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
            guardaDatos();
          },5000);
        }else{
          ////mostrar la ronda en pantalla
          ron.innerHTML = r;
          acum.innerHTML = acumulated;
          numeropregunta.innerHTML = cp;
        }
      }else{
        if(acumulated > 0){
          guardaAcumulado();
        }
        btnRetiro.setAttribute('hidden', '');
        btnSalir.removeAttribute('hidden');
        Swal.fire({
          title: 'Revancha?',
          showDenyButton: true,
          imageUrl: 'https://media.giphy.com/media/gV0qVmjmLr4k/giphy.gif',
          imageWidth: 400,
          imageHeight: 200,
          confirmButtonText: 'Si, revancha',
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