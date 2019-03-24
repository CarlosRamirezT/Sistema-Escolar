var extern = document.getElementsByTagName("link")[0].import;

window.addEventListener("load", function() {
    document.getElementsByTagName("html")[0].replaceChild(
  
      extern.getElementsByTagName("body")[0],
  
        document.getElementsByTagName("body")[0]);}, false);
