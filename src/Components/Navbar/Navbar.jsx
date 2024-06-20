import React, { useContext } from 'react'
import './Navbar.css'
import { useState } from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    const [menu,setMenu] = useState("shop"); 
    const {getTotalCartItems} = useContext(ShopContext);
    
  return (
    <div className='navbar'>

        {/* navbar logo */}
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p>BETTER BUYS</p>
        </div>

        {/* navbar menu */}
        <ul className="nav-menu">
             {/* Onclick red line indicate on that particular menu */}
             {/* <Link> tag is used to indicate the hyperlink to traverse among diff menus */}
              {/* style attribute is used to remove the underline from the hyperlink */}
            <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>

         {/* navbar cart logo */}
        <div className="nav-login-cart">
            <Link to='/login'><button>login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-counter">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
