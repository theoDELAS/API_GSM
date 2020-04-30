import React from 'react';


const PhoneDetails = ({brand, price, img, release, model, ram, inch, screenType, storage, processor}) => {
    return ( 
        <div className="col-12 text-center mb-5">
            <img className="mb-4" src={img} alt="Card image cap" />
            <h1 className="h2 my-3">{brand} {model}</h1>
            <p className="text-muted">Année de sortie : {release}</p>
            <ul className="list-group list-group-flush my-3">
                <li className="list-group-item">{storage}GB</li>
                <li className="list-group-item">{ram}GB RAM</li>
                <li className="list-group-item">{inch}" {screenType}</li>
                <li className="list-group-item">{processor}</li>
            </ul>
            <p>{price} &euro;</p>
        </div>
    );
}
 
export default PhoneDetails;