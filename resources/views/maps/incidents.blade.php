<html>
  <head>
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
    <script src="http://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.js"></script>

  </head>

  <body>
    <style>
      #map {
          height: 500px;
      }

      #controls { width: 200px; padding: 10px;}
      .marker-div-icon {
          border: 1px solid black;
          border-radius: 50%;
          height: 10px;
          width: 10px;
          background: red;
      }
    </style>

    <h1>PGH Blotter</h1>

    <div id="map"></div>
  </body>

  <!-- Leaflet Script -->
  <script>

    var data = {!! $incidents->toJson() !!};

    // Actually Render the Map
    //////////////////////////

    var map = L.map('map').setView([40.4397, -79.9764], 10);
    var marker_icon = L.divIcon({className: 'marker-div-icon', iconSize: [8, 8]});

    var attribution = '<p style="font-size:0.6rem">Map tiles by <a href="http://stamen.com">Stamen Design</a>, ' +
      'under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> license. ' +
      'Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, ' +
      'under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a> license.</p>'

    L.tileLayer('http://{s}.sm.mapstack.stamen.com/terrain/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; ' + attribution,
        maxZoom: 18,
    }).addTo(map);

    for (var i=0; i<data.length; i++) {

        var latitude = parseFloat(data[i].location.latitude);
        var longitude = parseFloat(data[i].location.longitude);

        if ( (isNaN(latitude) || isNaN(longitude)) || latitude == 0 || longitude == 0 ) continue;

        var coordinates = [longitude, latitude];

        var marker = L.marker(coordinates, {icon: marker_icon});
        console.log(marker);
        marker.addTo(map);
    }

  </script>

</html>
