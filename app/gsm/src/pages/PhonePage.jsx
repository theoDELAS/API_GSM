import React from 'react'
import PhonesList from '../components/PhonesList';
import { Link } from 'react-router-dom';

const PhonePage = ({ match }) => {
    const { id } = match.params;
    
    return ( 
        <>
        <div className="container mb-5">
            <Link to={`/`} className="pt-5">Accueil</Link>
            <h2 className="text-center mb-4 display-4">Fiche détails</h2>
            <PhonesList id={id} />
        </div>
        </>
    );
}

export default PhonePage;