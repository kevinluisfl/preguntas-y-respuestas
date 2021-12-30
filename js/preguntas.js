const usuario = localStorage.getItem('user').toUpperCase();
const datostorage = JSON.parse(localStorage.getItem('datos'));

const titulo = document.querySelector('h1');
const btnRetiro = document.querySelector('#btnretiro');

///contador de tiempo
var t = document.querySelector('#tiempo');
var n = 0;
var ban = true;
window.setInterval(function(){
  if(ban){
    n++;
    t.innerHTML = n;
    }
},1000);
////

var historial=[];
if(localStorage.getItem('datos') === null){
    console.log("NO existe datos");
}else{
    historial = datostorage;
}


var datos = {
    user: usuario,
    puntos: 0,
    tiempo: 0,
    fecha: ''
}

var {user, puntos, tiempo, fecha} = datos;

titulo.textContent= `Hola ${usuario}, Escoge la opción correcta`;

btnRetiro.addEventListener("click", ()=>{
  /////PREGUNTAR POR LOS PUNTOS, PARA QUE NO GUARDE CON 0 PTS
  ////SI SE RETIRA EN LA PRIMERA LO LLEVE AL INICIO
    Swal.fire({
        title: 'Desea retirarse?',
        html: `El juego terminará con el siguiente acumulado: <br>
        <b>${puntos} puntos</b> y un tiempo de <b>${n} segundos</b>`,
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
          datos= {...datos, tiempo: n, fecha: date.toLocaleString()};
          ///pasar datos al historial
          historial.push(datos);
          localStorage.removeItem('datos');
          ////pasar datos al localstorage
          localStorage.setItem('datos', JSON.stringify(historial));
          ////redireccionar al page ganadores
          window.location="./ganadores.html";
          localStorage.removeItem('user');
        }
      })
})

