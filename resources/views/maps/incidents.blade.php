<html>
  <head>
    <link rel="stylesheet" href="//cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
    <script src="//cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.js"></script>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB-7MeY40PdXAtwlNli5FiTn5RWovQlG7s"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  </head>
    <script type="text/javascript">
      
      function initialize() {
        var mapOptions = {
          center: { lat: 40.4397, lng: -79.9764},
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        $.get("{{ route('api.v1.incidents.search') }}", function (result) { 
            console.log(result);
            console.log(map);
            result.forEach( function (incident) {
                var latlng = new google.maps.LatLng(incident.location.latitude, incident.location.longitude);
                var marker = new google.maps.Marker({
                    position: latlng,
                    map: map,
                    title: incident.created_at,
                });
            });
        });
      }
      google.maps.event.addDomListener(window, 'load', initialize);
    </script>
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

      #map-canvas {height: 500px; padding: 10px;}
    </style>

    <h1>PGH Blotter</h1>

    <div id="map-canvas"></div>
  </body>

  </script>

</html>
