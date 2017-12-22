angular.module('locoapp')
.component('parallaxImage', {
  controller: function() {
  },
  bindings: {
    image: '<',
    title: '<'
  },
  template: `
    <div class="bg__header--container">
      <img src={{$ctrl.image}} alt="something pretty">
      <p class="bg__header--title">{{$ctrl.title}}</p>
    </div>
  `
});