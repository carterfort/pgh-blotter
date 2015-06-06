<?php  namespace App\Http\Controllers;

use Blotter\Incident\Incident;

class MapsController extends Controller {

    /**
     * @var Incident
     */
    private $incidents;

    public function __construct(Incident $incidents)
    {
        $this->incidents = $incidents;
    }

    public function show()
    {
        $incidents = $this->incidents->mappable()->with(['location', 'people'])->get();
        return view('maps.incidents', compact('incidents'));
    }
}