import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Axios from 'axios';

const PhoneCard = ({id, brand, price, img, model}) => {
    const {register, handleSubmit} = useForm();

    const onSubmit = data => Axios
        .delete(`http://localhost:8080/api/deletePhone/${data.model}`, data);

    return ( 
        <div className="col-4">
            <div className="card my-3">
                <img className="card-img-top p-3" src={img} alt="Card image cap" />
                <div className="card-body text-center">
                    <h5 className="card-title">{brand} {model}</h5>
                    <p className="card-tex lead">{price} &euro;</p>
                    <Link className="btn btn-outline-primary" to={`/telephone/${id}`}>Voir en détail</Link>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input ref={register} type="text" name="model" className="form-control" id="model" aria-describedby="model" defaultValue={id} hidden/>
                        <Link></Link>
                        <button className="btn btn-outline-danger mt-3">Supprimer</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default PhoneCard;