import './App.css';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Lebensmittel from './Components/Lebensmittel.jsx';
import Kosmetik from './Components/Kosmetik.jsx';
import Drink from './Components/Drink.jsx'; 
import Sonstiges from './Components/Sonstiges.jsx';
import Cart from './Components/Cart.jsx'; 
import Schill from './images/ImgLebensmittel/Schill.jpg';
import KosmetikImg from './images/ImgKosmetik/Kosmetik.jpg';
import Bissap from './images/ImgDrink/Bissap.png';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('Lebensmittel');
  const [cart, setCart] = useState([]);

  // Fonction pour ajouter un produit au panier
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const [cartOpen, setCartOpen] = useState(false);

  let Content;
  if (page === 'Lebensmittel') Content = <Lebensmittel addToCart={addToCart} />;
  else if (page === 'Kosmetik') Content = <Kosmetik addToCart={addToCart} />;
  else if (page === 'Drinks') Content = <Drink addToCart={addToCart} />;
  else if (page === 'Sonstiges') Content = <Sonstiges addToCart={addToCart} />;

   return (
    <div className="App">
      <Header cart={cart} onNav={setPage} onCartClick={() => setCartOpen(true)} />

      {cartOpen && (
        <Cart cart={cart} onClose={() => setCartOpen(false)} />
      )}
      <main>
        <div className="vertical-buttons">
          <button onClick={() => setPage('Lebensmittel')}>
            <img src={Schill} alt="Lebensmittel" style={{ width: 32, height: 32, marginRight: 8, borderRadius: 4 }} />
            Lebensmittel
          </button>
          <button onClick={() => setPage('Kosmetik')}>
            <img src={KosmetikImg} alt="Kosmetik" style={{ width: 32, height: 32, marginRight: 8, borderRadius: 4 }} />
            Kosmetik
          </button>
          <button onClick={() => setPage('Drinks')}>
            <img src={Bissap} alt="Drinks" style={{ width: 32, height: 32, marginRight: 8, borderRadius: 4 }} />
            Drinks
          </button>
          <button onClick={() => setPage('Sonstiges')}>
            <img src={Bissap} alt="Sonstiges" style={{ width: 32, height: 32, marginRight: 8, borderRadius: 4 }} />
            Sonstiges
          </button>
        </div>
        <div className="content-section">
          {Content}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
