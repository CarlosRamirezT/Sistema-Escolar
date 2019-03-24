// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// INTERFAZ GRAFICA

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function ocultarTodo(){
    document.getElementById("signup-html").style.display="none";
    document.getElementById("login-html").style.display="none";
    document.getElementById("pagina-principal-html").style.display="none";    

    // academico

    document.getElementById("academico-plan-estudio-html").style.display="none";
    document.getElementById("academico-consultar-inscripcion-html").style.display="none";
    document.getElementById("academico-seleccion-materias-html").style.display="none";

    // admisiones

    document.getElementById("admisiones-solicitar-admision-html").style.display="none";
    document.getElementById("admisiones-documentos-admision-html").style.display="none";
    document.getElementById("admisiones-consultar-admision-html").style.display="none";

    // beca

    document.getElementById("beca-solicitar-beca-html").style.display="none";
    document.getElementById("beca-ver-estado-html").style.display="none";

    // caja

    document.getElementById("caja-balance-pendiente-html").style.display="none";
    document.getElementById("caja-pago-online-html").style.display="none";

    // permanente

    document.getElementById("educacion-permanente-inscripcion-permanente-html").style.display="none";
    document.getElementById("educacion-permanente-consultar-inscripcion-html").style.display="none";
    document.getElementById("educacion-permanente-horario-permanente-html").style.display="none";

    // gestion docencia

    document.getElementById("gestion-docencia-consultar-calificacion-html").style.display="none";
    document.getElementById("gestion-docencia-historial-calificacion-html").style.display="none";

    // residencia

    document.getElementById("residencia-academica-solicitar-residencia-html").style.display="none";
    document.getElementById("residencia-academica-solicitar-salida-html").style.display="none";

    // solicitud

    document.getElementById("solicitud-cambio-carrera-html").style.display="none";
    document.getElementById("solicitud-cambio-pemsun-html").style.display="none";
    document.getElementById("solicitud-cambio-fuente-estudio-html").style.display="none";
    document.getElementById("solicitud-extension-beca-html").style.display="none";
    document.getElementById("solicitud-extension-credito-html").style.display="none";
    document.getElementById("solicitud-retiro-html").style.display="none";
    document.getElementById("solicitud-cambio-grupo-html").style.display="none";
    document.getElementById("solicitud-graduacion-html").style.display="none";
    document.getElementById("solicitud-revision-calificacion-html").style.display="none";
    document.getElementById("solicitud-pasantia-html").style.display="none";

    // configuracion

    document.getElementById("configuracion-cambiar-correo-html").style.display="none";
    document.getElementById("configuracion-cambiar-contraseña-html").style.display="none";
    document.getElementById("configuracion-cambiar-perfil-html").style.display="none";

}

// cargar loggin

function mostrarLogin(){
    ocultarTodo();
    document.getElementById("barra-navegacion").style.display="none";
    document.getElementById("login-html").style.display="";
}

// cargar signup

function mostrarSignup(){
    ocultarTodo();
    document.getElementById("barra-navegacion").style.display="none";
    document.getElementById("signup-html").style.display="";
}

// cargar pagina principal

function mostrarPrincipal(){
    ocultarTodo();
    document.getElementById("pagina-principal-html").style.display="";
    mostrarTablaActividades();
    document.getElementById("barra-navegacion").style.display="";
}

// cargar las opciones de academico

function mostrarPlanEstudio(){
    ocultarTodo();
    document.getElementById("academico-plan-estudio-html").style.display="";
    mostrarTablaPlanEstudio();
}

function mostrarSeleccionarMaterias(){
    ocultarTodo();
    document.getElementById("academico-seleccion-materias-html").style.display="";
    
}

function mostrarConsultarSeleccion(){
    ocultarTodo();
    document.getElementById("academico-consultar-inscripcion-html").style.display="";
    mostrarTablaMateriasSeleccionadasActualmente();
}

// cargar las opciones de admision

function mostrarSolicitarAdmision(){
    ocultarTodo();
    document.getElementById("admisiones-solicitar-admision-html").style.display="";
    
}

function mostrarDocumentosAdmision(){
    ocultarTodo();
    document.getElementById("admisiones-documentos-admision-html").style.display="";
    mostrarTablaDocumentosAdmision();
}

function mostrarConsultarAdmision(){
    ocultarTodo();
    document.getElementById("admisiones-consultar-admision-html").style.display="";
    
}

// mostrar opciones de beca

function mostrarSolicitarBeca(){
    ocultarTodo();
    document.getElementById("beca-solicitar-beca-html").style.display="";
    
}

function mostrarVerEstadoBeca(){
    ocultarTodo();
    document.getElementById("beca-ver-estado-html").style.display="";
    
}

// mostrar opciones caja

function mostrarBalancePendiente(){
    ocultarTodo();
    document.getElementById("caja-balance-pendiente-html").style.display="";
    
}

function mostrarPagoOnline(){
    ocultarTodo();
    document.getElementById("caja-pago-online-html").style.display="";
    
}

// mostrar opciones educacion permanente

function mostrarInscripcionPermanente(){
    ocultarTodo();
    document.getElementById("educacion-permanente-inscripcion-permanente-html").style.display="";
    mostrarCursosPermanenetes();
}

function mostrarConsultarInscripcion(){
    ocultarTodo();
    document.getElementById("educacion-permanente-consultar-inscripcion-html").style.display="";
    mostrarTablaCursosPermanentesInscritos();
}

function mostrarHorarioPermanente(){
    ocultarTodo();
    document.getElementById("educacion-permanente-horario-permanente-html").style.display="";
    
}

// mostrar opciones gestion docencia

function mostrarConsultarCalificacion(){
    ocultarTodo();
    document.getElementById("gestion-docencia-consultar-calificacion-html").style.display="";
    mostrarTablaConsultarCalificacion();
}

function mostrarHistorialCalificaciones(){
    ocultarTodo();
    document.getElementById("gestion-docencia-historial-calificacion-html").style.display="";
    
}

// mostrar opciones residencia academica

function mostrarSolicitarResidencia(){
    ocultarTodo();
    document.getElementById("residencia-academica-solicitar-residencia-html").style.display="";
    
}

function mostrarSolicitarSalida(){
    ocultarTodo();
    document.getElementById("residencia-academica-solicitar-salida-html").style.display="";
    
}

// mostrar opciones solicitudes

function mostrarCambiarCarrera(){
    ocultarTodo();
    document.getElementById("solicitud-cambio-carrera-html").style.display="";
    
}

function mostrarCambiarPemsun(){
    ocultarTodo();
    document.getElementById("solicitud-cambio-pemsun-html").style.display="";
    
}

function mostrarCambiarFuenteEstudio(){
    ocultarTodo();
    document.getElementById("solicitud-cambio-fuente-estudio-html").style.display="";
    
}

function mostrarExtensionBeca(){
    ocultarTodo();
    document.getElementById("solicitud-extension-beca-html").style.display="";
    
}

function mostrarExtensionCredito(){
    ocultarTodo();
    document.getElementById("solicitud-extension-credito-html").style.display="";
    
}

function mostrarRetiro(){
    ocultarTodo();
    document.getElementById("solicitud-retiro-html").style.display="";
    
}

function mostrarCambiarGrupo(){
    ocultarTodo();
    document.getElementById("solicitud-cambio-grupo-html").style.display="";
    
}

function mostrarGraduacion(){
    ocultarTodo();
    document.getElementById("solicitud-graduacion-html").style.display="";
    
}

function mostrarRevisionCalificacion(){
    ocultarTodo();
    document.getElementById("solicitud-revision-calificacion-html").style.display="";
    
}

