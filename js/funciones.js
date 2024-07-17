let preguntas = [
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

///VACIAR PREGUNTAS
function VaciarPreguntas(preguntas){
    for(let i=0;i<preguntas.length;i++){
      preguntas[i].pregunta = '';
    }
    localStorage.setItem('preguntas_vacias', JSON.stringify(preguntas));
  }
  //VaciarPreguntas(preguntas);
  ///FIN VACIAR PREGUNTAS
  
  
  ///EJEMPLO DE CÓMO ORGANIZAR LAS PREGUNTAS Y RESPUESTAS
  let data_=[
    ['¿donde queda el panteon?', 'https://cdn-imgix.headout.com/tour/25846/TOUR-IMAGE/988fbb98-3094-4c48-9ceb-2304d3170418-13486-rome-skip-the-line-tickets-to-pantheon---audioguide-01.jpg?w=1200&h=750&auto=compress%2Cformat&crop=faces&fit=min', 'roma', 'lila', 'paris', 'medellim',1],
    ['Qué unidad es una centésima de metro', 'https://es.123rf.com/photo_91803708_medir-los-iconos-de-precisi%C3%B3n-establecidos-en-estilo-de-dibujos-animados.html', 'centímetros', 'milímetro', 'litro ', 'decametro',1],
    ['¿Cuánto es 22+5?', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGZctsQyXilhjMq-Me2RdTD84AQDixGqqJEpj1_K6zd-nvzCTx1fiqWA7ze_U6V9l0sI&usqp=CAU', '27', '28', '26', '17',1],
    ['¿Cuáles son las 4 operaciones básicas en matemáticas?', 'https://img.freepik.com/vector-premium/conjunto-simbolos-operaciones-matematicas_651766-192.jpg', '-, +, x, ÷', '-, +, v, ÷', 'x, ÷, v, -', '-, +, x',1],
    ['¿Cuales son numeros pares?', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_0AFPKy8W8W_Ol2Ey1iW2j_n5UL-zioUuvvLr8xwv-H5r0uWmNQwKpDLOZrfb3V7jTw&usqp=CAU', '2 y 4', '1 y 5', '3 y 5', '1,3 y 5',1],
    ['¿Con que se miden los objetos?', 'https://img.freepik.com/vector-gratis/diseno-lapiz-escribiendo_1095-187.jpg?size=626&ext=jpg&ga=GA1.2.1217159623.1679674483&semt=sph', 'regla', 'termometro', 'peso', 'transportador',1],
    ['¿Cuales son numeros impares?', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_0AFPKy8W8W_Ol2Ey1iW2j_n5UL-zioUuvvLr8xwv-H5r0uWmNQwKpDLOZrfb3V7jTw&usqp=CAU', '1,3 y 5', '1 y 2', '2 y 4', '1,3 y 5',1],
    ['¿Qué es un polinomio?', 'https://economipedia.com/wp-content/uploads/hexagono-regular_1.png', 'una figura geométrica plana', 'una figura 3D', 'un prisma', 'una línea',1],
    ['cuantos gramos equivalen a un kilogramo?', 'https://es.calcuworld.com/wp-content/uploads/sites/2/2019/02/como-pasar-de-gramos-a-kilos.jpg', '1000g', '350g', '100g', '500g',1],
    ['Cuál es el. resultado de multiplicar 7x9', 'https://i.ytimg.com/vi/YnqmXU7PBwQ/mqdefault.jpg', '63', '75', '52', '60',1],
    ['Cuántos minutos tiene una hora', 'https://es.calcuworld.com/wp-content/uploads/sites/2/2018/03/saber-minutos-dia.jpg', '60minutos', '25minutos', '45minutos', '80minutos',1],
    ['cuánto es 12 - 7', 'https://previews.123rf.com/images/zamollxis/zamollxis1802/zamollxis180202056/96626419-n%C3%BAmero-12-aislado-sobre-fondo-blanco.jpg', '5', '7', '8', '3',1],
    ['¿Cuánto es 2x2?', '', '4', '2', '8', '6',1],
    ['¿Cuántas veces es necesario multiplicar 5 para obtener 25?', '', '5', '3', '7', '10',1],
    ['Sí compras un objeto en 20$ y lo revendes en 30$ ¿Cuál fue tú ganancia?', '', '10', '5', '3', '9',1],
    ['Luis tiene el doble de edad que Juan y Juan tiene 7 años ¿Qué edad tiene Luis?', '', '14 años ', '8 años ', '12 años ', '10 años ',1],
    ['Cuánto es 2 veces 8? ', '', '16', '10', '18', '6',1],
    ['¿Cuál es el resultado de la operación 5+8?', '', '13', '10', '15', '18',1],
    ['¿Qué significa el simbolo /?', '', 'División', 'Multiplicación', 'Suma', 'Resta',1],
    ['¿Cuál figura tiene siempre 4 lados iguales?', '', 'Cuadrado', 'Rombo', 'Paralelogramo', 'Trapecio',1],
    ['¿A qué rama de las matemáticas aplica la Moda?', '', 'Estadística', 'Geometría', 'Algebra', 'Cálculo',1],
    ['¿Cual de los siguientes nos ayuda a encontrar direcciones?', '', 'Plano Cartesiano', 'Tabla de Frecuencia', 'Tabla de Verdad', 'Ecuación Algebraica',1],
    ['Si María tiene 8 años y Juan es 2 años mayor, ¿Cuantos años tiene Juan?', '', '10', '8', '16', '6',1],
    ['Caminando al final de la tarde, una señora contó 20 casas en una calle a su derecha. En el regreso, contó 20 casas a su izquierda. ¿Cuántas casas vio en total?', '', '20', '40', '10', '30',1],
    ['Hay un pato entre dos patos, un pato detrás de un pato y un pato delante de otro pato. ¿De cuántos patos estamos hablando?', '', '3 patos', '5 patos', '6 patos', '7 patos',1],
    ['¿Qué nombre se le da al tramo de un vértice a otro en un poligono?', '', 'Arista', 'Base', 'Altura', 'Perímetro',1],
    ['Cuál es el color del cielo en un día despejado? ', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmRPj0FMGYAAoX528xawLd_iha5-hJ3vnChbQGweGJuJRVPwo8Bn3UWX41ReEbtxialDI&usqp=CAU', 'Azul', 'Verde', 'Gris', 'Rojo',1],
    ['Qué animal es conocido comon el mejor amigo del hombre ? ', 'https://previews.123rf.com/images/sararoom/sararoom1411/sararoom141100026/34079330-ilustraci%C3%B3n-vectorial-de-dibujos-animados-animales.jpg', 'Perro', 'Gato', 'Vaca', 'Loro',1],
    ['Qué parte del cuerpo humano se utiliza para saborear los alimentos ?', 'https://static.tuasaude.com/media/article/fl/yw/organos-del-cuerpo-humano_62365_l.jpg', 'Lengua', 'Ojos', 'Oidos', 'Nariz',1],
    ['Cuál es la capital de Francia?', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRwmfT19F4bQtrC_vMdxFYx_EGjV7vfHCY1FFjRQm8Pio-X-1YnvlLa7Xfd95f0XTuf_I&usqp=CAU', 'Paris', 'Madrid', 'Barcelona', 'Londres',1],
    ['Cómo se llama la primera estación del año?', 'https://i.ytimg.com/vi/TFVkSg6Gs5Y/maxresdefault.jpg', 'Primavera', 'Otoño', 'Invierno', 'Verano',1],
    ['Pepe tiene 500 pesos pero gasta 178 cuánto le que dan?', '', '322', '489', '600', '67',1],
    ['cuánto es la raíz cuadrada de 1900', '', '44', '6', '26', '36',1],
    ['cuál es la capital del mundo?', '', 'new york', 'Barcelona ', 'califonia', 'caracas',1],
    ['cuál es el país más pequeño?', '', 'ciudad del Vaticano ', 'monaco', 'república de chipre', 'congo',1],
    ['cuál es la moneda mundial?', '', 'dolar', 'yen', 'rulos', 'euro',1],
    ['¿Qué unidad es una centésima de metro?', 'https://es.123rf.com/photo_91803708_medir-los-iconos-de-precisi%C3%B3n-establecidos-en-estilo-de-dibujos-animados.html', 'centímetros', 'milímetro', 'litro ', 'decametro',2],
    ['¿Cuántos grados hay en un ángulo recto?', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-hryEGut4FhoeSbVO_RQOBQdpjxCcmEjsjQ&usqp=CAU', '90', '180', '45', '270',2],
    ['¿Donde queda el panteon?', 'https://cdn-imgix.headout.com/tour/25846/TOUR-IMAGE/988fbb98-3094-4c48-9ceb-2304d3170418-13486-rome-skip-the-line-tickets-to-pantheon---audioguide-01.jpg?w=1200&h=750&auto=compress%2Cformat&crop=faces&fit=min', 'roma', 'lila', 'paris', 'medellin',2],
    ['¿Cuáles son los 4 puntos cardinales?', 'https://s1.significados.com/foto/compass-152124-960-720_bg.png', 'Norte, Sur, Este, Oeste', 'Nevada, Oslo, Toronto', 'N', '',2],
    ['¿cuantos lados tiene un dodecágono?', '', '12', '10', '9', '11',2],
    ['¿Cuántos segundos hay en una hora?', 'https://previews.123rf.com/images/martialred/martialred1512/martialred151200058/49796813-el-cron%C3%B3metro-icono-plana-para-aplicaciones-y-sitios-web.jpg', '3600', '1000', '200', '360',2],
    [' Cuántos meses tiene un trimestre', 'https://es.calcuworld.com/wp-content/uploads/sites/2/2018/04/meses-en-un-semestre.jpg', '3meses', '4meses', '5meses', '7meses',2],
    ['Cómo se llama el polígono de siete lados', 'https://comosellama.net/wp-content/uploads/2015/11/Como-se-llama-un-poligono-de-siete-lados.jpg', 'Heptágono', 'hexagono', 'septagono', 'pentagono',2],
    ['cuánto es 6x8 menos cuatro', 'https://assets.piliapp.com/s3pxy/actual-size/photo-6x8/default-front.jpg', '44', '35', '50', '54',2],
    ['¿Cuánto es el triple de 25?', 'https://www.mundoprimaria.com/wp-content/uploads/2021/10/el-doble-y-el-triple-en-primaria-para-ninos.jpg', '75', '65', '80', '90',2],
    ['Sí tomas 2 vasos de agua cada 4 horas durante el día ¿Cuántos vasos de agua tomarás al día? ', '', '10 vasos de agua ', '8 vasos de agua ', '7 vasos de agua ', '4 vasos de agua ',2],
    ['Sí tienes un cuadrado de lados de 3cm de longitud ¿Cuál es su área?', '', '9 cm²', '9cm', '6cm²', '10cm²',2],
    ['¿Cuál de los siguientes números son múltiplos de 10?', '', '10,20,30', '15,30,45', '5,3,7', '2,4,6',2],
    ['¿Cuál de estos números NO pertenecen a los números impares?', '', '300', '9', '3', '7',2],
    ['¿Quién descubrió el teorema de Pitágoras?', '', 'Pitágoras de Samos ', 'Albert Einstein ', 'Arquímedes ', 'John Wallis ',2],
    ['Si un triángulo tiene un ángulo recto (90 grados) ¿Cómo se llama?', '', 'triangulo rectángulo', 'triangulo agudo', 'triangulo obtuso', 'triangulo equilatero',2],
    ['¿A cuanto equivale 55%?', '', '0,55', '5,5', '55', '100/55',2],
    ['¿Que cantidad va antes del segundo?', '', 'Decimas', 'Milesimas', 'Centesimas', 'Minuto',2],
    ['¿Que valor es mayor?', '', '0,1', '-0.11', '0.01', '0.011',2],
    ['¿Que medida representa el volúmen?', '', 'm^3', 'm^2', 'mv', 's',2],
    ['¿Cual es único número par?', '', '2', '10', '4', '8',2],
    ['Una mujer está a punto de tener un bebé. Si es un niño, sólo le faltará un hijo para que el número de niños sea igual al número de niñas. Sin embargo, si el bebé es una niña, el número de niñas de la mujer será el doble del número de niños. ¿Cuántos hijos tiene y cuál es su sexo?', '', '3 niños y 5 niñas', '2 niños y 4 niñas', '2 niños y 3 niñas', '1 niño y 3 niñas',2],
    ['En el bus en el que entré había 15 pasajeros. Poco después, 4 personas bajaron y dos entraron. ¿Cuántas personas hay en el bus ahora?', '', '14 personas', '13 personas', '17 personas', '15 personas',2],
    ['Mi abuelo tiene 5 hijos y cada hijo tiene 3 hijos. ¿Cuántos primos tengo?', '', '12 primos', '14 primos', '15 primos', '10 primos',2],
    ['Cuando tenía 8 años, mi hermana tenía la mitad de mi edad. Ahora que tengo 50 años, ¿cuántos años tiene mi hermana?', '', '46 años', '25 años', '42 años', '34 años',2],
    ['Cómo se llama la línea imaginaria que divide la Tierra en hemisferio norte y hemisferio sur?', '', 'Linea del Ecuador', 'Polo sur', 'Polo Norte', 'Trópico de Capricornio',2],
    ['Cuál es el océano más grande del mundo?', '', 'Oceano Pacifico', 'Oceano Indico', 'Oceano Antartico', 'Oceano Atlantico',2],
    ['Quién es el actual presidente de la república de Colombia?', '', 'Gustavo Petro', 'Juan Manuel Santo', 'Ivan Duque ', 'Jorge Eliecer Gaitan',2],
    ['cuanto es 30-15?', '', '15', '14', '12', '16',2],
    ['Quien pinto la ultima cena ?', '', 'Leonardo Da Vinci', 'Miguel Angel', 'Sandro Botticelli', 'Donato d Angelo Bramante',2],
    ['cuál es el país más poblado actualmente?', '', 'india', 'china', 'japon', 'estados unidos ',2],
    ['cuál país es el mayor exportador de café?', '', 'Etiopía ', 'Colombia ', 'venezuela', 'malaga',2],
    ['cuál es el país con más petróleo en el mundo?', '', 'venezuela ', 'china', 'estados unidos', 'cordoba',2],
    ['de dónde era Hitler?', '', 'alemania', 'rusia', 'ucrania', 'chipre',2],
    ['dónde nació Diomedes Díaz?', '', 'de la junta', 'San juan', 'bolivia', 'venezuela ',2],
    ['¿Cuál es el valor de PI?', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.quora.com%2FCu%25C3%25A1l-es-el-valor-exacto-de-pi&psig=AOvVaw3IK0rKh1b3_OiLwJY1wl6C&ust=1693008819244000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKigl7zD9oADFQAAAAAdAAAAABAE', 'Pi= 3.1416', 'PI=3.1234', 'PI=2.0983', 'PI=3.1232',3],
    ['Cómo se llama el padre de las matemáticas', 'https://www.bbvaopenmind.com/wp-content/uploads/2018/09/DMbzjrXX4AAkcKP.jpeg', ' Arquímedes', 'Néstor', 'Galileo ', 'isacc Newton',3],
    ['¿Cuál es la raíz cuadrada de 81? ', 'https://i.ytimg.com/vi/1t-OBEbj3Ms/hqdefault.jpg', '9', '5', '12', '7',3],
    ['Cuánto es el doble de 25?', 'https://aprendeencasa.sep.gob.mx/multimedia/B64images/202206/B64-IMG-C9gTwYdyUJ-NR5AJXmJSK.png', '50', '40', '55', '60',3],
    ['¿Cómo se llama también el perímetro de un círculo?', 'https://www.areasyvolumenes.net/wp-content/uploads/2021/09/perimetro-circulo.png', 'La circunferencia', 'rais ', 'perimetro', 'diagonal',3],
    ['¿Cuántos milímetros hay en un litro?', 'https://chapaesaflor.pe/infoblog/wp-content/uploads/2023/06/nonolipavumavira.jpg', '1000 milímetros ', '50 milimetros', '100 milimetros', '5000 milimetros',3],
    ['¿Qué día es el día de Pi?', 'https://www.segurostoledo.es/img/0220731958101/numero-pi.jpg', '14 de marzo', '10 de noviembre', '4 de julio', '24 de disiembre',3],
    ['Si un coche recorre 240 km en 4 horas, ¿Cuál es su velocidad promedio en km/h?', '', '60', '40', '80', '140',3],
    ['Si un ángulo agudo de un triángulo mide 60 grados, ¿Cuánto miden los otros dos ángulos?', '', '30 y 90 grados', '60 grados ambos ', '45 grados ambos ', '75 y 45 cada uno ',3],
    ['¿Cuál es el valor de x en la ecuación 2x + 5 = 15?,', '', '10', '8', '15', '5',3],
    ['Quién es considerado el Padre de las Matemáticas?', '', 'Arquímedes ', 'Platon ', 'Aristóteles ', 'Isaac Newton ',3],
    ['¿Cuánto es 35x7-25?', '', '220', '245', '290', '260',3],
    ['¿Cuánto es 5+3 (7-2)?', '', '40', '35', '20', '18',3],
    ['Busca el ángulo que falta', 'https://quizizz.com/media/resource/gs/quizizz-media/questions/L2FwcGhvc3RpbmdfcHJvZC9ibG9icy9BRW5CMlVwMHh4TXlLNHVoR01ibC13dFA2VW5XU2hwYkZ6REZxbzBWZjFYS3dQT1ZrN21FeE51RjUxaU9UUS00a0Q3TEdUQUgyT1pLM3VObGFmUVdiTmpfMXlQZl9EN3cyTzdSYnNLX1BkaGdUTVlEcGdYenhLNC5HRkU0c0djYko3Y0c1dUp5?w=900&h=900', '70', '80', '90', '60',3],
    ['¿Que valor tiene Y en 5x+2=17?', '', '3', '2', '4', '1',3],
    ['¿Cuál valor representa el promedio?', '', 'Media', 'Mediana', 'Moda', 'Las tres son necesarias',3],
    ['¿Como se llama también el perímetro de un circulo?', '', 'Circunferencia', 'Lado ', 'Arista', 'Diámetro',3],
    ['¿Cual es el numero primo que le sigue al 7?', '', '11', '9', '13', '5',3],
    ['¿Cual es el numero que falta para completar la secuencia?', 'https://album.mediaset.es/eimg/2019/03/06/PA6yYEsN4l2pgXYPZJCGp1.jpg', '87', '89', '79', '48',3],
    ['Un camión puede cargar 50 sacos de arena o 400 ladrillos. Si se colocaron 32 sacos de arena en el camión, ¿cuántos ladrillos puede seguir cargando?', '', '144', '14', '188', '18',3],
    ['¿En cuál alternativa hay tres ochos, tres cero?', '', '88830', '3830', '38000', '888000',3],
    ['Quién fue el primer presidente de Brasil?', 'https://a.cdn-hotels.com/gdcs/production176/d1110/a2bf1ba0-fe12-11e8-a178-0242ac11000d.jpg', 'Manoel Deodoro da Fonseca ', 'Getúlio Vargas', 'luiz Inácio Lula da Silva', 'Dilma Rousseff',3],
    ['Qué científico desarrolló la teoría de la relatividad?', 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2023/03/teorias-einstein-2989094.jpg?tf=3840x', 'Albert Einstein', 'Aristóteles', 'Euclides', 'Tales de Mileto',3],
    ['Qué instrumento se utiliza para medir la presión atmosférica?', 'https://services.meteored.com/img/article/alta-presion-de-bloqueo-que-significa-y-cuales-son-sus-consecuencias-1652995073963_1280.jpeg', 'El barómetro', 'Anemógrafo', 'Anemómetro', 'Heliofanógrafo',3],
    ['En qué año tuvo lugar el primer viaje del ser humano a la Luna?', 'https://s.france24.com/media/display/df118e98-2c90-11ed-b40a-005056a97e36/w:1280/p:4x3/luna.jpg', '1969', '1967', '1962', '1974',3],
    ['Cuál es el elemento químico más abundante en la Tierra?', 'https://www.noticiasensalud.com/wp-content/uploads/2020/07/Cuanto-oxigeno-necesita-el-cerebro-1000x600.jpg', 'El Oxigeno', 'El Hierro', 'El Hidrogeno', 'El Carbono',3],
    ['quien era Picasso?', '', 'un pintor', 'un guarda de seguridad', 'un locutor', 'un cantante',3],
    ['cuál es la mayor potencia del mundo ', '', 'estados unidos ', 'colombia', 'rusia', 'china',3],
    ['cuál es el país con más biodiversidad?', '', 'brazil', 'Colombia ', 'peru', 'china',3],
    ['cuál es el continente más grande del mundo?', '', 'asia', 'oceania', 'africa', 'europa',3],
    ['si María tiene 4500 pesos pero compra 1700 en dulces cuánto le queda?', '', '2800', '3000', '2700', '9000',3],
    ['¿Qué palabra matemática significa el tamaño relativo de algo?', 'https://i0.wp.com/www.lucaedu.com/wp-content/uploads/2022/05/que-es-el-valor-posicional-de-un-numero.jpg?resize=1024%2C683&ssl=1', 'escala', 'metro', 'decametro', 'medida',4],
    ['¿Cuál era el nombre del sistema de medición antes de que fuéramos métricos', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Watt_James_von_Breda.jpg/180px-Watt_James_von_Breda.jpg', 'imperial', 'estatal', 'aristotalico', 'metro',4],
    ['¿Qué dos letras simbolizan un milímetro?', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Regla_horizontal_10.svg/625px-Regla_horizontal_10.svg.png', 'Mm', 'Kg', 'L', 'g',4],
    ['¿Pitágoras desarrolló una teoría sobre qué formas?', 'https://estaticos-cdn.prensaiberica.es/clip/5ece5780-317f-4f84-9a96-167ce29bff37_16-9-discover-aspect-ratio_default_0.jpg', 'triangulo ', 'circulo', 'cuadrado', 'rectangulo',4],
    ['¿Cuántas aristas tiene un octaedro?', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Octahedron.svg/1200px-Octahedron.svg.png', '12', '24', '6', '31',4],
    ['¿Qué matemático griego del siglo III escribió Elementos de geometría?', '', 'Euclides ', 'Arquímedes ', 'Pitágoras ', 'Ninguno de los anteriores ',4],
    ['¿Cómo se escribe el número doscientos cinco mil trescientos sesenta y ocho?', '', '205368', '25000368', '25368', '2053680',4],
    ['Si en una carrera vas tres puestos por delante del vigésimo segundo, ¿en qué puesto vas?', '', 'Décimonoveno ', 'Noveno ', 'Decimotercero', 'Décimo ',4],
    ['Para calcular cuánto es un tercio de 3996, ¿Qué tienes que hacer?', '', 'Dividir entre 3', 'Simplificar 3 cifras ', 'Multiplicar por 3', 'Restar 3 cifras ',4],
    ['Expresa 7 kg y 670 g en gramos.', '', '7670', '767', '70670', '7,67',4],
    ['Si un ángulo agudo mide 60 grados, ¿Cuánto mide su complemento?', '', '120 grados', '90 grados', '30 grados', '45 grados',4],
    ['Si un rectángulo regular tiene un perímetro de 18 unidades y uno de sus lados mide 4 unidades, ¿Cuánto mide el lado opuesto?', '', '4 unidades ', '3 unidades', '14 unidades', '16 unidades',4],
    ['¿Cuál se aproxima más al resultado de v89?', '', '9', '8', '10', '5',4],
    ['Si un producto cuesta $500 y su precio se incrementa en un 20%,¿Cuánto costará ahora?', '', '', '', '', '',4],
    ['¿Quien creó este famoso teorema? (a·h = b·c)', 'flickr.com/photos/arturomandly/5942777561', 'Tales', 'Pitágoras', 'Euler', 'Bayes',4],
    ['En un triángulo rectángulo, si un cateto mide 6cm y la hipotenusa mide 10cm, ¿Cuánto mide el otro cateto?', '', '8', '3', '4', '5',4],
    ['Si 3x-2=7, ¿Qué valor tiene x?', '', '3', '2', '9', '1',4],
    ['¿Cual es la fórmula para hallar el área de un trapecio?', '', '(B+b)h/2', '(B-b)h/2', 'B+b(h/2)', '(B*b+h)/2',4],
    ['¿Cual es el resultado de 3(v81)?', '', '27', '3', '9', '18',4],
    ['¿Qué obtienes al calcular 3+5*2+7(12-3)?', '', '76', '32', '207', '91',4],
    ['Quién inventó el signo de igual (=) ?', 'https://upload.wikimedia.org/wikipedia/commons/9/93/Equals_sign_in_mathematics.jpg', 'Roberto Recorde', 'Carl Friedrich Gauss', 'René Descartes', 'Tales de Mileto',4],
    ['Quiénes fueron las primeras personas en hacer uso de los números negativos?', 'https://rea.ceibal.edu.uy/storage/app/uploads/public/69s/58r/4op/thumb_164_300_300_0_0_crop.gif', 'Los chinos', 'Los rusos', 'Los ingleses', 'Los japones',4],
    ['Quién es el padre de las matemáticas?', 'https://apolonio.es/wp-content/uploads/2023/06/quien-es-el-padre-de-las-matematicas.jpg', 'Arquímedes', 'Leonardo de Pisa', 'Isaac Newton', 'Gottfried Wilhelm Leibniz',4],
    ['en que año Aryabhatta descubrio el cero (0) ?', 'https://img.freepik.com/vector-premium/3d-numero-0-cero-numero-signo-color-rojo_165488-5562.jpg', 'Aryabhatta, 458 d.C.', 'Aryabhatta, 453 d.C.', 'Aryabhatta, 459 d.C.', 'Aryabhatta, 452 d.C.',4],
    ['Valor de cos 360°?', 'tbn0.gstatic.com/images?q=tbn:ANd9GcTjUUJw3p4wNxn6AwTAO9ECDpnN0fM5jvRMGQ&usqp=CAU', '1', '-1', '0,1', '-0,1',4],
    ['¿Que nombre reciben los numeros que tienen un numero infinito de decimales repetidos?', 'https://3.bp.blogspot.com/-fEevMZCpEh0/WNAMv2Hc3uI/AAAAAAAAChk/2wz2jTd5WnA9ErqTAiKCDxUeuMiTEjpQQCLcB/s1600/period_49.png', 'Periodicos', 'Sucesivos', 'Irracionales', 'Imaginarios',5],
    ['Cinco personas se reunieron para comer y cada una abrazó a las demás una vez. ¿Cuántos abrazos se dieron?', '', '10 Abrazos ', '25 abrazos ', '5 abrazos ', 'únicamente un abrazo ',5],
    ['Juan está preocupado porque solo ha vendido 2/8 del total de pizzas que vende diariamente,  ¿Cuál es la fracción de pizza que le hace falta vender?', '', '8/6/2023', '8/2/2023', '8/8/2023', 'Ya vendió toda',5],
    ['Dado el angulo X, ¿Cuál de las siguientes ecuaciones es cierta?', '', 'tan(X)=1/cot(X)', 'sen(0)=cos(90°-X)', 'csc(-X)=-csc(X)', 'cos^2(X)+sen^2(X)=1',5],
    ['¿Cuál Operacion Trigonométrica usa el angulo opuesto y el adyascente?', '', 'Tangente', 'Coseno', 'Seno', 'Secante',5],
    ['El Seno de ? es:', 'https://quizizz.com/media/resource/gs/quizizz-media/questions/L2FwcGhvc3RpbmdfcHJvZC9ibG9icy9BRW5CMlVvckJraUVzSmFOeVpCcXRyRUxDeFZ2bWI1YVloSHdyWmNuMkhwdXFYVk9mNGMyRkF3bHUzc1hiQ1REYWdWR2tqMGxFcmRGQVR5Q0I1SWFaN3BpOHhfQ3VLOVFTam1mSDZ2Ympjd0hheExoX2gzOWNKUS41bzdSdU9IUzdTNnlNaVBs?w=900&h=900', '', '', '', '',5],
    ['¿Cuál es la ecuación de una recta?', '', 'y=ax+b', 'y=ab + x', 'y=x/ab', 'y=ax/bx',5],
    ['¿Quíen creó el sistema numerico arábigo (el que usamos hoy en día?', '', 'Leonardo Pisano', 'Alan Turing', 'Euclides', 'Andrew Wiles',5],
    ['¿Cual es la fórmula para hallar el volumen de una esféra?', '', '4/3pr³', '3/4pr³', '4/5pr³', '3/2pr³',5],
    ['¿Como se expresa el número 598,2568 en notación científica?', '', '5982568*10^-4', '5982568*10^4', '5982568*10^-3', '5982568*10^3',5],
    ['En una reserva de agua se llenan 15 1/3 de tanques por minuto. Si se sabe que cada tanque se llena hasta 2/3 de su capacidad, ¿Cuantos tanques se llenan por minuto?', '', '23', '15', '12', '11',5],
    ['Quién inventó el cálculo infinitesimal independientemente de Newton y creó el sistema binario?', 'https://uvn-brightspot.s3.amazonaws.com/assets/vixes/btg/curiosidades.batanga.com/files/Newton-vs-Leibniz-la-disputa-por-el-calculo-infinitesimal-2.jpg', 'Gottfried Leibniz', 'Hermann Grassmann', 'Johanes Kepler', 'Enrique Weber',5],
    ['Quién de los siguientes fue un gran matemático y astrónomo?', 'https://www.robolab.in/wp-content/uploads/2017/12/Aryabhatta.jpg', 'Aryabhatta', 'Banabhatta', 'Dhanvantari', 'Vetalbatiya',5],
    ['Cuántos pies hay en una braza?', 'https://www.smartick.es/blog/wp-content/uploads/Braza.png', '6', '100', '500', '12',5],
    ['Qué matemático griego del siglo III escribió Elementos de geometría?', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Artgate_Fondazione_Cariplo_-_Cifrondi_Antonio%2C_Euclide.jpg/220px-Artgate_Fondazione_Cariplo_-_Cifrondi_Antonio%2C_Euclide.jpg', 'Euclides', 'Arquímedes', 'Eratóstenes', 'Pitágoras',5],
    ['Cuál es su nombre si un número natural tiene precisamente dos divisores diferentes?', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2DT71GHGjwTRarOemtkFn1fa_p3WxSxooLA&usqp=CAU', 'Número primo', 'Entero', 'Número compuesto', 'Número perfecto',5],
    ]
    
  
  ///categoria aleatoria, pero es mejor indicar la categoria manualmente
  function getRandomInt(max) {
    return Math.floor(Math.random() * max)+1;
  }
  
  ///CREAR PREGUNTAS Y RESPUESTAS
  /*{idpregunta: 1, pregunta:' ¿?', idcategoria: 1, alt: '', url:'https'},
  {idrespuesta: 1, respuesta:'', idpregunta: 1, correcta: true},*/
  function CrearData (data_){
    let questions = [];
    let new_ques = {};
    let id_ques = 1;
    for(let i=0;i<data_.length;i++){
      new_ques = {idpregunta: id_ques, pregunta: data_[i][0], idcategoria: getRandomInt(5), alt: '', url:data_[i][1]};
      questions.push(new_ques);
      id_ques+=1;
    }
    sessionStorage.setItem('preguntas_', JSON.stringify(questions));
  }
  //CrearData(data_);
  //////////

  ///////
  function CrearData_1 (data_){
    let answers = [];
    let new_answ = {};
    let id_ques = 1, id_answ = 1;
    for(let i=0;i<data_.length;i++){
      for(j=1;j<5;j++){
        new_answ = {idrespuesta: id_answ, respuesta:data_[i][j+1], idpregunta: id_ques, correcta: j=1 ? true : false};
        answers.push(new_answ);
        id_answ+=1;
      }
      id_ques+=1;
    }
    sessionStorage.setItem('respuestas_', JSON.stringify(answers));
  }
  //CrearData_1(data_);

  ///FUNCIONA PARA CREAR DATA DE PREGUNTAS Y RESPUESTAS SEPARADAS
  function CrearData_2 (data_){
    let questions = [],answers = [];
    let new_ques = {},new_answ = {};
    let id_ques = 1, id_answ = 1;
    
    for(let i=0;i<data_.length;i++){
      new_ques = {idpregunta: id_ques, pregunta: data_[i][0], idcategoria: data_[i][6], alt: '', url:data_[i][1]};
      questions.push(new_ques);
      for(let j=2; j<=5;j++){
        new_answ = {idrespuesta: id_answ, respuesta:data_[i][j], idpregunta: id_ques, correcta: j==2 ? true : false};
        answers.push(new_answ);
        id_answ+=1;
      }
      id_ques+=1;
    }
    sessionStorage.setItem('preguntas_', JSON.stringify(questions));
    sessionStorage.setItem('respuestas_', JSON.stringify(answers));
  }
  CrearData_2(data_);
  /////////

  function CrearData_3 (data_){
    let answers = [];
    let new_answ = {};
    let id_ques = 1, id_answ = 1;
    for(let i=0;i<data_.length;i++){
        new_answ = {idrespuesta: id_answ, respuesta:data_[i][2], idpregunta: id_ques, correcta: true};
        answers.push(new_answ);
        new_answ = {idrespuesta: id_answ+1, respuesta:data_[i][3], idpregunta: id_ques, correcta: false};
        answers.push(new_answ);
        new_answ = {idrespuesta: id_answ+2, respuesta:data_[i][4], idpregunta: id_ques, correcta: false};
        answers.push(new_answ);
        new_answ = {idrespuesta: id_answ+3, respuesta:data_[i][5], idpregunta: id_ques, correcta: false};
        answers.push(new_answ);
        id_answ+=4;
        id_ques+=1;
    }
    sessionStorage.setItem('respuestas_', JSON.stringify(answers));
  }
  //CrearData_3(data_);

  function CrearData_4 (data_){
    let questions = [],answers = [];
    let new_ques = {},new_answ = {};
    let id_ques = 1, id_answ = 1;
    for(let i=0;i<data_.length;i++){
        ///PREGUNTAS
        new_ques = {idpregunta: id_ques, pregunta: data_[i][0], idcategoria: getRandomInt(5), alt: '', url:data_[i][1]};
        questions.push(new_ques);
        ///RESPUESTAS
        new_answ = {idrespuesta: id_answ, respuesta:data_[i][2], idpregunta: id_ques, correcta: true};
        answers.push(new_answ);
        new_answ = {idrespuesta: id_answ+1, respuesta:data_[i][3], idpregunta: id_ques, correcta: false};
        answers.push(new_answ);
        new_answ = {idrespuesta: id_answ+2, respuesta:data_[i][4], idpregunta: id_ques, correcta: false};
        answers.push(new_answ);
        new_answ = {idrespuesta: id_answ+3, respuesta:data_[i][5], idpregunta: id_ques, correcta: false};
        answers.push(new_answ);
        
        id_answ+=4;
        id_ques+=1;
    }
    sessionStorage.setItem('preguntas_', JSON.stringify(questions));
    sessionStorage.setItem('respuestas_', JSON.stringify(answers));
  }
  //CrearData_4(data_);