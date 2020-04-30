import React from 'react'
import PhonesList from '../components/PhonesList';


const HomePage = () => {
    return ( 
        <>
            <h2 className="text-center my-5 display-4">Les 10 derniers téléphones</h2>
            <PhonesList />
        </>
    );
}
 
export default HomePage;