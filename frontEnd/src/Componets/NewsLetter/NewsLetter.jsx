import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1> Get Exclusive Ofeers On Your Email</h1>
        <p>Subscibe to our newsletter and stay update</p>
        <div>
            <input type="email" placeholder='your Email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
export default NewsLetter
