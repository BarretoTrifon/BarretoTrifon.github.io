const newpaciente = new Paciente();
const citaResi = document.getElementById("formCita");
const citaPa = document.getElementById("formMed");
const usuarioPa = document.getElementById("usuarioPa");
const tipoPa = document.getElementById("tipoPa");
cargarEventos();
function cargarEventos() {
  citaPa.addEventListener("submit", (e) => {
    e.preventDefault();
    const paciente = new FormData(citaPa);
    newpaciente.crear(paciente);
  });
  const valores = window.location.search;
  const urlParams = new URLSearchParams(valores);
  const values = urlParams.values();
  for (const value of values) {
    console.log(value);
    document.addEventListener(
      "DOMContentLoaded",
      newpaciente.actualizarMedicoLocalStorage(value)
    );
    document.addEventListener(
      "DOMContentLoaded",
      newpaciente.inicioSesion(value)
    );
  }
}
