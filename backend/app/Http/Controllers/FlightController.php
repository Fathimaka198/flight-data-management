<?php

namespace App\Http\Controllers;

use App\Models\Flight;
use Illuminate\Http\Request;

class FlightController extends Controller
{
    
    public function getAllFlights()
    {
        try {
            $flights = Flight::all();  
            return response()->json($flights);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Database error: ' . $e->getMessage()], 500);
        }
    }
    

    public function addFlight(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'airline_name' => 'required|string|max:255',
                'airline_logo' => 'nullable|string|max:255',
                'from_location' => 'required|string|max:255',
                'to_location' => 'required|string|max:255',
                'price' => 'required|numeric|min:0',  
                'total_duration' => 'nullable|integer|min:1',  
                'departure_time' => 'required|date_format:Y-m-d H:i:s', 
                'arrival_time' => 'required|date_format:Y-m-d H:i:s',  
            ]);
    
            \Log::info('Validated Data: ', $validatedData);
    
            // Insert into DB
            $flight = Flight::create($validatedData);
    
            return response()->json($flight, 201);
    
        } catch (\Illuminate\Validation\ValidationException $e) {
            \Log::error('Validation Error: ', $e->errors());
            return response()->json(['error' => 'Validation failed', 'details' => $e->errors()], 422);
        } catch (\Exception $e) {
            \Log::error('Database Error: ' . $e->getMessage());
            return response()->json(['error' => 'Something went wrong'], 500);
        }
    }
    
    


    public function getFlightsWithSorting(Request $request)
    {
        $sortBy = $request->query('sortBy', 'price'); 
        $order = $request->query('order', 'asc'); 
    
        
        $allowedSortColumns = ['price', 'departure_time', 'duration'];
        if (!in_array($sortBy, $allowedSortColumns)) {
            return response()->json(['error' => 'Invalid sorting column'], 400);
        }
    
        if ($sortBy === 'price') {
            $flights = Flight::orderByRaw("CAST(price AS DECIMAL(10,2)) $order")->get();
        } else {
            $flights = Flight::orderBy($sortBy, $order)->get();
        }
    
        return response()->json($flights);
    }
    
    
    
    public function getFlightsWithFilter(Request $request)
    {
        
        $filters = $request->query('filter', []);
    
        
        $query = Flight::query();
    
        
        if (isset($filters['price'])) {
            $query->where('price', '<=', $filters['price']);
        }
    
        
        if (isset($filters['airline'])) {
            $query->where('airline_name', 'like', '%' . $filters['airline'] . '%');
        }
    
        
        if (isset($filters['from_location'])) {
            $query->where('from_location', 'like', '%' . $filters['from_location'] . '%');
        }
    
    
        $flights = $query->get();

        \Log::info('Filter Params: ', $filters);

        return response()->json($flights);
    }
    
    
    
    
    
}

