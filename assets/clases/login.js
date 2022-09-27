const newpaciente = new Paciente();

const medicoList = document.querySelector("#tabMedico");
const medicoLista = document.querySelector("#tabMedico");

const pacientes = document.getElementById("formMed");
const loginpacientes = document.getElementById("loginU");

const listaMedico = document.querySelector("#lista-medico tbody");
const regis = document.getElementById("btnReg");

cargarEventos();

function cargarEventos() {
  pacientes.addEventListener("submit", (e) => {
    e.preventDefault();

    const paciente = new FormData(pacientes);

    newpaciente.crear(paciente);
  });
  loginpacientes.addEventListener("submit", (e) => {
    e.preventDefault();

    const loginpaciente = new FormData(loginpacientes);

    newpaciente.logincrear(loginpaciente);
  });
}
