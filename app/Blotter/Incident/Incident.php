<?php namespace Blotter\Incident;

use Illuminate\Database\Eloquent\Model;

class Incident extends Model {

    protected $fillable = [
        'location_id',
        'occurred_at',
        'report_name',
        'crime_report_number',
        'section',
        'description'
    ];

    /*
    ===========
    Scopes
    ===========
    */

    public function scopeMappable($query)
    {
        return $query->whereHas('location', function($query){
           $query->whereNotNull('latitude')->whereNotNull('longitude');
        });
    }


    /*
    ===========
    Relationships
    ===========
    */

    public function location()
    {
        return $this->belongsTo('Blotter\Location\Location');
    }

    public function people()
    {
        return $this->hasMany('Blotter\Person\Person');
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
