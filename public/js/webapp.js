/* global MozActivity, alert, console, Notification */
(function() {
  'use strict';
  /*Map
   */
  var map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
    attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png">',
    maxZoom: 18
  }).addTo(map);


  //Get the users GPS
  var overlayStatus = document.querySelector('#overlayStatus');
  overlayStatus.innerHTML = 'Searching for location...';

  var id;
  var options;

  function success(pos) {
    var crd = pos.coords;

    map.setView([crd.latitude, crd.longitude], 16);

    overlayStatus.innerHTML = 'Good location fix';
    overlayStatus.style.display = 'block';
  }

  function error(err) {
    console.log('Failed to get location err = ' + err + ', ' + err.code + ' ,' + err.message);
    overlayStatus.innerHTML = 'Cannot get a location fix';
    overlayStatus.style.display = 'block';
  }

  options = {
    enableHighAccuracy: false,
    timeout: 15000,
    maximumAge: 0
  };

  id = navigator.geolocation.watchPosition(success, error, options);
})();