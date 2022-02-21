const datostorage = JSON.parse(localStorage.getItem('datos'));
const tabla = document.querySelector('#tablapuntajes');
const btnBorrar = document.querySelector('#btnborrartodo');

if(datostorage){
    datostorage.sort((a,b)=>{
        if(a.puntos < b.puntos){
            return 1;
        } else if(a.puntos > b.puntos){
            return -1;
        }else {
            if(a.tiempo < b.tiempo){
                return -1;
            } else if(a.tiempo > b.tiempo){
                return 1;
            }else {
                return 0;
            }
        }
    })
}

console.log(datostorage);

let creaTabla = function(datos){
    let cabecera = `<tr><th>Usuario</th>
                    <th>Rondas</th>
                    <th>Puntos</th>
                    <th>Tiempo (s)</th>
                    <th>Fecha</th></tr>`;
    if(datos){
        for(let dato of datos){
            let fila = `<tr>`;
            fila += `<td>${dato.user}</td>`;
            fila += `<td>${dato.ronda}</td>`;
            fila += `<td>${dato.puntos}</td>`;
            fila += `<td>${dato.tiempo}</td>`;
            fila += `<td>${dato.fecha}</td>`;
            fila += `</tr>`
            cabecera += fila;
        }
    }else{
        cabecera += `No hay registros`;
    }
    return cabecera;
}

tabla.innerHTML = creaTabla(datostorage);

btnBorrar.addEventListener("click", ()=>{
    Swal.fire({
        title: 'Borrar todos los datos?',
        text: `Se vaciara todo el historial`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar todo!'
      }).then((result) => {
        if (result.isConfirmed) {
          if(localStorage.getItem('datos') === null){
            Swal.fire({
                title: 'Se ha borrado todo!',
                text: `No hay historial de datos`,
                icon:'info',
              })
          }else{
              localStorage.removeItem('datos');
              window.location="./puntajes.html";
          }
        }
      })
})