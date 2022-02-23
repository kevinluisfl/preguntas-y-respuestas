const datostorage = JSON.parse(localStorage.getItem('datos'));
const tabla = document.querySelector('#tablapuntajes');
const btnBorrar = document.querySelector('#btnborrartodo');

document.addEventListener("onload",()=>{
    localStorage.removeItem('user');
})

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
        let numberone = 1;
        for(let dato of datos){
            let fila = `<tr>`;
            if(numberone == 1){
                fila += `<td style="font-size:1.5em;">&#x1F451; &#x1F947;${dato.user}</td>`;
                fila += `<td>${dato.ronda}</td>`;
                fila += `<td>${dato.puntos}</td>`;
                fila += `<td>${dato.tiempo}</td>`;
                fila += `<td>${dato.fecha}</td>`;
                fila += `</tr>`;
                numberone++;
            }else if(numberone == 2){
                fila += `<td style="font-size:1.3em;">&#x1F948;${dato.user}</td>`;
                fila += `<td>${dato.ronda}</td>`;
                fila += `<td>${dato.puntos}</td>`;
                fila += `<td>${dato.tiempo}</td>`;
                fila += `<td>${dato.fecha}</td>`;
                fila += `</tr>`;
                numberone++;
            }else if(numberone == 3){
                fila += `<td style="font-size:1em;">&#x1F949;${dato.user}</td>`;
                fila += `<td>${dato.ronda}</td>`;
                fila += `<td>${dato.puntos}</td>`;
                fila += `<td>${dato.tiempo}</td>`;
                fila += `<td>${dato.fecha}</td>`;
                fila += `</tr>`;
                numberone++;
            }else{
                fila += `<td style="font-size:0.9em;">${dato.user}</td>`;
                fila += `<td>${dato.ronda}</td>`;
                fila += `<td>${dato.puntos}</td>`;
                fila += `<td>${dato.tiempo}</td>`;
                fila += `<td>${dato.fecha}</td>`;
                fila += `</tr>`;
            }
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
