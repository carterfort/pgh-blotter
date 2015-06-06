<?php  namespace Blotter\GeocodeAPI;

class Geocoder {

    public function geocodeAddresses(array $addresses)
    {

        $addressArray = [];
        foreach ($addresses as $i => $address)
        {
            $addressArray[] = ['attributes' => [
                "OBJECTID" => ($i + 1),
                "STREET" => str_replace('block ', '', $address),
                "CITY" => 'Pittsburgh',
                "STATE" => 'PA'
            ]];
        }

        $addressJSON = urlencode(json_encode(["records" => $addressArray]));
        $url = 'http://geodata.alleghenycounty.us/arcgis/rest/services/Geocoders/TANA_Streets_Locator/GeocodeServer/geocodeAddresses?addresses='.$addressJSON.'&f=pjson';

        // Get cURL resource
        $ch = curl_init();
        // Set url
        curl_setopt($ch, CURLOPT_URL, $url);
        // Set method
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
        // Set options
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);



        // Send the request & save response to $resp
        $resp = curl_exec($ch);

        if(!$resp) {
            die('Error: "' . curl_error($ch) . '" - Code: ' . curl_errno($ch));
        }

        // Close request to clear up some resources
        curl_close($ch);

        $response = json_decode($resp);
        if ( ! $response)
        {
            error_log($url);
            die($resp);
        }

        return json_decode($resp)->locations;

    }


}