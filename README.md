Backend Development (Laravel)

Data Model:
//
Created a Flight model with migration, including fields for:
Airline Name, Logo
From and To Location (Airport Names)
Price, Duration, Departure and Arrival Times
//

API Endpoints:
//
Created API
GET /flights: Retrieve all flights
POST /flights: Add a new flight
GET /flights?sortBy=price&order=asc: Sorting by price (not fully functional yet)
GET /flights?filter[price]=5000: Filtering by price (not fully functional yet)
//
Technical Implementation:
//
Used Laravel migrations for database structure.
Implemented Eloquent ORM for data handling.
//
Frontend Development (React)

Core Functionality:
//
Built a React app to fetch and display data from the Laravel API.
Sorting: Sorting by price, departure time, and duration (sorting not fully functional).
Filtering: Filter by price range, departure time, and airline (filtering not fully functional).


Created a form for adding new flights with real-time updates.

Technical Requirements:
//
Used Axios for API communication.
Used React Hooks for state management.
Designed a clean user interface.
//
