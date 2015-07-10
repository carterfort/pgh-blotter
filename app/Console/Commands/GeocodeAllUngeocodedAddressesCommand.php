<?php namespace App\Console\Commands;

use Blotter\GeocodeAPI\Geocoder;
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
     * Create a new command instance.
     *
     * @param Geocoder $geocoder
     * @param Location $locations
     */
	public function __construct(Geocoder $geocoder, Location $locations)
	{
		parent::__construct();
        $this->geocoder = $geocoder;
        $this->locations = $locations;
    }

	/**
	 * Execute the console command.
	 *
	 * @return mixed
	 */
	public function fire()
	{
		//

        $this->locations
            ->whereNull('latitude')
            ->whereNull('longitude')
            ->chunk(5, function($locations){

                $geocodedLocations = $this->geocoder->geocodeAddresses($locations->lists('address'));
                $this->attachCoordinatesToLocations($locations, $geocodedLocations);

        });

        $remaining = $this->locations->whereNull('latitude')->whereNull('longitude')->count();
        $this->info($remaining." remaining");
	}


    private function attachCoordinatesToLocations($locations, $geocodedLocations)
    {
        foreach ($locations as $i => $location)
        {
            $geoLocation = $geocodedLocations[$i]->location;

            if ( $this->isGoodLocation($geoLocation) ) continue;

            $latLong = [
                "latitude"  => $geoLocation->x,
                "longitude" => $geoLocation->y
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