function mostrarPasantia(){
    ocultarTodo();
    document.getElementById("solicitud-pasantia-html").style.display="";
    
}

// mostrar opciones calificacion

function mostrarCambiarCorreo(){
    ocultarTodo();
    document.getElementById("configuracion-cambiar-correo-html").style.display="";
    
}

function mostrarCambiarcontraseña(){
    ocultarTodo();
    document.getElementById("configuracion-cambiar-contraseña-html").style.display="";
}

function mostrarCambiarPerfil(){
    ocultarTodo();
    document.getElementById("configuracion-cambiar-perfil-html").style.display="";
    
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// NO TOCAR EL CODIGO DE AQUI PARA ARRIBA

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                                // usuarios login signup

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// usario actual que esta logueado

var idUsuarioActual;

// clase documentos de admision para el usuario

class DocumentosAdmision{
    constructor(){
        this.actaNacimiento = false;
        this.copiaCedula = false;
        this.certificadoBachiller = false;
        this.recordNotas = false;
        this.fotos = false;
        this.certificadoMedico = false;
        this.formularioAdmision = false;
    }
}

// clase usuario

var contadorAdminSistema = 0;
var contadorUsuario = 0;

class Usuario{

    constructor(correoElectronico,contraseña,tipo,id,carreraDepartamento,nombre,fechaNacimiento,cedula,edad){
        this.idUsuario = contadorUsuario++;
        this.correoElectronico = correoElectronico;
        this.contraseña = contraseña;
        if(tipo === "adminSistema"){
            if(contadorAdminSistema === 0){
                this.tipo = "Admin Sistema";
                contadorAdminSistema++;
                this.admin = true;
            }else{
                alert("Lo siento, no puede crear mas de un Admin del sistema");
            }
        }else{
            this.tipo = tipo;
            this.admin = false;
        }
        let date = new Date()
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        if(month < 10){
            this.fechaCreacion = day + "-0" + month + "-" + year;
        }else{
            this.fechaCreacion = day + "-" + month + "-" + year;
        }

        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.cedula = cedula;
        this.edad = edad;

        // if(this.tipo === "Estudiante"){

            this.pemsun;
            this.matricula = id;
            this.materiasSeleccionadasActualmente = [];
            this.admision = false;
            this.solicitudAdmision;
            this.beca = false;
            this.solicitudBeca;
            this.credito = false;
            this.solicitudCredito;
            this.balancesPendientes = [];
            this.materiasPermanentesSeleccionadasActualmente = [];
            this.historialMaterias = [];
            this.residencia = false;
            this.solicitudResidencia;
            this.carrera;
            this.fuenteEstudio = "Financiamiento Propio";
            this.solicitudExtensionBeca;
            this.solicitudExtensionCredito;
            this.solicitudGraduacion;
            this.solicitudesRevisionCalificacion = [];
            this.solicitudPasantia;

            this.documentosAdmision;

       //  }

        this.carreraDepartamento = carreraDepartamento;

        // alert("Usuario " + this.correoElectronico + " creado Exitosamente");
         
    }

}

// registro de todos los usuarios

var usuarios = [];

function crearUsuarioDefecto(){
    // usuario por defecto
    var usuarioAdmin = new Usuario("carlosdanielrt@gmail.com","admin","Admin Sistema","20186055","Software","Carlos Daniel Ramirez","2000-05-21","402-1454693-5",18);
    usuarios.push(usuarioAdmin);
}

// limpiar los campos del signup

function limpiarSignup(){
    document.getElementById("CorreoElectronicoSignup").value = "";
    document.getElementById("ContraseñaSignup").value = "";
    document.getElementById("matriculaSignup").value = "";
    document.getElementById("NombreSignup").value = "";
    document.getElementById("FechaNacimientoSignup").value = "";
    document.getElementById("CedulaSignup").value = "";
    document.getElementById("EdadSignup").value = "";
}

function crearUsuarioSignUp(){
    // obteniendo los datos del formulario
    var correoElectronico = document.getElementById("CorreoElectronicoSignup").value;
    var contraseña = document.getElementById("ContraseñaSignup").value;
    var tipo = document.getElementById("TipoCuentaSignup").value;
    var id = document.getElementById("matriculaSignup").value;
    var nombre = document.getElementById("NombreSignup").value;
    var fechaNacimiento = document.getElementById("FechaNacimientoSignup").value;
    var cedula = document.getElementById("CedulaSignup").value;
    var edad = document.getElementById("EdadSignup").value;
    var carreraDepartamento = document.getElementById("carreraDepartamentoSignup").value;
    // buscando si el usuario no existe para crearlo
    var ExisteUsuario = false;
    for(var i = 0; i < usuarios.length; i++){
        if(correoElectronico === usuarios[i].correoElectronico){
            ExisteUsuario = true;
        }
    }
    if(!ExisteUsuario){
        var usuario = new Usuario(correoElectronico,contraseña,tipo,id,carreraDepartamento,nombre,fechaNacimiento,cedula,edad);
        usuarios.push(usuario);
        mostrarLogin();
        limpiarSignup();
    }else{
        alert("Ya existe un usuario con ese correo Electronico");
    }
}

function initializar(){
    crearUsuarioDefecto();
}

// liampiar los campos del loguin

function limpiarLoguin(){
    document.getElementById("correoElectronicoLogin").value = "";
    document.getElementById("ContraseñaLogin").value = "";
}

// al presionar el boton de loguearse

function loguearse(){
    // obteniendo el correo electronico y la contrasena del html
   var correoElectronico = document.getElementById("correoElectronicoLogin").value;
   var contraseña = document.getElementById("ContraseñaLogin").value;
    // buscando el usuario ingresado en el registro de usuarios
    var encontrado = false;
    for(var i = 0; i < usuarios.length; i++){
        if(usuarios[i].correoElectronico === correoElectronico){
            if(usuarios[i].contraseña === contraseña){
                encontrado = true;
                idUsuarioActual = i;
                break;
            }else{
                alert("Contraseña incorrecta");
            }
        }
    }
    // accionando en base a la busqueda
    if(encontrado){
        alert("Bienvenido " + usuarios[idUsuarioActual].nombre);
        limpiarLoguin();
        mostrarPrincipal();
    }else{
        alert("Usuario no encontrado");
    }
}


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                                // PAGINA PRINCIPAL

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

class Actividad{

    constructor(semana,rangoFecha,actividad,tipo){
        this.semana = semana;
        this.rangoFecha = rangoFecha;
        this.actividad = actividad;
        this.tipo = tipo;
    }

}

var actividades = [
    new Actividad("Semana 1","Lunes 07 de Enero","Inicio Docencia","normal"),
    new Actividad("Semana 1","Lunes 07 de Enero al 15 de Marzo","Solicitud de Admision","normal"),
    new Actividad("Semana 1","Martes 08 de Enero - Lunes 18 de Febrero","Fecha Limite de Solicitud de Reincorporacion para (2019-C-2)","normal"),
    new Actividad("Semana 1","Martes 08 de Enero - Lunes 18 de Febrero","Fecha Limite de Solicitud de Cambio de Carrera para (2019-C-2)","normal"),
    new Actividad("Semana 1","Jueves 10 de Enero - Lunes 18 d Febrero","Entrega Planificacion Clase","normal"),
    new Actividad("Semana 1","Lunes 07 - Sabado 12 Enero","Docencia","normal"),
    new Actividad("Semana 1","Lunes 14 - Sabado 30 de Marzo","Solicitud de Graduacion","normal"),

    new Actividad("Semana 2","Lunes 14 - Sabado 19 de Enero","Docencia","normal"),
    new Actividad("Semana 2","Jueves 17","Inauguracion Juegos Universitarios del Ministerio de Deportes y Recreacion","normal"),

    new Actividad("Semana 3","Lunes 21 de Enero 2019","Feriado - Dia de Nuestra Señora de la Altagracia","actividad"),
    new Actividad("Semana 3","Martes 22 ' Viernes 25 Enero","Docencia","normal"),

    new Actividad("Semana 4","Jueves 31 Enero - Martes 05 Febrero","Primer Pago de Matricula","limite"),
    new Actividad("Semana 4","Lunes 28 Enero - Martes 05 Febrero","Primera Evaluacion Parcial","normal"),

    new Actividad("Semana 5","Lunes 04 - Sabado 09 Febrero","Publicacion de la Primera Evaluacion Parcial(Docencia)","normal"),
    new Actividad("Semana 5","Lunes 04 - Sabado 09 Febrero","Docencia","normal"),

    new Actividad("Semana 6","Lunes 11 - Sabado 16 Febrero","Docencia","normal"),
    new Actividad("Semana 6","jueves 14 - Sabado 09 Febrero","Workshop sobre Agenda Digital","actividad"),

    new Actividad("Semana 7","Lunes 18 - Sabado 23 Febrero","Docencia","normal"),

    new Actividad("Semana 8","Lunes 25 - Jueves 28 Febrero","Celebracion del Mes de la Patria","actividad"),
    new Actividad("Semana 8","Lunes 25 de Febrero - Martes 02 Marzo","Proyeccion de Oferta para el proximo periodo 2019-C-2","normal"),
    new Actividad("Semana 8","Miercoles 27 de Febrero","Feriado - Dia de la Independencia","actividad"),
    new Actividad("Semana 8","Jueves 28 de Febrero - martes 05 Marzo","Segundo Pago de Matricula","limite"),

    new Actividad("","Viernes 08 de Marzo 2019","Fecha Limite Cambio Pensum","limite"),

    new Actividad("Semana 9","Lunes 04 - Sabado 09 Marzo","Docencia y Segunda Evaluacion Parcial","normal"),

    new Actividad("Semana 10","Lunes 11 - Sabado 16 de Marzo","Publicacion Segundo Parcial","normal"),

    new Actividad("Semana 11","Lunes 18 - Sabado 23 Marzo","Docencia","normal"),

    new Actividad("Semana 12","Lunes 25 - Sabado 30 Marzo","Docencia","normal"),

    new Actividad("Semana 13","Miercoles 06 de Marzo","Fecha Limite de Retiro","limite"),
    new Actividad("Semana 13","Lunes 25 al 29 de Marzo","Semana de la Etica","actividad"),

    new Actividad("Semana 14","Lunes 01 - Sabado 06 Abril","Ultima Semana de Docencia","normal"),
    new Actividad("Semana 14","Lunes 08 - Sabado 13 Abril","Examenes Finales","normal"),

    new Actividad("Semana 15","Domingo 31 - Viernes 05 Abril","Tercer Pago Matricula","limite"),
    new Actividad("Semana 15","Jueves 18 - Sabado 20","Feriado - Semana Santa","actividad"),
    new Actividad("Semana 15","Lunes 15 de Abril - Martes 23 de Abril","Fecha Limite Publicacion Calificaciones","normal"),
    new Actividad("Semana 15","Lunes 15 - Miercoles 24 Abril","Fecha Limite Solicitud Revision","normal"),
    new Actividad("Semana 15","Lunes 15 de Abril - Jueves 25 de Abril","Fecha Limite Respuesta y Resultados de Revision de Calificacion","normal"),

    new Actividad("Semana 16","Martes 16 Abril - Miercoles 15 Mayo","Fecha Limite Oficializacion Calificaciones Finales","normal"),
    new Actividad("Semana 16","Lunes 15 - Sabado 25 Abril","Pago de Inscripcion del 2019-C-2","limite"),
    new Actividad("Semana 16","Lunes 22 al 29 de Abril","Seleccion de Asignaturas para Estudiantes de Nuevo Ingreso","normal"),
    new Actividad("Semana 16","Viernes 26 de Abril","Ajustar Condicion Academica","normal"),
    new Actividad("Semana 16","Lunes 29 de Abril","Feriado - Dia del Trabajo","actividad"),
    new Actividad("Semana 16","Martes 30 Abril - Jueves 02 Mayo","Vacaciones Estudiantiles","normal"),
    new Actividad("Semana 16","Martes 30 de Abril","Seleccion Materias Multimedia - Sonido","normal"),
    new Actividad("Semana 16","Miercoles 01 Mayo","Seleccion Materias Manufactura y Mecatronica","normal"),
    new Actividad("Semana 16","Jueves 02 Mayo","Seleccion Materias Redes de Informacion - Seguridad Informatica","normal"),
    new Actividad("Semana 16","Jueves 02 - Viernes 03 Mayo","Seleccion Materias Software","normal"),
    new Actividad("Semana 16","Viernes 03 de Mayo","Actividad de Ambientacion para estudiantes de nuevo ingreso","normal"),
    new Actividad("Semana 16","Lunes 06 - Martes 07 Mayo","Bajas y Añadidas","normal"),
    new Actividad("Semana 16","06 de Mayo 2019","Inicio Docencia para el 2019-C-2","normal"),
    
    
];

function mostrarTablaActividades(){

    
     
     var tbl = document.getElementById("tablaActividades");

     // vaciando el contenido para que no se repita si se llama varias veces
     tbl.innerHTML = "";

     var tblBody = document.createElement("tbody");    

     var fila = document.createElement("tr");

     var celda = document.createElement("th");
     var textoCelda = document.createTextNode("ID");
     celda.appendChild(textoCelda);
     fila.appendChild(celda);

     var celda = document.createElement("th");
     var textoCelda = document.createTextNode("Semanas");
     celda.appendChild(textoCelda);
     fila.appendChild(celda);

     var celda = document.createElement("th");
     var textoCelda = document.createTextNode("Fecha Inicio - Final");
     celda.appendChild(textoCelda);
     fila.appendChild(celda);

     var celda = document.createElement("th");
     var textoCelda = document.createTextNode("Actividades");
     celda.appendChild(textoCelda);
     fila.appendChild(celda);

     tblBody.appendChild(fila);
     

     for (var i = 0; i < actividades.length; i++) {

         var fila = document.createElement("tr");

         var celda = document.createElement("td");
         var textoCelda = document.createTextNode(i);
         if(actividades[i].tipo === "normal"){
            celda.style.color="#f2f2f2";
         }else if(actividades[i].tipo === "actividad"){
            celda.style.color="orange";
         }else if(actividades[i].tipo === "limite"){
            celda.style.color="tomato";
         }
         celda.appendChild(textoCelda);
         fila.appendChild(celda)

         var celda = document.createElement("td");
         var textoCelda = document.createTextNode(actividades[i].semana);
         if(actividades[i].tipo === "normal"){
            celda.style.color="#f2f2f2";
         }else if(actividades[i].tipo === "actividad"){
            celda.style.color="orange";
         }else if(actividades[i].tipo === "limite"){
            celda.style.color="tomato";
         }
         celda.appendChild(textoCelda);
         fila.appendChild(celda);

         var celda = document.createElement("td");
         var textoCelda = document.createTextNode(actividades[i].rangoFecha);
         if(actividades[i].tipo === "normal"){
            celda.style.color="#f2f2f2";
         }else if(actividades[i].tipo === "actividad"){
            celda.style.color="orange";
         }else if(actividades[i].tipo === "limite"){
            celda.style.color="tomato";
         }
         celda.appendChild(textoCelda);
         fila.appendChild(celda);

         var celda = document.createElement("td");
         var textoCelda = document.createTextNode(actividades[i].actividad);
         if(actividades[i].tipo === "normal"){
            celda.style.color="#f2f2f2";
         }else if(actividades[i].tipo === "actividad"){
            celda.style.color="orange";
         }else if(actividades[i].tipo === "limite"){
            celda.style.color="tomato";
         }
         celda.appendChild(textoCelda);
         fila.appendChild(celda);

         tblBody.appendChild(fila);
         
     }
     
 
     tbl.appendChild(tblBody);
     
     console.info("Tabla generada exitosamente");

}

function agregarActividad(){
    var semana = parseInt(prompt("Ingrese el numero de la semana a agregar: "));
    semana = "Semana " + semana;
    var rangoFecha = prompt("Ingrese la fecha o el rango de fecha a agregar: ");
    var actividad = prompt("Ingrese la actividad a agregar: ");
    var tipo = prompt("Ingrese el tipo a agregar (normal / limite / actividad(dia festivo) ): ");
    var actividadNueva = new Actividad(semana,rangoFecha,actividad,tipo);
    actividades.push(actividadNueva);
    mostrarPrincipal();
}

function insertarActividad(){
    var posicion = parseInt(prompt("Ingrese el Id en el que lo desea insertar:"));
    var semana = parseInt(prompt("Ingrese el numero de la semana a agregar: "));
    semana = "Semana " + semana;
    var rangoFecha = prompt("Ingrese la fecha o el rango de fecha a agregar: ");
    var actividad = prompt("Ingrese la actividad a agregar: ");
    var tipo = prompt("Ingrese el tipo a agregar (normal / limite / actividad(dia festivo) ): ");
    var actividadNueva = new Actividad(semana,rangoFecha,actividad,tipo);
    actividades.splice(posicion, 0, actividadNueva); // en la posicion insertara la actividad eliminando 0 elementos
    mostrarPrincipal();
}

function eliminarActividad(){
    var posicion = parseInt(prompt("Ingrese el index de la actividad que desea eliminar:"));
    alert("Actividad: " + actividades[posicion].semana + " - " + actividades[posicion].rangoFecha + " - " + actividades[posicion].actividad + " - " + actividades[posicion].tipo + ", Eliminada");
    actividades.splice(posicion,1);
    mostrarPrincipal();
}

function eliminarUltimaActividad(){
    var posicion = actividades.length - 1;
    alert("Actividad: " + actividades[posicion].semana + " - " + actividades[posicion].rangoFecha + " - " + actividades[posicion].actividad + " - " + actividades[posicion].tipo + ", Eliminada");
    actividades.pop();
    mostrarPrincipal();
}



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                                // Plan Estudio

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

class Materia{
    constructor(cuatrimestre,codigo,nombre,creditos){
        this.cuatrimestre = cuatrimestre;
        this.codigo = codigo;
        this.nombre = nombre;
        this.creditos = creditos;
        this.cuatrimestre = cuatrimestre;
        this.primerParcial;
        this.segundoParcial;
        this.practicas;
        this.final;
    }
}

pemsunSoftware = [
    new Materia(1,"ESP-001","Redacción Castellana",4),
    new Materia(1,"HIS-001","Historia Dominicana",4),
    new Materia(1,"ING-101","Ingles Tecnico",4),
    new Materia(1,"MAT-001","Precalculo",5),
    new Materia(1,"TI-101","Fundamentos del Computador",4),
    
    new Materia(2,"SOF-001","Fundamentos de Programacion",4),
    new Materia(2,"AC-ET1","Ética 1: Ética de la Persona",3),
    new Materia(2,"SOF-006","Introducción a las Bases de Datos",4),
    
    new Materia(3,"FIL-001","Ética Social y Profesional",3),
    new Materia(3,"MAT-003","Cálculo Integral",5),
    new Materia(3,"SOF-003","Programación I",4),
    
    new Materia(4,"SOF-004","Programación II",4),
    new Materia(4,"FIS-001L","Laboratorio Física Aplicada I",0),
    new Materia(4,"FIS-001","Física Aplicada I",5),
    new Materia(4,"AC-ET3","Ética 3: Ética, Valores y Sociedad",3),
    new Materia(4,"SOF-007","Análisis y Diseño",4),
    new Materia(4,"SOF-008","Bases de Datos Avanzadas",4),
    
    new Materia(5,"SOF-009","Auditoría Informática",4),
    new Materia(5,"SOF-010","Diseño Centrado en el Usuario",4),
    new Materia(5,"SOF-011","Programación WEB",4),
    new Materia(5,"AC-ET4","Ética 4: Valores, Tecnología y Ejercicio Profesional",3),
    new Materia(5,"SOF-005	","Programación III",4),
    
    new Materia(6,"SOF-012","Estructura de Datos",4),
    new Materia(6,"SOF-013","Administración de Proyectos de Software",4),
    new Materia(6,"SOF-014","Minería de Datos e Inteligencia de Negocios",4),
    new Materia(6,"SOF-015","Introducción a la Ingeniería de Software",4)
    
];



function mostrarTablaPlanEstudio(){

    // mostrando opciones si es admin

    

    // agregando el pemsun dependiendo de la carrera

    if(usuarios[idUsuarioActual].carreraDepartamento === "Software"){
        usuarios[idUsuarioActual].pemsun = pemsunSoftware;
    }

    
     
    if(usuarios[idUsuarioActual].pemsun.length === 0){
        
        console.error("La tabla no contiene ningun elemento, por favor agreguele elementos"); 
        
    }else{
        
        var tbl = document.getElementById("tablaPlanEstudio");

        // borrando el contenido de la tabla si existe para que no se repital
        tbl.innerHTML = "";

        var tblBody = document.createElement("tbody");    

        var fila = document.createElement("tr");

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("ID");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Codigo");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Nombre");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Creditos");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        tblBody.appendChild(fila);
        
        var totalCreditos = 0;
        var totalMaterias = 0;
        var totalCreditosAprobados = 0; // implementar aprobacion de creditos
        var totalMateriasAprobadas = 0; // implementar aprobacion de materias
        var totalCreditosPedientes = totalCreditos - totalCreditosAprobados;
        var totalMateriasPendientes = totalMaterias - totalMateriasAprobadas;
        

        for (var i = 0; i < usuarios[idUsuarioActual].pemsun.length; i++) {



            if(i > 0){
                if(usuarios[idUsuarioActual].pemsun[i].cuatrimestre > usuarios[idUsuarioActual].pemsun[i-1].cuatrimestre){
                    var fila = document.createElement("tr");

                    var celda = document.createElement("th");
                    var textoCelda = document.createTextNode("Cuatrimestre " + usuarios[idUsuarioActual].pemsun[i].cuatrimestre);
                    celda.appendChild(textoCelda);
                    celda.setAttribute("colspan","4");
                    fila.appendChild(celda);
                    tblBody.appendChild(fila);
                }
            }else if(i === 0){
                var fila = document.createElement("tr");

                var celda = document.createElement("th");
                var textoCelda = document.createTextNode("Cuatrimestre " + usuarios[idUsuarioActual].pemsun[i].cuatrimestre);
                celda.appendChild(textoCelda);
                celda.setAttribute("colspan","4");
                fila.appendChild(celda);
                tblBody.appendChild(fila);
            }

            var fila = document.createElement("tr");

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(i);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(usuarios[idUsuarioActual].pemsun[i].codigo);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(usuarios[idUsuarioActual].pemsun[i].nombre);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(usuarios[idUsuarioActual].pemsun[i].creditos);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);

            tblBody.appendChild(fila);
            
            totalCreditos += usuarios[idUsuarioActual].pemsun[i].creditos;
            totalMaterias++;
            
        }
        
        var fila = document.createElement("tr");
        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Total Materias Carrera: "  + totalMaterias);
        celda.setAttribute("colspan","4");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
        tblBody.appendChild(fila);

        var fila = document.createElement("tr");
        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Total Creditos Carrera: "  + totalCreditos);
        celda.setAttribute("colspan","4");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
        tblBody.appendChild(fila);

        var fila = document.createElement("tr");

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Total Creditos Aprobados: "  + totalCreditosAprobados);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Total Creditos Pendientes "  + totalCreditosPedientes);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
        
        tblBody.appendChild(fila);

        var fila = document.createElement("tr");

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Total Materias Aprobados: "  + totalMateriasAprobadas);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Total Materias Pendientes: "  + totalMateriasPendientes);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
        
        tblBody.appendChild(fila);  
    
        tbl.appendChild(tblBody);
        tbl.setAttribute("border", "2");
        
        console.info("Tabla generada exitosamente");
    
    }
    
}

