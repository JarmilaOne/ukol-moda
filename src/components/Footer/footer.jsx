import React from "react";
import './style.css';

const Footer = ({copy, author}) => {return (
    
   <footer class="footer">
        <p class="footer__copyright">&copy; {copy}, {author}</p>
        <p class="footer__disclosure">Jsme fiktivní firma, která nic neprodává a v žádném případě ani za nic neručí.</p>
    </footer>
    
  )};

export default Footer;