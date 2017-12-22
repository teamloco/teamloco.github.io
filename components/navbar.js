angular.module('locoapp')
.component('navbar', {
  controller: function($scope) {
    this.sam = 'https://github.com/kwak123';
    this.uciel = 'https://github.com/uvilchis';
    this.christine = 'https://github.com/ckong1792';

    this.samPic = 'assets/screenshots/sk.jpg';
    this.ucielPic = 'assets/screenshots/uv.jpeg';
    this.christinePic = 'assets/screenshots/ck.jpeg';
  },
  template: `
    <div class="navbar-container">
      <p class="navbar-logo">Loco</p>
      <div class="navbar__inner">
        <div class="navbar__user">
          <img src={{$ctrl.samPic}} alt="sam">
          <p><a href={{$ctrl.sam}}>Sam Kwak</a></p>
        </div>
        <div class="navbar__user">
          <img src={{$ctrl.ucielPic}} alt="uciel">
          <p><a href={{$ctrl.uciel}}>Uciel Vilchis</a></p>
        </div>
        <div class="navbar__user">
          <img src={{$ctrl.christinePic}} alt="christine">
          <p><a href={{$ctrl.christine}}>Christine Kong</a></p>
        </div>
      </div>
    </div>
  `
});
