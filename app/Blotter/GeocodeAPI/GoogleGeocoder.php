<?php

namespace Blotter\GeocodeAPI;

class GoogleGeocoder {

    public function geocodeAddresses($addresses, $defaultCity = 'Pittsburgh, PA')
    {
        $results = [];

        foreach ($addresses as $index => $address)
        {
            $matches = $this->googleAPIResultsForString($address.', '.$defaultCity);
            if (count($matches['results']))
            {
                $results[$index] = $matches['results'][0];
            }
            sleep(0.2);
        }

        return $results;
    }

    private function googleAPIResultsForString($string)
    {
        $googleURL = "https://maps.googleapis.com/maps/api/geocode/json?key=" . env('google.places_api_key') . "&address=".urlencode($string)."&sensor=false";
        $results = file_get_contents($googleURL); // get json content

        $normalized = json_decode($results, true);

        return $normalized;
    }
}