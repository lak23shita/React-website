import React from 'react';
import Navbar from './Navbar';
import '../styles/Services.css';
import background from '../images/background.jpg';
import car from '../images/car.jpg';
import card from '../images/card.jpg';
import download from '../images/download.jpg';
import images from '../images/images.jpg';
import laptop from '../images/laptop.jpg';

const Services=()=>{
    return(
        <div >
        <Navbar/>
        <div className='title'>
            <h1 >Services</h1>
        </div>
            <div className="container">
                
                <div className='box'>
                    <div className='imgBox'>
                        <img src={background} />
                    </div>
                    <div className='details'>
                    <div className='contents'>
                      <h2>Resources</h2>
                      </div>
                    </div>
                </div>
                <div className='box'>
                <div className='imgBox'>
                        <img src={car} />
                    </div>
                    <div className='details'>
                    <div className='contents'>
                      <h2>Creativity</h2>
                      </div>
                    </div>
                </div>
                <div className='box'>
                <div className='imgBox'>
                        <img src={card} />
                    </div>
                    <div className='details'>
                    <div className='contents'>
                      <h2>Environment</h2>
                      </div>
                    </div>
                </div>
                <div className='box'>
                <div className='imgBox'>
                <img src={download} />
            </div>
            <div className='details'>
            <div className='contents'>
              <h2>Flexibility</h2>
              </div>
            </div>
                </div>
                <div className='box'>
                <div className='imgBox'>
                <img src={images} />
            </div>
            <div className='details'>
            <div className='contents'>
              <h2>Material</h2>
              </div>
            </div>    
                </div>
                <div className='box'>
                <div className='imgBox'>
                <img src={laptop} />
            </div>
            <div className='details'>
            <div className='contents'>
              <h2>Labs</h2>
              </div>
            </div>
                </div>
                <div className='box'>
                <div className='imgBox'>
                <img src={background} />
            </div>
            <div className='details'>
            <div className='contents'>
              <h2>Content</h2>
              </div>
            </div>
                </div>
                <div className='box'>
                <div className='imgBox'>
                <img src={background} />
            </div>
            <div className='details'>
            <div className='contents'>
              <h2>Equipments</h2>
              </div>
            </div>
                </div>

            </div>
        
        </div>
    
   
    )
}

export default Services;