// llenando el pensum con materias

function agregarMaterias(){
    var cuatrimestre = parseInt(prompt("Ingrese el cuatrimestre"));
    var codigo = prompt("Ingrese un codigo");
    var nombre = prompt("Ingrese el nombre de la materia");
    var creditos = parseInt(prompt("Ingrese los creditos"));
    var materia = new Materia(cuatrimestre,codigo,nombre,creditos);
    if(cuatrimestre === null || codigo === null || nombre === null || creditos === null || creditos === 0 || cuatrimestre === 0){
        alert("No pueden haber campos vacios, intente de nuevo");
    }else{
        usuarios[idUsuarioActual].pemsun.push(materia);
        alert("Materia agregada Exitosamente");
    }
    mostrarPlanEstudio();
}



function insertarMateria(){
    var posicion = parseInt(prompt("Ingrese el ID en el que desea insertar la Materia:"));
    var cuatrimestre = parseInt(prompt("Ingrese el cuatrimestre"));
    var codigo = prompt("Ingrese un codigo");
    var nombre = prompt("Ingrese el nombre de la materia");
    var creditos = parseInt(prompt("Ingrese los creditos"));
    var materia = new Materia(cuatrimestre,codigo,nombre,creditos);
    if(cuatrimestre === null || codigo === null || nombre === null || creditos === null || creditos === 0 || cuatrimestre === 0){
        alert("No pueden haber campos vacios, intente de nuevo");
    }else{
        usuarios[idUsuarioActual].pemsun.splice(posicion, 0,materia);;
        alert("Materia agregada Exitosamente");
    }
    mostrarPlanEstudio();
}

