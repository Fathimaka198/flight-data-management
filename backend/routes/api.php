<?php



use App\Http\Controllers\FlightController;
use Illuminate\Support\Facades\Route;

Route::get('/flights', [FlightController::class, 'getAllFlights']);
Route::post('/flights', [FlightController::class, 'addFlight']);
Route::get('/flights/sort', [FlightController::class, 'getFlightsWithSorting']);
Route::get('/flights/filter', [FlightController::class, 'getFlightsWithFilter']);
