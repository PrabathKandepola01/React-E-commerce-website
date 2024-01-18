import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../Assets/logo1.jpg'
import cart_icon from '../Assets/cart_icon.png'

//function Navbar() {
const Navbar = () => {
  const [menu,setMenu] = useState("shop")
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>BUY SHOP</p>
        </div>
        <u1 className="nav-name">
          <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu ==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("men")}}><Link style={{ textDecoration: 'none'}} to='/men'>Men </Link>{menu ==="men"?<hr />:<></>}</li>
          <li onClick={()=>{setMenu("women")}}><Link style={{ textDecoration: 'none'}} to='/women'>Women</Link>{menu ==="women"?<hr />:<></>}</li>
          <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none'}} to='/kids'>Kids</Link>{menu ==="kids"?<hr />:<></>}</li>
        </u1>
        <div className='nav-login-cart'>
          <Link to='/LoginSignup'><button>Login/Sign</button></Link>
          <Link to='/Cart'><img src={cart_icon} alt="" /></Link>
          <div className='nav-cart-count'>0</div>
        </div>

    </div>
  )
}

export default Navbar
