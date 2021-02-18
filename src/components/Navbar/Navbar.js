import { Link } from 'gatsby';
import React from 'react';
import './navbar.scss';
import Button from './../Button/Button';
 export default function Navbar(props) {
     return (
         <nav class="navbar">
             <div class="container">
             <ul >
              <Link to="/">  <a class="website-title"><b>WEB DEV CLUB</b></a></Link> 
                 <React.Fragment>
                 <Link  class="nav-links"to="/about">About</Link>
                 <Link class="nav-links"to="/events/workshops">Workshops</Link>
                 <Link class="nav-links"to="/contact">Contact</Link> 
                 </React.Fragment>   
                <Button text="Join our discord" class="button-default"to=""></Button>
             </ul>
             </div>
         </nav>
         
     )
 }