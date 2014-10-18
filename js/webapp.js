/* global MozActivity, alert, console, Notification */
"use strict";
(function() {

    /*Map
     */
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
        attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png">',
        maxZoom: 18
    }).addTo(map);


    //Get the users GPS
    var overlayStatus = document.querySelector("#overlayStatus");
    overlayStatus.innerHTML = "Searching for location...";
    navigator.geolocation.getCurrentPosition(function(position) {

        map.setView([position.coords.latitude, position.coords.longitude], 16);

        overlayStatus.innerHTML = "Good location fix";
        overlayStatus.style.display = "block";
    }, function() {
        overlayStatus.innerHTML = "Failed to get your current location";
        overlayStatus.style.display = "block";
    });

})();