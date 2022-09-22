// https://fontawesome.com/v4/icons/
const navToggle = document.querySelector(".g");
const navMenu = document.querySelector(".collapse");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("mostrar");

  if (navMenu.classList.contains("mostrar")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

const $btnSignIn = document.querySelector(".sign-in-btn"),
  $btnSignIni = document.getElementById("sign-up-btni"),
  $btnSignUp = document.querySelector(".sign-up-btn"),
  $signUp = document.querySelector(".sign-up"),
  $signUpi = document.getElementById("sign-upi"),
  $signUni = document.getElementById("sign-uni"),
  $texto = document.getElementById("txtnom"),
  $nombre = document.getElementById("nombre"),
  $signIn = document.querySelector(".sign-in");

document.addEventListener("click", (e) => {
  if (e.target === $btnSignIn || e.target === $btnSignUp) {
    $signIn.classList.toggle("active");
    $signUp.classList.toggle("active");
    if (e.target === $btnSignIn && $texto.value !== "") {
      $signUpi.classList.add("active");
      $signUni.classList.add("active");
      $btnSignIni.innerHTML =
        "<i class='fa fa-refresh' aria-hidden='true'></i> Reiniciar sesion";
      let usuario = $texto.value;
      $nombre.innerHTML =
        "Bienvenido  " + usuario + "   <i class='fas fa-user'></i>";
    } else {
      $signUpi.classList.remove("active");
      $signUni.classList.remove("active");
    }
  }
});

let mensagex = document.getElementById("mensage");
let conversory = document.getElementById("conversor");
let elegirz = document.getElementById("elegir");
let btnreg = document.getElementById("btnreg");
let btnmon = document.getElementById("btnmon");
const registro = () => {
  mensagex.style.left = "0px";
  conversory.style.left = "950px";
  elegirz.style.left = "0px";
  btnreg.classList.add("miBoton");
  btnreg.classList.remove("miBotonNul");
  btnmon.classList.add("miBotonNul");
};
const moneda = () => {
  mensagex.style.left = "-950px";
  conversory.style.left = "0px";
  conversory.style.width = "100%";
  elegirz.style.left = "0px";
  btnreg.classList.add("miBotonNul");
  btnreg.classList.remove("miBoton");
  btnmon.classList.remove("miBotonNul");
  btnmon.classList.add("miBoton");
};

conversory.addEventListener("submit", (e) => {
  e.preventDefault();
  cambioMo();
});
const cambioMo = () => {
  let valor = parseInt(document.getElementById("valorMo").value),
    dolar = document.getElementById("dolar"),
    euro = document.getElementById("euro"),
    real = document.getElementById("real"),
    cantidad = document.getElementById("cantidad"),
    resultado = 0,
    mdolar = 6.96,
    meuro = 10.5,
    mreal = 2.5;

  if (dolar.checked) {
    resultado = valor * mdolar;

    cantidad.innerHTML = "  " + resultado.toFixed(2) + "  Bs";
  } else if (euro.checked) {
    resultado = valor * meuro;
    cantidad.innerHTML = "  " + resultado.toFixed(2) + "  Bs";
  } else if (real.checked) {
    resultado = valor * mreal;
    cantidad.innerHTML = "  " + resultado.toFixed(2) + "  Bs";
  } else {
    alert("Ingrese algun dato");
  }
};

const radioB = () => {
  let tMo = document.getElementById("tipoM");
  if (document.getElementById("dolar").checked) {
    tMo.innerHTML = "en Dolares";
  } else if (document.getElementById("euro").checked) {
    tMo.innerHTML = "en Euros";
  } else if (document.getElementById("real").checked) {
    tMo.innerHTML = "en Reales";
  } else {
    alert("Ingrese algun dato");
  }
};
