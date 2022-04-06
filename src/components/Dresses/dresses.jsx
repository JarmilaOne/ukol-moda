import React from "react";
import Product from "../Product/product";
import './style.css';


const Dresses = ({name}) => {return (
 
    <section class="dresses">
        <h2>{name}</h2>
        <div class="products">
                          
            <Product source='/assets/red-dress.jpg' alt='Červené šaty' name='Červené šaty' description='V barvě jahod! Krátké šaty v sytě červeném odstínu Váš šatník nekompromisně nabijí energií.' price='2290 Kč' />
        
            <Product source='/assets/flower-dress.jpg' alt='Květované šaty' name='Květované šaty' description='Vzdušné, rozevláté a především velmi pohodlné! Tyhle šaty od dánské značky zkrátka nebudete chtít sundat.' price='3100 Kč' />				
       
            <Product source='/assets/yellow-dress.jpg' alt='Žluté šaty' name='Žluté šaty' description='Žluté jako slunce! Volnější plátěné šaty s vypasovanou siluetou mají potenciál slušet opravdu každé postavě.' price='4250 Kč' />

        </div>
    </section>
  
  )};
  
  export default Dresses;