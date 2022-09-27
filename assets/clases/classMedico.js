class registroMedico {
  crear(medico) {
    //let str =  JSON.stringify(medico);
    //console.log(str);

    this.leerDatoMedico(medico);
  }
  leerDatoMedico(medico) {
    const infoMedico = {
      nombreDoc: medico.get("nombreDoc"),
      apellidoDoc: medico.get("apellidoDoc"),
      apellidoDocm: medico.get("apellidoDocm"),
      ci: medico.get("ci"),
      expici: medico.get("expici"),
      especialidadDoc: medico.get("especialidadDoc"),
    };
    //console.log(infoMedico);

    let medicosLS;
    let otro;
    medicosLS = this.obtenerMedicoLocalStorage();
    console.log(medicosLS);
    medicosLS.forEach(function (medicoLS){
        if(medicoLS.ci === infoMedico.ci){
         otro = medicoLS.ci;
         medicoLS.nombreDoc = infoMedico.nombreDoc;
        
         // localStorage.setItem("medicos", JSON.stringify(infoMedico));
         
        }
    });
   // localStorage.setItem("medicos", JSON.stringify(medicosLS));
    if(otro === infoMedico.ci){
      console.log(medicosLS);
       alert("ya existe Otro");
      
     //  medicosLS.nombreDoc = infoMedico.nombreDoc;
       console.log(medicosLS.nombreDoc);
     //  localStorage.setItem("medicos", JSON.stringify(infoMedico));
      // this.leerLocalStorage();
     // medicosLS.push(medicosLS);
     medicos.nombreDoc = infoMedico.nombreDoc;
      localStorage.setItem("medicos", JSON.stringify(medicosLS));
     // this.leerLocalStorage();
    
    }
    else {
      this.insertarMedico(infoMedico);
    }


   
  }

  insertarMedico(medico) {
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
      <a href="#" class="actualiza-medico fas fa-times-circle" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${medico.ci}" ></a>
  </td>
  `;
    listaMedico.appendChild(row);
    this.guardarMedicoLocalStorage(medico);
  }

  eliminarMedico(e){
    e.preventDefault();
    let medico, medicoID;
    if(e.target.classList.contains('borrar-medico')){
        e.target.parentElement.parentElement.remove();
        medico = e.target.parentElement.parentElement;
        medicoID = medico.querySelector('a').getAttribute('data-id');
     //   console.log(medicoID);
    }
  this.eliminarMedicoLocalStorage(medicoID);
   // this.calcularTotal();
//console.log(e);
}
actualizarMedico(e){
  e.preventDefault();
  let medico, medicoID;
  if(e.target.classList.contains('actualiza-medico')){
    medico = e.target.parentElement.parentElement;
      medicoID = medico.querySelector('a').getAttribute('data-id');
     console.log(medicoID);
  }
this.actualizarMedicoLocalStorage(medicoID);
 // this.calcularTotal();
//console.log(e);
}
  guardarMedicoLocalStorage(medico) {
    let medicos;
    //Toma valor de un arreglo con datos del LS
    medicos = this.obtenerMedicoLocalStorage();
    //Agregar el producto al carrito
    medicos.push(medico);
    //Agregamos al LS
    localStorage.setItem("medicos", JSON.stringify(medicos));
  }
  guardaMedicoLocalStorage(medico) {
    console.log(medico.get("nombreDocU"));
    const infoMedico = {
      nombreDoc: medico.get("nombreDocU"),
      apellidoDoc: medico.get("apellidoDocU"),
      apellidoDocm: medico.get("apellidoDocmU"),
      ci: medico.get("ciU"),
      expici: medico.get("expiciU"),
      especialidadDoc: medico.get("especialidadDocU"),
    }
   // let medicos;
    //Toma valor de un arreglo con datos del LS
   // medicos = this.obtenerMedicoLocalStorage();
    //Agregar el producto al carrito
   // medicos.push(medico);
    //Agregamos al LS
    localStorage.removeItem("medicos", JSON.stringify(medico.get("ciU")));
    //this.eliminarMedicoLocalStorage(medico.get("ciU"));
    this.guardarMedicoLocalStorage(infoMedico);
 // localStorage.setItem("medicos", JSON.stringify(infoMedico));
  }
  //Comprobar que hay elementos en el LS
  obtenerMedicoLocalStorage() {
    let medicoLS;

    //Comprobar si hay algo en LS
    if (localStorage.getItem("medicos") === null) {
      medicoLS = [];
    } else {
      medicoLS = JSON.parse(localStorage.getItem("medicos"));
    }
    return medicoLS;
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


  eliminarMedicoLocalStorage(medicoID){
    let medicosLS;
    //Obtenemos el arreglo de productos
    medicosLS = this.obtenerMedicoLocalStorage();
    //Comparar el id del producto borrado con LS
    medicosLS.forEach(function(medicoLS, index){
        if(medicoLS.ci === medicoID){
          medicosLS.splice(index, 1);
        }
    });

    //Añadimos el arreglo actual al LS
    localStorage.setItem('medicos', JSON.stringify(medicosLS));
}
actualizarMedicoLocalStorage(medicoID){
 // console.log(medicoID);
  let medicosLS;
  //Obtenemos el arreglo de productos
  medicosLS = this.obtenerMedicoLocalStorage();
  //Comparar el id del producto borrado con LS
  medicosLS.forEach(function(medicoLS, index){
      if(medicoLS.ci === medicoID){
       
        medicos.nombreDoc.value = medicoLS.nombreDoc;
        medicos.apellidoDoc.value = medicoLS.apellidoDoc;
        medicos.apellidoDocm.value = medicoLS.apellidoDocm;
        medicos.ci.value = medicoLS.ci;
        medicos.expici.value = medicoLS.expici;
        medicos.especialidadDoc.value = medicoLS.especialidadDoc;
        
      }
       
    });
    regis.innerHTML = "Actualizar";
//console.log(medicoLS);
  localStorage.setItem('medicos', JSON.stringify(medicosLS));
}
}
