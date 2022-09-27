class registroMedico {
  crear(medico) {
    this.leerDatoMedico(medico);
  }
  leerDatoMedico(medico) {
    // let codigo = this.generarID();
    // const codigo = () => Math.random().toString(36).substr(2, 18);
    //let mio = codigo();
    const infoMedico = {
      nombreDoc: medico.get("nombreDoc"),
      especialidadMed: medico.get("especialidadMed"),
      numeroFicha: medico.get("numeroFicha"),
      ci: medico.get("ci"),
      horaReseva: medico.get("horaReseva"),
      estadoPa: medico.get("estadoPa"),
      id: medico.get("numeroFicha") + "-" + medico.get("ci"),
    };
    let horasLS;
    let otro;
    horasLS = this.obtenerHoraLocalStorage();
    console.log(horasLS);
    horasLS.forEach(function (horaLS) {
      if (horaLS.id === infoMedico.id) {
        otro = horaLS.id;
        horaLS.estadoPa = infoMedico.estadoPa;
        horaLS.numeroFicha = infoMedico.numeroFicha;
        horaLS.horaReseva = infoMedico.horaReseva;
        horaLS.especialidadMed = infoMedico.especialidadMed;
        horaLS.id = infoMedico.id;
      }
    });
    if (otro === infoMedico.id) {
      localStorage.setItem("horas", JSON.stringify(horasLS));
    } else {
      this.insertarMedico(infoMedico);
    }
  }
 
  insertarMedico(medico) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${medico.id}</td>
      <td>${medico.nombreDoc}</td>
      <td>${medico.especialidadMed}</td>
      <td>${medico.numeroFicha}</td>
      <td>${medico.ci}</td>
      <td>${medico.horaReseva}</td>
      <td>${medico.estadoPa}</td>
      <td>
          <a href="#" class="borrar-hora fa fa-trash-o" data-id="${medico.id}"></a>
      </td>
      <td>
      <a href="#" class="actualiza-hora fas fa-times-circle" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${medico.id}" ><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>
  </td>
  `;
    listahora.appendChild(row);
    this.guardarHoraLocalStorage(medico);
  }

  eliminarHora(e) {
    e.preventDefault();
    let medico, medicoID;
    if (e.target.classList.contains("borrar-hora")) {
      e.target.parentElement.parentElement.remove();
      medico = e.target.parentElement.parentElement;
      medicoID = medico.querySelector("a").getAttribute("data-id");
    }
    this.eliminarHoraLocalStorage(medicoID);
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

  actualizarHora(e) {
    e.preventDefault();
    let medico, medicoID;
    if (e.target.classList.contains("actualiza-hora")) {
      medico = e.target.parentElement.parentElement;
      medicoID = medico.querySelector("a").getAttribute("data-id");
      console.log(medicoID);
    }
    this.actualizarMedicoSLocalStorage(medicoID);
  }

  guardarHoraLocalStorage(medico) {
    let horas;
    horas = this.obtenerHoraLocalStorage();
    horas.push(medico);
    localStorage.setItem("horas", JSON.stringify(horas));
  }

  obtenerMedicoLocalStorage() {
    let medicoLS;
    if (localStorage.getItem("medicos") === null) {
      medicoLS = [];
    } else {
      medicoLS = JSON.parse(localStorage.getItem("medicos"));
    }
    return medicoLS;
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
  obtenerPacienteLocalStorage() {
    let medicoLS;
    if (localStorage.getItem("pacientes") === null) {
      medicoLS = [];
    } else {
      medicoLS = JSON.parse(localStorage.getItem("pacientes"));
    }
    return medicoLS;
  }
  leerLocalStorage() {
    let medicoLS;
    medicoLS = this.obtenerPacienteLocalStorage();
    medicoLS.forEach(function (medico) {
      if (medico.tipoP === "MEDICO") {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${medico.nombreDoc}</td>
      <td>${medico.apellidoDoc}</td>
      <td>${medico.apellidoDocm}</td>
      <td>${medico.ci}</td>
      <td>${medico.tipoP}</td>
      <td>
          <a href="#" class="borrar-medico fa fa-pencil-square-o" data-id="${medico.ci}"></a>
      </td>
      <td>
      <a href="#" class="actualiza-medico fa fa-address-card-o"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${medico.ci}"></a>
  </td>
  `;
        listaMedico.appendChild(row);
      }
    });
  }

  insertarMedicoLS() {
    let medicoLS;
    medicoLS = this.obtenerHoraLocalStorage();
    medicoLS.forEach(function (medico) {
      const row = document.createElement("tr");
      row.innerHTML = `
    <td>${medico.id}</td>
      <td>${medico.nombreDoc}</td>
      <td>${medico.especialidadMed}</td>
      <td>${medico.numeroFicha}</td>
      <td>${medico.ci}</td>
      <td>${medico.horaReseva}</td>
      <td>${medico.estadoPa}</td>
      <td>
          <a href="#" class="borrar-hora fa fa-trash-o" data-id="${medico.id}"></a>
      </td>
      <td>
      <a href="#" class="actualiza-hora fa fa-pencil-square-o" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${medico.id}" ></a>
  </td>
  `;
      listahora.appendChild(row);
    });
  }
  eliminarHoraLocalStorage(medicoID) {
    let horasLS;
    horasLS = this.obtenerHoraLocalStorage();
    horasLS.forEach(function (horaLS, index) {
      if (horaLS.id === medicoID) {
        horasLS.splice(index, 1);
      }
    });
    localStorage.setItem("horas", JSON.stringify(horasLS));
  }
  actualizarMedicoLocalStorage(medicoID) {
    let medicosLS;
    medicosLS = this.obtenerPacienteLocalStorage();
    medicosLS.forEach(function (medicoLS, index) {
      if (medicoLS.ci === medicoID) {
        lblnombre.innerHTML =
          medicoLS.nombreDoc +
          " " +
          medicoLS.apellidoDoc +
          " " +
          medicoLS.apellidoDocm;
        medicos.nombreDoc.value =
          medicoLS.nombreDoc +
          " " +
          medicoLS.apellidoDoc +
          " " +
          medicoLS.apellidoDocm;
        medicos.ci.value = medicoLS.ci;
      }
    });
  }

  actualizarMedicoSLocalStorage(medicoID) {
    let horasLS;
    horasLS = this.obtenerHoraLocalStorage();
    horasLS.forEach(function (horaLS, index) {
      if (horaLS.id === medicoID) {
        lblnombre.innerHTML = horaLS.nombreDoc;
        medicos.nombreDoc.value = horaLS.nombreDoc;
        medicos.especialidadMed.value = horaLS.especialidadMed;
        medicos.numeroFicha.value = horaLS.numeroFicha;
        medicos.ci.value = horaLS.ci;
        medicos.horaReseva.value = horaLS.horaReseva;
        medicos.estadoPa.value = horaLS.estadoPa;
      }
    });
    regis.innerHTML = "Actualizar";
    localStorage.setItem("medicos", JSON.stringify(medicosLS));
  }
}
