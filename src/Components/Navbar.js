import React from 'react'
import '../styles/Navbar.css';
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return(
        <header>
        <nav className='navbar'>
            <div className='navbar-brand'>
                <span>TechSlev</span>
            </div>
            <div className="menu">
            <ul>
            <li><Link exact  className="nav-link active " aria-current="page" to="/">Home</Link></li>
            <li><Link  exact className="nav-link " to="/about">About Us</Link></li>
            <li><Link eaxct className="nav-link "  to="/gallery">Gallery</Link></li>
            <li><Link exact className="nav-link "  to="/services">Services</Link></li>

        </ul>
            </div>
            <div class="button">
            <Link  exact className="nav-link " to="/contact">Contact</Link>
            </div>
        </nav>
        </header>
      
       
            );
};
export default Navbar;

