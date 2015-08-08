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

    public function index()
    {
        return view('incidents.index');
    }

    public function count()
    {
        return response()->json($this->incidents->mappable()->has('violations')->count());
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
            ])
            ->orderBy('occurred_at', 'DESC')
            ->get();
    }

    public function allWithOffset()
    {
        return $this->incidents
            ->mappable()
            ->has('violations')
            ->with([
                'location',
                'people',
                'violations'
            ])
            ->orderBy('occurred_at', 'DESC')
            ->take(400)
            ->skip(Input::get('offset', 0))
            ->get();
    }
}