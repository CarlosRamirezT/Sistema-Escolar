/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Materia{
    constructor(cuatrimestre,codigo,nombre,creditos,seleccionada){
        this.cuatrimestre = cuatrimestre;
        this.codigo = codigo;
        this.nombre = nombre;
        this.creditos = creditos;
        this.cuatrimestre = cuatrimestre;
        this.seleccionada = seleccionada;
    }
}

var pemsunSoftware = [];

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
        pemsunSoftware.push(materia);
        alert("Materia agregada Exitosamente");
    }
}

function llenarSoftware(){
    
    pemsunSoftware = [
        new Materia(1,"ESP-001","Redacción Castellana",4),
        new Materia(1,"HIS-001","Historia Dominicana",4),
        new Materia(1,"ING-101","Ingles Tecnico",4),
        new Materia(1,"MAT-001","Precalculo",5,true),
        new Materia(1,"TI-101","Fundamentos del Computador",4),
        
        new Materia(2,"SOF-001","Fundamentos de Programacion",4,true),
        new Materia(2,"AC-ET1","Ética 1: Ética de la Persona",3),
        new Materia(2,"SOF-006","Introducción a las Bases de Datos",4,true),
        
        new Materia(3,"FIL-001","Ética Social y Profesional",3,true),
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
    
    console.info("Pemsun Creado Exitosamente");
}

function crearTabla(){
    
    if(pemsunSoftware.length === 0){
        
           console.error("La tabla no contiene ningun elemento, por favor agreguele elementos"); 
           
    }else{

        
        var tbl = document.getElementById("tabla");
        var tblBody = document.createElement("tbody");    

        var fila = document.createElement("tr");

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
        

        for (var i = 0; i < pemsunSoftware.length; i++) {

            if(pemsunSoftware[i].seleccionada){

                if(i > 0){
                    if(pemsunSoftware[i].cuatrimestre > pemsunSoftware[i-1].cuatrimestre){
                        var fila = document.createElement("tr");

                        var celda = document.createElement("th");
                        var textoCelda = document.createTextNode("Cuatrimestre " + pemsunSoftware[i].cuatrimestre);
                        celda.appendChild(textoCelda);
                        celda.setAttribute("colspan","3");
                        fila.appendChild(celda);
                        tblBody.appendChild(fila);
                    }
                }else if(i === 0){
                    var fila = document.createElement("tr");

                    var celda = document.createElement("th");
                    var textoCelda = document.createTextNode("Cuatrimestre " + pemsunSoftware[i].cuatrimestre);
                    celda.appendChild(textoCelda);
                    celda.setAttribute("colspan","3");
                    fila.appendChild(celda);
                    tblBody.appendChild(fila);
                }

                var fila = document.createElement("tr");

                var celda = document.createElement("td");
                var textoCelda = document.createTextNode(pemsunSoftware[i].codigo);
                celda.appendChild(textoCelda);
                fila.appendChild(celda);

                var celda = document.createElement("td");
                var textoCelda = document.createTextNode(pemsunSoftware[i].nombre);
                celda.appendChild(textoCelda);
                fila.appendChild(celda);

                var celda = document.createElement("td");
                var textoCelda = document.createTextNode(pemsunSoftware[i].creditos);
                celda.appendChild(textoCelda);
                fila.appendChild(celda);

                tblBody.appendChild(fila);
                
                
            }
            
            tbl.appendChild(tblBody);
        
        
            console.info("Tabla generada exitosamente");
    
        }    
    }
    
    
    
}

function run(){
    llenarSoftware();
    crearTabla();
}