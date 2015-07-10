<?php  namespace App\Http\Controllers;

use Blotter\Incident\Incident;
use Illuminate\Support\Facades\Input;

class IncidentsController extends Controller {

    /**
     * @var Incident
     */
    private $incidents;

    public function __construct(Incident $incidents)
    {
        $this->incidents = $incidents;
    }

    public function search()
    {

        return $this->incidents
            ->occurredBetween([
                Input::get('start-date'), Input::get('end-date')
            ])
            ->violationSection(Input::get('section'))
            ->mappable()
            ->with([
                'location',
                'people',
                'violations'
            ])->leftJoin("violations", "violations.incident_id", "=", "incidents.id")
            ->orderBy('violations.section_number', 'ASC')
            ->get();
    }
}