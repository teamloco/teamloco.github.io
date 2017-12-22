angular.module('locoapp', ['duParallax'])
.controller('AppCtrl', function() {
  this.bgMain = 'assets/stocks/bg-main.jpg';

  this.mainString = 'Your Commute at a Glance';
  this.mainDescString = 'Every train and its official status on one page';
  this.mainImg = 'assets/screenshots/main.png';

  this.communityString = 'Crowdsourced Subway Status Info';
  this.communityDescString = 'A community of riders keeping each other updated';
  this.communityImg = 'assets/screenshots/main-exp.png';

  this.detailsString = 'Plan Ahead';
  this.detailsDescString = 'Know the status of your trains before you get the platform';
  this.detailsImg = 'assets/screenshots/details.png';

  this.mapString = 'Find Your Way';
  this.mapDescString = 'Find the smoothest operation stations near you';
  this.mapImg = 'assets/screenshots/map.png';

  this.favString = 'Stay in the Loop';
  this.favDescString = 'Track the lines and stations you frequent';
  this.favImg = 'assets/screenshots/favs.png';
})
.component('app', {
  controller: 'AppCtrl',
  template: `
    <div class="app">
      <navbar></navbar>
      <div class="bg__container">
        <div class="bg__header--container">
          <p class="bg__header--title">Loco</p>
        </div>
        <parallax-image image="$ctrl.bgMain"></parallax-image>
        <desc title="$ctrl.mainString" description="$ctrl.mainDescString" screenshot="$ctrl.mainImg"></desc>
      </div>
    </div>
  `
});