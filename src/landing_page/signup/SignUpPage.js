import React from 'react';
import OpenAccount from '../OpenAccount';
import Benefits from "./Benefits";
import SignUp from "./SignUp";
import InvesmentSec from "./InvestmentSec";
import FAndQ from "./FAndQ";
import SteptoOpen from "./SteptoOpen";
import Explore from "./Explore";
import Navbar from '../Navbar';
import Footer from '../Footer';


function SignUpPage() {
    return ( 
        <>

        <Navbar/>
        <SignUp/>
        {/* <InvesmentSec/>
        <SteptoOpen/>
        <Benefits/>
        <Explore/>
        <FAndQ/> */}
        <OpenAccount/>
        <Footer/>
        
        </>
     );
}

export default SignUpPage;