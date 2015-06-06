<?php  namespace Blotter\Scraper; 
class FetchesCSVForDay {

    private $baseURL = "http://apps.pittsburghpa.gov/police/arrest_blotter/arrest_blotter_";


    public function forDay($day)
    {
        return file_get_contents($this->baseURL.$day.".csv");
    }
}