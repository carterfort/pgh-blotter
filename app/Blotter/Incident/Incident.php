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

    public function scopeOccurredBetween($query, $dates)
    {
        if ( $dates[0] )
            return $query->whereBetween('occurred_at', $dates);
    }

    public function scopeSection($query, $section)
    {
        if ( $section )
            return $query->whereHas('violations', function($query) use ($section){
                $query->whereSectionNumber($section);
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

    public function violations()
    {
        return $this->hasMany('Blotter\Incident\Violation');
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
