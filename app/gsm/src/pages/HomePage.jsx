import React from 'react'
import PhonesList from '../components/PhonesList';
import { Link } from 'react-router-dom';

const HomePage = ({ match }) => {
    const { order } = match.params;
    return ( 
        <>
            <div className="container mb-5">
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <h2 className="text-center my-5 display-4">Nos téléphones</h2>
                <Link to={`/telephones/desc`}>Trier desc</Link> <br/>
                <Link to={`/telephones/asc`}>Trier asc</Link>
                <PhonesList order={order}/>
            </div>
        </>
    );
}
 
export default HomePage;