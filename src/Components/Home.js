import React from 'react';
import '../styles/Home.css';
import Navbar from './Navbar';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaGooglePlus} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import lakshita from '../images/lakshita.png';
const Home=()=>{
    return(
        <div>
        
        <Navbar/>
        <div class="center_content">
        <h1>Be Restless <br />and Perfect</h1>
        <h2>We are the group of Developers</h2>
        </div>
        <div class="shh">
            <Link  exact className="nav-link " to="/">View Plans</Link>
        </div>
        <div className='image'>
        <img src={lakshita} />
        </div>

        <div className='social_network'>
            <div className='fa_icons'>
                <Link style={{textDecoration: 'none'}} to='/'><a><FaFacebook /></a></Link> 
            </div>
            <div className='fa_icons'>
                <Link style={{textDecoration: 'none'}} to='/'><a><FaGooglePlus /></a></Link> 
            </div>
            <div className='fa_icons'>
                <Link style={{textDecoration: 'none'}} to='/'><a><FaGithub /></a></Link> 
            </div>
            <div className='fa_icons'>
                <Link style={{textDecoration: 'none'}} to='/'><a><FaLinkedinIn /></a></Link> 
            </div>
        </div>
        </div>
        
    )
}

export default Home;