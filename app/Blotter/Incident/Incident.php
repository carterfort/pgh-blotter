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

}
