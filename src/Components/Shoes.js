import React from 'react';
import { Link } from 'react-router-dom';
import Shoes from './../shoes.json';



function MainShoes() {
   
    return (
        <div className="Products">
            <h1 className="ProductsHeading">Welcome to Sasta's Products</h1>
            <div> 
               
            
                {Object.keys(Shoes).map(keyName=>{
                    const shoe = Shoes[keyName];
                    return (
                        <Link key={keyName} 
                        
                            to={`/shoes/${keyName}`}>
                                <h4 className="ShoesName">{shoe.name}</h4>
                                <img src={shoe.img} height={'400px'} width={'400px'} maxWidth={100} alt="shoe" />
                    </Link>)
                })}
            </div>
        </div>
    );
}

export default MainShoes;