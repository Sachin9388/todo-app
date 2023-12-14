import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center">
        <Link to="/" className="text-white text-lg font-bold">Todo List</Link>
        <div className=" ml-5 space-x-4">
          <Link to="/home" className="text-white">Home</Link>
          <Link to="/about" className="text-white">Dev List</Link>
          <Link to="/contact" className="text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
