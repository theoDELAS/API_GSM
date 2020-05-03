import React from 'react';




const PhoneDetails = ({brand, price, img, release, model, ram, inch, screenType, storage, processor, os}) => {




    function calcul(price,  ram,  release,  storage, screenType, os, inch) {

        let this_year = new Date().getFullYear()

      

        let pts_tel = 10
        let pts_size = 0
        let pts_type = 0
        let pts_os = 0
        let pts_ram = 10
        let pts_year = 10
        let pts_storage = 10

        console.log(price.price);

        while (price.price > 650){
            price.price -= 100
            pts_tel -= 1}
        if (inch.inch >= 5.8 && inch.inch <= 6.4){
            pts_size = 10}
        else if (inch.inch >= 5.4 && inch.inch < 5.8 || 6.4 > inch.inch && inch.inch >= 6.8){
            pts_size = 9}
        else if (inch.inch < 5.4 || inch.inch > 6.8){
            pts_size = 8}
        if (screenType.screenType == "AMOLED"){
            pts_type = 10}
        else if (screenType.screenType == "OLED"){
            pts_type = 9}
        else if (screenType.screenType == "LCD"){
            pts_type = 8}
        if (os == "ios"){
            pts_os = 10}
        else
            pts_os = 9
        while (ram.ram < 8){
            (ram.ram) += 1
            pts_ram -= 1}
        while (release.release < this_year - 2){
            (release.release) += 1
            pts_year -= 1}
        while (storage.storage < 128){
            (storage.storage) = storage.storage*2
            pts_storage -= 1}
        let note_finale = ((1.5 * pts_tel) + (1 * pts_size) + (1 * pts_type) + (0.5 * pts_os) + (2 * pts_ram) + (
                    2 * pts_year) + (2 * pts_storage)) / 10

        return note_finale 
    }



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
                <li className="list-group-item">{price} &euro;</li>
                <li className="list-group-item">Note : {calcul({price}, {ram}, {release}, {storage}, {screenType}, {os}, {inch})}/10</li>
            </ul>
          


                                                                                                                                                                                                                                                                                                                            
        </div>
    );
}
 
export default PhoneDetails;