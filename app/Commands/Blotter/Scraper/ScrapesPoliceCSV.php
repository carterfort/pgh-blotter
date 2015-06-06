<?php namespace App\Commands\Blotter\Scraper;

use App\Blotter\Incident\Incident;
use App\Blotter\Location\Location;
use App\Blotter\Person\Person;
use App\Commands\Command;

use Carbon\Carbon;
use FetchesCSVForDay;
use Illuminate\Contracts\Bus\SelfHandling;
use StoresWeeklyData;

class ScrapesPoliceCSV extends Command implements SelfHandling {


    /**
     * @var FetchesCSVForDay
     */
    private $csvFetcher;
    /**
     * @var StoresWeeklyData
     */
    private $dataStorer;

    public function __construct(FetchesCSVForDay $csvFetcher, StoresWeeklyData $dataStorer)
	{
		//
        $this->csvFetcher = $csvFetcher;
        $this->dataStorer = $dataStorer;
    }

	/**
	 * Execute the command.
	 *
	 * @return void
	 */
	public function handle()
	{
		//

        $daysOfTheWeek = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ];


        foreach ($daysOfTheWeek as $day)
        {

            sleep(1);

            $weeklyData = $this->csvFetcher->dataArrayForDay($day);
            $this->dataStorer->weeklyData($weeklyData);
        }
	}

}
