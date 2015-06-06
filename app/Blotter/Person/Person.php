<?php namespace Blotter\Person;

use Illuminate\Database\Eloquent\Model;

class Person extends Model {

	//

    protected $fillable = [
        'incident_id',
        'age',
        'sex'
    ];
}
