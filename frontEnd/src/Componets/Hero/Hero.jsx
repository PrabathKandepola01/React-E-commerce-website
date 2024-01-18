import React from 'react'


import './Hero.css'
import hand_icon from '../Assets/hand_icon1.png'
import arrow_icon from '../Assets/arrow.png'
import hero_imge from '../Assets/hero_image.png'

const Hero = () => {
    return (
    <div className='container '>
        <div className='hero'>
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hand-hand-icon">
                        <div>new</div>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>collection</p>
                    <p>for everyone</p>
                    <p>from BUY SHOP</p>
                </div>
                <div className="hero-latest-btn">
                    <div>latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
    
            </div>
            <div className="hero-right">
                <img src={hero_imge} alt="" />
    
            </div>
        </div>
    </div>
    )
}

export default Hero