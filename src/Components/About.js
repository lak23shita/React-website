import React from 'react';
import Navbar from './Navbar';
import '../styles/About.css';
const About=()=>{
    return(
        <div>
        <Navbar />
        {/*<div className="about">
            <div className='heading'>
                <h1>About Us</h1>
                </div>
            <p></p>
    </div>*/}
        <div className='about'>
            <div className='text'>
                <h1 className='lap'>About Us</h1>
                <p className='us'>We want to help your business succeed on your day-to-day operations, while we handle all your IT needs.TechSLAV Technology Services creates easy-to-use software for steel building designers. In addition to instantly engineering the building to customizable specifications, the software also generates real-time, accurate pricing and engineered elevation drawings. The software is free to use. For partnering building companies, this includes access to small business tools such as lead tracking, communication tools and document management software.As a partner with Oklahoma businesses for more than two decades, you can trust us to provide the high value service that our customers have grown to love and recommend.
                </p>
                </div>
            <div className='shsh'>

            </div>
            <div className='thumb'>Visit Site</div>
        </div>
        </div>
    )
}

export default About;