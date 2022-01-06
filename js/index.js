
const user = document.querySelector("#user");
const btnComenzar = document.querySelector("#btncomenzar");

document.addEventListener("onload",()=>{
    localStorage.removeItem('user');
})

btnComenzar.addEventListener("click", ()=>{
    if(user.value == ""){
        // alert("Ingrese un usuario para poder iniciar!");
        Swal.fire({
            icon: 'info',
            title: 'Usuario es obligatorio',
            text: 'Escriba un nombre de jugador!',
            showConfirmButton: true,
          })
    }else{
        localStorage.setItem('user',user.value);
        localStorage.setItem('categorias', JSON.stringify(categorias));
        localStorage.setItem('preguntas', JSON.stringify(preguntas));
        localStorage.setItem('respuestas', JSON.stringify(respuestas));
        window.location="preguntas.html";
    }

})

///////////////////////////////////////
///crear objeto de preguntas y de respuestas
const categorias = [
    {idcategoria: 1, nombrecategoria:'muy facil', valorcategoria: 5},
    {idcategoria: 2, nombrecategoria:'facil', valorcategoria: 10},
    {idcategoria: 3, nombrecategoria:'intermedia', valorcategoria: 15},
    {idcategoria: 4, nombrecategoria:'dificil', valorcategoria: 20},
    {idcategoria: 5, nombrecategoria:'muy dificil', valorcategoria: 25},
  ]

const preguntas = [
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
