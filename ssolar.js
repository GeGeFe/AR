const audiogeneral = new Audio("./assets/sonidos/laser.mp3")

AFRAME.registerComponent('manejodeclicks', {
  init: function () {
    this.el.addEventListener('markerFound', (e) => {
      console.log(this.el.id);
      audiogeneral.play();
 //     window.location = 'https://www.google.com/';
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