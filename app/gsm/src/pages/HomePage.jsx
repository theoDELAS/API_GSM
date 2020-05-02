import React from 'react'
import PhonesList from '../components/PhonesList';
import { Link } from 'react-router-dom';

const HomePage = ({ match }) => {
    const { order } = match.params;
    return ( 
        <>
            <div className="container mb-5">
                <h2 className="text-center my-5 display-4">Nos téléphones</h2>
                <Link to={`/telephones/desc`}>Trier desc</Link> <br/>
                <Link to={`/telephones/asc`}>Trier asc</Link>
                <PhonesList order={order}/>
            </div>
        </>
    );
}
 
export default HomePage;