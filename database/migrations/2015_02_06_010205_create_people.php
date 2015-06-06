<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePeople extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('people', function(Blueprint $table)
		{
			//
			$table->increments('id');
			$table->integer('incident_id')->unsigned();
            $table->foreign('incident_id')->references('id')->on('incidents');
			$table->enum('sex', ['Male', 'Female', 'N/A']);
			$table->integer('age');
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
		Schema::drop('people');
	}

}
