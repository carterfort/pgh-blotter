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

Route::group(['prefix' => 'api/v1'], function(){

    Route::get('incidents/search', ['as' => 'api.v1.incidents.search', 'uses' => 'IncidentsController@search']);
    Route::resource('violations', 'ViolationsController');
});

