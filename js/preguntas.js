//import {preguntas, respuestas} from './data.js';  //no funcionó

const preguntas = [
  {
    idpregunta: 1,
    pregunta: "¿donde queda el panteon?",
    idcategoria: 1,
    alt: "",
    url: "https://cdn-imgix.headout.com/tour/25846/TOUR-IMAGE/988fbb98-3094-4c48-9ceb-2304d3170418-13486-rome-skip-the-line-tickets-to-pantheon---audioguide-01.jpg?w=1200&h=750&auto=compress%2Cformat&crop=faces&fit=min",
  },
  {
    idpregunta: 2,
    pregunta: "Qué unidad es una centésima de metro?",
    idcategoria: 1,
    alt: "",
    url: "https://es.123rf.com/photo_91803708_medir-los-iconos-de-precisi%C3%B3n-establecidos-en-estilo-de-dibujos-animados.html",
  },
  {
    idpregunta: 3,
    pregunta: "¿Cuánto es 22+5?",
    idcategoria: 1,
    alt: "",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGZctsQyXilhjMq-Me2RdTD84AQDixGqqJEpj1_K6zd-nvzCTx1fiqWA7ze_U6V9l0sI&usqp=CAU",
  },
  {
    idpregunta: 4,
    pregunta: "¿Cuáles son las 4 operaciones básicas en matemáticas?",
    idcategoria: 1,
    alt: "",
    url: "https://img.freepik.com/vector-premium/conjunto-simbolos-operaciones-matematicas_651766-192.jpg",
  },
  {
    idpregunta: 5,
    pregunta: "¿Cuales son numeros pares?",
    idcategoria: 1,
    alt: "",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_0AFPKy8W8W_Ol2Ey1iW2j_n5UL-zioUuvvLr8xwv-H5r0uWmNQwKpDLOZrfb3V7jTw&usqp=CAU",
  },
  {
    idpregunta: 6,
    pregunta: "¿Con que se miden los objetos?",
    idcategoria: 1,
    alt: "",
    url: "https://img.freepik.com/vector-gratis/diseno-lapiz-escribiendo_1095-187.jpg?size=626&ext=jpg&ga=GA1.2.1217159623.1679674483&semt=sph",
  },
  {
    idpregunta: 7,
    pregunta: "¿Cuales son numeros impares?",
    idcategoria: 1,
    alt: "",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_0AFPKy8W8W_Ol2Ey1iW2j_n5UL-zioUuvvLr8xwv-H5r0uWmNQwKpDLOZrfb3V7jTw&usqp=CAU",
  },
  {
    idpregunta: 8,
    pregunta: "¿Qué es un polinomio?",
    idcategoria: 1,
    alt: "",
    url: "https://economipedia.com/wp-content/uploads/hexagono-regular_1.png",
  },
  {
    idpregunta: 9,
    pregunta: "cuantos gramos equivalen a un kilogramo?",
    idcategoria: 1,
    alt: "",
    url: "https://es.calcuworld.com/wp-content/uploads/sites/2/2019/02/como-pasar-de-gramos-a-kilos.jpg",
  },
  {
    idpregunta: 10,
    pregunta: "Cuál es el. resultado de multiplicar 7x9",
    idcategoria: 1,
    alt: "",
    url: "https://i.ytimg.com/vi/YnqmXU7PBwQ/mqdefault.jpg",
  },
  {
    idpregunta: 11,
    pregunta: "Cuántos minutos tiene una hora",
    idcategoria: 1,
    alt: "",
    url: "https://es.calcuworld.com/wp-content/uploads/sites/2/2018/03/saber-minutos-dia.jpg",
  },
  {
    idpregunta: 12,
    pregunta: "cuánto es 12 - 7",
    idcategoria: 1,
    alt: "",
    url: "https://previews.123rf.com/images/zamollxis/zamollxis1802/zamollxis180202056/96626419-n%C3%BAmero-12-aislado-sobre-fondo-blanco.jpg",
  },
  {
    idpregunta: 13,
    pregunta: "¿Cuánto es 2x2?",
    idcategoria: 1,
    alt: "",
    url: "",
  },
  {
    idpregunta: 14,
    pregunta: "¿Cuántas veces es necesario multiplicar 5 para obtener 25?",
    idcategoria: 1,
    alt: "",
    url: "",
  },
  {
    idpregunta: 15,
    pregunta:
      "Sí compras un objeto en 20$ y lo revendes en 30$ ¿Cuál fue tú ganancia?",
    idcategoria: 1,
    alt: "",
    url: "",
  },
  {
    idpregunta: 16,
    pregunta:
      "Luis tiene el doble de edad que Juan y Juan tiene 7 años ¿Qué edad tiene Luis?",
    idcategoria: 1,
    alt: "",
    url: "",
  },
  {
    idpregunta: 17,
    pregunta: "Cuánto es 2 veces 8? ",
    idcategoria: 1,
    alt: "",
    url: "",
  },
  {
    idpregunta: 18,
    pregunta: "¿Cuál es el resultado de la operación 5+8?",
    idcategoria: 1,
    alt: "",
    url: "",
  },
  {
    idpregunta: 19,
    pregunta: "¿Qué significa el simbolo /?",
    idcategoria: 1,
    alt: "",
    url: "",
  },
  {
    idpregunta: 20,
    pregunta: "¿Cuál figura tiene siempre 4 lados iguales?",
    idcategoria: 1,
    alt: "",
    url: "",
  },
  {
    idpregunta: 21,
    pregunta: "¿A qué rama de las matemáticas aplica la Moda?",
    idcategoria: 1,
    alt: "",
    url: "",
  },
  {
    idpregunta: 22,
    pregunta: "¿Cual de los siguientes nos ayuda a encontrar direcciones?",
    idcategoria: 1,
    alt: "",
    url: "",
  },
  {
    idpregunta: 23,
    pregunta:
      "Si María tiene 8 años y Juan es 2 años mayor, ¿Cuantos años tiene Juan?",
    idcategoria: 1,
    alt: "",
    url: "",
  },
  {
    idpregunta: 24,
    pregunta:
      "Caminando al final de la tarde, una señora contó 20 casas en una calle a su derecha. En el regreso, contó 20 casas a su izquierda. ¿Cuántas casas vio en total?",
    idcategoria: 1,
    alt: "",
    url: "",
  },
  {
    idpregunta: 25,
    pregunta:
      "Hay un pato entre dos patos, un pato detrás de un pato y un pato delante de otro pato. ¿De cuántos patos estamos hablando?",
    idcategoria: 1,
    alt: "",
    url: "",
  },
  {
    idpregunta: 26,
    pregunta:
      "¿Qué nombre se le da al tramo de un vértice a otro en un poligono?",
    idcategoria: 1,
    alt: "",
    url: "",
  },
  {
    idpregunta: 27,
    pregunta: "Cuál es el color del cielo en un día despejado? ",
    idcategoria: 1,
    alt: "",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmRPj0FMGYAAoX528xawLd_iha5-hJ3vnChbQGweGJuJRVPwo8Bn3UWX41ReEbtxialDI&usqp=CAU",
  },
  {
    idpregunta: 28,
    pregunta: "Qué animal es conocido comon el mejor amigo del hombre ? ",
    idcategoria: 1,
    alt: "",
    url: "https://previews.123rf.com/images/sararoom/sararoom1411/sararoom141100026/34079330-ilustraci%C3%B3n-vectorial-de-dibujos-animados-animales.jpg",
  },
  {
    idpregunta: 29,
    pregunta:
      "Qué parte del cuerpo humano se utiliza para saborear los alimentos ?",
    idcategoria: 1,
    alt: "",
    url: "https://static.tuasaude.com/media/article/fl/yw/organos-del-cuerpo-humano_62365_l.jpg",
  },
  {
    idpregunta: 30,
    pregunta: "Cuál es la capital de Francia?",
    idcategoria: 1,
    alt: "",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRwmfT19F4bQtrC_vMdxFYx_EGjV7vfHCY1FFjRQm8Pio-X-1YnvlLa7Xfd95f0XTuf_I&usqp=CAU",
  },
  {
    idpregunta: 31,
    pregunta: "Cómo se llama la primera estación del año?",
    idcategoria: 1,
    alt: "",
    url: "https://i.ytimg.com/vi/TFVkSg6Gs5Y/maxresdefault.jpg",
  },
  {
    idpregunta: 32,
    pregunta: "Pepe tiene 500 pesos pero gasta 178 cuánto le que dan?",
    idcategoria: 1,
    alt: "",
    url: "",
  },
  {
    idpregunta: 33,
    pregunta: "cuánto es la raíz cuadrada de 1900",
    idcategoria: 1,
    alt: "",
    url: "",
  },
  {
    idpregunta: 34,
    pregunta: "cuál es la capital del mundo?",
    idcategoria: 1,
    alt: "",
    url: "",
  },
  {
    idpregunta: 35,
    pregunta: "cuál es el país más pequeño?",
    idcategoria: 1,
    alt: "",
    url: "",
  },
  {
    idpregunta: 36,
    pregunta: "cuál es la moneda mundial?",
    idcategoria: 1,
    alt: "",
    url: "",
  },
  {
    idpregunta: 37,
    pregunta: "¿Qué unidad es una centésima de metro?",
    idcategoria: 2,
    alt: "",
    url: "https://es.123rf.com/photo_91803708_medir-los-iconos-de-precisi%C3%B3n-establecidos-en-estilo-de-dibujos-animados.html",
  },
  {
    idpregunta: 38,
    pregunta: "¿Cuántos grados hay en un ángulo recto?",
    idcategoria: 2,
    alt: "",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-hryEGut4FhoeSbVO_RQOBQdpjxCcmEjsjQ&usqp=CAU",
  },
  {
    idpregunta: 39,
    pregunta: "¿Donde queda el panteon?",
    idcategoria: 2,
    alt: "",
    url: "https://cdn-imgix.headout.com/tour/25846/TOUR-IMAGE/988fbb98-3094-4c48-9ceb-2304d3170418-13486-rome-skip-the-line-tickets-to-pantheon---audioguide-01.jpg?w=1200&h=750&auto=compress%2Cformat&crop=faces&fit=min",
  },
  {
    idpregunta: 40,
    pregunta: "¿Cuáles son los 4 puntos cardinales?",
    idcategoria: 2,
    alt: "",
    url: "https://s1.significados.com/foto/compass-152124-960-720_bg.png",
  },
  {
    idpregunta: 41,
    pregunta: "¿cuantos lados tiene un dodecágono?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 42,
    pregunta: "¿Cuántos segundos hay en una hora?",
    idcategoria: 2,
    alt: "",
    url: "https://previews.123rf.com/images/martialred/martialred1512/martialred151200058/49796813-el-cron%C3%B3metro-icono-plana-para-aplicaciones-y-sitios-web.jpg",
  },
  {
    idpregunta: 43,
    pregunta: " Cuántos meses tiene un trimestre",
    idcategoria: 2,
    alt: "",
    url: "https://es.calcuworld.com/wp-content/uploads/sites/2/2018/04/meses-en-un-semestre.jpg",
  },
  {
    idpregunta: 44,
    pregunta: "Cómo se llama el polígono de siete lados",
    idcategoria: 2,
    alt: "",
    url: "https://comosellama.net/wp-content/uploads/2015/11/Como-se-llama-un-poligono-de-siete-lados.jpg",
  },
  {
    idpregunta: 45,
    pregunta: "cuánto es 6x8 menos cuatro",
    idcategoria: 2,
    alt: "",
    url: "https://assets.piliapp.com/s3pxy/actual-size/photo-6x8/default-front.jpg",
  },
  {
    idpregunta: 46,
    pregunta: "¿Cuánto es el triple de 25?",
    idcategoria: 2,
    alt: "",
    url: "https://www.mundoprimaria.com/wp-content/uploads/2021/10/el-doble-y-el-triple-en-primaria-para-ninos.jpg",
  },
  {
    idpregunta: 47,
    pregunta:
      "Sí tomas 2 vasos de agua cada 4 horas durante el día ¿Cuántos vasos de agua tomarás al día? ",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 48,
    pregunta:
      "Sí tienes un cuadrado de lados de 3cm de longitud ¿Cuál es su área?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 49,
    pregunta: "¿Cuál de los siguientes números son múltiplos de 10?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 50,
    pregunta: "¿Cuál de estos números NO pertenecen a los números impares?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 51,
    pregunta: "¿Quién descubrió el teorema de Pitágoras?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 52,
    pregunta:
      "Si un triángulo tiene un ángulo recto (90 grados) ¿Cómo se llama?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 53,
    pregunta: "¿A cuanto equivale 55%?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 54,
    pregunta: "¿Que cantidad va antes del segundo?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 55,
    pregunta: "¿Que valor es mayor?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 56,
    pregunta: "¿Que medida representa el volúmen?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 57,
    pregunta: "¿Cual es único número par?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 58,
    pregunta:
      "Una mujer está a punto de tener un bebé. Si es un niño, sólo le faltará un hijo para que el número de niños sea igual al número de niñas. Sin embargo, si el bebé es una niña, el número de niñas de la mujer será el doble del número de niños. ¿Cuántos hijos tiene y cuál es su sexo?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 59,
    pregunta:
      "En el bus en el que entré había 15 pasajeros. Poco después, 4 personas bajaron y dos entraron. ¿Cuántas personas hay en el bus ahora?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 60,
    pregunta:
      "Mi abuelo tiene 5 hijos y cada hijo tiene 3 hijos. ¿Cuántos primos tengo?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 61,
    pregunta:
      "Cuando tenía 8 años, mi hermana tenía la mitad de mi edad. Ahora que tengo 50 años, ¿cuántos años tiene mi hermana?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 62,
    pregunta:
      "Cómo se llama la línea imaginaria que divide la Tierra en hemisferio norte y hemisferio sur?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 63,
    pregunta: "Cuál es el océano más grande del mundo?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 64,
    pregunta: "Quién es el actual presidente de la república de Colombia?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 65,
    pregunta: "cuanto es 30-15?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 66,
    pregunta: "Quien pinto la ultima cena ?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 67,
    pregunta: "cuál es el país más poblado actualmente?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 68,
    pregunta: "cuál país es el mayor exportador de café?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 69,
    pregunta: "cuál es el país con más petróleo en el mundo?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 70,
    pregunta: "de dónde era Hitler?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 71,
    pregunta: "dónde nació Diomedes Díaz?",
    idcategoria: 2,
    alt: "",
    url: "",
  },
  {
    idpregunta: 72,
    pregunta: "¿Cuál es el valor de PI?",
    idcategoria: 3,
    alt: "",
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.quora.com%2FCu%25C3%25A1l-es-el-valor-exacto-de-pi&psig=AOvVaw3IK0rKh1b3_OiLwJY1wl6C&ust=1693008819244000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKigl7zD9oADFQAAAAAdAAAAABAE",
  },
  {
    idpregunta: 73,
    pregunta: "Cómo se llama el padre de las matemáticas",
    idcategoria: 3,
    alt: "",
    url: "https://www.bbvaopenmind.com/wp-content/uploads/2018/09/DMbzjrXX4AAkcKP.jpeg",
  },
  {
    idpregunta: 74,
    pregunta: "¿Cuál es la raíz cuadrada de 81? ",
    idcategoria: 3,
    alt: "",
    url: "https://i.ytimg.com/vi/1t-OBEbj3Ms/hqdefault.jpg",
  },
  {
    idpregunta: 75,
    pregunta: "Cuánto es el doble de 25?",
    idcategoria: 3,
    alt: "",
    url: "https://aprendeencasa.sep.gob.mx/multimedia/B64images/202206/B64-IMG-C9gTwYdyUJ-NR5AJXmJSK.png",
  },
  {
    idpregunta: 76,
    pregunta: "¿Cómo se llama también el perímetro de un círculo?",
    idcategoria: 3,
    alt: "",
    url: "https://www.areasyvolumenes.net/wp-content/uploads/2021/09/perimetro-circulo.png",
  },
  {
    idpregunta: 77,
    pregunta: "¿Cuántos milímetros hay en un litro?",
    idcategoria: 3,
    alt: "",
    url: "https://chapaesaflor.pe/infoblog/wp-content/uploads/2023/06/nonolipavumavira.jpg",
  },
  {
    idpregunta: 78,
    pregunta: "¿Qué día es el día de Pi?",
    idcategoria: 3,
    alt: "",
    url: "https://www.segurostoledo.es/img/0220731958101/numero-pi.jpg",
  },
  {
    idpregunta: 79,
    pregunta:
      "Si un coche recorre 240 km en 4 horas, ¿Cuál es su velocidad promedio en km/h?",
    idcategoria: 3,
    alt: "",
    url: "",
  },
  {
    idpregunta: 80,
    pregunta:
      "Si un ángulo agudo de un triángulo mide 60 grados, ¿Cuánto miden los otros dos ángulos?",
    idcategoria: 3,
    alt: "",
    url: "",
  },
  {
    idpregunta: 81,
    pregunta: "¿Cuál es el valor de x en la ecuación 2x + 5 = 15?,",
    idcategoria: 3,
    alt: "",
    url: "",
  },
  {
    idpregunta: 82,
    pregunta: "Quién es considerado el Padre de las Matemáticas?",
    idcategoria: 3,
    alt: "",
    url: "",
  },
  {
    idpregunta: 83,
    pregunta: "¿Cuánto es 35x7-25?",
    idcategoria: 3,
    alt: "",
    url: "",
  },
  {
    idpregunta: 84,
    pregunta: "¿Cuánto es 5+3 (7-2)?",
    idcategoria: 3,
    alt: "",
    url: "",
  },
  {
    idpregunta: 85,
    pregunta: "Busca el ángulo que falta",
    idcategoria: 3,
    alt: "",
    url: "https://quizizz.com/media/resource/gs/quizizz-media/questions/L2FwcGhvc3RpbmdfcHJvZC9ibG9icy9BRW5CMlVwMHh4TXlLNHVoR01ibC13dFA2VW5XU2hwYkZ6REZxbzBWZjFYS3dQT1ZrN21FeE51RjUxaU9UUS00a0Q3TEdUQUgyT1pLM3VObGFmUVdiTmpfMXlQZl9EN3cyTzdSYnNLX1BkaGdUTVlEcGdYenhLNC5HRkU0c0djYko3Y0c1dUp5?w=900&h=900",
  },
  {
    idpregunta: 86,
    pregunta: "¿Que valor tiene Y en 5x+2=17?",
    idcategoria: 3,
    alt: "",
    url: "",
  },
  {
    idpregunta: 87,
    pregunta: "¿Cuál valor representa el promedio?",
    idcategoria: 3,
    alt: "",
    url: "",
  },
  {
    idpregunta: 88,
    pregunta: "¿Como se llama también el perímetro de un circulo?",
    idcategoria: 3,
    alt: "",
    url: "",
  },
  {
    idpregunta: 89,
    pregunta: "¿Cual es el numero primo que le sigue al 7?",
    idcategoria: 3,
    alt: "",
    url: "",
  },
  {
    idpregunta: 90,
    pregunta: "¿Cual es el numero que falta para completar la secuencia?",
    idcategoria: 3,
    alt: "",
    url: "https://album.mediaset.es/eimg/2019/03/06/PA6yYEsN4l2pgXYPZJCGp1.jpg",
  },
  {
    idpregunta: 91,
    pregunta:
      "Un camión puede cargar 50 sacos de arena o 400 ladrillos. Si se colocaron 32 sacos de arena en el camión, ¿cuántos ladrillos puede seguir cargando?",
    idcategoria: 3,
    alt: "",
    url: "",
  },
  {
    idpregunta: 92,
    pregunta: "¿En cuál alternativa hay tres ochos, tres cero?",
    idcategoria: 3,
    alt: "",
    url: "",
  },
  {
    idpregunta: 93,
    pregunta: "Quién fue el primer presidente de Brasil?",
    idcategoria: 3,
    alt: "",
    url: "https://a.cdn-hotels.com/gdcs/production176/d1110/a2bf1ba0-fe12-11e8-a178-0242ac11000d.jpg",
  },
  {
    idpregunta: 94,
    pregunta: "Qué científico desarrolló la teoría de la relatividad?",
    idcategoria: 3,
    alt: "",
    url: "https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2023/03/teorias-einstein-2989094.jpg?tf=3840x",
  },
  {
    idpregunta: 95,
    pregunta: "Qué instrumento se utiliza para medir la presión atmosférica?",
    idcategoria: 3,
    alt: "",
    url: "https://services.meteored.com/img/article/alta-presion-de-bloqueo-que-significa-y-cuales-son-sus-consecuencias-1652995073963_1280.jpeg",
  },
  {
    idpregunta: 96,
    pregunta: "En qué año tuvo lugar el primer viaje del ser humano a la Luna?",
    idcategoria: 3,
    alt: "",
    url: "https://s.france24.com/media/display/df118e98-2c90-11ed-b40a-005056a97e36/w:1280/p:4x3/luna.jpg",
  },
  {
    idpregunta: 97,
    pregunta: "Cuál es el elemento químico más abundante en la Tierra?",
    idcategoria: 3,
    alt: "",
    url: "https://www.noticiasensalud.com/wp-content/uploads/2020/07/Cuanto-oxigeno-necesita-el-cerebro-1000x600.jpg",
  },
  {
    idpregunta: 98,
    pregunta: "quien era Picasso?",
    idcategoria: 3,
    alt: "",
    url: "",
  },
  {
    idpregunta: 99,
    pregunta: "cuál es la mayor potencia del mundo ",
    idcategoria: 3,
    alt: "",
    url: "",
  },
  {
    idpregunta: 100,
    pregunta: "cuál es el país con más biodiversidad?",
    idcategoria: 3,
    alt: "",
    url: "",
  },
  {
    idpregunta: 101,
    pregunta: "cuál es el continente más grande del mundo?",
    idcategoria: 3,
    alt: "",
    url: "",
  },
  {
    idpregunta: 102,
    pregunta:
      "si María tiene 4500 pesos pero compra 1700 en dulces cuánto le queda?",
    idcategoria: 3,
    alt: "",
    url: "",
  },
  {
    idpregunta: 103,
    pregunta: "¿Qué palabra matemática significa el tamaño relativo de algo?",
    idcategoria: 4,
    alt: "",
    url: "https://i0.wp.com/www.lucaedu.com/wp-content/uploads/2022/05/que-es-el-valor-posicional-de-un-numero.jpg?resize=1024%2C683&ssl=1",
  },
  {
    idpregunta: 104,
    pregunta:
      "¿Cuál era el nombre del sistema de medición antes de que fuéramos métricos",
    idcategoria: 4,
    alt: "",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Watt_James_von_Breda.jpg/180px-Watt_James_von_Breda.jpg",
  },
  {
    idpregunta: 105,
    pregunta: "¿Qué dos letras simbolizan un milímetro?",
    idcategoria: 4,
    alt: "",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Regla_horizontal_10.svg/625px-Regla_horizontal_10.svg.png",
  },
  {
    idpregunta: 106,
    pregunta: "¿Pitágoras desarrolló una teoría sobre qué formas?",
    idcategoria: 4,
    alt: "",
    url: "https://estaticos-cdn.prensaiberica.es/clip/5ece5780-317f-4f84-9a96-167ce29bff37_16-9-discover-aspect-ratio_default_0.jpg",
  },
  {
    idpregunta: 107,
    pregunta: "¿Cuántas aristas tiene un octaedro?",
    idcategoria: 4,
    alt: "",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Octahedron.svg/1200px-Octahedron.svg.png",
  },
  {
    idpregunta: 108,
    pregunta:
      "¿Qué matemático griego del siglo III escribió Elementos de geometría?",
    idcategoria: 4,
    alt: "",
    url: "",
  },
  {
    idpregunta: 109,
    pregunta:
      "¿Cómo se escribe el número doscientos cinco mil trescientos sesenta y ocho?",
    idcategoria: 4,
    alt: "",
    url: "",
  },
  {
    idpregunta: 110,
    pregunta:
      "Si en una carrera vas tres puestos por delante del vigésimo segundo, ¿en qué puesto vas?",
    idcategoria: 4,
    alt: "",
    url: "",
  },
  {
    idpregunta: 111,
    pregunta:
      "Para calcular cuánto es un tercio de 3996, ¿Qué tienes que hacer?",
    idcategoria: 4,
    alt: "",
    url: "",
  },
  {
    idpregunta: 112,
    pregunta: "Expresa 7 kg y 670 g en gramos.",
    idcategoria: 4,
    alt: "",
    url: "",
  },
  {
    idpregunta: 113,
    pregunta: "Si un ángulo agudo mide 60 grados, ¿Cuánto mide su complemento?",
    idcategoria: 4,
    alt: "",
    url: "",
  },
  {
    idpregunta: 114,
    pregunta:
      "Si un rectángulo regular tiene un perímetro de 18 unidades y uno de sus lados mide 4 unidades, ¿Cuánto mide el lado opuesto?",
    idcategoria: 4,
    alt: "",
    url: "",
  },
  {
    idpregunta: 115,
    pregunta: "¿Cuál se aproxima más al resultado de v89?",
    idcategoria: 4,
    alt: "",
    url: "",
  },
  {
    idpregunta: 116,
    pregunta:
      "Si un producto cuesta $500 y su precio se incrementa en un 20%,¿Cuánto costará ahora?",
    idcategoria: 4,
    alt: "",
    url: "",
  },
  {
    idpregunta: 117,
    pregunta: "¿Quien creó este famoso teorema? (a·h = b·c)",
    idcategoria: 4,
    alt: "",
    url: "flickr.com/photos/arturomandly/5942777561",
  },
  {
    idpregunta: 118,
    pregunta:
      "En un triángulo rectángulo, si un cateto mide 6cm y la hipotenusa mide 10cm, ¿Cuánto mide el otro cateto?",
    idcategoria: 4,
    alt: "",
    url: "",
  },
  {
    idpregunta: 119,
    pregunta: "Si 3x-2=7, ¿Qué valor tiene x?",
    idcategoria: 4,
    alt: "",
    url: "",
  },
  {
    idpregunta: 120,
    pregunta: "¿Cual es la fórmula para hallar el área de un trapecio?",
    idcategoria: 4,
    alt: "",
    url: "",
  },
  {
    idpregunta: 121,
    pregunta: "¿Cual es el resultado de 3(v81)?",
    idcategoria: 4,
    alt: "",
    url: "",
  },
  {
    idpregunta: 122,
    pregunta: "¿Qué obtienes al calcular 3+5*2+7(12-3)?",
    idcategoria: 4,
    alt: "",
    url: "",
  },
  {
    idpregunta: 123,
    pregunta: "Quién inventó el signo de igual (=) ?",
    idcategoria: 4,
    alt: "",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Equals_sign_in_mathematics.jpg",
  },
  {
    idpregunta: 124,
    pregunta:
      "Quiénes fueron las primeras personas en hacer uso de los números negativos?",
    idcategoria: 4,
    alt: "",
    url: "https://rea.ceibal.edu.uy/storage/app/uploads/public/69s/58r/4op/thumb_164_300_300_0_0_crop.gif",
  },
  {
    idpregunta: 125,
    pregunta: "Quién es el padre de las matemáticas?",
    idcategoria: 4,
    alt: "",
    url: "https://apolonio.es/wp-content/uploads/2023/06/quien-es-el-padre-de-las-matematicas.jpg",
  },
  {
    idpregunta: 126,
    pregunta: "en que año Aryabhatta descubrio el cero (0) ?",
    idcategoria: 4,
    alt: "",
    url: "https://img.freepik.com/vector-premium/3d-numero-0-cero-numero-signo-color-rojo_165488-5562.jpg",
  },
  {
    idpregunta: 127,
    pregunta: "Valor de cos 360°?",
    idcategoria: 4,
    alt: "",
    url: "tbn0.gstatic.com/images?q=tbn:ANd9GcTjUUJw3p4wNxn6AwTAO9ECDpnN0fM5jvRMGQ&usqp=CAU",
  },
  {
    idpregunta: 128,
    pregunta:
      "¿Que nombre reciben los numeros que tienen un numero infinito de decimales repetidos?",
    idcategoria: 5,
    alt: "",
    url: "https://3.bp.blogspot.com/-fEevMZCpEh0/WNAMv2Hc3uI/AAAAAAAAChk/2wz2jTd5WnA9ErqTAiKCDxUeuMiTEjpQQCLcB/s1600/period_49.png",
  },
  {
    idpregunta: 129,
    pregunta:
      "Cinco personas se reunieron para comer y cada una abrazó a las demás una vez. ¿Cuántos abrazos se dieron?",
    idcategoria: 5,
    alt: "",
    url: "",
  },
  {
    idpregunta: 130,
    pregunta:
      "Juan está preocupado porque solo ha vendido 2/8 del total de pizzas que vende diariamente,  ¿Cuál es la fracción de pizza que le hace falta vender?",
    idcategoria: 5,
    alt: "",
    url: "",
  },
  {
    idpregunta: 131,
    pregunta: "Dado el angulo X, ¿Cuál de las siguientes ecuaciones es cierta?",
    idcategoria: 5,
    alt: "",
    url: "",
  },
  {
    idpregunta: 132,
    pregunta:
      "¿Cuál Operacion Trigonométrica usa el angulo opuesto y el adyascente?",
    idcategoria: 5,
    alt: "",
    url: "",
  },
  {
    idpregunta: 133,
    pregunta: "El Seno de ? es:",
    idcategoria: 5,
    alt: "",
    url: "https://quizizz.com/media/resource/gs/quizizz-media/questions/L2FwcGhvc3RpbmdfcHJvZC9ibG9icy9BRW5CMlVvckJraUVzSmFOeVpCcXRyRUxDeFZ2bWI1YVloSHdyWmNuMkhwdXFYVk9mNGMyRkF3bHUzc1hiQ1REYWdWR2tqMGxFcmRGQVR5Q0I1SWFaN3BpOHhfQ3VLOVFTam1mSDZ2Ympjd0hheExoX2gzOWNKUS41bzdSdU9IUzdTNnlNaVBs?w=900&h=900",
  },
  {
    idpregunta: 134,
    pregunta: "¿Cuál es la ecuación de una recta?",
    idcategoria: 5,
    alt: "",
    url: "",
  },
  {
    idpregunta: 135,
    pregunta:
      "¿Quíen creó el sistema numerico arábigo (el que usamos hoy en día?",
    idcategoria: 5,
    alt: "",
    url: "",
  },
  {
    idpregunta: 136,
    pregunta: "¿Cual es la fórmula para hallar el volumen de una esféra?",
    idcategoria: 5,
    alt: "",
    url: "",
  },
  {
    idpregunta: 137,
    pregunta: "¿Como se expresa el número 598,2568 en notación científica?",
    idcategoria: 5,
    alt: "",
    url: "",
  },
  {
    idpregunta: 138,
    pregunta:
      "En una reserva de agua se llenan 15 1/3 de tanques por minuto. Si se sabe que cada tanque se llena hasta 2/3 de su capacidad, ¿Cuantos tanques se llenan por minuto?",
    idcategoria: 5,
    alt: "",
    url: "",
  },
  {
    idpregunta: 139,
    pregunta:
      "Quién inventó el cálculo infinitesimal independientemente de Newton y creó el sistema binario?",
    idcategoria: 5,
    alt: "",
    url: "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/btg/curiosidades.batanga.com/files/Newton-vs-Leibniz-la-disputa-por-el-calculo-infinitesimal-2.jpg",
  },
  {
    idpregunta: 140,
    pregunta: "Quién de los siguientes fue un gran matemático y astrónomo?",
    idcategoria: 5,
    alt: "",
    url: "https://www.robolab.in/wp-content/uploads/2017/12/Aryabhatta.jpg",
  },
  {
    idpregunta: 141,
    pregunta: "Cuántos pies hay en una braza?",
    idcategoria: 5,
    alt: "",
    url: "https://www.smartick.es/blog/wp-content/uploads/Braza.png",
  },
  {
    idpregunta: 142,
    pregunta:
      "Qué matemático griego del siglo III escribió Elementos de geometría?",
    idcategoria: 5,
    alt: "",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Artgate_Fondazione_Cariplo_-_Cifrondi_Antonio%2C_Euclide.jpg/220px-Artgate_Fondazione_Cariplo_-_Cifrondi_Antonio%2C_Euclide.jpg",
  },
  {
    idpregunta: 143,
    pregunta:
      "Cuál es su nombre si un número natural tiene precisamente dos divisores diferentes?",
    idcategoria: 5,
    alt: "",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2DT71GHGjwTRarOemtkFn1fa_p3WxSxooLA&usqp=CAU",
  },
];

