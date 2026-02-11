// Main application header
import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-blue-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MissionControl</h1>
        <button className="bg-blue-800 hover:bg-blue-600 px-4 py-2 rounded text-sm">
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Navbar;
