angular.module('locoapp')
.component('about', {
  controller: function() {

  },
  template: `
    <div class="about__container">
      <div class="about__help">
        <h4 class="about__header">How to download</h4>
        <div class="about__help-list">
          <p>1. Download the Expo.io app on your iPhone or Android device.</p>
          <p>2. Use the Expo.io app and take a picture of our QR code.</p>
          <p>3. Ready to view! You will need to login to add reports.</p>
          <p class="italics">A partial web client is available to view <a href="http://104.131.63.107">here</a>. This is still very much a WIP.</p>
        </div>
      </div>
      <div class="about__code">
        <h4 class="about__header">QR Code</h4>
        <img class="about__code--img" src="assets/base/expoqr.png" alt="failed to load qr">
      </div>
    </div>
  `
});