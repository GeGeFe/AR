const audiogeneral = new Audio("./assets/laser.mp3")
var escala = true;

AFRAME.registerComponent('manejodeclicks', {
  init: function () {
    this.el.addEventListener('markerFound', (e) => {
      audiogeneral.play();
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
        escala=!escala;
        document.getElementById('mercurio').setAttribute(`scale`, "1 1 1");
        console.log("Intentando cambiar escala a Mercurio");
      });
  };