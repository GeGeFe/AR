AFRAME.registerComponent('clickm1', {
  init: function () {
    this.el.sceneEl.addEventListener('markerFound', () => {
      // redirect to custom URL e.g. google.com
      console.log("¡Holaaaaa!");
      window.location = 'https://www.google.com/';
    })
  }
});