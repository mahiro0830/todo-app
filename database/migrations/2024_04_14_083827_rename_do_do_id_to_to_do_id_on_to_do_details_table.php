<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RenameDoDoIdToToDoIdOnToDoDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('to_do_details', function (Blueprint $table) {
            $table->renameColumn('do_do_id', 'to_do_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('to_do_details', function (Blueprint $table) {
            $table->renameColumn('do_do_id', 'to_do_id');
        });
    }
}