function eliminarMateria(){
    var posicion = parseInt(prompt("Ingrese el ID de la Materia:"));
    alert(usuarios[idUsuarioActual].pemsun[posicion].nombre + " Eliminada Correctamente del Pemsun del Estudiante");
    usuarios[idUsuarioActual].pemsun.splice(posicion,1);
    mostrarPlanEstudio();
}

function eliminarUltimaMateria(){
    alert(usuarios[idUsuarioActual].pemsun[usuarios[idUsuarioActual].pemsun.length - 1].nombre + " Eliminada Correctamente del Pemsun del Estudiante");
    usuarios[idUsuarioActual].pemsun.pop();
    mostrarPlanEstudio();
}



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                                // Seleccionr Materias

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function seleccionarMateria(){
    var posicion = parseInt(prompt("Ingrese el Id de la materia que desea seleccionar:"));
    var materiaSeleccionada = usuarios[idUsuarioActual].pemsun[posicion];
    usuarios[idUsuarioActual].materiasSeleccionadasActualmente.push(materiaSeleccionada);
    alert(materiaSeleccionada.nombre + " Seleccionada Exitosamente");
}

function mostrarCuatrimestre(){
    var numeroCuatrimestre = parseInt(prompt("Ingrese el numero del cuatrimestre a seleccionar: "));


    if(usuarios[idUsuarioActual].carreraDepartamento === "Software"){
        usuarios[idUsuarioActual].pemsun = pemsunSoftware;
    }

    
     
    if(usuarios[idUsuarioActual].pemsun.length === 0){
        
        console.error("La tabla no contiene ningun elemento, por favor agreguele elementos"); 
        
    }else{
        
        var tbl = document.getElementById("tablaSeleccionMaterias");

        // borrando el contenido de la tabla si existe para que no se repital
        tbl.innerHTML = "";

        var tblBody = document.createElement("tbody");    

        var fila = document.createElement("tr");

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("ID");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Codigo");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Nombre");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Creditos");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        tblBody.appendChild(fila);
        
        

        for (var i = 0; i < usuarios[idUsuarioActual].pemsun.length; i++) {

            if(usuarios[idUsuarioActual].pemsun[i].cuatrimestre === numeroCuatrimestre){



                if(i > 0){
                    if(usuarios[idUsuarioActual].pemsun[i].cuatrimestre > usuarios[idUsuarioActual].pemsun[i-1].cuatrimestre){
                        var fila = document.createElement("tr");

                        var celda = document.createElement("th");
                        var textoCelda = document.createTextNode("Cuatrimestre " + usuarios[idUsuarioActual].pemsun[i].cuatrimestre);
                        celda.appendChild(textoCelda);
                        celda.setAttribute("colspan","4");
                        fila.appendChild(celda);
                        tblBody.appendChild(fila);
                    }
                }else if(i === 0){
                    var fila = document.createElement("tr");

                    var celda = document.createElement("th");
                    var textoCelda = document.createTextNode("Cuatrimestre " + usuarios[idUsuarioActual].pemsun[i].cuatrimestre);
                    celda.appendChild(textoCelda);
                    celda.setAttribute("colspan","4");
                    fila.appendChild(celda);
                    tblBody.appendChild(fila);
                }

                var fila = document.createElement("tr");

                var celda = document.createElement("td");
                var textoCelda = document.createTextNode(i);
                celda.appendChild(textoCelda);
                fila.appendChild(celda);

                var celda = document.createElement("td");
                var textoCelda = document.createTextNode(usuarios[idUsuarioActual].pemsun[i].codigo);
                celda.appendChild(textoCelda);
                fila.appendChild(celda);

                var celda = document.createElement("td");
                var textoCelda = document.createTextNode(usuarios[idUsuarioActual].pemsun[i].nombre);
                celda.appendChild(textoCelda);
                fila.appendChild(celda);

                var celda = document.createElement("td");
                var textoCelda = document.createTextNode(usuarios[idUsuarioActual].pemsun[i].creditos);
                celda.appendChild(textoCelda);
                fila.appendChild(celda);

                tblBody.appendChild(fila);
                
                
                
            }
            
              
        
            tbl.appendChild(tblBody);
            tbl.setAttribute("border", "2");
            
            console.info("Tabla generada exitosamente");
        
        }

    }

}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                                // mostrar seleccion

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



