<?php

$factory('Blotter\Incident\Incident', [
    'location_id' => 'factory:Blotter\Location\Location'
]);

$factory('Blotter\Location\Location', [

]);

$factory('Blotter\Person\Person', [
    'incident_id' => 'factory:Blotter\Incident\Incident'
]);