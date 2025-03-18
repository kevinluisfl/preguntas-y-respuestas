const btnComenza = document.getElementById("btncomenzar");
const btnCargarData = document.getElementById("btncargardata");
const btnBorrarData = document.getElementById("btnborrardata");

const preguntas = sessionStorage.getItem('preguntas_');
const respuestas = sessionStorage.getItem('respuestas_');

if(!preguntas && !respuestas){
  btnCargarData.removeAttribute('disabled');
  btnComenza.setAttribute('disabled','');
} else{
  btnBorrarData.removeAttribute('disabled');
}

///CARGA AUTOMATICA DEL JSON EN EL CODIGO (PARA NO COPIAR Y PEGAR MANUAL)
let data_=[];
fetch('../json/data_trivia.json') // Ruta relativa al JSON
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error al cargar JSON: ${response.status}`);
    }
    return response.json();
  })
  .then(json => {
    data_ = json; // Asignar los datos a la variable
    console.log(data_); // Mostrar en la consola
  })
  .catch(error => console.error('Error:', error));

  
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
