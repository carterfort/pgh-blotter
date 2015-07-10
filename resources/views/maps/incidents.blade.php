
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

            var redCircle = {
                path: 'M-9,1a10,10 0 1,0 20,0a10,10 0 1,0 -20,0',
                fillColor: 'red',
                fillOpacity: 1,
                scale: 0.2,
                strokeColor: 'dark red',
                strokeWeight: 1
            };

            $.get("{{ route('api.v1.incidents.search') }}?start-date={{date('Y-m-d', strtotime(' - 3 days '))}}&end-date={{date('Y-m-d')}}", function (result) {

                $('#violations').empty();

                result.forEach( function (incident) {

                    var latlng = new google.maps.LatLng(incident.location.latitude, incident.location.longitude);
                    var marker = new google.maps.Marker({
                        position: latlng,
                        map: map,
                        icon: redCircle,
                        title: "Occurred "+incident.occurred_at,
                    });
                    addIncidentToListGroup(incident);
                });
            });

            function addIncidentToListGroup(incident)
            {
                incident.violations.forEach( function(violation){
                    var violationHTML = "<a href='#' class='list-group-item'>"+violation.section_number+"<br/>"+violation.description+"</a>";
                    $('#violations').append(violationHTML);
                })
            }
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    </script>

    <style>
        #map-canvas {height: 500px; padding: 10px;}
        #violations { max-height: 500px; overflow-y: scroll; }
    </style>


@stop