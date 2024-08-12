const audiomercurio = new Audio("./assets/laser.mp3")

AFRAME.registerComponent('clickm1', {
  init: function () {
    this.el.sceneEl.addEventListener('markerFound', () => {
      // redirect to custom URL e.g. google.com
      console.log("¡Detecté a Mercurio!");
      audiomercurio.play();
 //     window.location = 'https://www.google.com/';
    })
  }
});

window.onload = function () {
    document
      .querySelector(".acercade")
      .addEventListener("click", function () {
        alert("Ésta aplicación es software libre./nPuede copiarla y utilizarla todo lo que quiera.");
      });
  };