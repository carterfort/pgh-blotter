<?php


use Blotter\GeocodeAPI\Geocoder;

class GeocodeTest extends TestCase {


    /** @test */
    public function it_geocodes_a_list_of_addresses(){

        $geocoder = new Geocoder();
        $geoLocations = $geocoder->geocodeAddresses([
            '600 block Mindora St',
            '100 block Gidding St'
        ]);

        $this->assertEquals( -80.010643645588, $geoLocations[0]->location->x);
        $this->assertEquals( 40.42262895836, $geoLocations[0]->location->y);

        $this->assertEquals( -79.936369602775, $geoLocations[1]->location->x);
        $this->assertEquals( 40.412003935134, $geoLocations[1]->location->y);
    }
}