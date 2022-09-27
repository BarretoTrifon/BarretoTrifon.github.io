class Paciente {
  crear(paciente) {
    this.leerDatoPaciente(paciente);
  }
  leerDatoPaciente(paciente) {
    const infoPaciente = {
      nombreDoc: paciente.get("nombreDoc"),
      apellidoDoc: paciente.get("apellidoDoc"),
      apellidoDocm: paciente.get("apellidoDocm"),
      ci: paciente.get("ci"),
      expici: paciente.get("expici"),
      especialidadDoc: paciente.get("especialidadDoc"),
      usuarioDoc: paciente.get("usuarioDoc"),
      contrasenaDoc: paciente.get("contrasenaDoc"),
      tipoP: paciente.get("tipoP"),
    };

    let pacientesLS;
    let otro;
    pacientesLS = this.obtenerPacienteLocalStorage();
    console.log(pacientesLS);
    pacientesLS.forEach(function (pacienteLS) {
      if (pacienteLS.ci === infoPaciente.ci) {
        otro = pacienteLS.ci;
        pacienteLS.nombreDoc = infoPaciente.nombreDoc;
        pacienteLS.apellidoDoc = infoPaciente.apellidoDoc;
        pacienteLS.apellidoDocm = infoPaciente.apellidoDocm;
        pacienteLS.ci = infoPaciente.ci;
        pacienteLS.expici = infoPaciente.expici;
        pacienteLS.usuarioDoc = infoPaciente.usuarioDoc;
        pacienteLS.contrasenaDoc = infoPaciente.contrasenaDoc;
        pacienteLS.tipoP = infoPaciente.tipoP;
      }
    });
    if (otro === infoPaciente.ci) {
      localStorage.setItem("pacientes", JSON.stringify(pacientesLS));
    } else {
      this.insertarPaciente(infoPaciente);
    }
  }

  logincrear(loginpaciente) {
    this.loginleerDatoPaciente(loginpaciente);
  }
  loginleerDatoPaciente(loginpaciente) {
    const infoLoginPaciente = {
      usuario: loginpaciente.get("usuario"),
      contrasenaDoc: loginpaciente.get("contrasenaDoc"),
    };
    let pacientesLS;
    let otro, cedu, usuPa;
    pacientesLS = this.obtenerPacienteLocalStorage();
    console.log(pacientesLS);
    pacientesLS.forEach(function (pacienteLS) {
      if (
        pacienteLS.usuarioDoc === infoLoginPaciente.usuario &&
        pacienteLS.contrasenaDoc === infoLoginPaciente.contrasenaDoc
      ) {
        otro = pacienteLS.usuarioDoc;
        cedu = pacienteLS.ci;
        usuPa = pacienteLS.tipoP;
      }
    });
    if (otro === infoLoginPaciente.usuario) {
      if (usuPa === "PACIENTE") {
        location.href = `paciente.html?usuario =${cedu}`;
      } else if (usuPa === "MEDICO") {
        location.href = `medico.html?usuario =${cedu}`;
      } else {
        location.href = `admin.html?usuario =${cedu}`;
      }
    } else {
      alert("usuario y contraseña incorrecto");
    }
  }

  inicioSesion(value) {
    let pacientesLS;
    let pasi;
    pacientesLS = this.obtenerPacienteLocalStorage();
    pacientesLS.forEach(function (pacienteLS, index) {
      if (pacienteLS.ci === value) {
        usuarioPa.innerHTML = pacienteLS.nombreDoc;
        tipoPa.innerHTML = pacienteLS.tipoP;
        citaResi.pacienteNom.value = pacienteLS.nombreDoc;
        citaResi.pacienteci.value = pacienteLS.ci;
        citaResi.carnet.value = pacienteLS.nombreDoc;
      }
    });
  }

  insertarPaciente(paciente) {
    this.guardarPacienteLocalStorage(paciente);
  }

  eliminarMedico(e) {
    e.preventDefault();
    let medico, medicoID;
    if (e.target.classList.contains("borrar-medico")) {
      e.target.parentElement.parentElement.remove();
      medico = e.target.parentElement.parentElement;
      medicoID = medico.querySelector("a").getAttribute("data-id");
    }
    this.eliminarMedicoLocalStorage(medicoID);
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
  guardarPacienteLocalStorage(paciente) {
    let pacientes;
    pacientes = this.obtenerPacienteLocalStorage();
    pacientes.push(paciente);
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }

  obtenerPacienteLocalStorage() {
    let pacienteLS;

    if (localStorage.getItem("pacientes") === null) {
      pacienteLS = [];
    } else {
      pacienteLS = JSON.parse(localStorage.getItem("pacientes"));
    }
    return pacienteLS;
  }

  leerLocalStorage() {
    let medicoLS;
    medicoLS = this.obtenerMedicoLocalStorage();
    medicoLS.forEach(function (medico) {
      //Construir plantilla
      const row = document.createElement("tr");
      row.innerHTML = `
      <td>${medico.nombreDoc}</td>
      <td>${medico.apellidoDoc}</td>
      <td>${medico.apellidoDocm}</td>
      <td>${medico.ci}</td>
      <td>${medico.especialidadDoc}</td>
      <td>
          <a href="#" class="borrar-medico fas fa-times-circle" data-id="${medico.ci}"></a>
      </td>
      <td>
      <a href="#" class="actualiza-medico fas fa-times-circle"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${medico.ci}"></a>
  </td>
  `;
      listaMedico.appendChild(row);
    });
  }
  eliminarMedicoLocalStorage(medicoID) {
    let medicosLS;
    medicosLS = this.obtenerMedicoLocalStorage();
    medicosLS.forEach(function (medicoLS, index) {
      if (medicoLS.ci === medicoID) {
        medicosLS.splice(index, 1);
      }
    });

    localStorage.setItem("medicos", JSON.stringify(medicosLS));
  }
  actualizarMedicoLocalStorage(medicoID) {
    let medicosLS;
    medicosLS = this.obtenerPacienteLocalStorage();
    medicosLS.forEach(function (medicoLS, index) {
      if (medicoLS.ci === medicoID) {
        citaPa.nombreDoc.value = medicoLS.nombreDoc;
        citaPa.apellidoDoc.value = medicoLS.apellidoDoc;
        citaPa.apellidoDocm.value = medicoLS.apellidoDocm;
        citaPa.ci.value = medicoLS.ci;
        citaPa.expici.value = medicoLS.expici;
        citaPa.usuarioDoc.value = medicoLS.usuarioDoc;
        citaPa.contrasenaDoc.value = medicoLS.contrasenaDoc;
      }
    });
  }
}
