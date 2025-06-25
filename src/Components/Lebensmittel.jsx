import React from 'react';
import Alloco2 from '../images/ImgLebensmittel/Alloco2.jpg';
import Avocados from '../images/ImgLebensmittel/Avocados.jpg';
import Chips2 from '../images/ImgLebensmittel/Chips2.jpg';
import Ignam from '../images/ImgLebensmittel/Ignam.jpg';
import Schill from '../images/ImgLebensmittel/Schill.jpg';
import Zitronen from '../images/ImgLebensmittel/Zitronen.jpg';
import '../Styles/Lebensmittel.css';

const articles = [
  { img: Alloco2, name: 'Alloco', price: '3,50 €' },
  { img: Avocados, name: 'Avocados', price: '2,00 €' },
  { img: Chips2, name: 'Chips', price: '1,80 €' },
  { img: Ignam, name: 'Ignam', price: '4,00 €' },
  { img: Schill, name: 'Schill', price: '5,00 €' },
  { img: Zitronen, name: 'Zitronen', price: '1,20 €' },
];

function Lebensmittel({ addToCart }) {
  return (
    <div className="lebensmittel-list">
      {articles.map((item, idx) => (
        <div className="lebensmittel-item" key={idx}>
          <img src={item.img} alt={item.name} />
          <div className="lebensmittel-info">
            <span className="lebensmittel-name">{item.name}</span>
            <span className="lebensmittel-price">{item.price}</span>
            <button className='add-to-cart-btn' onClick={() => addToCart(item)}>In den Warenkorb</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Lebensmittel;



