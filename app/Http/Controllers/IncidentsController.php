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
            ->has('violations')
            ->with([
                'location',
                'people',
                'violations'
            ])->
            join('violations', 'incidents.id','=','violations.incident_id')
            ->orderBy('violations.section_number', 'ASC')
            ->select('incidents.*') // avoid fetching anything from joined table
            ->get();
    }
}