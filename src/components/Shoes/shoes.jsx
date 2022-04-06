import React from "react";
import Product from "../Product/product";
import './style.css';

const Shoes = ({name}) => {return (
    <section class="shoes">
        <h2>{name}</h2>
        <div class="products">

            <Product source='/assets/running-shoes.jpg' alt='Běhací tenisky' name='Běhací tenisky' description='Růžová s kontrastními šedými a bílými detaily? Veliká paráda! Tyhle tenisky jsou další srdcová záležitost.' price='1790 Kč' />
        
            <Product source='/assets/shiny-shoes.jpg' alt='Třpytivé lodičky' name='Třpytivé lodičky' description='Elegantní třpyticé lodičky, které padnou skoro ke každému outfitu. Toto nesmí ve vašem šatníku chybět.' price='2950 Kč' />
        
            <Product source='/assets/red-shoes.jpg' alt='Červené botičky' name='Červené botičky' description='Extravagantní červené boty s vysokým šnerováním. V těchto botách se zá vámi budou všichni otáčet.' price='6200 Kč' />

        </div>
    </section>
)};
  
export default Shoes;