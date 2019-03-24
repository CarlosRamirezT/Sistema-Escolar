class Usuario{
    static adminCounter = 0;
    constructor(correo,contraseña,matricula,nombre,cedula,edad,fechaNacimiento,tipo){
        this.correo = correo;
        this.contraseña = contraseña;
        this.matricula = matricula;
        this.nombre = nombre;
        this.cedula = cedula;
        this.edad = edad;
        this.fechaNacimiento = fechaNacimiento;
        if(tipo === "Admin del Sistema"){
           if(this.adminCounter === 0){
               this.tipo = "Admin del Sistema";
               this.admin = true;
            }
        }else{
            this.tipo = tipo;
            this.admin = false;
        }
        /*var fecha = new Date(); IMPLEMENTAR FECHA CREACION    
        this.fechaCreacion = fecha.moment().format("DD/MM/YYYY");*/
        console.info("Usuario Creado Exitosamente");
    }
}

var usuarios = [];


function crearUsuario(){
    var correo = document.getElementById("CorreoElectronicoSignup").value;;
    var contraseña = document.getElementById("ContraseñaSignup").value;
    var matricula = document.getElementById("matriculaSignup").value;
    var nombre = document.getElementById("NombreSignup").value;
    var cedula = document.getElementById("CedulaSignup").value;
    var edad = document.getElementById("EdadSignup").value;
    var fecha = document.getElementById("FechaNacimientoSignup").value;
    var tipo = document.getElementById("TipoCuentaSignup").value;
    
    
    var existeUsuario = false;
    
    for(var i = 0; i < usuarios.length;i++){
        if(usuarios[i].correo === correo){
            alert("Ya existe una cuenta con ese nombre de usuario");
            existeUsuario = true;
            break;
        }else{
            existeUsuario = false;
        }
    }
    
    if(!existeUsuario){
        var decision = prompt("ESTA SEGURO DE QUE QUIERE CREAR UNA CUENTA CON ESTOS DATOS (s/n)\n\
            correo: " + correo + "\n" +
            "contraseña: " + contraseña + "\n" +
            "matricula: " + matricula + "\n" +
            "nombre: " + nombre + "\n" +
            "cedula: " + cedula + "\n" +
            "edad: " + edad + "\n" +
            "fecha: " + fecha + "\n" +
            "tipo: " + tipo + "\n" 
            );
        if(decision === "s"){
    
            var usuario = new Usuario(correo,contraseña,matricula,nombre,cedula,edad,fecha,tipo);
            usuarios.push(usuario);    
        }
    }
    
    
    
}

function mostrarUsuariosConsola(){
    console.info("Usuarios Disponibles");
    for(var i = 0; i < usuarios.length;i++){
        console.log(usuarios[i]);
    }
}
    

function createMasterAdmin(){
    var masterAdmin = new Usuario("carlosdanielrt@gmail.com","34-19-21/cdrt/freiddy","20186055","Carlos Daniel Ramirez","40214546935",18,"05-21-2000","Admin del Sistema");
    usuarios.push(masterAdmin);
}

function loguearse(){
    var correo = document.getElementById("correoElectronicoLogin").value;
    var contraseña = document.getElementById("ContraseñaLogin").value;
    var loggedAproved = false;
    for(var i = 0; i < usuarios.length;i++){
        if(usuarios[i].correo === correo){
            if(usuarios[i].contraseña === contraseña){
                loggedAproved = true;
                alert("Bienvenido " + usuarios[i].nombre);
                location.href = "pagina-principal.html";
                break;
            }
        }
    }
    if(!loggedAproved){
        alert("Usuario no encontrado, verifique correo y contraseña");
    }
}

function run(){
    createMasterAdmin();
    mostrarUsuariosConsola();
}