function mostrarTablaMateriasSeleccionadasActualmente(){

    // mostrando opciones si es admin

    
     
    if(usuarios[idUsuarioActual].materiasSeleccionadasActualmente.length === 0){
        
        console.error("La tabla no contiene ningun elemento, por favor agreguele elementos"); 
        
    }else{
        
        var tbl = document.getElementById("tabla-materias-seleccionadas-actualmente");

        // borrando el contenido de la tabla si existe para que no se repital
        tbl.innerHTML = "";

        var tblBody = document.createElement("tbody");    

        var fila = document.createElement("tr");

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Id");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Codigo");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Nombre");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Creditos");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        tblBody.appendChild(fila);
        
        

        for (var i = 0; i < usuarios[idUsuarioActual].materiasSeleccionadasActualmente.length; i++) {



            if(i > 0){
                if(usuarios[idUsuarioActual].materiasSeleccionadasActualmente[i].cuatrimestre > usuarios[idUsuarioActual].materiasSeleccionadasActualmente[i-1].cuatrimestre){
                    var fila = document.createElement("tr");

                    var celda = document.createElement("th");
                    var textoCelda = document.createTextNode("Cuatrimestre " + usuarios[idUsuarioActual].materiasSeleccionadasActualmente[i].cuatrimestre);
                    celda.appendChild(textoCelda);
                    celda.setAttribute("colspan","4");
                    fila.appendChild(celda);
                    tblBody.appendChild(fila);
                }
            }else if(i === 0){
                var fila = document.createElement("tr");

                var celda = document.createElement("th");
                var textoCelda = document.createTextNode("Cuatrimestre " + usuarios[idUsuarioActual].materiasSeleccionadasActualmente[i].cuatrimestre);
                celda.appendChild(textoCelda);
                celda.setAttribute("colspan","4");
                fila.appendChild(celda);
                tblBody.appendChild(fila);
            }

            var fila = document.createElement("tr");

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(i);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(usuarios[idUsuarioActual].materiasSeleccionadasActualmente[i].codigo);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(usuarios[idUsuarioActual].materiasSeleccionadasActualmente[i].nombre);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(usuarios[idUsuarioActual].materiasSeleccionadasActualmente[i].creditos);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);

            tblBody.appendChild(fila);
            
            
        }
    
        tbl.appendChild(tblBody);
        tbl.setAttribute("border", "2");
        
        console.info("Tabla generada exitosamente");
    
    }
    
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                                // solicitar admision - formulario admision

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                                // documentos admision

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



