<?php namespace Blotter\Incident;

use Illuminate\Database\Eloquent\Model;

class Violation extends Model {

	//

    protected $fillable = [
        'incident_id',
        'section_number',
        'description'
    ];

    /*
    ===========
    Relationships
    ===========
    */

    public function incident()
    {
        return $this->belongsTo('Blotter\Incident\Incident');
    }

    /*
    ===========
    Setters
    ===========
    */


    /*
    ===========
    Getters
    ===========
    */

}
