import './App.css';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Lebensmittel from './Components/Lebensmittel.jsx';
import Kosmetik from './Components/Kosmetik.jsx';
import Drink from './Components/Drink.jsx';
import Sonstiges from './Components/Sonstiges.jsx';
import Cart from './Components/Cart.jsx';
import Ueberuns from './Components/Ueberuns.jsx';
import Kontakt from './Components/Kontakt.jsx';
import Impressum from './Components/Impressum.jsx';
import AGB from './Components/AGB.jsx';
import ColisChecker from './Components/ColisChecker.jsx';
import Schill from './images/ImgLebensmittel/Schill.jpg';
import KosmetikImg from './images/ImgKosmetik/Kosmetik.jpg';
import Bissap from './images/ImgDrink/Bissap.png';
import { useState } from 'react';
import WelcomeImg from './images/Afroshop-mara1.jpg';

function App() {
  const [page, setPage] = useState('Lebensmittel');
  const [cart, setCart] = useState([]);

  // Fonction pour ajouter un produit au panier
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // Incrémente la quantité d'un article
  const incrementItem = (item) => {
    setCart((prev) => [...prev, item]);
  };

  // Décrémente la quantité d'un article
  const decrementItem = (item) => {
    setCart((prev) => {
      const idx = prev.findIndex(
        (i) => i.name === item.name && i.price === item.price && i.img === item.img
      );
      if (idx !== -1) {
        return prev.slice(0, idx).concat(prev.slice(idx + 1));
      }
      return prev;
    });
  };

  const [cartOpen, setCartOpen] = useState(false);

  let Content;
  let sectionId = '';
  if (page === 'Lebensmittel') {
    Content = <Lebensmittel addToCart={addToCart} />;
    sectionId = 'lebensmittel';
  } else if (page === 'Kosmetik') {
    Content = <Kosmetik addToCart={addToCart} />;
    sectionId = 'kosmetik';
  } else if (page === 'Drinks') {
    Content = <Drink addToCart={addToCart} />;
    sectionId = 'drinks';
  } else if (page === 'Sonstiges') {
    Content = <Sonstiges addToCart={addToCart} />;
    sectionId = 'sonstiges';
  } else if (page === 'Ueberuns') {
    Content = <Ueberuns />;
    sectionId = 'ueberuns';
  } else if (page === 'Kontakt') {
    Content = <Kontakt />;
    sectionId = 'kontakt';
  } else if (page === 'Impressum') {
    Content = <Impressum />;
    sectionId = 'impressum';
  } else if (page === 'AGB') {
    Content = <AGB />;
    sectionId = 'agb';
  }

  return (
    <div className="App">
      <Header cart={cart} onNav={setPage} onCartClick={() => setCartOpen(true)} />

      {/* Message de bienvenue */}
      <section className="welcome-section">
        <h1 style={{ color: '#1976d2', marginBottom: '0.5rem', fontSize: '2rem' }}>Herzlich willkommen!</h1>
        <p style={{ fontSize: '1.15rem', margin: 0 }}>
          <b>Afroshop Mara African & Asian Food</b><br />
          <span style={{ color: '#444' }}>Virchowstr 6, 46047 Oberhausen</span><br />
          <span style={{ color: '#1976d2', fontWeight: 500 }}>Öffnungszeiten:</span><br />
          Montag – Samstag: 10:00 – 20:00 Uhr<br />
          Sonntag: Geschlossen
        </p>
      </section>

      {cartOpen && (
        <Cart cart={cart} onClose={() => setCartOpen(false)} onIncrement={incrementItem} onDecrement={decrementItem} />
      )}
      <main>
        <div className="vertical-buttons">
          <button onClick={() => setPage('Lebensmittel')} id="btn-lebensmittel">
            <img src={Schill} alt="Lebensmittel" style={{ width: 32, height: 32, marginRight: 8, borderRadius: 4 }} />
            Lebensmittel
          </button>
          <button onClick={() => setPage('Kosmetik')} id="btn-kosmetik">
            <img src={KosmetikImg} alt="Kosmetik" style={{ width: 32, height: 32, marginRight: 8, borderRadius: 4 }} />
            Kosmetik
          </button>
          <button onClick={() => setPage('Drinks')} id="btn-drinks">
            <img src={Bissap} alt="Drinks" style={{ width: 32, height: 32, marginRight: 8, borderRadius: 4 }} />
            Drinks
          </button>
          <button onClick={() => setPage('Sonstiges')} id="btn-sonstiges">
            <img src={Bissap} alt="Sonstiges" style={{ width: 32, height: 32, marginRight: 8, borderRadius: 4 }} />
            Sonstiges
          </button>
        </div>
        <div className="content-section" id={sectionId}>
          {Content}
        </div>
      </main>

      {/* ------ColisChecker------ */}
      <ColisChecker />

      <Footer onNav={setPage} />
    </div>
  );
}

export default App;
