const citaMedica = new Cita();
const medicoList = document.querySelector("#tabMedico");
const medicoLista = document.querySelector("#tabCita");
const horaLista = document.querySelector("#tabHora");
const citaRes = document.getElementById("formCita");
const listaCita = document.querySelector("#lista-cita tbody");
const listahora = document.querySelector("#lista-hora tbody");
const regis = document.getElementById("btnReg");
const lblnombreMed = document.getElementById("lblnombreMed");
const lblEspecialidad = document.getElementById("lblEspecialidad");
const lblficha = document.getElementById("lblficha");
const lblreserva = document.getElementById("lblreserva");

const txtci = document.getElementById("pacienteci").value;
 
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
    citaMedica.eliminarCita(e);
  });
  horaLista.addEventListener("click", (e) => {
    citaMedica.actualizarMedico(e);
  });
  document.addEventListener("DOMContentLoaded", citaMedica.insertarMedicoLS());
  document.addEventListener("DOMContentLoaded", citaMedica.leerLocalStorage());
}