function mostrarTablaDocumentosAdmision(){

        
        var tbl = document.getElementById("tabla-documentos-admision");

        // borrando el contenido de la tabla si existe para que no se repital
        tbl.innerHTML = "";

        var tblBody = document.createElement("tbody");    

        var fila = document.createElement("tr");

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Documento");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Estado");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Agregar");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);


        tblBody.appendChild(fila);

        
        
        
       
        var fila = document.createElement("tr");
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("Acta de Nacimiento Original Certificada");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
        var celda = document.createElement("td");
        if(usuarios[idUsuarioActual].documentosAdmision.actaNacimiento){
            var textoCelda = document.createTextNode("Enviado");
            celda.style.backgroundColor= "#4CAF50";
        }else{
            var textoCelda = document.createTextNode("Sin Enviar");
            celda.style.backgroundColor= "tomato";
        }
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
        var celda = document.createElement("td");
        var o = document.createElement('input');
        o.type = "file";
        o.id = "admisiones-acta-nacimiento-input";
        o.name = "Agragar";
        celda.appendChild(o);
        fila.appendChild(celda);
        tblBody.appendChild(fila);



        var fila = document.createElement("tr");
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("Copia Cedula Identidad");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
        var celda = document.createElement("td");
        if(usuarios[idUsuarioActual].documentosAdmision.cedula){
            var textoCelda = document.createTextNode("Enviado");
            celda.style.backgroundColor= "#4CAF50";
        }else{
            var textoCelda = document.createTextNode("Sin Enviar");
            celda.style.backgroundColor= "tomato";
        }
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
        var celda = document.createElement("td");
        var o = document.createElement('input');
        o.type = "file";
        o.id = "admisiones-copia-cedula-input";
        o.name = "Agragar";
        celda.appendChild(o);
        fila.appendChild(celda);
        tblBody.appendChild(fila);

        var fila = document.createElement("tr");
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("Certificado Oficial de bachiller expedido por el Ministerio de Educacion");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
        var celda = document.createElement("td");
        if(usuarios[idUsuarioActual].documentosAdmision.certificadoBachiller){
            var textoCelda = document.createTextNode("Enviado");
            celda.style.backgroundColor= "#4CAF50";
        }else{
            var textoCelda = document.createTextNode("Sin Enviar");
            celda.style.backgroundColor= "tomato";
        }
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
        var celda = document.createElement("td");
        var o = document.createElement('input');
        o.type = "file";
        o.id = "admisiones-certificado-bachiller-input";
        o.name = "Agragar";
        celda.appendChild(o);
        fila.appendChild(celda);
        tblBody.appendChild(fila);
        tblBody.appendChild(fila);

        var fila = document.createElement("tr");
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("Record de Notas de bachiller original, firmado y sellado por el distrito educativo");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
        var celda = document.createElement("td");
        if(usuarios[idUsuarioActual].documentosAdmision.recordNotas){
            var textoCelda = document.createTextNode("Enviado");
            celda.style.backgroundColor= "#4CAF50";
        }else{
            var textoCelda = document.createTextNode("Sin Enviar");
            celda.style.backgroundColor= "tomato";
        }
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
        var celda = document.createElement("td");
        var o = document.createElement('input');
        o.type = "file";
        o.id = "admisiones-record-notas-input";
        o.name = "Agregar";
        celda.appendChild(o);
        fila.appendChild(celda);
        tblBody.appendChild(fila);

        var fila = document.createElement("tr");
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("Dos Fotos 2x2");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
        var celda = document.createElement("td");
        if(usuarios[idUsuarioActual].documentosAdmision.fotos){
            var textoCelda = document.createTextNode("Enviado");
            celda.style.backgroundColor= "#4CAF50";
        }else{
            var textoCelda = document.createTextNode("Sin Enviar");
            celda.style.backgroundColor= "tomato";
        }
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
        var celda = document.createElement("td");
        var o = document.createElement('input');
        o.type = "file";
        o.id = "admisiones-fotos-input";
        o.name = "Agregar";
        celda.appendChild(o);
        fila.appendChild(celda);
        tblBody.appendChild(fila);
        tblBody.appendChild(fila);

        var fila = document.createElement("tr");
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("Certificado Medico con Vigencia no mayor a 3 meses de entregado");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
        var celda = document.createElement("td");
        if(usuarios[idUsuarioActual].documentosAdmision.certificadoMedico){
            var textoCelda = document.createTextNode("Enviado");
            celda.style.backgroundColor= "#4CAF50";
        }else{
            var textoCelda = document.createTextNode("Sin Enviar");
            celda.style.backgroundColor= "tomato";
        }
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
        var celda = document.createElement("td");
        var o = document.createElement('input');
        o.type = "file";
        o.id = "admisiones-certificado-medico-input";
        o.name = "Agregar";
        celda.appendChild(o);
        fila.appendChild(celda);
        tblBody.appendChild(fila);
      

        
    
        tbl.appendChild(tblBody);
        tbl.setAttribute("border", "2");
        
        console.info("Tabla generada exitosamente");
    
    

}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                                // Inscripcion Permanente

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

class Curso{
    constructor(nombre,duracion,modalidad,tipo,area){
        this.nombre = nombre;
        this.duracion = duracion;
        this.modalidad = modalidad;
        this.tipo = tipo;
        this.area = area;
    }
}

