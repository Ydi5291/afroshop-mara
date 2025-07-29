import React from 'react';
import '../Styles/Cart.css';

function Cart({ cart, onClose, onIncrement, onDecrement }) {
  // Regrouper les articles par nom pour compter les quantités
  const grouped = cart.reduce((acc, item) => {
    const key = item.name;
    if (!acc[key]) acc[key] = { ...item, quantity: 0 };
    acc[key].quantity += 1;
    return acc;
  }, {});

  const items = Object.values(grouped);

  const total = items.reduce((sum, item) => {
    // Extraire le prix en nombre
    const price = parseFloat(item.price.replace(',', '.'));
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="cart-overlay fullscreen">
      <div className="cart-modal fullscreen-modal">
        <button className="cart-close" onClick={onClose}>×</button>
        <h2>Warenkorb</h2>
        {items.length === 0 ? (
          <p>Ihr Warenkorb ist leer.</p>
        ) : (
          <ul>
            {items.map((item, idx) => (
              <li key={idx} className="cart-item">
                <img src={item.img} alt={item.name} />
                <span>{item.name}</span>
                <span>{item.price} × {item.quantity}</span>
                <button onClick={() => onDecrement(item)} style={{margin: '0 4px'}}>-</button>
                <button onClick={() => onIncrement(item)} style={{margin: '0 4px'}}>+</button>
              </li>
            ))}
          </ul>
        )}
        <div className="cart-total">
          <b>Gesamt:</b> {total.toFixed(2).replace('.', ',')} €
        </div>
        <div className="cart-payment-options" style={{marginTop: '1.1rem', textAlign: 'center', color: '#444', fontSize: '1.08rem'}}>
          Zahlen Sie an der Kasse oder per <b>PayPal</b> oder <b>Klarna</b>?
        </div>
      </div>
    </div>
  );
}

export default Cart;
