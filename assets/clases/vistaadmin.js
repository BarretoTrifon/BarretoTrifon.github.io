const doctor = new registroMedico();
const medicoList = document.querySelector("#tabMedico");
const medicoLista = document.querySelector("#tabMedico");
const horaLista = document.querySelector("#tabHora");
const medicos = document.getElementById("formMedico");
const medicosU = document.getElementById("formMedU");
const listaMedico = document.querySelector("#lista-medi tbody");
const listahora = document.querySelector("#lista-hora tbody");
const regis = document.getElementById("btnReg");
const procesarPedidoBtn = document.getElementById("procesar-pedido");
const lblnombre = document.getElementById("lblnombre");
 
cargarEventos();

function cargarEventos() {
  medicos.addEventListener("submit", (e) => {
    e.preventDefault();
    const medico = new FormData(medicos);
    doctor.crear(medico);
  });

  //Cuando se elimina productos del carrito
  medicoList.addEventListener("click", (e) => {
    doctor.eliminarMedico(e);
  });
  medicoLista.addEventListener("click", (e) => {
    doctor.actualizarMedico(e);
  });
  horaLista.addEventListener("click", (e) => {
    doctor.actualizarHora(e);
  });
  //Al vaciar carrito
  //  vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});
  horaLista.addEventListener("click", (e) => {
    doctor.eliminarHora(e);
  });
  //Al cargar documento se muestra lo almacenado en LS
  document.addEventListener("DOMContentLoaded", doctor.leerLocalStorage());
  document.addEventListener("DOMContentLoaded", doctor.insertarMedicoLS());
  //Enviar pedido a otra pagina
  //   procesarPedidoBtn.addEventListener('click', (e)=>{carro.procesarPedido(e)});
}
