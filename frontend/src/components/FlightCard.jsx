import { useState, useEffect } from "react";
import axios from "axios";
import { MdLocationOn } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";

const FlightsCard = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/flights")
      .then((response) => {
        setFlights(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setLoading(false);
      });
  }, []);

  const formatDate = (isoString) => {
    if (!isoString) return "N/A";
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(isoString));
  };

  if (loading) {
    return <p className="text-center text-gray-600">Loading flights...</p>;
  }

  if (!flights.length) {
    return <p className="text-center text-gray-600">No flights available.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Available Flights</h1>
      {flights.map((flight, index) => (
        <div
          key={index}
          className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg p-6 flex flex-col md:flex-row flex-wrap gap-6 justify-between items-start w-full md:w-[80%] mx-auto my-4 border border-gray-200"
        >
        
          <div className="flex flex-col space-y-3 w-full md:w-2/3">
            <div className="flex items-center space-x-4">
              <img
                src={flight.airline_logo || "/airways.png"}
                alt={flight.airline_name || "Airline"}
                className="h-12 w-12 object-contain bg-gray-100 border rounded-full"
              />
              <div>
                <p className="text-gray-900 font-semibold">
                  {flight.airline_name || "Unknown Airline"},{" "}
                  {flight.flight_number || "N/A"}
                </p>
                <p className="text-gray-500 text-sm">Economy</p>
              </div>
            </div>


            <div className="flex items-center justify-between text-gray-700">
              <div className="text-center">
                <p className="font-bold text-lg">{formatDate(flight.departure_time)}</p>
                <p className="text-sm text-gray-500">{flight.from_location || "Unknown"}</p>
              </div>

              <div className="flex items-center">
                <MdLocationOn className="text-blue-500 text-2xl" />
                <div className="border-dashed border-t-2 border-gray-400 w-16 md:w-24"></div>
                <FaPlaneDeparture className="text-blue-500 text-2xl mx-2" />
                <div className="border-dashed border-t-2 border-gray-400 w-16 md:w-24"></div>
                <MdLocationOn className="text-blue-500 text-2xl" />
              </div>

              <div className="text-center">
                <p className="font-bold text-lg">{formatDate(flight.arrival_time)}</p>
                <p className="text-sm text-gray-500">{flight.to_location || "Unknown"}</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 font-medium">
              Total Time: {flight.total_time || "N/A"}
            </p>
          </div>

      
          <div className="flex flex-col items-center bg-gray-100 p-5 rounded-lg w-full md:w-1/4 min-w-[200px] border border-gray-300">
            {flight.old_price && (
              <p className="text-gray-500 line-through text-sm">
                KWD {flight.old_price}
              </p>
            )}
          <p className="text-2xl font-bold text-gray-900">
  KWD {Number(flight.price)?.toFixed(2) || "N/A"}
</p>
            <p
              className={`text-sm font-semibold mt-1 ${
                flight.refundable ? "text-green-600" : "text-red-500"
              }`}
            >
              {flight.refundable ? "Refundable" : "Non-Refundable"}
            </p>

            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-5 rounded-lg mt-3 hover:opacity-90 transition-opacity">
              SELECT +
            </button>

            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-2 hover:bg-blue-700 transition">
              Flight Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlightsCard;
