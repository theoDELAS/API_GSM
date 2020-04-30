import React from 'react'
import PhonesList from '../components/PhonesList';


const HomePage = () => {
    return ( 
        <>
            <div className="container mb-5">
                <h2 className="text-center my-5 display-4">Les 10 derniers téléphones</h2>
                <PhonesList />
            </div>
        </>
    );
}
 
export default HomePage;