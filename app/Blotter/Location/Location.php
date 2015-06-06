<?php namespace Blotter\Location;

use Illuminate\Database\Eloquent\Model;

class Location extends Model {

	//

    protected $fillable = [
        'address',
        'neighborhood',
        'zone',
        'latitude',
        'longitude'
    ];

}
