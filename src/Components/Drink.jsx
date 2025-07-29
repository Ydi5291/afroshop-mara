import React from 'react';
import Bissap from '../images/ImgDrink/Bissap.png';
import Getraenke from '../images/ImgDrink/Getränke.jpg';
import Guinness from '../images/ImgDrink/Guinness.jpg';
import Vitamalt from '../images/ImgDrink/vitamalt.jpg';
import Vimto from '../images/ImgDrink/Vimto.jpg';
import NIDO from '../images/ImgDrink/NIDO.jpg';
import '../Styles/Drink.css';

const drinks = [
  { img: Bissap, name: 'Bissap', price: '2,50 €' },
  { img: Getraenke, name: 'Getränke', price: '2,00 €' },
  { img: Guinness, name: 'Guinness', price: '3,00 €' },
  { img: Vitamalt, name: 'Vitamalt', price: '2,80 €' },
  { img: Vimto, name: 'Vimto', price: '2,20 €' },
  { img: NIDO, name: 'NIDO', price: '4,50 €' },
];

function Drink({ addToCart }) {
  return (
    <div className="drink-list">
      {drinks.map((item, idx) => (
        <div className="drink-item" key={idx}>
          <img src={item.img} alt={item.name} />
          <div className="drink-info">
            <span className="drink-name">{item.name}</span>
            <span className="drink-price">{item.price}</span>
           <button className='add-to-cart-btn' onClick={() => addToCart(item)}>In den Warenkorb</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Drink;