var cursosPermanentes = [
    new Curso("En el Area Tridimensional","40 Horas","","curso","Multimedia"),
    new Curso("Video Digital","40 Horas","","curso","Multimedia"),
    new Curso("Diseño de Empaques","","","curso","Multimedia"),
    new Curso("Creacion de Comics","","","curso","Multimedia"),
    new Curso("Photoshop Avanzado","","","curso","Multimedia"),

    new Curso("Planificacion y Gestion de Proyectos","40 Horas","","curso","Redes"),
    new Curso("Fundamentos Tecnicos del Computador","80 Horas","","curso","Redes"),
    new Curso("Security +","80 Horas","","curso","Redes"),
    new Curso("Instalacion Cableado Estructurado","40 Horas","","curso","Redes"),
    new Curso("CCNP","120 Horas","","curso","Redes"),
    
    new Curso("Programacion SQL","80 Horas","","curso","Software"),
    new Curso("MySQL para Programadores","80 Horas","","curso","Software"),
    new Curso("C# .Net Basico","","","curso","Software"),
    new Curso("C# Intermedio","","","curso","Software"),
    new Curso("SQL Avanzado","","","curso","Software"),

    new Curso("Fabricacion Mecatronica","","","curso","Mecatronica"),
    new Curso("Mastercam Avanzado","","","curso","Mecatronica"),
    new Curso("Fresadora CNC","","","curso","Mecatronica"),
    new Curso("MasterCam Basico","","","curso","Mecatronica"),
    new Curso("Neumatica y Electroneumatica Avanzada","","","curso","Mecatronica"),

    new Curso("Preparacion para el TOEIC","","","curso","ILS"),
    new Curso("Conversacion","","","curso","ILS"),
    new Curso("Ingles Intensivo","18 Meses","","curso","ILS"),
    new Curso("Ingles Super Intensivo","12 Meses","","curso","ILS"),

    new Curso("Diseño Instruccional para eLearning","6 Semanas","100% Virtual","curso","Tecnologia Educativa"),
    new Curso("Instalacion y Administracion de Moodle","60 Horas","Semi-Presencial","curso","Tecnologia Educativa"),
    new Curso("Tutorial Virtual con Moodle","60 Horas","100% Virtual","curso","Tecnologia Educativa"),

    new Curso("Basico de actuacion para CINE","40 Horas","","curso","Escuela de Cine"),
    new Curso("Introduccion a la Produccion de Television","40 Horas","","curso","Escuela de Cine"),
    new Curso("Produccion Audio Visual para la Web","40 Horas","","curso","Escuela de Cine"),

]

function mostrarCursosPermanenetes(){


    
     
    if(cursosPermanentes.length === 0){
        
        console.error("La tabla no contiene ningun elemento, por favor agreguele elementos"); 
        
    }else{
        
        var tbl = document.getElementById("tabla-cursos-permanente");

        // borrando el contenido de la tabla si existe para que no se repital
        tbl.innerHTML = "";

        var tblBody = document.createElement("tbody");    

        var fila = document.createElement("tr");

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("ID");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Nombre");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Duracion");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Modalidad");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Tipo");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        

        tblBody.appendChild(fila);
        
        

        for (var i = 0; i < cursosPermanentes.length; i++) {



            if(i > 0){
                if(cursosPermanentes[i - 1].area != cursosPermanentes[i].area){
                    var fila = document.createElement("tr");

                    var celda = document.createElement("th");
                    var textoCelda = document.createTextNode(cursosPermanentes[i].area);
                    celda.appendChild(textoCelda);
                    celda.setAttribute("colspan","5");
                    fila.appendChild(celda);
                    tblBody.appendChild(fila);
                }
            }else if(i === 0){
                    var fila = document.createElement("tr");

                    var celda = document.createElement("th");
                    var textoCelda = document.createTextNode(cursosPermanentes[0].area);
                    celda.appendChild(textoCelda);
                    celda.setAttribute("colspan","5");
                    fila.appendChild(celda);
                    tblBody.appendChild(fila);
            }

            var fila = document.createElement("tr");

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(i);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(cursosPermanentes[i].nombre);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(cursosPermanentes[i].duracion);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(cursosPermanentes[i].modalidad);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(cursosPermanentes[i].tipo);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);

    

            tblBody.appendChild(fila);
            
        }
        
    
        tbl.appendChild(tblBody);
        tbl.setAttribute("border", "2");
        
        console.info("Tabla generada exitosamente");
    
    }

}



function seleccionarCursoPermanente(){
    var posicion = parseInt(prompt("Ingrese el ID que desea seleccionar el curso:"));
    var curso = cursosPermanentes[posicion];
    usuarios[idUsuarioActual].materiasPermanentesSeleccionadasActualmente.push(curso);
    alert("Curso " + cursosPermanentes[posicion].nombre + " seleccionado correctamente");
}

function agregarCursoPermanente(){
    var nombre = prompt("Ingrese el nombre del Curso:");
    var duracion = prompt("Ingrese la duracion del Curso:");
    var modalidad = prompt("Ingrese la modalidad del Curso:");
    var tipo = prompt("Ingrese el tipo del Curso:"); 
    var area = prompt("Ingrese el area del Curso:");
    var curso = new Curso(nombre,duracion,modalidad,tipo,area);
   cursosPermanentes.push(curso);
   alert("Curso " + cursosPermanentes[cursosPermanentes.length - 1].nombre + " insertado correctamente");
   mostrarInscripcionPermanente();
}

function insertarCursoPermanente(){
    var posicion = parseInt(prompt("Ingrese el ID en el que desea insertar el curso:"));
    var nombre = prompt("Ingrese el nombre del Curso:");
    var duracion = prompt("Ingrese la duracion del Curso:");
    var modalidad = prompt("Ingrese la modalidad del Curso:");
    var tipo = prompt("Ingrese el tipo del Curso:"); 
    var area = prompt("Ingrese el area del Curso:");
    var curso = new Curso(nombre,duracion,modalidad,tipo,area);
   cursosPermanentes.splice(posicion,0,curso);
   alert("Curso " + cursosPermanentes[posicion].nombre + " insertado correctamente");
   mostrarInscripcionPermanente();
}

function eliminarCursoPermanente(){
   var posicion = parseInt(prompt("Ingrese el index del curso que desea eliminar:"));
   alert("Actividad: " + cursosPermanentes[posicion].nombre + ", Eliminada");
   cursosPermanentes.splice(posicion,1);
   mostrarInscripcionPermanente();
}

function eliminarUltimoCursoPermanente(){
    alert("Actividad: " + cursosPermanentes[cursosPermanentes.length - 1].nombre + ", Eliminada");
    cursosPermanentes.pop();
    mostrarInscripcionPermanente();
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                                // consultar inscripcion permanente

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function mostrarTablaCursosPermanentesInscritos(){

    if(cursosPermanentes.length === 0){
        
        console.error("La tabla no contiene ningun elemento, por favor agreguele elementos"); 
        
    }else{
        
        var tbl = document.getElementById("tabla-cursos-permanentes-inscritos");

        // borrando el contenido de la tabla si existe para que no se repital
        tbl.innerHTML = "";

        var tblBody = document.createElement("tbody");    

        var fila = document.createElement("tr");

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("ID");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Nombre");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Duracion");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Modalidad");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Tipo");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        

        tblBody.appendChild(fila);
        
        

        for (var i = 0; i < usuarios[idUsuarioActual].materiasPermanentesSeleccionadasActualmente.length; i++) {



            if(i > 0){
                if(usuarios[idUsuarioActual].materiasPermanentesSeleccionadasActualmente[i + 1].area != usuarios[idUsuarioActual].materiasPermanentesSeleccionadasActualmente[i].area){
                    var fila = document.createElement("tr");

                    var celda = document.createElement("th");
                    var textoCelda = document.createTextNode(usuarios[idUsuarioActual].materiasPermanentesSeleccionadasActualmente[i].area);
                    celda.appendChild(textoCelda);
                    celda.setAttribute("colspan","5");
                    fila.appendChild(celda);
                    tblBody.appendChild(fila);
                }
            }else if(i === 0){
                    var fila = document.createElement("tr");

                    var celda = document.createElement("th");
                    var textoCelda = document.createTextNode(usuarios[idUsuarioActual].materiasPermanentesSeleccionadasActualmente[0].area);
                    celda.appendChild(textoCelda);
                    celda.setAttribute("colspan","5");
                    fila.appendChild(celda);
                    tblBody.appendChild(fila);
            }

            var fila = document.createElement("tr");

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(i);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(usuarios[idUsuarioActual].materiasPermanentesSeleccionadasActualmente[i].nombre);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(usuarios[idUsuarioActual].materiasPermanentesSeleccionadasActualmente[i].duracion);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(usuarios[idUsuarioActual].materiasPermanentesSeleccionadasActualmente[i].modalidad);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(usuarios[idUsuarioActual].materiasPermanentesSeleccionadasActualmente[i].tipo);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);

    

            tblBody.appendChild(fila);
            
        }
        
    
        tbl.appendChild(tblBody);
        tbl.setAttribute("border", "2");
        
        console.info("Tabla generada exitosamente");
    
    }

}

