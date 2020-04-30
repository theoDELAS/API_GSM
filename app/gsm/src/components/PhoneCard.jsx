import React from 'react';
import { Link } from 'react-router-dom';

const PhoneCard = ({id, brand, price, img, release, model, ram, inch, screenType, storage}) => {
    return ( 
        <div className="col-4">
            <div className="card my-3">
                <img className="card-img-top p-3" src={img} alt="Card image cap" />
                <div className="card-body text-center">
                    <h5 className="card-title">{brand} {model}</h5>
                    <p className="card-tex lead">{price} &euro;</p>
                    <Link to={`/${id}`} id={id}>Voir en détail</Link>
                </div>
            </div>
        </div>
    );
}
 
export default PhoneCard;