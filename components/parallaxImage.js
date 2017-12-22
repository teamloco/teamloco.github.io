angular.module('locoapp')
.component('parallaxImage', {
  controller: function($scope, parallaxHelper) {
    $scope.background = parallaxHelper.createAnimator(-0.5);
  },
  bindings: {
    image: '<'
  },
  template: `
    <div class="bg">
      <img du-parallax y="background" src={{$ctrl.image}} alt="something pretty">
    </div>
  `
});