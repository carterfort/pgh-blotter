<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIncident extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('incidents', function(Blueprint $table)
		{
			//
			$table->increments('id');
			$table->integer('location_id')->unsigned();
            $table->foreign('location_id')->references('id')->on('locations');
			$table->dateTime('occurred_at');
			$table->string('report_name');
			$table->bigInteger('crime_report_number');
			$table->string('section');
			$table->text('description');
			$table->timestamps();

		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('incidents');
	}

}
