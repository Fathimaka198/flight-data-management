import { useState } from "react";
import { FaSortAmountDown } from "react-icons/fa";
import FlightCard from "../components/FlightCard";

export default function Home() {
  const [sortBy, setSortBy] = useState("cheapest");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      
      <div className="flex items-center justify-between mb-6 px-4">
      
        <div className="relative ml-auto">
          <button
            className="bg-purple-600  mr-6 text-white px-4 py-2 rounded-full flex items-center space-x-2"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FaSortAmountDown />
            <span>Sort: Price</span>
          </button>

        
          {showDropdown && (
            <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-lg overflow-hidden">
              <button
                className="block px-4 py-2 text-left w-full hover:bg-gray-200"
                onClick={() => {
                  setSortBy("cheapest");
                  setShowDropdown(false);
                }}
              >
                Cheapest
              </button>
              <button
                className="block px-4 py-2 text-left w-full hover:bg-gray-200"
                onClick={() => {
                  setSortBy("fastest");
                  setShowDropdown(false);
                }}
              >
                Fastest
              </button>
              <button
                className="block px-4 py-2 text-left w-full hover:bg-gray-200"
                onClick={() => {
                  setSortBy("bestValue");
                  setShowDropdown(false);
                }}
              >
                Best Value
              </button>
            </div>
          )}
        </div>

        
        <div className="flex space-x-4  p-4 rounded-lg ">
          <button
            className={`px-6 py-2 rounded-full font-semibold ${
              sortBy === "cheapest" ? "bg-purple-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSortBy("cheapest")}
          >
            ✈️ Cheapest: <strong>130.000</strong>
          </button>

          <button
            className={`px-6 py-2 rounded-full font-semibold ${
              sortBy === "fastest" ? "bg-gray-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSortBy("fastest")}
          >
            ✈️ Fastest: <strong>200.000</strong>
          </button>

          <button
            className={`px-6 py-2 rounded-full font-semibold ${
              sortBy === "bestValue" ? "bg-yellow-500 text-blue-gray-500" : "bg-gray-200"
            }`}
            onClick={() => setSortBy("bestValue")}
          >
            👍 Best Value: <strong>135.000</strong>
          </button>
        </div>
      </div>

    
      <FlightCard />
    </div>
  );
}
