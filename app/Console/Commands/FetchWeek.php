<?php namespace App\Console\Commands;

use Illuminate\Console\Command;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;
use Carbon\Carbon;
use App\Location;
use App\Person;
use App\Incident;

class FetchWeek extends Command {

	/**
	 * The console command name.
	 *
	 * @var string
	 */
	protected $name = 'fetch:week';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Fetch the current week of blotter results';

	/**
	 * Create a new command instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		parent::__construct();
	}

	/**
	 * Execute the console command.
	 *
	 * @return mixed
	 */
	public function fire()
	{
		//

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

		$baseURL = "http://apps.pittsburghpa.gov/police/arrest_blotter/arrest_blotter_";

		foreach ($daysOfTheWeek as $day)
		{

			sleep(1);

			$url = $baseURL.$day.".csv";

			$data = file_get_contents($url);
			$rows = explode("\n",$data);
			$s = array();
			foreach($rows as $row) {
				$s[] = str_getcsv($row);
			}
			array_shift($s);
			
			foreach ($s as $report)
			{
				if ($report[0] == null)
				{
					continue;
				}

				$location = Location::firstOrCreate([
					'address' => $report[5],
					'neighborhood' => $report[6],
					'zone' => $report[7]
				]);


				$occurance = Carbon::parse($day.' '.$report[4]);
				$incident = Incident::firstOrCreate([
					'location_id' => $location->id,
					'occurred_at' => $occurance,
					'report_name' => $report[0],
					'crime_report_number' => $report[1],
					'section' => $report[2],
					'description' => $report[3]
				]);

				$reportex = 'N/A';
				if ($report[9] == 'F')
				{
					$reportex = 'Female';
				} elseif ($report[9] == 'M') {
					$reportex = 'Male';
				}

				Person::firstOrCreate([
					'incident_id' => $incident->id,
					'sex' => $reportex,
					'age' => $report[8]
				]);
			}

			$this->info('Added '.$day);

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

}
