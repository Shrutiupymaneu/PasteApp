// components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="w-full h-[45px] flex justify-center items-center text-white font-bold p-4 bg-gray-800 gap-x-5">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pastes">Pastes</NavLink>
    </div>
  );
}

export default Navbar;
