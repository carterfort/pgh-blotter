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
        return view('maps.incidents');
    }
}