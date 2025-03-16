import { useState, useEffect } from "react";
import axios from "axios";
import FlightCard from "./FlightCard";

const FlightList = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/flights")
      .then(response => {
        setFlights(response.data); 
        setLoading(false); 
      })
      .catch(error => {
        console.error("API Error:", error);
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <p>Loading flights...</p>;
  }

  if (!flights.length) {
    return <p>No flights available.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      {flights.map((flight, index) => (
        <FlightCard key={index} flight={flight} />
      ))}
    </div>
  );
};

export default FlightList;
