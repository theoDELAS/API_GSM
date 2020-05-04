import React from 'react';
import PhonesAPI from '../services/PhonesAPI';
import { useState } from 'react';
import { useEffect } from 'react';
import PhoneCard from './PhoneCard';
import PhoneDetails from './PhoneDetails';

const PhonesList = ({ id, order, brand }) => {

    const [phones, setPhones] = useState([]);    
    
    
    const fetchPhones = async () => {
        try {
            if (order) {                
                if (order === 'desc') {
                    const data = await PhonesAPI.fetchPhonesDesc();
                    setPhones(data);
                } else {
                    const data = await PhonesAPI.fetchPhonesAsc();
                    setPhones(data);
                }
            } else if (id) {
                const data = await PhonesAPI.fetchPhone(id);
                setPhones(data);
            } else if (brand) {
                const data = await PhonesAPI.fetchPhonesBrand(brand);
                setPhones(data);
            } 
            else {
                const data = await PhonesAPI.fetchPhones();
                setPhones(data);
            }
        } catch(error){
            console.log(error.response);
        }
    }    

    useEffect(() => {
        fetchPhones();
    },[id, order, brand])    
    return ( 
        <>
            <div className="mx-5">
                <div className="row">             
                    {!phones.id ? 
                    phones.map(phone => <PhoneCard
                        key = {phone.id}
                        brand = {phone.brand}
                        model = {phone.model}
                        price = {phone.price}
                        img = {phone.imgLink}
                        release = {phone.release}
                        ram = {phone.ram}
                        storage = {phone.storage}
                        inch = {phone.inch}
                        screenType = {phone.screenType}
                        id = {phone.id}
                    />) : 
                    <PhoneDetails
                        key = {phones.id}
                        brand = {phones.brand}
                        model = {phones.model}
                        price = {phones.price}
                        img = {phones.imgLink}
                        release = {phones.release}
                        ram = {phones.ram}
                        storage = {phones.storage}
                        inch = {phones.inch}
                        screenType = {phones.screenType}
                        id = {phones.id}
                        processor = {phones.processor}
                    />}
                </div>
            </div>
        </>
    );
}
 
export default PhonesList;