import React from 'react';
import './Navbar.css';
function Navbar() {
    return (  
        <nav className='Navbar'>
<div className='container'>
  <img className="logo-img " src="/media/images/logo.svg" alt="Zerodha logo"></img>
    {/* <img className="logo-img" src="/frontend/public/media/images/logo.svg" alt="Zerodha logo"></img> */}
</div>
<div className='Nav-Options'>
<a href='./signup/SignUpPage.js'>Signup</a>
<a href='./about/AboutPage.js'>About</a>
<a href='./product/ProductPage.js'>Product</a>
<a href='./pricing/PricingPage.js'>Pricing</a>
<a href='./support/SupportPage.js'>Support</a>
</div>
        </nav>
    );
}

export default Navbar;