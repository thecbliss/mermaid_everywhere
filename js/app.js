// initialize the map
var map = L.map('largemap').setView([36.888168,-76.266884], 12);
L.tileLayer(
  'http://{s}.sm.mapstack.stamen.com/($375a80[@60p],(naip,$2c235c[hsl-color@70])[darker],(toner-labels,$000[@20],$38315f[hsl-color])[@50])/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href=”http://stamen.com”>Stamen Design</a>, under <a href=”http://creativecommons.org/licenses/by/3.0”>CC BY 3.0</a>. Data by <a href=”http://openstreetmap.org”>OpenStreetMap</a>, under <a href=”http://creativecommons.org/licenses/by-sa/3.0”>CC BY SA</a>',
    maxZoom: 18,
    minZoom: 6,
  }).addTo(map);

var url = "mermaid.geojson";

 // load GeoJSON from an external file
$.getJSON(url, function(data) {
  var ratIcon = L.icon({
    iconUrl: 'mermaid-icon.png',
    iconSize: [28, 28],
    popupAnchor: [0, -18]
  });
  console.log(data);
  // add GeoJSON layer to the map once the file is loaded
  L.geoJson(data, {
    pointToLayer: function(feature, latlng) {
      var marker = L.marker(latlng, {
        icon: ratIcon
      });
      console.log(feature);
      marker.bindPopup('<b>' + '<font size="3">' + feature.properties.name + '</font>' + '</b>' + '<br/>' + feature.properties.address);
      return marker;
    }
  }).addTo(map);
});
