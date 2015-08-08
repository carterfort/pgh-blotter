<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateViolationsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('violations', function(Blueprint $table)
		{
			$table->increments('id');
            $table->integer('incident_id')->unsigned();
            $table->foreign('incident_id')->references('id')->on('incidents');
            $table->string('section_number');
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
		Schema::drop('violations');
	}

}
