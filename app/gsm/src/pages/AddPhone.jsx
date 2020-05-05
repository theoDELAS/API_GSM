import React from 'react';
import Navbar from '../components/Navbar';
import { useForm } from 'react-hook-form';
import Axios from 'axios';

const AddPhone = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = data => Axios
        .post(`http://localhost:8080/api/addPhone`, data)
        .then(response => response.data);
    
    return ( 
        <>
            <Navbar />
            <div className="container pt-5 mb-5">
                <h2 className="text-center my-5 display-4">Ajouter un tel</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="model">Model</label>
                        <input ref={register} type="text" name="model" className="form-control" id="model" aria-describedby="model"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="storage">Stockage</label>
                        <input ref={register} type="number" name="storage" className="form-control" id="storage" aria-describedby="model" min="0"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ram">Ram</label>
                        <input ref={register} type="number" name="ram" className="form-control" id="ram" aria-describedby="ram" min="0"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="release">Année de sortie</label>
                        <input ref={register} type="number" name="release" className="form-control" id="release" aria-describedby="release" min="0"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inch">Taille (pouce)</label>
                        <input ref={register} type="number" name="inch" className="form-control" id="inch" aria-describedby="inch" min="0"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="screenType">Type d'écran</label>
                        <input ref={register} type="text" name="screenType" className="form-control" id="screenType" aria-describedby="screenType"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="os">OS</label>
                        <input ref={register} type="text" name="os" className="form-control" id="os" aria-describedby="os"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="processor">Processeur</label>
                        <input ref={register} type="text" name="processor" className="form-control" id="processor" aria-describedby="processor"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Prix</label>
                        <input ref={register} type="number" name="price" className="form-control" id="price" aria-describedby="price" min="0" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imgLink">Lien de l'image</label>
                        <input ref={register} type="text" name="imgLink" className="form-control" id="imgLink" aria-describedby="imgLink"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="brand">Marque</label>
                        <input ref={register} type="text" name="brand" className="form-control" id="brand" aria-describedby="brand"/>
                    </div>
                    <button>Envoyer</button>
                </form>
            </div>
        </>
    );
}
 
export default AddPhone;