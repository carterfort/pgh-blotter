<?php namespace App\Console\Commands;

use Blotter\Incident\Incident;
use Blotter\Location\Location;
use Blotter\Person\Person;

use Carbon\Carbon;
use Illuminate\Console\Command;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;

class FetchWeekFromGitHub extends Command {

	private $baseURL = 'https://raw.githubusercontent.com/openpgh/jsonIncidents2015/master/';

	/**
	 * The console command name.
	 *
	 * @var string
	 */
	protected $name = 'blotter:fetchWeekFromGithub';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Fetch a week\'s worth of JSON data from the OpenPGH GH repo';
	/**
	 * @var Location
	 */
	private $locations;
	/**
	 * @var Incident
	 */
	private $incidents;
	/**
	 * @var Person
	 */
	private $people;

	/**
	 * Create a new command instance.
	 * @param Location $locations
	 * @param Incident $incidents
	 * @param Person $people
	 */
	public function __construct(Location $locations, Incident $incidents, Person $people)
	{
		parent::__construct();
		$this->locations = $locations;
		$this->incidents = $incidents;
		$this->people = $people;
	}

	/**
	 * Execute the console command.
	 *
	 * @return mixed
	 */
	public function fire()
	{
		//


		$fileURLs = [];

		$startingDate = Carbon::now()->subWeeks($this->argument('weekOffset'));

		for ($i = 0; $i < 6; $i++)
		{
			$fileURLs[] = $this->baseURL.$startingDate->copy()->subDays($i)->format('Y-m-d').'Incidents.json';
		}

		foreach ($fileURLs as $url)
		{
			try {
				$json = file_get_contents($url);
				$incidents = json_decode($json);
                $this->storeIncidents($incidents);
			} catch (\ErrorException $e)
			{

			}

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
			['weekOffset', InputArgument::OPTIONAL, 'An example argument.', 0],
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
			['example', null, InputOption::VALUE_OPTIONAL, 'An example option.', null],
		];
	}

    private function storeIncidents($incidents)
    {

        foreach ($incidents as $report)
        {

            $location = $this->locations->firstOrCreate([
                'address' => $report->address,
                'neighborhood' => $report->neighborhood,
                'zone' => $report->zone,
                'latitude' => $report->lat,
                'longitude' => $report->lng
            ]);


            $occurance = Carbon::parse($report->incidentdate.' '.$report->incidenttime);
            $incident = $this->incidents->firstOrCreate([
                'location_id' => $location->id,
                'occurred_at' => $occurance,
                'report_name' => $report->type,
                'crime_report_number' => $report->incidentnumber
            ]);

            $reportSex = 'N/A';
            if ($report->gender == 'F')
            {
                $reportSex = 'Female';
            } elseif ($report->gender == 'M') {
                $reportSex = 'Male';
            }

            $this->people->firstOrCreate([
                'incident_id' => $incident->id,
                'sex' => $reportSex,
                'age' => $report->age
            ]);
        }

    }

}
