import React from 'react'
import PhonesList from '../components/PhonesList';
import Navbar from '../components/Navbar';

const HomePage = ({ match }) => {
    const { order } = match.params;
    const { brand } = match.params;
    
    return ( 
        <>
            <Navbar />
            <div className="container pt-5 mb-5">
                <h2 className="text-center my-5 display-4">Nos téléphones</h2>
                <PhonesList order={order} brand={brand}/>
            </div>
        </>
    );
}
 
export default HomePage;