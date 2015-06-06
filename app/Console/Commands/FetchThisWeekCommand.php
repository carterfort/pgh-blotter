<?php namespace App\Console\Commands;

use App\Commands\Blotter\Scraper\ScrapesPoliceCSV;
use Illuminate\Console\Command;
use Illuminate\Foundation\Bus\DispatchesCommands;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;

class FetchThisWeekCommand extends Command {


    use DispatchesCommands;

	/**
	 * The console command name.
	 *
	 * @var string
	 */
	protected $name = 'blotter:fetchWeek';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Fetches the current week of incidents';
    /**
     * @var ScrapesPoliceCSV
     */
    private $scrapesPoliceCSV;

    /**
     * Create a new command instance.
     *
     * @param ScrapesPoliceCSV $scrapesPoliceCSV
     */
	public function __construct(ScrapesPoliceCSV $scrapesPoliceCSV)
	{
		parent::__construct();
        $this->scrapesPoliceCSV = $scrapesPoliceCSV;
    }

	/**
	 * Execute the console command.
	 *
	 * @return mixed
	 */
	public function fire()
	{
		//

        $this->dispatch(new ScrapesPoliceCSV());
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
