const audiomercurio = new Audio("./assets/laser.mp3")

AFRAME.registerComponent('manejodeclicks', {
  init: function () {
    this.el.sceneEl.addEventListener('markerFound', (e) => {
      console.log(this.el.id);
      audiomercurio.play();
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