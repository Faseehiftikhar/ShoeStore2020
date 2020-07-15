import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json';

function ShoesDetails() {
    const { id } = useParams();
    const shoe = Shoes[id];

    if (!shoe)
        return <h2>Product Not Found!</h2>

    return (
        <div className="ShoesDetails">
            <h1 className="ShoesDetailsHeading">Welcomme to Sasta's Items</h1>
            <div>
                <h2 className="SHOEnAME">{shoe.name}</h2>
                <img src={shoe.img} height={500} maxWidth={100} alt="shoe" />
               
            </div>
        </div>
    );
}

export default ShoesDetails;