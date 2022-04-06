import React from 'react';
import './style.css';


const Product = ({source, alt, name, description, price}) => {return (

    <div class="product">  
        <img class="product__image" src={source} alt={alt}/>

        <div class="product__content">
            <h3 class="product__name">{name}</h3>
            <p class="product__description">{description}</p>
            <p class="product__price">{price}</p>
        </div>
    </div>
 
)};  

export default Product;