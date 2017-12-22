angular.module('locoapp', ['duParallax'])
.controller('AppCtrl', function($scope, parallaxHelper) {
  $scope.background = parallaxHelper.createAnimator(-0.5);

  this.bgMain = 'assets/stocks/bg-main.jpg';

  this.mainString = 'Your Commute at a Glance';
  this.mainDescString = 'Every train and its official status on one page.';
  this.mainImg = 'assets/screenshots/main.png';

  this.communityString = 'Crowdsourced Subway Status Info';
  this.communityDescString = 'A community of riders keeping each other updated.';
  this.communityImg = 'assets/stocks/subway.jpg';

  this.detailsString = 'Plan Ahead';
  this.detailsDescString = 'Know the status of your trains before you get to the platform. See what other people are saying.';
  this.detailsImg = 'assets/screenshots/details.png';

  this.mapString = 'Find Your Way';
  this.mapDescString = 'Avoid the delays. Check nearby stations and see which ones are operationg before you get there.';
  this.mapImg = 'assets/screenshots/map.png';

  this.favString = 'Stay in the Loop';
  this.favDescString = 'New York lives on a routine. Track your frequented routes to quickly view problems.';
  this.favImg = 'assets/screenshots/favs.png';

  this.missionString = 'Our Mission';
  this.missionDescString = 'No more unexpected surprises.';
  this.missionImg = 'assets/base/clock.svg';

  this.techString = 'Loco Tech';
  this.techDescString = 'How we built it.';
  this.techImg = 'assets/base/tech.svg';

  this.frontEndString = 'Our Front End';
  this.frontEndDescString = 'Cross-platform and mobile React clients deployed on Expo, powered by the latest front-end technology from Facebook. We prefer the cutting edge.';
  this.frontEndImgs = ['assets/base/react.svg', 'assets/base/expo.png'];

  this.webString = 'Our Realtime';
  this.webDescString = 'Powered by Node and deployed on Digital Ocean, one of the most trusted deployment platforms. Redis and Mongo provide a powerful, fast, and flexible data persistence for our users.'; 
  this.webImgs = ['assets/base/nodejs.svg', 'assets/base/digitalocean.png', 'assets/base/redis.png', 'assets/base/mongodb.png'];

  this.backEndString = 'Our Back End';
  this.backEndDescString = 'Static data is fetched from public transit data and persisted on our AWS-hosted API, backed by MYSQL. We conform with GTFS standards to maintain expandability';
  this.backEndImgs = ['assets/base/ec2.png', 'assets/base/rds.png', 'assets/base/mysql.png'];
})
.component('app', {
  controller: 'AppCtrl',
  template: `
    <div class="app">
      <navbar></navbar>
      <div class="bg__container">
        <div class="bg__header--container" du-parallax y="background">
          <img class="bg__img darken" src={{$ctrl.bgMain}} alt="something pretty">
          <p class="bg__header--title">Loco</p>
        </div>

        <div class="desc__container">
          <div class="desc__header">
            <div class="desc__header--info">
              <p class="desc__header--info-title">{{$ctrl.mainString}}</p>
              <p class="desc__header--info-desc">{{$ctrl.mainDescString}}</p>
            </div>
            <div class="desc__header--imgwrap">
              <img class="desc__header--img" src={{$ctrl.mainImg}} alt="phone">
            </div>
          </div>

          <div class="desc__divider"></div>

          <div class="desc__body-grid">
            <div class="desc__item">
              <p class="desc__item-title">{{$ctrl.detailsString}}</p>
              <p class="desc__item-desc">{{$ctrl.detailsDescString}}</p>
              <img class="desc__item-img" src={{$ctrl.detailsImg}} alt="pretty picture">
            </div>
            <div class="desc__item">
              <p class="desc__item-title">{{$ctrl.mapString}}</p>
              <p class="desc__item-desc">{{$ctrl.mapDescString}}</p>
              <img class="desc__item-img" src={{$ctrl.mapImg}} alt="pretty picture">
            </div>
            <div class="desc__item">
              <p class="desc__item-title">{{$ctrl.favString}}</p>
              <p class="desc__item-desc">{{$ctrl.favDescString}}</p>
              <img class="desc__item-img" src={{$ctrl.favImg}} alt="pretty picture">
            </div>
          </div>
        </div>

        <div class="bg__header--container" du-parallax y="background">
          <img class="bg__img darken" src={{$ctrl.communityImg}} alt="something pretty">
          <p class="bg__header--subtitle">Connect with your community, see what's happening now</p>
        </div>

        <div class="desc__container">
          <div class="desc__header">
            <div class="desc__header--info">
              <p class="desc__header--info-title">{{$ctrl.missionString}}</p>
              <p class="desc__header--info-desc">{{$ctrl.missionDescString}}</p>
            </div>
            <div class="desc__header--imgwrap">
              <img class="desc__header--img small" src={{$ctrl.missionImg}} alt="pretty picture">
            </div>
          </div>

          <div class="desc__divider"></div>

          <div class="desc__body">

            <blockquote class="desc__body--quote" cite="https://www.nytimes.com">
              New York’s subway now has the worst on-time performance of any major rapid transit system in the world, according to data collected from the 20 biggest. </br> &nbsp;&nbsp;&nbsp;&nbsp; - New York Times
            </blockquote>

            <p class="desc__body--text">
              We were inspired to build Loco after The New York Times wrote this <a href="https://www.nytimes.com/2017/11/18/nyregion/new-york-subway-system-failure-delays.html">piece</a>.
              We've all been there, waiting, patience wearing thin as the train we needed seems to have gotten lost. You begin to wonder if you could make it to another station and try a different route.
              But what if the train comes right after you leave? So you wait, hoping for some announcement to let you know what's happening. Well, we got tired of waiting, and we now know that announcement is never going to come. 
              Instead, we saw an opportunity to connect people with the amazing people around them, so we took it. 
            </p>

            <blockquote class="desc__body--quote" cite="https://www.nytimes.com">
              With New York City’s transportation system in a state of crisis, the head of the Metropolitan Transportation Authority said on Thursday that it was time for City Hall to contribute more money to repairing and maintaining the subway system that is the lifeblood of the city. </br> &nbsp;&nbsp;&nbsp;&nbsp; - New York Times
            </blockquote>

            <p class="desc__body--text">
              New York City is a magical place, the best city in the world, a global landmark of wealth and opportunity. Unfortunately, we are plagued with one of the <em>worst</em> transit authorities in the world. A large part of our roadmap is
              the ability to provide the MTA with statistics identifying problem areas. What better source than the people who are riding the MTA? With our data, user complaints could be modeled into usable data to help the MTA
              build a more efficient system. Oh, and don't worry about your personal information. We don't track who makes the complaints, just that a complaint was made.
            </p>

          </div>
        </div>

        <div class="bg__header--container" du-parallax y="background">
          <img class="bg__img darken" src="assets/stocks/anywhere.jpeg" alt="something pretty">
          <p class="bg__header--subtitle">Improving life for urban Americans</p>
        </div>

        <div class="desc__container">
          <div class="desc__header">
            <div class="desc__header--info">
              <p class="desc__header--info-title">{{$ctrl.techString}}</p>
              <p class="desc__header--info-desc">{{$ctrl.techDescString}}</p>
            </div>
            <div class="desc__header--imgwrap">
              <img class="desc__header--img small" src={{$ctrl.techImg}} alt="pretty picture">
            </div>
          </div>

          <div class="desc__divider"></div>

          <div class="desc__body-grid">

            <div class="desc__item">
              <p class="desc__item-title">{{$ctrl.frontEndString}}</p>
              <div class="desc__item--icon-container">
                <img class="desc__item--icon" ng-repeat="str in $ctrl.frontEndImgs" src={{str}} alt={{str}}>
              </div>
              <p class="desc__item-desc">{{$ctrl.frontEndDescString}}</p>
            </div>

            <div class="desc__item">
              <p class="desc__item-title">{{$ctrl.webString}}</p>
              <div class="desc__item--icon-container">
                <img class="desc__item--icon" ng-repeat="str in $ctrl.webImgs" src={{str}} alt={{str}}>
              </div>
              <p class="desc__item-desc">{{$ctrl.webDescString}}</p>
            </div>

            <div class="desc__item">
              <p class="desc__item-title">{{$ctrl.backEndString}}</p>
              <div class="desc__item--icon-container">
                <img class="desc__item--icon" ng-repeat="str in $ctrl.backEndImgs" src={{str}} alt={{str}}>
              </div>
              <p class="desc__item-desc">{{$ctrl.backEndDescString}}</p>
            </div>

          </div>

          <div class="desc__body">
            <blockquote class="desc__body--quote" cite="https://www.time.com">
              With gas prices rising and family budgets strained, more commuters are looking for efficient ways to get to work without a car. But are America's transit networks up to the task? </br> &nbsp;&nbsp;&nbsp;&nbsp; - Time
            </blockquote>
            
            <p class="desc__body--text">
              The problem faced by many in American cities (not just New York) is painfully slow and inconsistent public transit. In <a href="https://jalopnik.com/the-worlds-ten-worst-public-transit-systems-657407658">Jalopnik's piece</a> on the worst transit systems in the world, America had over <em>five</em> entries. 
              The other 5 cities listed were all in different countries. The American cities are not isolated to any particular region, rather they range from coast to coast. One day, we want to help Americans across the country, a dream that impacted every step of our design process.
            </p>
          </div>

        </div>

        <about></about>
      </div>
      <footer></footer>
    </div>
  `
});