const respuestas = [
  {
    idrespuesta: 1,
    respuesta: "roma",
    idpregunta: 1,
    correcta: true,
  },
  {
    idrespuesta: 2,
    respuesta: "lila",
    idpregunta: 1,
    correcta: false,
  },
  {
    idrespuesta: 3,
    respuesta: "paris",
    idpregunta: 1,
    correcta: false,
  },
  {
    idrespuesta: 4,
    respuesta: "medellim",
    idpregunta: 1,
    correcta: false,
  },
  {
    idrespuesta: 5,
    respuesta: "centímetros",
    idpregunta: 2,
    correcta: true,
  },
  {
    idrespuesta: 6,
    respuesta: "milímetro",
    idpregunta: 2,
    correcta: false,
  },
  {
    idrespuesta: 7,
    respuesta: "litro ",
    idpregunta: 2,
    correcta: false,
  },
  {
    idrespuesta: 8,
    respuesta: "decametro",
    idpregunta: 2,
    correcta: false,
  },
  {
    idrespuesta: 9,
    respuesta: "27",
    idpregunta: 3,
    correcta: true,
  },
  {
    idrespuesta: 10,
    respuesta: "28",
    idpregunta: 3,
    correcta: false,
  },
  {
    idrespuesta: 11,
    respuesta: "26",
    idpregunta: 3,
    correcta: false,
  },
  {
    idrespuesta: 12,
    respuesta: "17",
    idpregunta: 3,
    correcta: false,
  },
  {
    idrespuesta: 13,
    respuesta: "-, +, x, ÷",
    idpregunta: 4,
    correcta: true,
  },
  {
    idrespuesta: 14,
    respuesta: "-, +, v, ÷",
    idpregunta: 4,
    correcta: false,
  },
  {
    idrespuesta: 15,
    respuesta: "x, ÷, v, -",
    idpregunta: 4,
    correcta: false,
  },
  {
    idrespuesta: 16,
    respuesta: "-, +, x",
    idpregunta: 4,
    correcta: false,
  },
  {
    idrespuesta: 17,
    respuesta: "2 y 4",
    idpregunta: 5,
    correcta: true,
  },
  {
    idrespuesta: 18,
    respuesta: "1 y 5",
    idpregunta: 5,
    correcta: false,
  },
  {
    idrespuesta: 19,
    respuesta: "3 y 5",
    idpregunta: 5,
    correcta: false,
  },
  {
    idrespuesta: 20,
    respuesta: "1,3 y 5",
    idpregunta: 5,
    correcta: false,
  },
  {
    idrespuesta: 21,
    respuesta: "regla",
    idpregunta: 6,
    correcta: true,
  },
  {
    idrespuesta: 22,
    respuesta: "termometro",
    idpregunta: 6,
    correcta: false,
  },
  {
    idrespuesta: 23,
    respuesta: "peso",
    idpregunta: 6,
    correcta: false,
  },
  {
    idrespuesta: 24,
    respuesta: "transportador",
    idpregunta: 6,
    correcta: false,
  },
  {
    idrespuesta: 25,
    respuesta: "1,3 y 5",
    idpregunta: 7,
    correcta: true,
  },
  {
    idrespuesta: 26,
    respuesta: "1 y 2",
    idpregunta: 7,
    correcta: false,
  },
  {
    idrespuesta: 27,
    respuesta: "2 y 4",
    idpregunta: 7,
    correcta: false,
  },
  {
    idrespuesta: 28,
    respuesta: "1,3 y 5",
    idpregunta: 7,
    correcta: false,
  },
  {
    idrespuesta: 29,
    respuesta: "una figura geométrica plana",
    idpregunta: 8,
    correcta: true,
  },
  {
    idrespuesta: 30,
    respuesta: "una figura 3D",
    idpregunta: 8,
    correcta: false,
  },
  {
    idrespuesta: 31,
    respuesta: "un prisma",
    idpregunta: 8,
    correcta: false,
  },
  {
    idrespuesta: 32,
    respuesta: "una línea",
    idpregunta: 8,
    correcta: false,
  },
  {
    idrespuesta: 33,
    respuesta: "1000g",
    idpregunta: 9,
    correcta: true,
  },
  {
    idrespuesta: 34,
    respuesta: "350g",
    idpregunta: 9,
    correcta: false,
  },
  {
    idrespuesta: 35,
    respuesta: "100g",
    idpregunta: 9,
    correcta: false,
  },
  {
    idrespuesta: 36,
    respuesta: "500g",
    idpregunta: 9,
    correcta: false,
  },
  {
    idrespuesta: 37,
    respuesta: "63",
    idpregunta: 10,
    correcta: true,
  },
  {
    idrespuesta: 38,
    respuesta: "75",
    idpregunta: 10,
    correcta: false,
  },
  {
    idrespuesta: 39,
    respuesta: "52",
    idpregunta: 10,
    correcta: false,
  },
  {
    idrespuesta: 40,
    respuesta: "60",
    idpregunta: 10,
    correcta: false,
  },
  {
    idrespuesta: 41,
    respuesta: "60minutos",
    idpregunta: 11,
    correcta: true,
  },
  {
    idrespuesta: 42,
    respuesta: "25minutos",
    idpregunta: 11,
    correcta: false,
  },
  {
    idrespuesta: 43,
    respuesta: "45minutos",
    idpregunta: 11,
    correcta: false,
  },
  {
    idrespuesta: 44,
    respuesta: "80minutos",
    idpregunta: 11,
    correcta: false,
  },
  {
    idrespuesta: 45,
    respuesta: "5",
    idpregunta: 12,
    correcta: true,
  },
  {
    idrespuesta: 46,
    respuesta: "7",
    idpregunta: 12,
    correcta: false,
  },
  {
    idrespuesta: 47,
    respuesta: "8",
    idpregunta: 12,
    correcta: false,
  },
  {
    idrespuesta: 48,
    respuesta: "3",
    idpregunta: 12,
    correcta: false,
  },
  {
    idrespuesta: 49,
    respuesta: "4",
    idpregunta: 13,
    correcta: true,
  },
  {
    idrespuesta: 50,
    respuesta: "2",
    idpregunta: 13,
    correcta: false,
  },
  {
    idrespuesta: 51,
    respuesta: "8",
    idpregunta: 13,
    correcta: false,
  },
  {
    idrespuesta: 52,
    respuesta: "6",
    idpregunta: 13,
    correcta: false,
  },
  {
    idrespuesta: 53,
    respuesta: "5",
    idpregunta: 14,
    correcta: true,
  },
  {
    idrespuesta: 54,
    respuesta: "3",
    idpregunta: 14,
    correcta: false,
  },
  {
    idrespuesta: 55,
    respuesta: "7",
    idpregunta: 14,
    correcta: false,
  },
  {
    idrespuesta: 56,
    respuesta: "10",
    idpregunta: 14,
    correcta: false,
  },
  {
    idrespuesta: 57,
    respuesta: "10",
    idpregunta: 15,
    correcta: true,
  },
  {
    idrespuesta: 58,
    respuesta: "5",
    idpregunta: 15,
    correcta: false,
  },
  {
    idrespuesta: 59,
    respuesta: "3",
    idpregunta: 15,
    correcta: false,
  },
  {
    idrespuesta: 60,
    respuesta: "9",
    idpregunta: 15,
    correcta: false,
  },
  {
    idrespuesta: 61,
    respuesta: "14 años ",
    idpregunta: 16,
    correcta: true,
  },
  {
    idrespuesta: 62,
    respuesta: "8 años ",
    idpregunta: 16,
    correcta: false,
  },
  {
    idrespuesta: 63,
    respuesta: "12 años ",
    idpregunta: 16,
    correcta: false,
  },
  {
    idrespuesta: 64,
    respuesta: "10 años ",
    idpregunta: 16,
    correcta: false,
  },
  {
    idrespuesta: 65,
    respuesta: "16",
    idpregunta: 17,
    correcta: true,
  },
  {
    idrespuesta: 66,
    respuesta: "10",
    idpregunta: 17,
    correcta: false,
  },
  {
    idrespuesta: 67,
    respuesta: "18",
    idpregunta: 17,
    correcta: false,
  },
  {
    idrespuesta: 68,
    respuesta: "6",
    idpregunta: 17,
    correcta: false,
  },
  {
    idrespuesta: 69,
    respuesta: "13",
    idpregunta: 18,
    correcta: true,
  },
  {
    idrespuesta: 70,
    respuesta: "10",
    idpregunta: 18,
    correcta: false,
  },
  {
    idrespuesta: 71,
    respuesta: "15",
    idpregunta: 18,
    correcta: false,
  },
  {
    idrespuesta: 72,
    respuesta: "18",
    idpregunta: 18,
    correcta: false,
  },
  {
    idrespuesta: 73,
    respuesta: "División",
    idpregunta: 19,
    correcta: true,
  },
  {
    idrespuesta: 74,
    respuesta: "Multiplicación",
    idpregunta: 19,
    correcta: false,
  },
  {
    idrespuesta: 75,
    respuesta: "Suma",
    idpregunta: 19,
    correcta: false,
  },
  {
    idrespuesta: 76,
    respuesta: "Resta",
    idpregunta: 19,
    correcta: false,
  },
  {
    idrespuesta: 77,
    respuesta: "Cuadrado",
    idpregunta: 20,
    correcta: true,
  },
  {
    idrespuesta: 78,
    respuesta: "Rombo",
    idpregunta: 20,
    correcta: false,
  },
  {
    idrespuesta: 79,
    respuesta: "Paralelogramo",
    idpregunta: 20,
    correcta: false,
  },
  {
    idrespuesta: 80,
    respuesta: "Trapecio",
    idpregunta: 20,
    correcta: false,
  },
  {
    idrespuesta: 81,
    respuesta: "Estadística",
    idpregunta: 21,
    correcta: true,
  },
  {
    idrespuesta: 82,
    respuesta: "Geometría",
    idpregunta: 21,
    correcta: false,
  },
  {
    idrespuesta: 83,
    respuesta: "Algebra",
    idpregunta: 21,
    correcta: false,
  },
  {
    idrespuesta: 84,
    respuesta: "Cálculo",
    idpregunta: 21,
    correcta: false,
  },
  {
    idrespuesta: 85,
    respuesta: "Plano Cartesiano",
    idpregunta: 22,
    correcta: true,
  },
  {
    idrespuesta: 86,
    respuesta: "Tabla de Frecuencia",
    idpregunta: 22,
    correcta: false,
  },
  {
    idrespuesta: 87,
    respuesta: "Tabla de Verdad",
    idpregunta: 22,
    correcta: false,
  },
  {
    idrespuesta: 88,
    respuesta: "Ecuación Algebraica",
    idpregunta: 22,
    correcta: false,
  },
  {
    idrespuesta: 89,
    respuesta: "10",
    idpregunta: 23,
    correcta: true,
  },
  {
    idrespuesta: 90,
    respuesta: "8",
    idpregunta: 23,
    correcta: false,
  },
  {
    idrespuesta: 91,
    respuesta: "16",
    idpregunta: 23,
    correcta: false,
  },
  {
    idrespuesta: 92,
    respuesta: "6",
    idpregunta: 23,
    correcta: false,
  },
  {
    idrespuesta: 93,
    respuesta: "20",
    idpregunta: 24,
    correcta: true,
  },
  {
    idrespuesta: 94,
    respuesta: "40",
    idpregunta: 24,
    correcta: false,
  },
  {
    idrespuesta: 95,
    respuesta: "10",
    idpregunta: 24,
    correcta: false,
  },
  {
    idrespuesta: 96,
    respuesta: "30",
    idpregunta: 24,
    correcta: false,
  },
  {
    idrespuesta: 97,
    respuesta: "3 patos",
    idpregunta: 25,
    correcta: true,
  },
  {
    idrespuesta: 98,
    respuesta: "5 patos",
    idpregunta: 25,
    correcta: false,
  },
  {
    idrespuesta: 99,
    respuesta: "6 patos",
    idpregunta: 25,
    correcta: false,
  },
  {
    idrespuesta: 100,
    respuesta: "7 patos",
    idpregunta: 25,
    correcta: false,
  },
  {
    idrespuesta: 101,
    respuesta: "Arista",
    idpregunta: 26,
    correcta: true,
  },
  {
    idrespuesta: 102,
    respuesta: "Base",
    idpregunta: 26,
    correcta: false,
  },
  {
    idrespuesta: 103,
    respuesta: "Altura",
    idpregunta: 26,
    correcta: false,
  },
  {
    idrespuesta: 104,
    respuesta: "Perímetro",
    idpregunta: 26,
    correcta: false,
  },
  {
    idrespuesta: 105,
    respuesta: "Azul",
    idpregunta: 27,
    correcta: true,
  },
  {
    idrespuesta: 106,
    respuesta: "Verde",
    idpregunta: 27,
    correcta: false,
  },
  {
    idrespuesta: 107,
    respuesta: "Gris",
    idpregunta: 27,
    correcta: false,
  },
  {
    idrespuesta: 108,
    respuesta: "Rojo",
    idpregunta: 27,
    correcta: false,
  },
  {
    idrespuesta: 109,
    respuesta: "Perro",
    idpregunta: 28,
    correcta: true,
  },
  {
    idrespuesta: 110,
    respuesta: "Gato",
    idpregunta: 28,
    correcta: false,
  },
  {
    idrespuesta: 111,
    respuesta: "Vaca",
    idpregunta: 28,
    correcta: false,
  },
  {
    idrespuesta: 112,
    respuesta: "Loro",
    idpregunta: 28,
    correcta: false,
  },
  {
    idrespuesta: 113,
    respuesta: "Lengua",
    idpregunta: 29,
    correcta: true,
  },
  {
    idrespuesta: 114,
    respuesta: "Ojos",
    idpregunta: 29,
    correcta: false,
  },
  {
    idrespuesta: 115,
    respuesta: "Oidos",
    idpregunta: 29,
    correcta: false,
  },
  {
    idrespuesta: 116,
    respuesta: "Nariz",
    idpregunta: 29,
    correcta: false,
  },
  {
    idrespuesta: 117,
    respuesta: "Paris",
    idpregunta: 30,
    correcta: true,
  },
  {
    idrespuesta: 118,
    respuesta: "Madrid",
    idpregunta: 30,
    correcta: false,
  },
  {
    idrespuesta: 119,
    respuesta: "Barcelona",
    idpregunta: 30,
    correcta: false,
  },
  {
    idrespuesta: 120,
    respuesta: "Londres",
    idpregunta: 30,
    correcta: false,
  },
  {
    idrespuesta: 121,
    respuesta: "Primavera",
    idpregunta: 31,
    correcta: true,
  },
  {
    idrespuesta: 122,
    respuesta: "Otoño",
    idpregunta: 31,
    correcta: false,
  },
  {
    idrespuesta: 123,
    respuesta: "Invierno",
    idpregunta: 31,
    correcta: false,
  },
  {
    idrespuesta: 124,
    respuesta: "Verano",
    idpregunta: 31,
    correcta: false,
  },
  {
    idrespuesta: 125,
    respuesta: "322",
    idpregunta: 32,
    correcta: true,
  },
  {
    idrespuesta: 126,
    respuesta: "489",
    idpregunta: 32,
    correcta: false,
  },
  {
    idrespuesta: 127,
    respuesta: "600",
    idpregunta: 32,
    correcta: false,
  },
  {
    idrespuesta: 128,
    respuesta: "67",
    idpregunta: 32,
    correcta: false,
  },
  {
    idrespuesta: 129,
    respuesta: "44",
    idpregunta: 33,
    correcta: true,
  },
  {
    idrespuesta: 130,
    respuesta: "6",
    idpregunta: 33,
    correcta: false,
  },
  {
    idrespuesta: 131,
    respuesta: "26",
    idpregunta: 33,
    correcta: false,
  },
  {
    idrespuesta: 132,
    respuesta: "36",
    idpregunta: 33,
    correcta: false,
  },
  {
    idrespuesta: 133,
    respuesta: "new york",
    idpregunta: 34,
    correcta: true,
  },
  {
    idrespuesta: 134,
    respuesta: "Barcelona ",
    idpregunta: 34,
    correcta: false,
  },
  {
    idrespuesta: 135,
    respuesta: "califonia",
    idpregunta: 34,
    correcta: false,
  },
  {
    idrespuesta: 136,
    respuesta: "caracas",
    idpregunta: 34,
    correcta: false,
  },
  {
    idrespuesta: 137,
    respuesta: "ciudad del Vaticano ",
    idpregunta: 35,
    correcta: true,
  },
  {
    idrespuesta: 138,
    respuesta: "monaco",
    idpregunta: 35,
    correcta: false,
  },
  {
    idrespuesta: 139,
    respuesta: "república de chipre",
    idpregunta: 35,
    correcta: false,
  },
  {
    idrespuesta: 140,
    respuesta: "congo",
    idpregunta: 35,
    correcta: false,
  },
  {
    idrespuesta: 141,
    respuesta: "dolar",
    idpregunta: 36,
    correcta: true,
  },
  {
    idrespuesta: 142,
    respuesta: "yen",
    idpregunta: 36,
    correcta: false,
  },
  {
    idrespuesta: 143,
    respuesta: "rulos",
    idpregunta: 36,
    correcta: false,
  },
  {
    idrespuesta: 144,
    respuesta: "euro",
    idpregunta: 36,
    correcta: false,
  },
  {
    idrespuesta: 145,
    respuesta: "centímetros",
    idpregunta: 37,
    correcta: true,
  },
  {
    idrespuesta: 146,
    respuesta: "milímetro",
    idpregunta: 37,
    correcta: false,
  },
  {
    idrespuesta: 147,
    respuesta: "litro ",
    idpregunta: 37,
    correcta: false,
  },
  {
    idrespuesta: 148,
    respuesta: "decametro",
    idpregunta: 37,
    correcta: false,
  },
  {
    idrespuesta: 149,
    respuesta: "90",
    idpregunta: 38,
    correcta: true,
  },
  {
    idrespuesta: 150,
    respuesta: "180",
    idpregunta: 38,
    correcta: false,
  },
  {
    idrespuesta: 151,
    respuesta: "45",
    idpregunta: 38,
    correcta: false,
  },
  {
    idrespuesta: 152,
    respuesta: "270",
    idpregunta: 38,
    correcta: false,
  },
  {
    idrespuesta: 153,
    respuesta: "roma",
    idpregunta: 39,
    correcta: true,
  },
  {
    idrespuesta: 154,
    respuesta: "lila",
    idpregunta: 39,
    correcta: false,
  },
  {
    idrespuesta: 155,
    respuesta: "paris",
    idpregunta: 39,
    correcta: false,
  },
  {
    idrespuesta: 156,
    respuesta: "medellin",
    idpregunta: 39,
    correcta: false,
  },
  {
    idrespuesta: 157,
    respuesta: "Norte, Sur, Este, Oeste",
    idpregunta: 40,
    correcta: true,
  },
  {
    idrespuesta: 158,
    respuesta: "Nevada, Oslo, Toronto",
    idpregunta: 40,
    correcta: false,
  },
  {
    idrespuesta: 159,
    respuesta: "N",
    idpregunta: 40,
    correcta: false,
  },
  {
    idrespuesta: 160,
    respuesta: "",
    idpregunta: 40,
    correcta: false,
  },
  {
    idrespuesta: 161,
    respuesta: "12",
    idpregunta: 41,
    correcta: true,
  },
  {
    idrespuesta: 162,
    respuesta: "10",
    idpregunta: 41,
    correcta: false,
  },
  {
    idrespuesta: 163,
    respuesta: "9",
    idpregunta: 41,
    correcta: false,
  },
  {
    idrespuesta: 164,
    respuesta: "11",
    idpregunta: 41,
    correcta: false,
  },
  {
    idrespuesta: 165,
    respuesta: "3600",
    idpregunta: 42,
    correcta: true,
  },
  {
    idrespuesta: 166,
    respuesta: "1000",
    idpregunta: 42,
    correcta: false,
  },
  {
    idrespuesta: 167,
    respuesta: "200",
    idpregunta: 42,
    correcta: false,
  },
  {
    idrespuesta: 168,
    respuesta: "360",
    idpregunta: 42,
    correcta: false,
  },
  {
    idrespuesta: 169,
    respuesta: "3meses",
    idpregunta: 43,
    correcta: true,
  },
  {
    idrespuesta: 170,
    respuesta: "4meses",
    idpregunta: 43,
    correcta: false,
  },
  {
    idrespuesta: 171,
    respuesta: "5meses",
    idpregunta: 43,
    correcta: false,
  },
  {
    idrespuesta: 172,
    respuesta: "7meses",
    idpregunta: 43,
    correcta: false,
  },
  {
    idrespuesta: 173,
    respuesta: "Heptágono",
    idpregunta: 44,
    correcta: true,
  },
  {
    idrespuesta: 174,
    respuesta: "hexagono",
    idpregunta: 44,
    correcta: false,
  },
  {
    idrespuesta: 175,
    respuesta: "septagono",
    idpregunta: 44,
    correcta: false,
  },
  {
    idrespuesta: 176,
    respuesta: "pentagono",
    idpregunta: 44,
    correcta: false,
  },
  {
    idrespuesta: 177,
    respuesta: "44",
    idpregunta: 45,
    correcta: true,
  },
  {
    idrespuesta: 178,
    respuesta: "35",
    idpregunta: 45,
    correcta: false,
  },
  {
    idrespuesta: 179,
    respuesta: "50",
    idpregunta: 45,
    correcta: false,
  },
  {
    idrespuesta: 180,
    respuesta: "54",
    idpregunta: 45,
    correcta: false,
  },
  {
    idrespuesta: 181,
    respuesta: "75",
    idpregunta: 46,
    correcta: true,
  },
  {
    idrespuesta: 182,
    respuesta: "65",
    idpregunta: 46,
    correcta: false,
  },
  {
    idrespuesta: 183,
    respuesta: "80",
    idpregunta: 46,
    correcta: false,
  },
  {
    idrespuesta: 184,
    respuesta: "90",
    idpregunta: 46,
    correcta: false,
  },
  {
    idrespuesta: 185,
    respuesta: "10 vasos de agua ",
    idpregunta: 47,
    correcta: true,
  },
  {
    idrespuesta: 186,
    respuesta: "8 vasos de agua ",
    idpregunta: 47,
    correcta: false,
  },
  {
    idrespuesta: 187,
    respuesta: "7 vasos de agua ",
    idpregunta: 47,
    correcta: false,
  },
  {
    idrespuesta: 188,
    respuesta: "4 vasos de agua ",
    idpregunta: 47,
    correcta: false,
  },
  {
    idrespuesta: 189,
    respuesta: "9 cm²",
    idpregunta: 48,
    correcta: true,
  },
  {
    idrespuesta: 190,
    respuesta: "9cm",
    idpregunta: 48,
    correcta: false,
  },
  {
    idrespuesta: 191,
    respuesta: "6cm²",
    idpregunta: 48,
    correcta: false,
  },
  {
    idrespuesta: 192,
    respuesta: "10cm²",
    idpregunta: 48,
    correcta: false,
  },
  {
    idrespuesta: 193,
    respuesta: "10,20,30",
    idpregunta: 49,
    correcta: true,
  },
  {
    idrespuesta: 194,
    respuesta: "15,30,45",
    idpregunta: 49,
    correcta: false,
  },
  {
    idrespuesta: 195,
    respuesta: "5,3,7",
    idpregunta: 49,
    correcta: false,
  },
  {
    idrespuesta: 196,
    respuesta: "2,4,6",
    idpregunta: 49,
    correcta: false,
  },
  {
    idrespuesta: 197,
    respuesta: "300",
    idpregunta: 50,
    correcta: true,
  },
  {
    idrespuesta: 198,
    respuesta: "9",
    idpregunta: 50,
    correcta: false,
  },
  {
    idrespuesta: 199,
    respuesta: "3",
    idpregunta: 50,
    correcta: false,
  },
  {
    idrespuesta: 200,
    respuesta: "7",
    idpregunta: 50,
    correcta: false,
  },
  {
    idrespuesta: 201,
    respuesta: "Pitágoras de Samos ",
    idpregunta: 51,
    correcta: true,
  },
  {
    idrespuesta: 202,
    respuesta: "Albert Einstein ",
    idpregunta: 51,
    correcta: false,
  },
  {
    idrespuesta: 203,
    respuesta: "Arquímedes ",
    idpregunta: 51,
    correcta: false,
  },
  {
    idrespuesta: 204,
    respuesta: "John Wallis ",
    idpregunta: 51,
    correcta: false,
  },
  {
    idrespuesta: 205,
    respuesta: "triangulo rectángulo",
    idpregunta: 52,
    correcta: true,
  },
  {
    idrespuesta: 206,
    respuesta: "triangulo agudo",
    idpregunta: 52,
    correcta: false,
  },
  {
    idrespuesta: 207,
    respuesta: "triangulo obtuso",
    idpregunta: 52,
    correcta: false,
  },
  {
    idrespuesta: 208,
    respuesta: "triangulo equilatero",
    idpregunta: 52,
    correcta: false,
  },
  {
    idrespuesta: 209,
    respuesta: "0,55",
    idpregunta: 53,
    correcta: true,
  },
  {
    idrespuesta: 210,
    respuesta: "5,5",
    idpregunta: 53,
    correcta: false,
  },
  {
    idrespuesta: 211,
    respuesta: "55",
    idpregunta: 53,
    correcta: false,
  },
  {
    idrespuesta: 212,
    respuesta: "100/55",
    idpregunta: 53,
    correcta: false,
  },
  {
    idrespuesta: 213,
    respuesta: "Decimas",
    idpregunta: 54,
    correcta: true,
  },
  {
    idrespuesta: 214,
    respuesta: "Milesimas",
    idpregunta: 54,
    correcta: false,
  },
  {
    idrespuesta: 215,
    respuesta: "Centesimas",
    idpregunta: 54,
    correcta: false,
  },
  {
    idrespuesta: 216,
    respuesta: "Minuto",
    idpregunta: 54,
    correcta: false,
  },
  {
    idrespuesta: 217,
    respuesta: "0,1",
    idpregunta: 55,
    correcta: true,
  },
  {
    idrespuesta: 218,
    respuesta: "-0.11",
    idpregunta: 55,
    correcta: false,
  },
  {
    idrespuesta: 219,
    respuesta: "0.01",
    idpregunta: 55,
    correcta: false,
  },
  {
    idrespuesta: 220,
    respuesta: "0.011",
    idpregunta: 55,
    correcta: false,
  },
  {
    idrespuesta: 221,
    respuesta: "m^3",
    idpregunta: 56,
    correcta: true,
  },
  {
    idrespuesta: 222,
    respuesta: "m^2",
    idpregunta: 56,
    correcta: false,
  },
  {
    idrespuesta: 223,
    respuesta: "mv",
    idpregunta: 56,
    correcta: false,
  },
  {
    idrespuesta: 224,
    respuesta: "s",
    idpregunta: 56,
    correcta: false,
  },
  {
    idrespuesta: 225,
    respuesta: "2",
    idpregunta: 57,
    correcta: true,
  },
  {
    idrespuesta: 226,
    respuesta: "10",
    idpregunta: 57,
    correcta: false,
  },
  {
    idrespuesta: 227,
    respuesta: "4",
    idpregunta: 57,
    correcta: false,
  },
  {
    idrespuesta: 228,
    respuesta: "8",
    idpregunta: 57,
    correcta: false,
  },
  {
    idrespuesta: 229,
    respuesta: "3 niños y 5 niñas",
    idpregunta: 58,
    correcta: true,
  },
  {
    idrespuesta: 230,
    respuesta: "2 niños y 4 niñas",
    idpregunta: 58,
    correcta: false,
  },
  {
    idrespuesta: 231,
    respuesta: "2 niños y 3 niñas",
    idpregunta: 58,
    correcta: false,
  },
  {
    idrespuesta: 232,
    respuesta: "1 niño y 3 niñas",
    idpregunta: 58,
    correcta: false,
  },
  {
    idrespuesta: 233,
    respuesta: "14 personas",
    idpregunta: 59,
    correcta: true,
  },
  {
    idrespuesta: 234,
    respuesta: "13 personas",
    idpregunta: 59,
    correcta: false,
  },
  {
    idrespuesta: 235,
    respuesta: "17 personas",
    idpregunta: 59,
    correcta: false,
  },
  {
    idrespuesta: 236,
    respuesta: "15 personas",
    idpregunta: 59,
    correcta: false,
  },
  {
    idrespuesta: 237,
    respuesta: "12 primos",
    idpregunta: 60,
    correcta: true,
  },
  {
    idrespuesta: 238,
    respuesta: "14 primos",
    idpregunta: 60,
    correcta: false,
  },
  {
    idrespuesta: 239,
    respuesta: "15 primos",
    idpregunta: 60,
    correcta: false,
  },
  {
    idrespuesta: 240,
    respuesta: "10 primos",
    idpregunta: 60,
    correcta: false,
  },
  {
    idrespuesta: 241,
    respuesta: "46 años",
    idpregunta: 61,
    correcta: true,
  },
  {
    idrespuesta: 242,
    respuesta: "25 años",
    idpregunta: 61,
    correcta: false,
  },
  {
    idrespuesta: 243,
    respuesta: "42 años",
    idpregunta: 61,
    correcta: false,
  },
  {
    idrespuesta: 244,
    respuesta: "34 años",
    idpregunta: 61,
    correcta: false,
  },
  {
    idrespuesta: 245,
    respuesta: "Linea del Ecuador",
    idpregunta: 62,
    correcta: true,
  },
  {
    idrespuesta: 246,
    respuesta: "Polo sur",
    idpregunta: 62,
    correcta: false,
  },
  {
    idrespuesta: 247,
    respuesta: "Polo Norte",
    idpregunta: 62,
    correcta: false,
  },
  {
    idrespuesta: 248,
    respuesta: "Trópico de Capricornio",
    idpregunta: 62,
    correcta: false,
  },
  {
    idrespuesta: 249,
    respuesta: "Oceano Pacifico",
    idpregunta: 63,
    correcta: true,
  },
  {
    idrespuesta: 250,
    respuesta: "Oceano Indico",
    idpregunta: 63,
    correcta: false,
  },
  {
    idrespuesta: 251,
    respuesta: "Oceano Antartico",
    idpregunta: 63,
    correcta: false,
  },
  {
    idrespuesta: 252,
    respuesta: "Oceano Atlantico",
    idpregunta: 63,
    correcta: false,
  },
  {
    idrespuesta: 253,
    respuesta: "Gustavo Petro",
    idpregunta: 64,
    correcta: true,
  },
  {
    idrespuesta: 254,
    respuesta: "Juan Manuel Santo",
    idpregunta: 64,
    correcta: false,
  },
  {
    idrespuesta: 255,
    respuesta: "Ivan Duque ",
    idpregunta: 64,
    correcta: false,
  },
  {
    idrespuesta: 256,
    respuesta: "Jorge Eliecer Gaitan",
    idpregunta: 64,
    correcta: false,
  },
  {
    idrespuesta: 257,
    respuesta: "15",
    idpregunta: 65,
    correcta: true,
  },
  {
    idrespuesta: 258,
    respuesta: "14",
    idpregunta: 65,
    correcta: false,
  },
  {
    idrespuesta: 259,
    respuesta: "12",
    idpregunta: 65,
    correcta: false,
  },
  {
    idrespuesta: 260,
    respuesta: "16",
    idpregunta: 65,
    correcta: false,
  },
  {
    idrespuesta: 261,
    respuesta: "Leonardo Da Vinci",
    idpregunta: 66,
    correcta: true,
  },
  {
    idrespuesta: 262,
    respuesta: "Miguel Angel",
    idpregunta: 66,
    correcta: false,
  },
  {
    idrespuesta: 263,
    respuesta: "Sandro Botticelli",
    idpregunta: 66,
    correcta: false,
  },
  {
    idrespuesta: 264,
    respuesta: "Donato d Angelo Bramante",
    idpregunta: 66,
    correcta: false,
  },
  {
    idrespuesta: 265,
    respuesta: "india",
    idpregunta: 67,
    correcta: true,
  },
  {
    idrespuesta: 266,
    respuesta: "china",
    idpregunta: 67,
    correcta: false,
  },
  {
    idrespuesta: 267,
    respuesta: "japon",
    idpregunta: 67,
    correcta: false,
  },
  {
    idrespuesta: 268,
    respuesta: "estados unidos ",
    idpregunta: 67,
    correcta: false,
  },
  {
    idrespuesta: 269,
    respuesta: "Etiopía ",
    idpregunta: 68,
    correcta: true,
  },
  {
    idrespuesta: 270,
    respuesta: "Colombia ",
    idpregunta: 68,
    correcta: false,
  },
  {
    idrespuesta: 271,
    respuesta: "venezuela",
    idpregunta: 68,
    correcta: false,
  },
  {
    idrespuesta: 272,
    respuesta: "malaga",
    idpregunta: 68,
    correcta: false,
  },
  {
    idrespuesta: 273,
    respuesta: "venezuela ",
    idpregunta: 69,
    correcta: true,
  },
  {
    idrespuesta: 274,
    respuesta: "china",
    idpregunta: 69,
    correcta: false,
  },
  {
    idrespuesta: 275,
    respuesta: "estados unidos",
    idpregunta: 69,
    correcta: false,
  },
  {
    idrespuesta: 276,
    respuesta: "cordoba",
    idpregunta: 69,
    correcta: false,
  },
  {
    idrespuesta: 277,
    respuesta: "alemania",
    idpregunta: 70,
    correcta: true,
  },
  {
    idrespuesta: 278,
    respuesta: "rusia",
    idpregunta: 70,
    correcta: false,
  },
  {
    idrespuesta: 279,
    respuesta: "ucrania",
    idpregunta: 70,
    correcta: false,
  },
  {
    idrespuesta: 280,
    respuesta: "chipre",
    idpregunta: 70,
    correcta: false,
  },
  {
    idrespuesta: 281,
    respuesta: "de la junta",
    idpregunta: 71,
    correcta: true,
  },
  {
    idrespuesta: 282,
    respuesta: "San juan",
    idpregunta: 71,
    correcta: false,
  },
  {
    idrespuesta: 283,
    respuesta: "bolivia",
    idpregunta: 71,
    correcta: false,
  },
  {
    idrespuesta: 284,
    respuesta: "venezuela ",
    idpregunta: 71,
    correcta: false,
  },
  {
    idrespuesta: 285,
    respuesta: "Pi= 3.1416",
    idpregunta: 72,
    correcta: true,
  },
  {
    idrespuesta: 286,
    respuesta: "PI=3.1234",
    idpregunta: 72,
    correcta: false,
  },
  {
    idrespuesta: 287,
    respuesta: "PI=2.0983",
    idpregunta: 72,
    correcta: false,
  },
  {
    idrespuesta: 288,
    respuesta: "PI=3.1232",
    idpregunta: 72,
    correcta: false,
  },
  {
    idrespuesta: 289,
    respuesta: " Arquímedes",
    idpregunta: 73,
    correcta: true,
  },
  {
    idrespuesta: 290,
    respuesta: "Néstor",
    idpregunta: 73,
    correcta: false,
  },
  {
    idrespuesta: 291,
    respuesta: "Galileo ",
    idpregunta: 73,
    correcta: false,
  },
  {
    idrespuesta: 292,
    respuesta: "isacc Newton",
    idpregunta: 73,
    correcta: false,
  },
  {
    idrespuesta: 293,
    respuesta: "9",
    idpregunta: 74,
    correcta: true,
  },
  {
    idrespuesta: 294,
    respuesta: "5",
    idpregunta: 74,
    correcta: false,
  },
  {
    idrespuesta: 295,
    respuesta: "12",
    idpregunta: 74,
    correcta: false,
  },
  {
    idrespuesta: 296,
    respuesta: "7",
    idpregunta: 74,
    correcta: false,
  },
  {
    idrespuesta: 297,
    respuesta: "50",
    idpregunta: 75,
    correcta: true,
  },
  {
    idrespuesta: 298,
    respuesta: "40",
    idpregunta: 75,
    correcta: false,
  },
  {
    idrespuesta: 299,
    respuesta: "55",
    idpregunta: 75,
    correcta: false,
  },
  {
    idrespuesta: 300,
    respuesta: "60",
    idpregunta: 75,
    correcta: false,
  },
  {
    idrespuesta: 301,
    respuesta: "La circunferencia",
    idpregunta: 76,
    correcta: true,
  },
  {
    idrespuesta: 302,
    respuesta: "rais ",
    idpregunta: 76,
    correcta: false,
  },
  {
    idrespuesta: 303,
    respuesta: "perimetro",
    idpregunta: 76,
    correcta: false,
  },
  {
    idrespuesta: 304,
    respuesta: "diagonal",
    idpregunta: 76,
    correcta: false,
  },
  {
    idrespuesta: 305,
    respuesta: "1000 milímetros ",
    idpregunta: 77,
    correcta: true,
  },
  {
    idrespuesta: 306,
    respuesta: "50 milimetros",
    idpregunta: 77,
    correcta: false,
  },
  {
    idrespuesta: 307,
    respuesta: "100 milimetros",
    idpregunta: 77,
    correcta: false,
  },
  {
    idrespuesta: 308,
    respuesta: "5000 milimetros",
    idpregunta: 77,
    correcta: false,
  },
  {
    idrespuesta: 309,
    respuesta: "14 de marzo",
    idpregunta: 78,
    correcta: true,
  },
  {
    idrespuesta: 310,
    respuesta: "10 de noviembre",
    idpregunta: 78,
    correcta: false,
  },
  {
    idrespuesta: 311,
    respuesta: "4 de julio",
    idpregunta: 78,
    correcta: false,
  },
  {
    idrespuesta: 312,
    respuesta: "24 de disiembre",
    idpregunta: 78,
    correcta: false,
  },
  {
    idrespuesta: 313,
    respuesta: "60",
    idpregunta: 79,
    correcta: true,
  },
  {
    idrespuesta: 314,
    respuesta: "40",
    idpregunta: 79,
    correcta: false,
  },
  {
    idrespuesta: 315,
    respuesta: "80",
    idpregunta: 79,
    correcta: false,
  },
  {
    idrespuesta: 316,
    respuesta: "140",
    idpregunta: 79,
    correcta: false,
  },
  {
    idrespuesta: 317,
    respuesta: "30 y 90 grados",
    idpregunta: 80,
    correcta: true,
  },
  {
    idrespuesta: 318,
    respuesta: "60 grados ambos ",
    idpregunta: 80,
    correcta: false,
  },
  {
    idrespuesta: 319,
    respuesta: "45 grados ambos ",
    idpregunta: 80,
    correcta: false,
  },
  {
    idrespuesta: 320,
    respuesta: "75 y 45 cada uno ",
    idpregunta: 80,
    correcta: false,
  },
  {
    idrespuesta: 321,
    respuesta: "10",
    idpregunta: 81,
    correcta: true,
  },
  {
    idrespuesta: 322,
    respuesta: "8",
    idpregunta: 81,
    correcta: false,
  },
  {
    idrespuesta: 323,
    respuesta: "15",
    idpregunta: 81,
    correcta: false,
  },
  {
    idrespuesta: 324,
    respuesta: "5",
    idpregunta: 81,
    correcta: false,
  },
  {
    idrespuesta: 325,
    respuesta: "Arquímedes ",
    idpregunta: 82,
    correcta: true,
  },
  {
    idrespuesta: 326,
    respuesta: "Platon ",
    idpregunta: 82,
    correcta: false,
  },
  {
    idrespuesta: 327,
    respuesta: "Aristóteles ",
    idpregunta: 82,
    correcta: false,
  },
  {
    idrespuesta: 328,
    respuesta: "Isaac Newton ",
    idpregunta: 82,
    correcta: false,
  },
  {
    idrespuesta: 329,
    respuesta: "220",
    idpregunta: 83,
    correcta: true,
  },
  {
    idrespuesta: 330,
    respuesta: "245",
    idpregunta: 83,
    correcta: false,
  },
  {
    idrespuesta: 331,
    respuesta: "290",
    idpregunta: 83,
    correcta: false,
  },
  {
    idrespuesta: 332,
    respuesta: "260",
    idpregunta: 83,
    correcta: false,
  },
  {
    idrespuesta: 333,
    respuesta: "40",
    idpregunta: 84,
    correcta: true,
  },
  {
    idrespuesta: 334,
    respuesta: "35",
    idpregunta: 84,
    correcta: false,
  },
  {
    idrespuesta: 335,
    respuesta: "20",
    idpregunta: 84,
    correcta: false,
  },
  {
    idrespuesta: 336,
    respuesta: "18",
    idpregunta: 84,
    correcta: false,
  },
  {
    idrespuesta: 337,
    respuesta: "70",
    idpregunta: 85,
    correcta: true,
  },
  {
    idrespuesta: 338,
    respuesta: "80",
    idpregunta: 85,
    correcta: false,
  },
  {
    idrespuesta: 339,
    respuesta: "90",
    idpregunta: 85,
    correcta: false,
  },
  {
    idrespuesta: 340,
    respuesta: "60",
    idpregunta: 85,
    correcta: false,
  },
  {
    idrespuesta: 341,
    respuesta: "3",
    idpregunta: 86,
    correcta: true,
  },
  {
    idrespuesta: 342,
    respuesta: "2",
    idpregunta: 86,
    correcta: false,
  },
  {
    idrespuesta: 343,
    respuesta: "4",
    idpregunta: 86,
    correcta: false,
  },
  {
    idrespuesta: 344,
    respuesta: "1",
    idpregunta: 86,
    correcta: false,
  },
  {
    idrespuesta: 345,
    respuesta: "Media",
    idpregunta: 87,
    correcta: true,
  },
  {
    idrespuesta: 346,
    respuesta: "Mediana",
    idpregunta: 87,
    correcta: false,
  },
  {
    idrespuesta: 347,
    respuesta: "Moda",
    idpregunta: 87,
    correcta: false,
  },
  {
    idrespuesta: 348,
    respuesta: "Las tres son necesarias",
    idpregunta: 87,
    correcta: false,
  },
  {
    idrespuesta: 349,
    respuesta: "Circunferencia",
    idpregunta: 88,
    correcta: true,
  },
  {
    idrespuesta: 350,
    respuesta: "Lado ",
    idpregunta: 88,
    correcta: false,
  },
  {
    idrespuesta: 351,
    respuesta: "Arista",
    idpregunta: 88,
    correcta: false,
  },
  {
    idrespuesta: 352,
    respuesta: "Diámetro",
    idpregunta: 88,
    correcta: false,
  },
  {
    idrespuesta: 353,
    respuesta: "11",
    idpregunta: 89,
    correcta: true,
  },
  {
    idrespuesta: 354,
    respuesta: "9",
    idpregunta: 89,
    correcta: false,
  },
  {
    idrespuesta: 355,
    respuesta: "13",
    idpregunta: 89,
    correcta: false,
  },
  {
    idrespuesta: 356,
    respuesta: "5",
    idpregunta: 89,
    correcta: false,
  },
  {
    idrespuesta: 357,
    respuesta: "87",
    idpregunta: 90,
    correcta: true,
  },
  {
    idrespuesta: 358,
    respuesta: "89",
    idpregunta: 90,
    correcta: false,
  },
  {
    idrespuesta: 359,
    respuesta: "79",
    idpregunta: 90,
    correcta: false,
  },
  {
    idrespuesta: 360,
    respuesta: "48",
    idpregunta: 90,
    correcta: false,
  },
  {
    idrespuesta: 361,
    respuesta: "144",
    idpregunta: 91,
    correcta: true,
  },
  {
    idrespuesta: 362,
    respuesta: "14",
    idpregunta: 91,
    correcta: false,
  },
  {
    idrespuesta: 363,
    respuesta: "188",
    idpregunta: 91,
    correcta: false,
  },
  {
    idrespuesta: 364,
    respuesta: "18",
    idpregunta: 91,
    correcta: false,
  },
  {
    idrespuesta: 365,
    respuesta: "88830",
    idpregunta: 92,
    correcta: true,
  },
  {
    idrespuesta: 366,
    respuesta: "3830",
    idpregunta: 92,
    correcta: false,
  },
  {
    idrespuesta: 367,
    respuesta: "38000",
    idpregunta: 92,
    correcta: false,
  },
  {
    idrespuesta: 368,
    respuesta: "888000",
    idpregunta: 92,
    correcta: false,
  },
  {
    idrespuesta: 369,
    respuesta: "Manoel Deodoro da Fonseca ",
    idpregunta: 93,
    correcta: true,
  },
  {
    idrespuesta: 370,
    respuesta: "Getúlio Vargas",
    idpregunta: 93,
    correcta: false,
  },
  {
    idrespuesta: 371,
    respuesta: "luiz Inácio Lula da Silva",
    idpregunta: 93,
    correcta: false,
  },
  {
    idrespuesta: 372,
    respuesta: "Dilma Rousseff",
    idpregunta: 93,
    correcta: false,
  },
  {
    idrespuesta: 373,
    respuesta: "Albert Einstein",
    idpregunta: 94,
    correcta: true,
  },
  {
    idrespuesta: 374,
    respuesta: "Aristóteles",
    idpregunta: 94,
    correcta: false,
  },
  {
    idrespuesta: 375,
    respuesta: "Euclides",
    idpregunta: 94,
    correcta: false,
  },
  {
    idrespuesta: 376,
    respuesta: "Tales de Mileto",
    idpregunta: 94,
    correcta: false,
  },
  {
    idrespuesta: 377,
    respuesta: "El barómetro",
    idpregunta: 95,
    correcta: true,
  },
  {
    idrespuesta: 378,
    respuesta: "Anemógrafo",
    idpregunta: 95,
    correcta: false,
  },
  {
    idrespuesta: 379,
    respuesta: "Anemómetro",
    idpregunta: 95,
    correcta: false,
  },
  {
    idrespuesta: 380,
    respuesta: "Heliofanógrafo",
    idpregunta: 95,
    correcta: false,
  },
  {
    idrespuesta: 381,
    respuesta: "1969",
    idpregunta: 96,
    correcta: true,
  },
  {
    idrespuesta: 382,
    respuesta: "1967",
    idpregunta: 96,
    correcta: false,
  },
  {
    idrespuesta: 383,
    respuesta: "1962",
    idpregunta: 96,
    correcta: false,
  },
  {
    idrespuesta: 384,
    respuesta: "1974",
    idpregunta: 96,
    correcta: false,
  },
  {
    idrespuesta: 385,
    respuesta: "El Oxigeno",
    idpregunta: 97,
    correcta: true,
  },
  {
    idrespuesta: 386,
    respuesta: "El Hierro",
    idpregunta: 97,
    correcta: false,
  },
  {
    idrespuesta: 387,
    respuesta: "El Hidrogeno",
    idpregunta: 97,
    correcta: false,
  },
  {
    idrespuesta: 388,
    respuesta: "El Carbono",
    idpregunta: 97,
    correcta: false,
  },
  {
    idrespuesta: 389,
    respuesta: "un pintor",
    idpregunta: 98,
    correcta: true,
  },
  {
    idrespuesta: 390,
    respuesta: "un guarda de seguridad",
    idpregunta: 98,
    correcta: false,
  },
  {
    idrespuesta: 391,
    respuesta: "un locutor",
    idpregunta: 98,
    correcta: false,
  },
  {
    idrespuesta: 392,
    respuesta: "un cantante",
    idpregunta: 98,
    correcta: false,
  },
  {
    idrespuesta: 393,
    respuesta: "estados unidos ",
    idpregunta: 99,
    correcta: true,
  },
  {
    idrespuesta: 394,
    respuesta: "colombia",
    idpregunta: 99,
    correcta: false,
  },
  {
    idrespuesta: 395,
    respuesta: "rusia",
    idpregunta: 99,
    correcta: false,
  },
  {
    idrespuesta: 396,
    respuesta: "china",
    idpregunta: 99,
    correcta: false,
  },
  {
    idrespuesta: 397,
    respuesta: "brazil",
    idpregunta: 100,
    correcta: true,
  },
  {
    idrespuesta: 398,
    respuesta: "Colombia ",
    idpregunta: 100,
    correcta: false,
  },
  {
    idrespuesta: 399,
    respuesta: "peru",
    idpregunta: 100,
    correcta: false,
  },
  {
    idrespuesta: 400,
    respuesta: "china",
    idpregunta: 100,
    correcta: false,
  },
  {
    idrespuesta: 401,
    respuesta: "asia",
    idpregunta: 101,
    correcta: true,
  },
  {
    idrespuesta: 402,
    respuesta: "oceania",
    idpregunta: 101,
    correcta: false,
  },
  {
    idrespuesta: 403,
    respuesta: "africa",
    idpregunta: 101,
    correcta: false,
  },
  {
    idrespuesta: 404,
    respuesta: "europa",
    idpregunta: 101,
    correcta: false,
  },
  {
    idrespuesta: 405,
    respuesta: "2800",
    idpregunta: 102,
    correcta: true,
  },
  {
    idrespuesta: 406,
    respuesta: "3000",
    idpregunta: 102,
    correcta: false,
  },
  {
    idrespuesta: 407,
    respuesta: "2700",
    idpregunta: 102,
    correcta: false,
  },
  {
    idrespuesta: 408,
    respuesta: "9000",
    idpregunta: 102,
    correcta: false,
  },
  {
    idrespuesta: 409,
    respuesta: "escala",
    idpregunta: 103,
    correcta: true,
  },
  {
    idrespuesta: 410,
    respuesta: "metro",
    idpregunta: 103,
    correcta: false,
  },
  {
    idrespuesta: 411,
    respuesta: "decametro",
    idpregunta: 103,
    correcta: false,
  },
  {
    idrespuesta: 412,
    respuesta: "medida",
    idpregunta: 103,
    correcta: false,
  },
  {
    idrespuesta: 413,
    respuesta: "imperial",
    idpregunta: 104,
    correcta: true,
  },
  {
    idrespuesta: 414,
    respuesta: "estatal",
    idpregunta: 104,
    correcta: false,
  },
  {
    idrespuesta: 415,
    respuesta: "aristotalico",
    idpregunta: 104,
    correcta: false,
  },
  {
    idrespuesta: 416,
    respuesta: "metro",
    idpregunta: 104,
    correcta: false,
  },
  {
    idrespuesta: 417,
    respuesta: "Mm",
    idpregunta: 105,
    correcta: true,
  },
  {
    idrespuesta: 418,
    respuesta: "Kg",
    idpregunta: 105,
    correcta: false,
  },
  {
    idrespuesta: 419,
    respuesta: "L",
    idpregunta: 105,
    correcta: false,
  },
  {
    idrespuesta: 420,
    respuesta: "g",
    idpregunta: 105,
    correcta: false,
  },
  {
    idrespuesta: 421,
    respuesta: "triangulo ",
    idpregunta: 106,
    correcta: true,
  },
  {
    idrespuesta: 422,
    respuesta: "circulo",
    idpregunta: 106,
    correcta: false,
  },
  {
    idrespuesta: 423,
    respuesta: "cuadrado",
    idpregunta: 106,
    correcta: false,
  },
  {
    idrespuesta: 424,
    respuesta: "rectangulo",
    idpregunta: 106,
    correcta: false,
  },
  {
    idrespuesta: 425,
    respuesta: "12",
    idpregunta: 107,
    correcta: true,
  },
  {
    idrespuesta: 426,
    respuesta: "24",
    idpregunta: 107,
    correcta: false,
  },
  {
    idrespuesta: 427,
    respuesta: "6",
    idpregunta: 107,
    correcta: false,
  },
  {
    idrespuesta: 428,
    respuesta: "31",
    idpregunta: 107,
    correcta: false,
  },
  {
    idrespuesta: 429,
    respuesta: "Euclides ",
    idpregunta: 108,
    correcta: true,
  },
  {
    idrespuesta: 430,
    respuesta: "Arquímedes ",
    idpregunta: 108,
    correcta: false,
  },
  {
    idrespuesta: 431,
    respuesta: "Pitágoras ",
    idpregunta: 108,
    correcta: false,
  },
  {
    idrespuesta: 432,
    respuesta: "Ninguno de los anteriores ",
    idpregunta: 108,
    correcta: false,
  },
  {
    idrespuesta: 433,
    respuesta: "205368",
    idpregunta: 109,
    correcta: true,
  },
  {
    idrespuesta: 434,
    respuesta: "25000368",
    idpregunta: 109,
    correcta: false,
  },
  {
    idrespuesta: 435,
    respuesta: "25368",
    idpregunta: 109,
    correcta: false,
  },
  {
    idrespuesta: 436,
    respuesta: "2053680",
    idpregunta: 109,
    correcta: false,
  },
  {
    idrespuesta: 437,
    respuesta: "Décimonoveno ",
    idpregunta: 110,
    correcta: true,
  },
  {
    idrespuesta: 438,
    respuesta: "Noveno ",
    idpregunta: 110,
    correcta: false,
  },
  {
    idrespuesta: 439,
    respuesta: "Decimotercero",
    idpregunta: 110,
    correcta: false,
  },
  {
    idrespuesta: 440,
    respuesta: "Décimo ",
    idpregunta: 110,
    correcta: false,
  },
  {
    idrespuesta: 441,
    respuesta: "Dividir entre 3",
    idpregunta: 111,
    correcta: true,
  },
  {
    idrespuesta: 442,
    respuesta: "Simplificar 3 cifras ",
    idpregunta: 111,
    correcta: false,
  },
  {
    idrespuesta: 443,
    respuesta: "Multiplicar por 3",
    idpregunta: 111,
    correcta: false,
  },
  {
    idrespuesta: 444,
    respuesta: "Restar 3 cifras ",
    idpregunta: 111,
    correcta: false,
  },
  {
    idrespuesta: 445,
    respuesta: "7670",
    idpregunta: 112,
    correcta: true,
  },
  {
    idrespuesta: 446,
    respuesta: "767",
    idpregunta: 112,
    correcta: false,
  },
  {
    idrespuesta: 447,
    respuesta: "70670",
    idpregunta: 112,
    correcta: false,
  },
  {
    idrespuesta: 448,
    respuesta: "7,67",
    idpregunta: 112,
    correcta: false,
  },
  {
    idrespuesta: 449,
    respuesta: "120 grados",
    idpregunta: 113,
    correcta: true,
  },
  {
    idrespuesta: 450,
    respuesta: "90 grados",
    idpregunta: 113,
    correcta: false,
  },
  {
    idrespuesta: 451,
    respuesta: "30 grados",
    idpregunta: 113,
    correcta: false,
  },
  {
    idrespuesta: 452,
    respuesta: "45 grados",
    idpregunta: 113,
    correcta: false,
  },
  {
    idrespuesta: 453,
    respuesta: "4 unidades ",
    idpregunta: 114,
    correcta: true,
  },
  {
    idrespuesta: 454,
    respuesta: "3 unidades",
    idpregunta: 114,
    correcta: false,
  },
  {
    idrespuesta: 455,
    respuesta: "14 unidades",
    idpregunta: 114,
    correcta: false,
  },
  {
    idrespuesta: 456,
    respuesta: "16 unidades",
    idpregunta: 114,
    correcta: false,
  },
  {
    idrespuesta: 457,
    respuesta: "9",
    idpregunta: 115,
    correcta: true,
  },
  {
    idrespuesta: 458,
    respuesta: "8",
    idpregunta: 115,
    correcta: false,
  },
  {
    idrespuesta: 459,
    respuesta: "10",
    idpregunta: 115,
    correcta: false,
  },
  {
    idrespuesta: 460,
    respuesta: "5",
    idpregunta: 115,
    correcta: false,
  },
  {
    idrespuesta: 461,
    respuesta: "",
    idpregunta: 116,
    correcta: true,
  },
  {
    idrespuesta: 462,
    respuesta: "",
    idpregunta: 116,
    correcta: false,
  },
  {
    idrespuesta: 463,
    respuesta: "",
    idpregunta: 116,
    correcta: false,
  },
  {
    idrespuesta: 464,
    respuesta: "",
    idpregunta: 116,
    correcta: false,
  },
  {
    idrespuesta: 465,
    respuesta: "Tales",
    idpregunta: 117,
    correcta: true,
  },
  {
    idrespuesta: 466,
    respuesta: "Pitágoras",
    idpregunta: 117,
    correcta: false,
  },
  {
    idrespuesta: 467,
    respuesta: "Euler",
    idpregunta: 117,
    correcta: false,
  },
  {
    idrespuesta: 468,
    respuesta: "Bayes",
    idpregunta: 117,
    correcta: false,
  },
  {
    idrespuesta: 469,
    respuesta: "8",
    idpregunta: 118,
    correcta: true,
  },
  {
    idrespuesta: 470,
    respuesta: "3",
    idpregunta: 118,
    correcta: false,
  },
  {
    idrespuesta: 471,
    respuesta: "4",
    idpregunta: 118,
    correcta: false,
  },
  {
    idrespuesta: 472,
    respuesta: "5",
    idpregunta: 118,
    correcta: false,
  },
  {
    idrespuesta: 473,
    respuesta: "3",
    idpregunta: 119,
    correcta: true,
  },
  {
    idrespuesta: 474,
    respuesta: "2",
    idpregunta: 119,
    correcta: false,
  },
  {
    idrespuesta: 475,
    respuesta: "9",
    idpregunta: 119,
    correcta: false,
  },
  {
    idrespuesta: 476,
    respuesta: "1",
    idpregunta: 119,
    correcta: false,
  },
  {
    idrespuesta: 477,
    respuesta: "(B+b)h/2",
    idpregunta: 120,
    correcta: true,
  },
  {
    idrespuesta: 478,
    respuesta: "(B-b)h/2",
    idpregunta: 120,
    correcta: false,
  },
  {
    idrespuesta: 479,
    respuesta: "B+b(h/2)",
    idpregunta: 120,
    correcta: false,
  },
  {
    idrespuesta: 480,
    respuesta: "(B*b+h)/2",
    idpregunta: 120,
    correcta: false,
  },
  {
    idrespuesta: 481,
    respuesta: "27",
    idpregunta: 121,
    correcta: true,
  },
  {
    idrespuesta: 482,
    respuesta: "3",
    idpregunta: 121,
    correcta: false,
  },
  {
    idrespuesta: 483,
    respuesta: "9",
    idpregunta: 121,
    correcta: false,
  },
  {
    idrespuesta: 484,
    respuesta: "18",
    idpregunta: 121,
    correcta: false,
  },
  {
    idrespuesta: 485,
    respuesta: "76",
    idpregunta: 122,
    correcta: true,
  },
  {
    idrespuesta: 486,
    respuesta: "32",
    idpregunta: 122,
    correcta: false,
  },
  {
    idrespuesta: 487,
    respuesta: "207",
    idpregunta: 122,
    correcta: false,
  },
  {
    idrespuesta: 488,
    respuesta: "91",
    idpregunta: 122,
    correcta: false,
  },
  {
    idrespuesta: 489,
    respuesta: "Roberto Recorde",
    idpregunta: 123,
    correcta: true,
  },
  {
    idrespuesta: 490,
    respuesta: "Carl Friedrich Gauss",
    idpregunta: 123,
    correcta: false,
  },
  {
    idrespuesta: 491,
    respuesta: "René Descartes",
    idpregunta: 123,
    correcta: false,
  },
  {
    idrespuesta: 492,
    respuesta: "Tales de Mileto",
    idpregunta: 123,
    correcta: false,
  },
  {
    idrespuesta: 493,
    respuesta: "Los chinos",
    idpregunta: 124,
    correcta: true,
  },
  {
    idrespuesta: 494,
    respuesta: "Los rusos",
    idpregunta: 124,
    correcta: false,
  },
  {
    idrespuesta: 495,
    respuesta: "Los ingleses",
    idpregunta: 124,
    correcta: false,
  },
  {
    idrespuesta: 496,
    respuesta: "Los japones",
    idpregunta: 124,
    correcta: false,
  },
  {
    idrespuesta: 497,
    respuesta: "Arquímedes",
    idpregunta: 125,
    correcta: true,
  },
  {
    idrespuesta: 498,
    respuesta: "Leonardo de Pisa",
    idpregunta: 125,
    correcta: false,
  },
  {
    idrespuesta: 499,
    respuesta: "Isaac Newton",
    idpregunta: 125,
    correcta: false,
  },
  {
    idrespuesta: 500,
    respuesta: "Gottfried Wilhelm Leibniz",
    idpregunta: 125,
    correcta: false,
  },
  {
    idrespuesta: 501,
    respuesta: "Aryabhatta, 458 d.C.",
    idpregunta: 126,
    correcta: true,
  },
  {
    idrespuesta: 502,
    respuesta: "Aryabhatta, 453 d.C.",
    idpregunta: 126,
    correcta: false,
  },
  {
    idrespuesta: 503,
    respuesta: "Aryabhatta, 459 d.C.",
    idpregunta: 126,
    correcta: false,
  },
  {
    idrespuesta: 504,
    respuesta: "Aryabhatta, 452 d.C.",
    idpregunta: 126,
    correcta: false,
  },
  {
    idrespuesta: 505,
    respuesta: "1",
    idpregunta: 127,
    correcta: true,
  },
  {
    idrespuesta: 506,
    respuesta: "-1",
    idpregunta: 127,
    correcta: false,
  },
  {
    idrespuesta: 507,
    respuesta: "0,1",
    idpregunta: 127,
    correcta: false,
  },
  {
    idrespuesta: 508,
    respuesta: "-0,1",
    idpregunta: 127,
    correcta: false,
  },
  {
    idrespuesta: 509,
    respuesta: "Periodicos",
    idpregunta: 128,
    correcta: true,
  },
  {
    idrespuesta: 510,
    respuesta: "Sucesivos",
    idpregunta: 128,
    correcta: false,
  },
  {
    idrespuesta: 511,
    respuesta: "Irracionales",
    idpregunta: 128,
    correcta: false,
  },
  {
    idrespuesta: 512,
    respuesta: "Imaginarios",
    idpregunta: 128,
    correcta: false,
  },
  {
    idrespuesta: 513,
    respuesta: "10 Abrazos ",
    idpregunta: 129,
    correcta: true,
  },
  {
    idrespuesta: 514,
    respuesta: "25 abrazos ",
    idpregunta: 129,
    correcta: false,
  },
  {
    idrespuesta: 515,
    respuesta: "5 abrazos ",
    idpregunta: 129,
    correcta: false,
  },
  {
    idrespuesta: 516,
    respuesta: "únicamente un abrazo ",
    idpregunta: 129,
    correcta: false,
  },
  {
    idrespuesta: 517,
    respuesta: "8/6/2023",
    idpregunta: 130,
    correcta: true,
  },
  {
    idrespuesta: 518,
    respuesta: "8/2/2023",
    idpregunta: 130,
    correcta: false,
  },
  {
    idrespuesta: 519,
    respuesta: "8/8/2023",
    idpregunta: 130,
    correcta: false,
  },
  {
    idrespuesta: 520,
    respuesta: "Ya vendió toda",
    idpregunta: 130,
    correcta: false,
  },
  {
    idrespuesta: 521,
    respuesta: "tan(X)=1/cot(X)",
    idpregunta: 131,
    correcta: true,
  },
  {
    idrespuesta: 522,
    respuesta: "sen(0)=cos(90°-X)",
    idpregunta: 131,
    correcta: false,
  },
  {
    idrespuesta: 523,
    respuesta: "csc(-X)=-csc(X)",
    idpregunta: 131,
    correcta: false,
  },
  {
    idrespuesta: 524,
    respuesta: "cos^2(X)+sen^2(X)=1",
    idpregunta: 131,
    correcta: false,
  },
  {
    idrespuesta: 525,
    respuesta: "Tangente",
    idpregunta: 132,
    correcta: true,
  },
  {
    idrespuesta: 526,
    respuesta: "Coseno",
    idpregunta: 132,
    correcta: false,
  },
  {
    idrespuesta: 527,
    respuesta: "Seno",
    idpregunta: 132,
    correcta: false,
  },
  {
    idrespuesta: 528,
    respuesta: "Secante",
    idpregunta: 132,
    correcta: false,
  },
  {
    idrespuesta: 529,
    respuesta: "",
    idpregunta: 133,
    correcta: true,
  },
  {
    idrespuesta: 530,
    respuesta: "",
    idpregunta: 133,
    correcta: false,
  },
  {
    idrespuesta: 531,
    respuesta: "",
    idpregunta: 133,
    correcta: false,
  },
  {
    idrespuesta: 532,
    respuesta: "",
    idpregunta: 133,
    correcta: false,
  },
  {
    idrespuesta: 533,
    respuesta: "y=ax+b",
    idpregunta: 134,
    correcta: true,
  },
  {
    idrespuesta: 534,
    respuesta: "y=ab + x",
    idpregunta: 134,
    correcta: false,
  },
  {
    idrespuesta: 535,
    respuesta: "y=x/ab",
    idpregunta: 134,
    correcta: false,
  },
  {
    idrespuesta: 536,
    respuesta: "y=ax/bx",
    idpregunta: 134,
    correcta: false,
  },
  {
    idrespuesta: 537,
    respuesta: "Leonardo Pisano",
    idpregunta: 135,
    correcta: true,
  },
  {
    idrespuesta: 538,
    respuesta: "Alan Turing",
    idpregunta: 135,
    correcta: false,
  },
  {
    idrespuesta: 539,
    respuesta: "Euclides",
    idpregunta: 135,
    correcta: false,
  },
  {
    idrespuesta: 540,
    respuesta: "Andrew Wiles",
    idpregunta: 135,
    correcta: false,
  },
  {
    idrespuesta: 541,
    respuesta: "4/3pr³",
    idpregunta: 136,
    correcta: true,
  },
  {
    idrespuesta: 542,
    respuesta: "3/4pr³",
    idpregunta: 136,
    correcta: false,
  },
  {
    idrespuesta: 543,
    respuesta: "4/5pr³",
    idpregunta: 136,
    correcta: false,
  },
  {
    idrespuesta: 544,
    respuesta: "3/2pr³",
    idpregunta: 136,
    correcta: false,
  },
  {
    idrespuesta: 545,
    respuesta: "5982568*10^-4",
    idpregunta: 137,
    correcta: true,
  },
  {
    idrespuesta: 546,
    respuesta: "5982568*10^4",
    idpregunta: 137,
    correcta: false,
  },
  {
    idrespuesta: 547,
    respuesta: "5982568*10^-3",
    idpregunta: 137,
    correcta: false,
  },
  {
    idrespuesta: 548,
    respuesta: "5982568*10^3",
    idpregunta: 137,
    correcta: false,
  },
  {
    idrespuesta: 549,
    respuesta: "23",
    idpregunta: 138,
    correcta: true,
  },
  {
    idrespuesta: 550,
    respuesta: "15",
    idpregunta: 138,
    correcta: false,
  },
  {
    idrespuesta: 551,
    respuesta: "12",
    idpregunta: 138,
    correcta: false,
  },
  {
    idrespuesta: 552,
    respuesta: "11",
    idpregunta: 138,
    correcta: false,
  },
  {
    idrespuesta: 553,
    respuesta: "Gottfried Leibniz",
    idpregunta: 139,
    correcta: true,
  },
  {
    idrespuesta: 554,
    respuesta: "Hermann Grassmann",
    idpregunta: 139,
    correcta: false,
  },
  {
    idrespuesta: 555,
    respuesta: "Johanes Kepler",
    idpregunta: 139,
    correcta: false,
  },
  {
    idrespuesta: 556,
    respuesta: "Enrique Weber",
    idpregunta: 139,
    correcta: false,
  },
  {
    idrespuesta: 557,
    respuesta: "Aryabhatta",
    idpregunta: 140,
    correcta: true,
  },
  {
    idrespuesta: 558,
    respuesta: "Banabhatta",
    idpregunta: 140,
    correcta: false,
  },
  {
    idrespuesta: 559,
    respuesta: "Dhanvantari",
    idpregunta: 140,
    correcta: false,
  },
  {
    idrespuesta: 560,
    respuesta: "Vetalbatiya",
    idpregunta: 140,
    correcta: false,
  },
  {
    idrespuesta: 561,
    respuesta: "6",
    idpregunta: 141,
    correcta: true,
  },
  {
    idrespuesta: 562,
    respuesta: "100",
    idpregunta: 141,
    correcta: false,
  },
  {
    idrespuesta: 563,
    respuesta: "500",
    idpregunta: 141,
    correcta: false,
  },
  {
    idrespuesta: 564,
    respuesta: "12",
    idpregunta: 141,
    correcta: false,
  },
  {
    idrespuesta: 565,
    respuesta: "Euclides",
    idpregunta: 142,
    correcta: true,
  },
  {
    idrespuesta: 566,
    respuesta: "Arquímedes",
    idpregunta: 142,
    correcta: false,
  },
  {
    idrespuesta: 567,
    respuesta: "Eratóstenes",
    idpregunta: 142,
    correcta: false,
  },
  {
    idrespuesta: 568,
    respuesta: "Pitágoras",
    idpregunta: 142,
    correcta: false,
  },
  {
    idrespuesta: 569,
    respuesta: "Número primo",
    idpregunta: 143,
    correcta: true,
  },
  {
    idrespuesta: 570,
    respuesta: "Entero",
    idpregunta: 143,
    correcta: false,
  },
  {
    idrespuesta: 571,
    respuesta: "Número compuesto",
    idpregunta: 143,
    correcta: false,
  },
  {
    idrespuesta: 572,
    respuesta: "Número perfecto",
    idpregunta: 143,
    correcta: false,
  },
];

const usuario = localStorage.getItem('user');
const datostorage = JSON.parse(localStorage.getItem('datos'));

//////informacion
/////////////////////////////
///obtener objetos de preguntas y de respuestas
const categorias = [
  {idcategoria: 1, nombrecategoria:'muy facil', valorcategoria: 50},
  {idcategoria: 2, nombrecategoria:'facil', valorcategoria: 100},
  {idcategoria: 3, nombrecategoria:'intermedia', valorcategoria: 150},
  {idcategoria: 4, nombrecategoria:'dificil', valorcategoria: 200},
  {idcategoria: 5, nombrecategoria:'muy dificil', valorcategoria: 300},
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

  }, 2500);

}

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
