import React from 'react'
import PhonesList from '../components/PhonesList';
import Navbar from '../components/Navbar';

const PhonePage = ({ match }) => {
    const { id } = match.params;
    
    return ( 
        <>
        <Navbar />
        <div className="container pt-5 mb-5">
            <h2 className="text-center mb-4 display-4">Fiche détails</h2>
            <PhonesList id={id} />
        </div>
        </>
    );
}

export default PhonePage;