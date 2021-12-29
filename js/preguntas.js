const usuario = localStorage.getItem('user').toUpperCase();
const titulo = document.querySelector('h1');
const btnRetiro = document.querySelector('#btnretiro');
const puntos = 0;
const tiempo = 0;

titulo.textContent= `Hola ${usuario}, Escoge la opción correcta`;

btnRetiro.addEventListener("click", ()=>{
    Swal.fire({
        title: 'Desea retirarse?',
        html: `El juego terminará con el siguiente acumulado: <br>
        <b>${puntos} puntos</b> y un tiempo de <b>${tiempo} segundos</b>`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, retirarme!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Juego terminado!',
            text: `Te has retirado ${usuario}`,
            icon:'info',
          })
          window.location="./ganadores.html";
        }
      })
    localStorage.removeItem('user');
})