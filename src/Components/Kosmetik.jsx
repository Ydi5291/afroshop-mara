import React from 'react';
import BlackSoap from '../images/ImgKosmetik/Black-soap.webp';
import Haarpflege from '../images/ImgKosmetik/Haarpflege.jpg';
import Kerastase from '../images/ImgKosmetik/Kerastase.png';
import Koerperpflege from '../images/ImgKosmetik/Körperpflege.png';
import '../Styles/kosmetik.css';

const produits = [
  { img: BlackSoap, name: 'Black Soap', price: '6,00 €' },
  { img: Haarpflege, name: 'Haarpflege', price: '8,50 €' },
  { img: Kerastase, name: 'Kérastase', price: '12,00 €' },
  { img: Koerperpflege, name: 'Körperpflege', price: '7,00 €' },
];

function Kosmetik({ addToCart }) {
  return (
    <div className="kosmetik-list">
      {produits.map((item, idx) => (
        <div className="kosmetik-item" key={idx}>
          <img src={item.img} alt={item.name} />
          <div className="kosmetik-info">
            <span className="kosmetik-name">{item.name}</span>
            <span className="kosmetik-price">{item.price}</span>
            <button className='add-to-cart-btn' onClick={() => addToCart(item)}>In den Warenkorb</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Kosmetik;