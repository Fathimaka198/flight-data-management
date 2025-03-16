<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    protected $fillable = [
        'airline_name', 'airline_logo', 'from_location', 'to_location',
        'price', 'duration', 'departure_time', 'arrival_time'
    ];

    protected $casts = [
        'price' => 'decimal:2',  
        'departure_time' => 'datetime',
        'arrival_time' => 'datetime',
    ];
}

