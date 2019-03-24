/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navegacionFun() {
    var x = document.getElementById("myTopnav");
    if (x.className === "barra-navegacion") {
      x.className += " responsive";
    } else {
      x.className = "mi-barra-navegacion";
    }
  } 