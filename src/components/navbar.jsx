import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex text-[#fff] justify-center items-center">
      <div className="flex justify-evenly w-[30%] font-[800] text-[20px]">
        <div className="nav-item selected"><Link to={"/home"} >Home</Link><hr/></div>
        <div className="nav-item ">Anime<hr/></div>
        <div className="nav-item ">Manga<hr/></div>
        <div className="nav-item ">Light Novel<hr/></div>
      </div>
    </div>
  );
};

export default Navbar;
