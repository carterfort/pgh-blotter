<?php namespace App\Console\Commands;

use Blotter\GeocodeAPI\Geocoder;
use Blotter\GeocodeAPI\GoogleGeocoder;
use Blotter\Location\Location;
use Illuminate\Console\Command;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;

class GeocodeAllUngeocodedAddressesCommand extends Command {

	/**
	 * The console command name.
	 *
	 * @var string
	 */
	protected $name = 'blotter:geocodeAddresses';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Attempts to find a lat/long for each location without one';
    /**
     * @var Geocoder
     */
    private $geocoder;
    /**
     * @var Location
     */
    private $locations;
    /**
     * @var GoogleGeocoder
     */
    private $googleGeocoder;

    /**
     * Create a new command instance.
     *
     * @param Geocoder $geocoder
     * @param Location $locations
     * @param GoogleGeocoder $googleGeocoder
     */
	public function __construct(Geocoder $geocoder, Location $locations, GoogleGeocoder $googleGeocoder)
	{
		parent::__construct();
        $this->geocoder = $geocoder;
        $this->locations = $locations;
        $this->googleGeocoder = $googleGeocoder;
    }

	/**
	 * Execute the console command.
	 *
	 * @return mixed
	 */
	public function fire()
	{
		//

        $remaining = $this->locations->whereNull('latitude')->whereNull('longitude')->count();
        $previousRemaining = false;
        $previousMatches = 0;
        $loopCount = 0;
        $locationsPerLoop = 10;

        while($remaining > 0 && $previousMatches < 10)
        {
            if ($previousRemaining == $remaining)
            {
                $previousMatches++;
            }

            $previousRemaining = $remaining;

            $locations = $this->locations
                ->whereNull('latitude')
                ->whereNull('longitude')
                ->take($locationsPerLoop)->skip($loopCount * $locationsPerLoop)->get();

            $geocodedLocations = $this->geocoder->geocodeAddresses($locations->lists('address'));
            $this->attachCoordinatesToLocations($locations, $geocodedLocations);

            $remaining = $this->locations->whereNull('latitude')->whereNull('longitude')->count();

            $loopCount++;

        }

        $remainingLocations = $this->locations
            ->whereNull('latitude')
            ->whereNull('longitude')
            ->get(['address', 'id']);

        $geocodedAddresses = $this->googleGeocoder->geocodeAddresses($remainingLocations->lists('address', 'id'));

        foreach ($remainingLocations as $location)
        {
            if ( isset($geocodedAddresses[$location->id]) )
            {
                $geodata = $geocodedAddresses[$location->id];

                $latLong = [
                    'latitude' => $geodata['geometry']['location']['lat'],
                    'longitude' => $geodata['geometry']['location']['lng'],
                ];

                $location->update($latLong);
            }
        }

        $remaining = $this->locations->whereNull('latitude')->whereNull('longitude')->count();

        $this->info($remaining.' remaining');

	}



    private function attachCoordinatesToLocations($locations, $geocodedLocations)
    {
        foreach ($locations as $i => $location)
        {
            $geoLocation = $geocodedLocations[$i]->location;

            if ( $this->isGoodLocation($geoLocation) ) continue;

            $latLong = [
                "latitude"  => $geoLocation->y,
                "longitude" => $geoLocation->x
            ];

            $location->update($latLong);

        }
    }

    /**
	 * Get the console command arguments.
	 *
	 * @return array
	 */
	protected function getArguments()
	{
		return [

		];
	}

	/**
	 * Get the console command options.
	 *
	 * @return array
	 */
	protected function getOptions()
	{
		return [

		];
	}

    /**
     * @param $geoLocation
     * @return bool
     */
    private function isGoodLocation($geoLocation)
    {
        return ! is_float($geoLocation->x);
    }

}