function eliminarCursoPermanenteInscrito(){
    var posicion = parseInt(prompt("Ingrese el index del curso que desea eliminar:"));
   alert("Actividad: " + usuarios[idUsuarioActual].materiasPermanentesSeleccionadasActualmente[posicion].nombre + ", Eliminada");
   usuarios[idUsuarioActual].materiasPermanentesSeleccionadasActualmente.splice(posicion,1);
   mostrarConsultarInscripcion();
}

function eliminarUltimaCursoPermanenteInscrito(){
    alert("Actividad: " + usuarios[idUsuarioActual].materiasPermanentesSeleccionadasActualmente[usuarios[idUsuarioActual].materiasPermanentesSeleccionadasActualmente.length - 1].nombre + ", Eliminada");
    usuarios[idUsuarioActual].materiasPermanentesSeleccionadasActualmente.pop();
    mostrarConsultarInscripcion();
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                                // consultar calificacion

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function mostrarTablaConsultarCalificacion(){

    if(usuarios[idUsuarioActual].materiasSeleccionadasActualmente.length === 0){
        
        console.error("La tabla no contiene ningun elemento, por favor agreguele elementos"); 
        
    }else{
        
        var tbl = document.getElementById("tabla-calificaciones");

        // borrando el contenido de la tabla si existe para que no se repital
        tbl.innerHTML = "";

        var tblBody = document.createElement("tbody");    

        var fila = document.createElement("tr");

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Id");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Codigo");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Nombre");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("1P");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("2P");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("Pract./Pro.");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("F");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("T");
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        tblBody.appendChild(fila);
        
        

        for (var i = 0; i < usuarios[idUsuarioActual].materiasSeleccionadasActualmente.length; i++) {



            if(i > 0){
                if(usuarios[idUsuarioActual].materiasSeleccionadasActualmente[i].cuatrimestre > usuarios[idUsuarioActual].materiasSeleccionadasActualmente[i-1].cuatrimestre){
                    var fila = document.createElement("tr");

                    var celda = document.createElement("th");
                    var textoCelda = document.createTextNode("Cuatrimestre " + usuarios[idUsuarioActual].materiasSeleccionadasActualmente[i].cuatrimestre);
                    celda.appendChild(textoCelda);
                    celda.setAttribute("colspan","8");
                    fila.appendChild(celda);
                    tblBody.appendChild(fila);
                }
            }else if(i === 0){
                var fila = document.createElement("tr");

                var celda = document.createElement("th");
                var textoCelda = document.createTextNode("Cuatrimestre " + usuarios[idUsuarioActual].materiasSeleccionadasActualmente[i].cuatrimestre);
                celda.appendChild(textoCelda);
                celda.setAttribute("colspan","8");
                fila.appendChild(celda);
                tblBody.appendChild(fila);
            }

            var fila = document.createElement("tr");

            var celda = document.createElement("td");
        var textoCelda = document.createTextNode(i);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(usuarios[idUsuarioActual].materiasSeleccionadasActualmente[i].codigo);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(usuarios[idUsuarioActual].materiasSeleccionadasActualmente[i].nombre);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(usuarios[idUsuarioActual].materiasSeleccionadasActualmente[i].primerParcial);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(usuarios[idUsuarioActual].materiasSeleccionadasActualmente[i].segundoParcial);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(usuarios[idUsuarioActual].materiasSeleccionadasActualmente[i].practicas);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(usuarios[idUsuarioActual].materiasSeleccionadasActualmente[i].final);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

        var celda = document.createElement("th");
        var textoCelda = document.createTextNode(usuarios[idUsuarioActual].materiasSeleccionadasActualmente[i].primerParcial + usuarios[idUsuarioActual].materiasSeleccionadasActualmente[i].segundoParcial + usuarios[idUsuarioActual].materiasSeleccionadasActualmente[i].practicas + usuarios[idUsuarioActual].materiasSeleccionadasActualmente[i].final);
        celda.appendChild(textoCelda);
        fila.appendChild(celda);

            tblBody.appendChild(fila);
            
            
        }
    
        tbl.appendChild(tblBody);
        tbl.setAttribute("border", "2");
        
        console.info("Tabla generada exitosamente");
    
    }

}

function setPrimerParcial(){
    var posicion = parseInt(prompt("Ingrese el ID de la materia: "));
    var nota = parseInt(prompt("Ingrese la nota del Primer Parcial: "));
    usuarios[idUsuarioActual].materiasSeleccionadasActualmente[posicion].primerParcial = nota;
    alert("Primer Parcial = " + nota);
    mostrarConsultarCalificacion();
}

function setSegundoParcial(){
    var posicion = parseInt(prompt("Ingrese el ID de la materia: "));
    var nota = parseInt(prompt("Ingrese la nota del Segundo Parcial: "));
    usuarios[idUsuarioActual].materiasSeleccionadasActualmente[posicion].segundoParcial = nota;
    alert("Segundo Parcial = " + nota);
    mostrarConsultarCalificacion();
}

function setPracticas(){
    var posicion = parseInt(prompt("Ingrese el ID de la materia: "));
    var nota = parseInt(prompt("Ingrese la nota de las Practicas o el Proyecto Final: "));
    usuarios[idUsuarioActual].materiasSeleccionadasActualmente[posicion].practicas = nota;
    alert("Practicas o Proyecto Final = " + nota);
    mostrarConsultarCalificacion();
}

function setFinal(){
    var posicion = parseInt(prompt("Ingrese el ID de la materia: "));
    var nota = parseInt(prompt("Ingrese la nota del Examen Final: "));
    usuarios[idUsuarioActual].materiasSeleccionadasActualmente[posicion].final = nota;
    alert("Final = " + nota);
    mostrarConsultarCalificacion();
}



function oficializarCalificacion(){
    var posicion = parseInt(prompt("Ingrese el ID de la materia a oficializar: "));
    var materia = usuarios[idUsuarioActual].materiasSeleccionadasActualmente[posicion];
    alert(materia.nombre + "Oficializada, puede verla en historial calificacion")
    usuarios[idUsuarioActual].historialMaterias.push(materia);
    usuarios[idUsuarioActual].materiasSeleccionadasActualmente.splice(posicion,1);
    mostrarConsultarCalificacion();
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                                // consultar historial calificacion

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function mostrarTablaHistorialCalificacion(){

}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                                // solicitud residencia

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function mostrarTablaSolicitudesResidencia(){

}



function solicitarResidencia(){

}



function aprobarSolicitudResidencia(){

}

function denegarSolicitudResidencia(){

}



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

                                // solicitud salid residencia

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<            >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function mostrarTablaSolicitudesSalidaResidencia(){

}

function solicitarSalidaResidencia(){

}

function aprobarSolicitudSalidaResidencia(){

}

function denegarSolicitudSalidaResidencia(){

}