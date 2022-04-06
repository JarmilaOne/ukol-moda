import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './components/Header/header';
import Dresses from './components/Dresses/dresses';
import Shoes from './components/Shoes/shoes';
import Accessories from './components/Accessories/accessories';
import Footer from './components/Footer/footer';

const App = () => {return (
  
  <div className='container'>
    <Header title='Móda' description='Stylové oblečení a doplňky pro každý den'/>
    <Dresses name='Šaty' />
    <Shoes name='Boty'/>
    <Accessories name='Doplňky'/>
    <Footer copy={2022} author='Czechitas'/>
  </div>
  
)};

render(<App />, document.querySelector('#app'));
