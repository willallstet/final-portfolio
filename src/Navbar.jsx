import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <header>
    <nav>
      <a className='navLink'href="/development">soundtable,</a>
      <a className='navLink'href="/soundtable">the map is not the territory,</a>
      <a className='navLink' href="/development">cyanobacteria sonification,</a>&
      <a className='navLink'href="/iterative"> andi design</a>
    </nav>
    <div className='navBar'>
    </div>
    <a className='myName' href="/">Will Allstetter Projects</a>
  </header>
  );
}

export default Navbar;