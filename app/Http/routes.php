<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'MapsController@show');

Route::get('incidents', 'IncidentsController@index');

Route::group(['prefix' => 'api/v1'], function(){

    Route::get('incidents/search', ['as' => 'api.v1.incidents.search', 'uses' => 'IncidentsController@search']);
    Route::get('incidents/with-offset', ['as' => 'api.v1.incidents.all-with-offset', 'uses' => 'IncidentsController@allWithOffset']);
    Route::get('incidents/count', ['as' => 'api.v1.incidents.count', 'uses' =>  'IncidentsController@count']);
    Route::resource('violations', 'ViolationsController');
});

