
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

            $.get("{{ route('api.v1.incidents.search') }}", function (result) {


                result.forEach( function (incident) {
                    var latlng = new google.maps.LatLng(incident.location.latitude, incident.location.longitude);
                    var marker = new google.maps.Marker({
                        position: latlng,
                        map: map,
                        title: incident.created_at,
                        animation: google.maps.Animation.DROP,
                    });
                });
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    </script>

    <style>
        #map-canvas {height: 500px; padding: 10px;}
    </style>


@stop