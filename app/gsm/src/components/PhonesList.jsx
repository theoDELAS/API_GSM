import React from 'react';
import PhonesAPI from '../services/PhonesAPI';
import { useState } from 'react';
import { useEffect } from 'react';

const PhonesList = ({ id }) => {

    const [phones, setPhones] = useState([]);

    const fetchPhones = async () => {
        try {  
            if (id) {
                const data = await PhonesAPI.fetchPhone(id);
                setPhones(data);
            } else {
                const data = await PhonesAPI.fetchPhones();
                setPhones(data);
            }
        } catch(error){
            console.log(error.response);
        }
    }    

    useEffect(() => {
        fetchPhones();
    },[id])    
    return ( 
        <>
            <div className="mx-5">
                <div className="row">
                    {phones.map(phone => 
                        <div key={phone.id}>
                            <h1>{phone.brand}</h1>
                            <p>{phone.price}</p>
                        </div>
                        )}
                </div>
            </div>
        </>
    );
}
 
export default PhonesList;