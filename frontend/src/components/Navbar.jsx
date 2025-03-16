import { FaFilter } from "react-icons/fa";
import { Navbar, Typography, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="flex">
      
      <div className="fixed left-0 top-0 h-screen w- bg-green-300 flex justify-center items-center z-10">
        <button className="flex flex-col items-center text-white px-4 py-2 rounded-lg shadow-lg">
          <FaFilter className="h-6 w-6" />
          <span className="font-bold text-xs mt-2">FILTER</span>
        </button>
      </div>

      
      <div className="flex-1 ml-10"> 
        
        <Navbar className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-4 flex justify-between items-center">
          
          <div className="flex items-center space-x-3">
            <img src="/download.jpeg" alt="Logo" className="h-10 w-10 ml-20" />
            <Typography variant="h6" className="font-bold text-xl">
              ALMUSAFEER
            </Typography>
          </div>

          <div className="hidden md:flex space-x-6">
  <Link to="/" className="text-white">
    <Button variant="text" className="text-white">Home</Button>
  </Link>
  <Link to="/" className="text-white">
    <Button variant="text" className="text-white">My Booking</Button>
  </Link>
  <Link to="/register" className="text-white">
    <Button variant="text" className="text-white">Register</Button>
  </Link>
  <Link to="/login" className="text-white">
    <Button variant="text" className="text-white">Login</Button>
  </Link>
</div>

        
          <div className="flex items-center space-x-2">
            <Typography variant="h6" className="font-bold text-lg">
              KWD
            </Typography>
            <Typography variant="h6" className="font-bold text-lg">
              العربية
            </Typography>
          </div>
        </Navbar>

  
      </div>
    </div>
  );
}
