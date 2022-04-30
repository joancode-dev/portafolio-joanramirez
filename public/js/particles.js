

/*Cuando el usuario se desplaza hacia abajo 20
  píxeles desde la parte superior del documento, 
  oculte particles*/

if (document.getElementById('pages')) {
  var ScrollPage = document.getElementById('pages');
  ScrollPage.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    if (ScrollPage.scrollTop > 200) {
      document.getElementById('background_particles').style.opacity = 0;
    } else {
      document.getElementById('background_particles').style.opacity = 1;
    }
  }
}
