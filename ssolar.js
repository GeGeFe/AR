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
      .querySelector(".unboton")
      .addEventListener("click", function () {
        // here you can change also a-scene or a-entity properties, like
        // changing your 3D model source, size, position and so on
        // or you can just open links, trigger actions...
        alert("¡Hola!");
      });
  };