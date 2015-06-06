<?php 
class FetchesCSVForDay {

    private $baseURL = "http://apps.pittsburghpa.gov/police/arrest_blotter/arrest_blotter_";

    public function dataArrayForDay($day)
    {

        $dataArray = [];

        $url = $this->baseURL.$day.".csv";

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

            $location = [
                'address' => $report[5],
                'neighborhood' => $report[6],
                'zone' => $report[7]
            ];


            $occurance = Carbon::parse($day.' '.$report[4]);
            $incident = [
                'location_id' => $location->id,
                'occurred_at' => $occurance,
                'report_name' => $report[0],
                'crime_report_number' => $report[1],
                'section' => $report[2],
                'description' => $report[3]
            ];

            $reportex = 'N/A';
            if ($report[9] == 'F')
            {
                $reportex = 'Female';
            } elseif ($report[9] == 'M') {
                $reportex = 'Male';
            }

            $person = [
                'incident_id' => $incident->id,
                'sex' => $reportex,
                'age' => $report[8]
            ];

            $dataArray[] = ['location' => $location, 'incident' => $incident, 'person' => $person];
        }

       return $dataArray;
    }
}