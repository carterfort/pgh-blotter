<?php namespace Blotter\Scraper; 

use Blotter\Incident\Incident;
use Blotter\Incident\Violation;
use Blotter\Location\Location;
use Blotter\Person\Person;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class HandlesCSVForDay {

    /**
     * @var
     */
    private $people;
    /**
     * @var
     */
    private $locations;
    /**
     * @var
     */
    private $incidents;
    /**
     * @var Violation
     */
    private $violations;

    public function __construct(Person $people, Location $locations, Incident $incidents, Violation $violations)
    {

        $this->people = $people;
        $this->locations = $locations;
        $this->incidents = $incidents;
        $this->violations = $violations;
    }


    public function storeDailyReports($reportsCSV)
    {

        $rows = explode("\n", $reportsCSV);

        $reports = array();
        foreach($rows as $row) {
            $reports[] = str_getcsv($row);
        }
        $keys = $reports[0];

        array_shift($reports);

        foreach ($reports as $report)
        {

            if ($report[0] == null)
            {
                continue;
            }

            $keyedReport = [];
            foreach ($keys as $i => $key)
            {
                if ($i == 0) $key = 'REPORT_NAME';
                $keyedReport[$key] = $report[$i];
            }

            $location = $this->locations->firstOrCreate([
                'address' => $keyedReport['ADDRESS'],
                'neighborhood' => $keyedReport['NEIGHBORHOOD'],
                'zone' => $keyedReport['ZONE']
            ]);

            if ( ! isset($keyedReport['REPORT_NAME']))
            {
                Log::error(json_encode($keyedReport));
            }

            $occurance = Carbon::parse($keyedReport['ARREST_DATE'].' '.$keyedReport['ARREST_TIME']);
            $incident = $this->incidents->firstOrCreate([
                'location_id' => $location->id,
                'occurred_at' => $occurance,
                'report_name' => $keyedReport["REPORT_NAME"],
                'crime_report_number' => $keyedReport['CCR'],
            ]);

            $this->violations->firstOrCreate([
                'section_number' => $keyedReport['SECTION'],
                'description' => $keyedReport['DESCRIPTION'],
                'incident_id' => $incident->id
            ]);

            $reportSex = 'N/A';
            if ($keyedReport['GENDER'] == 'F')
            {
                $reportSex = 'Female';
            } elseif ($keyedReport['GENDER'] == 'M') {
                $reportSex = 'Male';
            }

            $this->people->firstOrCreate([
                'incident_id' => $incident->id,
                'sex' => $reportSex,
                'age' => $keyedReport['AGE']
            ]);
        }

    }
}