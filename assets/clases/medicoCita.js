class Citas {
  crear(citaRese) {
    this.leerDatoPaciente(citaRese);
  }
  leerDatoPaciente(citaRese) {
  
    let today = new Date();
    let now = today.toLocaleDateString("en-GB");
    const infoCita = {
      idCita: citaRese.get("ci") + "-" + citaRese.get("pacienteci") + "-" + now,
      nombreMed: citaRese.get("nombreMed"),
      especialidadMed: citaRese.get("especialidadMed"),
      numeroFicha: citaRese.get("numeroFicha"),
      horaReseva: citaRese.get("horaReseva"),
      pacienteNom: citaRese.get("pacienteNom"),
      pacienteci: citaRese.get("pacienteci"),
      usuarioDoc: trifon,
      fecha: now,
      estadoPa: citaRese.get("estadoPa"),
      idCitasM: citaRese.get("ci"),
    };
    let citasLS;
    let otro;
    citasLS = this.obtenerCitaLocalStorage();
    let horasLS;
    let cambio;
    horasLS = this.obtenerHoraLocalStorage();
    citasLS.forEach(function (citaLS) {
      if (citaLS.idCita === infoCita.idCita) {
        otro = citaLS.idCita;
        citaLS.estadoPa = infoCita.estadoPa;
        citaLS.numeroFicha = infoCita.numeroFicha;
        citaLS.horaReseva = infoCita.horaReseva;
        citaLS.especialidadMed = infoCita.especialidadMed;
        citaLS.idCita = infoCita.idCita;
      }
    });

    horasLS.forEach(function (medicoLS) {
      if (medicoLS.id === infoCita.idCitasM) {
        cambio = medicoLS.idCitasM;
        medicoLS.estadoPa = "OCUPADO";
      }
    });
    if (otro === infoCita.idCita) {
      alert("Existe otro usuario");
      localStorage.setItem("citas", JSON.stringify(citasLS));
    } else {
      this.insertarCita(infoCita);
      localStorage.setItem("horas", JSON.stringify(horasLS));
    }
  }
  insertarCita(cita) {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${cita.idCita}</td>
    <td>Ficha:${cita.numeroFicha}   Hora:${cita.horaReseva}</td>
      <td>${cita.nombreMed}</td>
      <td>${cita.especialidadMed}</td>
      <td>${cita.pacienteNom}</td>
      <td>${cita.pacienteci}</td>
      <td>${cita.fecha}</td>
      <td>${cita.estadoPa}</td>
      <td>
          <a href="#" class="actualiza-medico fa fa-trash" ata-bs-toggle="modal" data-bs-target="#exampleModal"  data-id="${cita.idCita}"></a>
      </td>
    
  `;
    listaCita.appendChild(row);
    this.guardarCitaLocalStorage(cita);
  }

  eliminarCita(e) {
    e.preventDefault();
    let cita, medicoID;
    if (e.target.classList.contains("borrar-cita")) {
      e.target.parentElement.parentElement.remove();
      cita = e.target.parentElement.parentElement;
      medicoID = cita.querySelector("a").getAttribute("data-id");
    }
    this.eliminarCitaLocalStorage(medicoID);
  }
  actualizarMedico(e) {
    e.preventDefault();
    let medico, medicoID;
    if (e.target.classList.contains("actualiza-medico")) {
      medico = e.target.parentElement.parentElement;
      medicoID = medico.querySelector("a").getAttribute("data-id");
   
    
      console.log(medicoID);
    }
    this.actualizarMedicoLocalStorage(medicoID);
  }
  guardarCitaLocalStorage(cita) {
    let citas;
    citas = this.obtenerCitaLocalStorage();
    citas.push(cita);
    localStorage.setItem("citas", JSON.stringify(citas));
  }

  obtenerCitaLocalStorage() {
    let citaLS;
    if (localStorage.getItem("citas") === null) {
      citaLS = [];
    } else {
      citaLS = JSON.parse(localStorage.getItem("citas"));
    }
    return citaLS;
  }
  obtenerHoraLocalStorage() {
    let horaLS;
    if (localStorage.getItem("horas") === null) {
      horaLS = [];
    } else {
      horaLS = JSON.parse(localStorage.getItem("horas"));
    }
    return horaLS;
  }
  leerLocalStorage() {
    let citaLS;
    citaLS = this.obtenerCitaLocalStorage();
   
    citaLS.forEach(function (cita) {
   
      if (cita.usuarioDoc  === txtci && cita.estadoPa === "ESPERA") {
     
 const row = document.createElement("tr");
        row.innerHTML = `
      <td>${cita.idCita}</td>
      <td>Ficha:${cita.numeroFicha}   Hora:${cita.horaReseva}</td>
      <td>${cita.nombreMed}</td>
      <td>${cita.especialidadMed}</td>
      <td>${cita.pacienteNom}</td>
      <td>${cita.pacienteci}</td>
      <td>${cita.fecha}</td>
      <td>${cita.estadoPa}</td>
      <td>
          <a href="#" class=" actualiza-medico fa fa-trash" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${cita.idCita}"></a>
      </td>
    
  `;
        listaCita.appendChild(row);
        }
       
       
    });
  }

  insertarMedicoLS() {
    let medicoLS;
    medicoLS = this.obtenerHoraLocalStorage();
    medicoLS.forEach(function (medico) {
      if (medico.estadoPa === "PENDIENTE") {
        const row = document.createElement("tr");
        row.innerHTML = `
    <td>Ficha:${medico.numeroFicha}   Hora:${medico.horaReseva}</td>
      <td>${medico.nombreDoc}</td>
      <td>${medico.especialidadMed}</td>
      <td>${medico.estadoPa}</td>
      <td>
      <a href="#" class="actualiza-medico fa fa-calendar-check-o" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${medico.id}" ></a>
  </td>
  `;
        listahora.appendChild(row);
      }
    });
  }

  eliminarCitaLocalStorage(medicoID) {
    let citasLS, id;
    citasLS = this.obtenerCitaLocalStorage();

    let horasLS;
    horasLS = this.obtenerHoraLocalStorage();
    citasLS.forEach(function (citaLS, index) {
      if (citaLS.idCita === medicoID) {
        id = citaLS.idCitasM;
        citasLS.splice(index, 1);
      }
    });
    horasLS.forEach(function (horaLS, index) {
      if (horaLS.id === id) {
        horaLS.estadoPa = "PENDIENTE";
      }
    });
    localStorage.setItem("horas", JSON.stringify(horasLS));
    localStorage.setItem("citas", JSON.stringify(citasLS));
  }

  actualizarMedicoLocalStorage(medicoID) {
    let medicosLS;
    medicosLS = this.obtenerCitaLocalStorage();
    medicosLS.forEach(function (medicoLS, index) {
      if (medicoLS.idCita === medicoID) {
        lblnombreMedi.innerHTML = medicoLS.pacienteNom;
        lblpacienteci.innerHTML = medicoLS.pacienteci;
        lblfecha.innerHTML = medicoLS.fecha;
        lblEspecialidad.innerHTML = medicoLS.especialidadMed;
        lblficha.innerHTML = medicoLS.numeroFicha;
        lblreserva.innerHTML = medicoLS.horaReseva;
        citaRes.nombreMed.value = medicoLS.pacienteNom;
        citaRes.especialidadMed.value = medicoLS.especialidadMed;
        citaRes.numeroFicha.value = medicoLS.numeroFicha;
        citaRes.ci.value = medicoLS.pacienteci;
        citaRes.horaReseva.value = medicoLS.horaReseva;
        citaRes.fecha.value = medicoLS.fecha;
        citaRes.idCita.value = medicoLS.idCita;
        citaRes.idCitasM.value = medicoLS.idCitasM;
        citaRes.carnet.value = medicoLS.usuarioDoc;

        



      }
    });
  //  localStorage.setItem("horas", JSON.stringify(medicosLS));
  }
}
