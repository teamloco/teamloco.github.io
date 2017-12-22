angular.module('locoapp')
.component('desc', {
  controller: function() {

  },
  bindings: {
    title: '<',
    description: '<',
    screenshot: '<'
  },
  template: `
    <div class="desc__container">
      <p>{{$ctrl.title}}</p>
      <p>{{$ctrl.description}}</p>
      <img src={{$ctrl.screenshot}} alt="phone">
    </div>
  `
});