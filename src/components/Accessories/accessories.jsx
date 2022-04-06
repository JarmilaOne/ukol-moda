import React from "react";
import Product from "../Product/product";
import './style.css';

const Accessories = ({name}) => {return (

  <section class="accessories">
        <h2>{name}</h2>
        <div class="products">
            
            <Product source='/assets/blue-handbag.jpg' alt='Modrá kabelka' name='Modrá kabelka' description='Efektní kožená kabelka v krásné modré barvě poskytne dostatek prostoru pro váš mobil, peněženku a další nezbytnosti.' price='3590 Kč' />

            <Product source='/assets/grey-scarf.jpg' alt='Šedá vlněná šála' name='Šedá vlněná šála' description='Stylová unisexová šála vyrobená ze 100% extra jemné merino vlny. Moderní, jednoduché a věčné.' price='970 Kč' />

            <Product source='/assets/glasses.jpg' alt='Brýle' name='Brýle' description='Holky nezlobte se, já už fakt nevím, co bych si tady měl vymyslet za text. Šaty, boty a kabelky mě zcela vyčerpaly.' price='1620 Kč' />

        </div>
    </section>
  
    
  )};

  export default Accessories;
  