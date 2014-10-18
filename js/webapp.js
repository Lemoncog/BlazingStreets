/* global MozActivity, alert, console, Notification */
"use strict";
(function () {

    /*Map
    */
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
    attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png">',
    maxZoom: 18
    }).addTo(map);
    
})();
