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



     <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgxgXSIwzhRnFNT4qMvNI87CwS3EvTeUMNkw&usqp=CAU" />
        </div>
      </div>
     <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>


      </div>
    </div>
  );
};

export default Navbar;
