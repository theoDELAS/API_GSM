import React from 'react'
import PhonesList from '../components/PhonesList';

const PhonePage = ({ match }) => {
    const { id } = match.params;
    return ( 
        <>
            <h2 className="text-center my-5 display-4">Le bon telephone</h2>
            <PhonesList id={id} />
        </>
    );
}
 
export default PhonePage;