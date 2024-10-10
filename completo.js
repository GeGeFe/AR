const audiogeneral = new Audio("./assets/laser.mp3")

AFRAME.registerComponent('manejodeclicks', {
  init: function () {
    this.el.addEventListener('markerFound', (e) => {
      console.log(this.el.id);
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
  };