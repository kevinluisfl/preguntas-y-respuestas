
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
        console.log(user.value);
        localStorage.setItem('user',user.value);
        window.location="preguntas.html";
    }

})

