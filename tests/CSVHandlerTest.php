<?php

use Blotter\Incident\Incident;
use Blotter\Location\Location;
use Blotter\Scraper\HandlesCSVForDay;
use Blotter\Person\Person;

class CSVHandlerTest extends \TestCase
{
    /** @test */
    public function it_stores_the_response_data(){

        $csv = file_get_contents(base_path('arrest_blotter_Monday.csv'));
        $handler = new HandlesCSVForDay(new Person(), new Location(), new Incident() );
        $handler->storeDailyReports($csv);

        $incidents = Incident::all();
        $this->assertEquals(219, $incidents->count());

        //Check to make sure it won't save already saved data

        $handler->storeDailyReports($csv);
        $incidents = Incident::all();
        $this->assertEquals(219, $incidents->count());
    }
}