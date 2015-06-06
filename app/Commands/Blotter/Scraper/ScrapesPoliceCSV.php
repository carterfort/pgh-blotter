<?php namespace App\Commands\Blotter\Scraper;

use App\Commands\Command;

use Carbon\Carbon;
use Blotter\Scraper\FetchesCSVForDay;
use Blotter\Scraper\HandlesCSVForDay;
use Illuminate\Contracts\Bus\SelfHandling;

class ScrapesPoliceCSV extends Command implements SelfHandling {


    /**
     * Execute the command.
     *
     * @param FetchesCSVForDay $CSVForDay
     * @param HandlesCSVForDay $csvHandler
     */
	public function handle(FetchesCSVForDay $CSVForDay, HandlesCSVForDay $csvHandler)
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

            $dailyCSV = $CSVForDay->forDay($day);
            $csvHandler->storeDailyReports($dailyCSV);

            sleep(0.1);

        }
	}

}
