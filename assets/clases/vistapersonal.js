const newpaciente = new Paciente();


const usuarioPa = document.getElementById('usuarioPa');
const tipoPa = document.getElementById('tipoPa');
cargarEventos();

function cargarEventos(){
  
  const valores = window.location.search;
  const urlParams = new URLSearchParams(valores);
  const values = urlParams.values();
 
for (const value of values) {
  console.log(value); 
 // usuarioPa.innerHTML = value;
  document.getElementById("pacienteci").value = value;
  document.addEventListener('DOMContentLoaded', newpaciente.inicioSesion(value));
} 
   

}