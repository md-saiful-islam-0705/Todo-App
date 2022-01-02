import React from 'react';
import { Link } from "react-router-dom"
import "./Navbar.css"



function Nav (){
  return (
  <nav>
    <ul className="navlink">
    <li>
      <Link to="/">Info</Link>
    </li>
    <li>
      <Link to="/todoapp">TodoApp</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
   </ul>
   </nav>
  );
}
export default Nav;