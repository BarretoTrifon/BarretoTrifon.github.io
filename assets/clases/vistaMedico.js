const citaMedica = new Citas();
const medicoList = document.querySelector("#tabMedico");
const medicoLista = document.querySelector("#tabCita");
const horaLista = document.querySelector("#tabHora");
const citaRes = document.getElementById("formCita");
const listaCita = document.querySelector("#lista-cita tbody");
const listahora = document.querySelector("#lista-hora tbody");
const regis = document.getElementById("btnReg");
const lblnombreMedi = document.getElementById("lblnombreMedi");
const lblEspecialidad = document.getElementById("lblEspecialidad");
const lblficha = document.getElementById("lblficha");
const lblfecha = document.getElementById("lblfecha");
 
const lblpacienteci = document.getElementById("lblpacienteci");
const lblreserva = document.getElementById("lblreserva");
 
const txtci = document.getElementById("pacienteci").value;
const carnet = document.getElementById("carnet").value;

cargarEventos();

function cargarEventos() {
  citaRes.addEventListener("submit", (e) => {
    e.preventDefault();
    const citaRese = new FormData(citaRes);
    citaMedica.crear(citaRese);
  });
  citaRes.addEventListener("submit", (e) => {
    e.preventDefault();
    const medicos = new FormData(medicosU);
    citaMedica.guardaMedicoLocalStorage(medicos);
  });

  medicoLista.addEventListener("click", (e) => {
    citaMedica.actualizarMedico(e);
  });
  horaLista.addEventListener("click", (e) => {
    citaMedica.actualizarMedico(e);
  });
  document.addEventListener("DOMContentLoaded", citaMedica.insertarMedicoLS());
  document.addEventListener("DOMContentLoaded", citaMedica.leerLocalStorage());
}
