
@extends('layouts.standard')


@section('main')


    <h1>PGH Blotter</h1>

    <div class="row">
        <div class="col-sm-8">
            <div id="map-canvas"></div>
        </div>
        <div class="col-sm-4">
            <div class="list-group" id="violations">
                    <div class="list-group-item">
                        Loading...
                    </div>
            </div>
        </div>
    </div>

    @stop


@section('head')

    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB-7MeY40PdXAtwlNli5FiTn5RWovQlG7s"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>

    <script type="text/javascript">

        function initialize() {
            var mapOptions = {
                center: { lat: 40.4397, lng: -79.9764},
                zoom: 12
            };
            var map = new google.maps.Map(document.getElementById('map-canvas'),
                    mapOptions);

            function redCircle(scale)
            {

                return {
                    path: 'M-9,1a10,10 0 1,0 20,0a10,10 0 1,0 -20,0',
                    fillColor: 'red',
                    fillOpacity: 1,
                    scale: scale,
                    strokeColor: 'dark red',
                    strokeWeight: 1
                };
            }

            loadedIncidents = {};

            $.get("{{ route('api.v1.incidents.search') }}?start-date={{date('Y-m-d', strtotime(' - 3 days '))}}&end-date={{date('Y-m-d')}}", function (result) {

                $('#violations').empty();

                result.forEach( function (incident) {

                    var latlng = new google.maps.LatLng(incident.location.latitude, incident.location.longitude);
                    var marker = new google.maps.Marker({
                        position: latlng,
                        map: map,
                        icon: redCircle(0.2),
                        title: "Occurred "+incident.occurred_at,
                    });

                    loadedIncidents[incident.id] = {"marker" : marker, "incident" : incident};
                    addIncidentToListGroup(incident);
                });
            });

            function addIncidentToListGroup(incident)
            {
                incident.violations.forEach( function(violation){
                    var violationHTML = "<a href='#' data-incident-id='"+incident.id+"' class='list-group-item load-incident'>Incident "+incident.occurred_at+" <br/><b>Violation "+violation.section_number+"</b><br/>"+violation.description+"</a>";
                    $('#violations').append(violationHTML);
                })
            }

            openIncidentWindows = [];

            $(document).on('click', '.load-incident', function(e){
                e.preventDefault();

                openIncidentWindows.forEach( function(window) {
                    window.close();
                });

                var marker = loadedIncidents[$(this).data('incident-id')]["marker"];
                var incident = loadedIncidents[$(this).data('incident-id')]["incident"];

                map.panTo(marker.position);
                map.setZoom(17);


                var contentString = '<div id="content">'+
                        '<div id="siteNotice">'+
                        '</div>'+
                        '<h3 id="firstHeading" class="firstHeading">Incident '+incident.id+'</h3>'+
                        '<div id="bodyContent">'+
                        '<p><b>Violations ('+incident.violations.length+')</b><br/>' +
                        '<ul>';

                incident.violations.forEach( function (violation){
                    contentString += '<li><b>'+violation.section_number+'</b><br/>'+violation.description+'</li>';
                });

                  contentString += '</ul>'+
                        '</p>'+
                        '</div>'+
                        '</div>';

                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                infowindow.open(map,marker);

                openIncidentWindows.push(infowindow);
            });


            google.maps.event.addListener(map, 'zoom_changed', function() {
                zoomLevel = map.getZoom();
                for (var id in loadedIncidents)
                {
                    var marker = loadedIncidents[id]["marker"];

                    var scale = 0.2;
                    if (zoomLevel > 12)
                    {
                      scale = (-11 + zoomLevel) * 0.2;
                    }

                    marker.setIcon(redCircle(scale));

                }
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);

    </script>

    <style>
        #map-canvas {height: 500px; padding: 10px;}
        #violations { max-height: 500px; overflow-y: scroll; }
    </style>


@stop