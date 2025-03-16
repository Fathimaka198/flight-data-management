<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('flights', function (Blueprint $table) {
            $table->id();
            $table->string('airline_name');
            $table->string('airline_logo');
            $table->string('from_location');
            $table->string('to_location');
            $table->decimal('price', 10, 2);
            $table->integer('duration'); 
            $table->dateTime('departure_time');
            $table->dateTime('arrival_time');
            $table->timestamps(); 
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('flights');
    }
};
