const btnComenza = document.querySelector("#btncomenzar");
const btnCargarData = document.getElementById("btncargardata");
const btnBorrarData = document.getElementById("btnborrardata");

const preguntas = sessionStorage.getItem('preguntas_');
const respuestas = sessionStorage.getItem('respuestas_');

if(!preguntas || !respuestas){
  btnCargarData.removeAttribute('disabled');
  btnComenza.setAttribute('disabled','');
} else{
  btnBorrarData.removeAttribute('disabled');
}

///EJEMPLO DE CÓMO ORGANIZAR LAS PREGUNTAS Y RESPUESTAS (PEGAR DATOS JSON)
  let data_=[
    ['¿Cuánto es 5 × 7?  ', '', '35  ', '30  ', '40  ', '45  ',1],
    ['¿Cuánto es 72 ÷ 8?  ', '', '9  ', '7  ', '8  ', '10  ',1],
    ['¿Cuál es el valor de 3² (tres al cuadrado)?  ', '', '9  ', '3  ', '6  ', '12  ',1],
    ['¿Cuántos lados tiene un octágono?  ', '', '8  ', '6  ', '7  ', '9  ',1],
    ['¿Cuál es la suma de los ángulos internos de un triángulo?  ', '', '180°  ', '90°  ', '120°  ', '360°  ',1],
    ['Si tienes 2 docenas de huevos, ¿cuántos huevos tienes en total?  ', '', '24  ', '12  ', '36  ', '48  ',1],
    ['¿Cuánto es la mitad de 500?  ', '', '250  ', '100  ', '200  ', '300  ',1],
    ['Si un año tiene 12 meses, ¿cuántos meses hay en 5 años?  ', '', '60  ', '48  ', '50  ', '72  ',1],
    ['¿Cuánto es 3/4 de 40?  ', '', '30  ', '25  ', '35  ', '40  ',1],
    ['Un reloj marca las 3:15 p.m. ¿Cuántos minutos faltan para las 4:00 p.m.?  ', '', '45  ', '30  ', '35  ', '40  ',1],
    ['¿Cuál es el valor numérico de 3x + 2 si x = 4?  ', '', '14  ', '10  ', '12  ', '16  ',2],
    ['Si un rectángulo tiene una base de 8 cm y una altura de 6 cm, ¿cuál es su perímetro?  ', '', '28  ', '24  ', '30  ', '32  ',2],
    ['Un tren viaja a 60 km/h. ¿Cuántos kilómetros recorrerá en 3 horas y media?  ', '', '210  ', '180  ', '200  ', '220  ',2],
    ['¿Cuál es la representación decimal de 3/5?  ', '', '0.6  ', '0.4  ', '0.5  ', '0.7  ',2],
    ['Un número es el triple de otro y juntos suman 48. ¿Cuáles son los números?  ', '', '12 y 36  ', '10 y 30  ', '15 y 45  ', '14 y 42  ',2],
    ['Un tanque de agua tiene 500 litros y se vacían 25 litros por minuto. ¿Cuánto tiempo tarda en vaciarse completamente?  ', '', '20  ', '15  ', '18  ', '25  ',2],
    ['Si un ángulo mide 70°, ¿cuánto mide su suplemento?  ', '', '110°  ', '100°  ', '120°  ', '130°  ',2],
    ['¿Cuál es el área de un círculo con radio de 7 cm? (Usa π ≈ 3.14)  ', '', '153.86 cm²  ', '154 cm²  ', '155 cm²  ', '156 cm²  ',2],
    ['Un agricultor cosecha 600 kg de café. Si vende el 75%, ¿cuántos kilogramos vende?  ', '', '450 kg  ', '400 kg  ', '500 kg  ', '550 kg  ',2],
    ['Si un número es múltiplo de 6 y de 8, ¿cuál de estos valores es correcto?  ', '', '24  ', '18  ', '30  ', '32  ',2],
    ['¿Cuál es el 50% de 180?  ', '', '90  ', '80  ', '85  ', '95  ',3],
    ['Un número es 4 veces mayor que otro y la suma de ambos es 60. ¿Cuáles son los números?  ', '', '12 y 48  ', '10 y 40  ', '15 y 45  ', '20 y 40  ',3],
    ['Un cuadrado tiene un área de 144 cm². ¿Cuánto mide su perímetro?  ', '', '48 cm  ', '36 cm  ', '44 cm  ', '52 cm  ',3],
    ['Una empresa gasta 25% de su presupuesto mensual en publicidad. Si su presupuesto es $800,000, ¿cuánto gasta en publicidad?  ', '', '$200,000  ', '$100,000  ', '$150,000  ', '$250,000  ',3],
    ['Un prisma rectangular tiene una base de 10 cm x 8 cm y una altura de 5 cm. ¿Cuál es su volumen?  ', '', '400 cm³  ', '350 cm³  ', '450 cm³  ', '500 cm³  ',3],
    ['Un comerciante vende un producto en $6000 con un descuento del 20%. ¿Cuánto debe pagar el cliente?  ', '', '$4800  ', '$4200  ', '$4500  ', '$5000  ',3],
    ['Si en una fábrica trabajan 120 empleados y 2/3 de ellos son operarios, ¿cuántos operarios hay?  ', '', '80  ', '60  ', '70  ', '90  ',3],
    ['En un terreno rectangular de 20 m x 30 m, se quiere construir un camino de 2 metros de ancho alrededor. ¿Cuánto mide el área del camino?  ', '', '168 m²  ', '148 m²  ', '160 m²  ', '176 m²  ',3],
    ['Si una camisa cuesta $80,000 y tiene un descuento del 15%, ¿cuánto cuesta después del descuento?  ', '', '$68,000  ', '$65,000  ', '$66,500  ', '$70,000  ',3],
    ['Un tanque tiene 120 litros de agua y se vacía a razón de 5 litros por minuto. ¿Cuánto tiempo tarda en vaciarse completamente?  ', '', '24 minutos  ', '20 minutos  ', '22 minutos  ', '26 minutos  ',3],
    ['Un trapecio tiene bases de 10 cm y 6 cm, y su altura es 4 cm. ¿Cuál es su área?  ', '', '32 cm²  ', '24 cm²  ', '28 cm²  ', '36 cm²  ',4],
    ['¿Cuál de estos números es primo?  ', '', '37  ', '21  ', '27  ', '39  ',4],
    ['En un triángulo rectángulo, los catetos miden 9 cm y 12 cm. ¿Cuál es la hipotenusa?  ', '', '15 cm  ', '14 cm  ', '16 cm  ', '17 cm  ',4],
    ['Un cubo tiene un volumen de 125 cm³. ¿Cuánto mide su arista?  ', '', '5 cm  ', '4 cm  ', '6 cm  ', '7 cm  ',4],
    ['Un comerciante compra un producto a $40,000 y lo vende con una ganancia del 30%. ¿A cuánto lo vende?  ', '', '$52,000  ', '$48,000  ', '$50,000  ', '$54,000  ',4],
    ['Una piscina tiene 1000 litros de agua y pierde 2 litros por minuto. ¿Cuánto tardará en vaciarse completamente?  ', '', '500 min  ', '450 min  ', '475 min  ', '525 min  ',4],
    ['Si un ángulo mide x y su complemento es 35°, ¿cuánto vale x?  ', '', '55°  ', '50°  ', '60°  ', '65°  ',4],
    ['Una persona tiene $250,000 y gasta 40% en comida. ¿Cuánto dinero le queda?  ', '', '$150,000  ', '$120,000  ', '$130,000  ', '$140,000  ',4],
    ['¿Cuántos segundos hay en 2 horas y media?  ', '', '9000  ', '7000  ', '8000  ', '9500  ',4],
    ['Un terreno cuadrado tiene 625 m² de área. ¿Cuánto mide cada lado?  ', '', '25 m  ', '22 m  ', '24 m  ', '26 m  ',4],
    ['Si un tanque de 200 litros pierde 8 litros por hora, ¿cuántas horas tardará en vaciarse completamente?  ', '', '25  ', '20  ', '22  ', '26  ',5],
    ['¿Cuánto mide la diagonal de un cuadrado con lados de 6 cm?  ', '', '6√2 cm  ', '7√2 cm  ', '8√2 cm  ', '9√2 cm  ',5],
    ['La media de los números 4, 6, 8, 10 y 12 es:  ', '', '8  ', '6  ', '7  ', '9  ',5],
    ['En una inversión de $500,000, se gana un interés del 12% anual. ¿Cuánto se gana en un año?  ', '', '$60,000  ', '$50,000  ', '$55,000  ', '$65,000  ',5],
    ['Un rectángulo tiene largo el doble del ancho y su área es 98 cm². ¿Cuáles son sus dimensiones?  ', '', '7 cm × 14 cm  ', '8 cm × 16 cm  ', '9 cm × 18 cm  ', '10 cm × 20 cm  ',5],
    ['Una tienda vende 350 productos a $12,000 cada uno. ¿Cuánto es la venta total?  ', '', '$4,200,000  ', '$4,000,000  ', '$4,500,000  ', '$4,800,000  ',5],
    ['Un tren viaja a 80 km/h. ¿Cuántos kilómetros recorre en 3 horas y media?  ', '', '280 km  ', '240 km  ', '260 km  ', '300 km  ',5],
    ['Si una persona camina 5 km en una hora, ¿cuánto tardará en recorrer 12 km al mismo ritmo?  ', '', '2.4 horas  ', '2.2 horas  ', '2.5 horas  ', '2.6 horas  ',5],
    ['¿Cuántos minutos hay en 1 día y medio?  ', '', '2160  ', '1800  ', '2000  ', '2100  ',5],
    ['Si una llanta da 500 vueltas en un kilómetro, ¿cuántas vueltas dará en 10 km?  ', '', '5000  ', '4000  ', '4500  ', '5500  ',5],
    ]
  
  ///CREAR PREGUNTAS Y RESPUESTAS
  /*{idpregunta: 1, pregunta:'¿?', idcategoria: 1, alt: '', url:'https'},
  {idrespuesta: 1, respuesta:'', idpregunta: 1, correcta: true},*/

  ///FUNCIONA PARA CREAR DATA DE PREGUNTAS Y RESPUESTAS SEPARADAS
  function CrearData_ (data_){
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

  btnCargarData.addEventListener("click", ()=>{
    CrearData_(data_);
    location.reload();
  })
  
  btnBorrarData.addEventListener("click", ()=>{
    sessionStorage.removeItem('preguntas_');
    sessionStorage.removeItem('respuestas_');
    location.reload();
  })
