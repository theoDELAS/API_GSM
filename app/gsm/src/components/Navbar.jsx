import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <Link to={`/`} className="nav-link">API GSM</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item mx-3">
                        <Link to={`/telephones/order/desc`} className="nav-link">Prix décroissant</Link>
                    </li>
                    <li className="nav-item mr-3">
                        <Link to={`/telephones/order/asc`} className="nav-link">Prix croissant</Link>
                    </li>
                </ul>
                <form action="" className="form-inline my-2 my-lg-0">
                    <input type="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}
 
export default Navbar;