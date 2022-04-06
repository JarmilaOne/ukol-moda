import React from "react";
import './style.css';


const Header = ({title,description}) => { return (
    
    <header class="header">
        <h1 class="header__title">{title}</h1>
        <p class="header__description">{description}</p>
    </header>

    )
};

export default Header;