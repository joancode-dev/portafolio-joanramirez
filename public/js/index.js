
document.getElementById("html").onmousemove = function (event) { myFunction(event) };

function myFunction(e) {
  var x = e.clientX;
  var y = e.clientY;

  document.getElementById("circulo").style.marginTop = y + -10 + "px";
  document.getElementById("circulo").style.marginLeft = x + -11.5 + "px";

  document.getElementById("puntero").style.marginTop = y + -2 + "px";
  document.getElementById("puntero").style.marginLeft = x + -3 + "px";

}






