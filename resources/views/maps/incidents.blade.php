
@extends('layouts.standard')


@section('main')


    <h1>PGH Blotter</h1>

    <div class="row">
        <div class="col-sm-8">
            <div id="map-canvas"></div>
            <hr/>
        </div>
        <div class="col-sm-4">
            <div id="drop-down-selector">

            </div>
            <br/>

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

    <script type="text/javascript">

        function initialize() {
            var mapOptions = {
                center: { lat: 40.4397, lng: -79.9764},
                zoom: 12
            };
            var map = new google.maps.Map(document.getElementById('map-canvas'),
                    mapOptions);

            function markerCircle(scale, incident)
            {

                return {
                    path: 'M-9,1a10,10 0 1,0 20,0a10,10 0 1,0 -20,0',
                    fillColor: incident.color,
                    fillOpacity: 1,
                    scale: scale,
                    strokeColor: 'dark red',
                    strokeWeight: 1
                };
            }

            function prettyDate(date)
            {
                var d = new Date(Date.parse(date));

                var options = {
                    weekday: "short", year: "numeric", month: "long",
                    day: "numeric", hour: "2-digit", minute: "2-digit"
                };

                return d.toLocaleTimeString('en-us', options);
            }

            loadedIncidents = {};
            $('#violations').empty();
            var violations = [];

            $.get("{{ route('api.v1.incidents.search') }}?start-date={{Input::get('start-date', date('Y-m-d', strtotime(' - 3 days ')))}}&end-date={{Input::get('end-date', date('Y-m-d'))}}", function (result) {



                result.forEach( function (incident) {


                    incident.violations.forEach(function (violation){
                       if ( violations.indexOf(violation.description) == -1)
                       {
                            violations.push(violation.description);
                       }
                    });

                    var latlng = new google.maps.LatLng(incident.location.latitude, incident.location.longitude);
                    var marker = new google.maps.Marker({
                        position: latlng,
                        map: map,
                        icon: markerCircle(0.2, incident),
                        title: "Incident occurred "+prettyDate(incident.occurred_at),
                    });

                    var infoWindow = infoWindowForIncident(incident);

                    google.maps.event.addListener(marker, 'click', function() {
                        infoWindow.open(map,marker);
                    });

                    loadedIncidents[incident.id] = {"marker" : marker, "incident" : incident};
                    addIncidentToListGroup(incident);
                });

                var html = dropdownFilterHTMLForViolations(violations);

                $("#drop-down-selector").html(html);

                $(document).ready(function(){
                    $('[name="filter-by-violation"]').select2();
                });
            });

            function dropdownFilterHTMLForViolations(violations)
            {
                var html = '<select name="filter-by-violation">';
                html += '<option>Show all</option>';

                violations.forEach( function (violation ){
                    html += '<option value="'+violation+'">'+violation+'</option>';
                });

                html += '</select>';

                return html;
            }

            function addIncidentToListGroup(incident)
            {
                incident.violations.forEach( function(violation){
                    var violationHTML = "<a style='color: white; background: "+incident.color+"'";
                    violationHTML += "href='#' data-incident-id='"+incident.id+"' class='list-group-item load-incident'><b>Violation of Section "+violation.section_number+"</b>";
                    violationHTML += "<br/>Incident #"+incident.id+" - "+violation.description+" <br/>Occurred "+prettyDate(incident.occurred_at)+"</a>";

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

                var infoWindow = infoWindowForIncident(incident);
                infoWindow.open(map, marker);

                openIncidentWindows.push(infoWindow);
            });

            function infoWindowForIncident(incident)
            {

                var contentString = '<div id="content">'+
                        '<div id="siteNotice">'+
                        '</div>'+
                        '<h3 id="firstHeading" class="firstHeading">Incident '+incident.id+'</h3>'+
                                '<h5>Occurred '+prettyDate(incident.occurred_at)+'</h5>'+
                        '<div id="bodyContent">'+
                        '<p><b>Violations ('+incident.violations.length+')</b><br/>' +
                        '<ul>';

                incident.violations.forEach( function (violation){
                    contentString += '<li><b>'+violation.section_number+'</b><br/>'+violation.description+'</li>';
                });

                contentString += '</ul>'+
                                '<b>People Involved ('+incident.people.length+')</b><br/>'+
                                '<ul>';
                incident.people.forEach( function (person) {
                    if (person.age && person.sex != 'N/A'){
                        contentString += '<li>'+person.age+' year old '+person.sex+'</li>';
                    }
                });
                contentString += '</ul>'+
                        '</p>'+
                        '</div>'+
                        '</div>';

                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                return infowindow
            }


            google.maps.event.addListener(map, 'zoom_changed', function() {
                zoomLevel = map.getZoom();
                for (var id in loadedIncidents)
                {
                    var marker = loadedIncidents[id]["marker"];
                    var incident = loadedIncidents[id]["incident"];

                    var scale = 0.2;
                    if (zoomLevel > 12)
                    {
                      scale = (-11 + zoomLevel) * 0.2;
                    }

                    marker.setIcon(markerCircle(scale, incident));

                }
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);

        $(document).on('change', 'select[name="filter-by-violation"]', function(){

            var search = $(this).val().toLowerCase();

            if (search == 'show all')
            {
                $('#violations .list-group-item').show();
                return;
            }

            $('#violations .list-group-item').each(function(){
                var text = $(this).text().toLowerCase();
                (text.indexOf(search) >= 0) ? $(this).show() : $(this).hide();
            });

        });
    </script>

    <style>
        #map-canvas {height: 600px; padding: 10px;}
        #violations { max-height: 550px; overflow-y: scroll; }

        select[name="filter-by-violation"] {
            max-width: 100%;
        }

        #violations b {
            text-shadow: 0 1px 2px rgba(0,0,0,0.7);
        }

    </style>


@stop