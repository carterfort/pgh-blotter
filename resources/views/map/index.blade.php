<html>
  <head>
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
    <script src="http://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.js"></script>

    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
  </head>

  <body>
    <style>
      #map { height: 500px; }
      #controls { width: 200px; padding: 10px;}
      .marker-div-icon { border: 1px solid black; border-radius: 50%; height: 10px; width: 10px; background: red;}
    </style>
    <script>
    $(function() {
        $( "#slider" ).slider();
    });
    </script>

    <h1>PGH Blotter</h1>
    <div id="controls">
      <div id="slider"></div>
    </div>
    <div id="map"></div>
  </body>

  <!-- Leaflet Script -->
  <script>
    // Generate a bunch of Fake Data
    ////////////////////////////////

    function rand_lat_diff() {
        var miles_per_lat = 53;
        return Math.random() * 2/miles_per_lat - 1/miles_per_lat;
    }
    function rand_long_diff() {
        var miles_per_long = 69;
        return Math.random() * 2/miles_per_long - 1/miles_per_long;
    }

    var data = [];
    var miles_per_long = 69;
    lat = 40.4397;
    long = -79.9764;
    for (var i=0; i<100; i++) {
        lat += rand_lat_diff();
        long += rand_long_diff();
        data.push(
            {'location': [lat, long], 'people': ['mary', 'tom', 'sue']}
        );
    };


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
        L.marker(data[i]['location'], {icon: marker_icon}).addTo(map);
    }

  </script>

</html>
