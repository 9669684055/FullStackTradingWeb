import React from 'react';
import './Navbar.css';
function Navbar() {
    return (  
        <nav className='Navbar navbar-expand-lg bg-body-teritary ' style={{backgroundColor:"#fff"}}>
<div className='container'>
  <img className="logo-img " src="/media/images/logo192.svg" alt="Zerodha logo"></img>

</div>
<div className='Nav-Options'>
<a href='/Signup'>Signup</a>
<a href='/About'>About</a>
<a href='/Product'>Product</a>
<a href='/Pricing'>Pricing</a>
<a href='/Support'>Support</a>
</div>
        </nav>
    );
}

export default Navbar;