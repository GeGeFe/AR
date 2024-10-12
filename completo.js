//var miEscena = document.querySelector('a-scene');
const audiogeneral = new Audio("./assets/laser.mp3")
var escala = true;
var valorescala = 0.002;
var sonido = true;

AFRAME.registerComponent('reconocido', {
  init: function () {
    this.el.addEventListener('markerFound', (e) => {
      if (sonido) {
        audiogeneral.play();
      };
    })
  }
});

window.onload = function () {
  document
    .querySelector(".licencia")
    .addEventListener("click", function () {
      alert("Ésta aplicación es software libre.\nPuede copiarla y utilizarla todo lo que quiera.");
    });
  document
    .querySelector(".escala")
    .addEventListener("click", function () {
      escala = !escala;
      var objetos = document.querySelectorAll('.clickable');
      for (var i = 0; i < objetos.length; i++) {
        valorescala = escala ? objetos[i].getAttribute("escala") : 0.002;
        console.log(valorescala);
        objetos[i].object3D.scale.set(valorescala, valorescala, valorescala);
      }
    });
  document
    .querySelector(".sonido")
    .addEventListener("click", function () {
      sonido = !sonido;
    });
};