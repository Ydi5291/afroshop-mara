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
  if (page === 'Lebensmittel') Content = <Lebensmittel addToCart={addToCart} />;
  else if (page === 'Kosmetik') Content = <Kosmetik addToCart={addToCart} />;
  else if (page === 'Drinks') Content = <Drink addToCart={addToCart} />;
  else if (page === 'Sonstiges') Content = <Sonstiges addToCart={addToCart} />;

  return (  
    <div className="App">
      <Header cart={cart} onNav={setPage} onCartClick={() => setCartOpen(true)} />

      {/* Message de bienvenue */}
      <section className="welcome-section" style={{
        background: '#f7f7fa',
        padding: '1.5rem 1rem',
        margin: '0 auto 1.5rem auto',
        borderRadius: '10px',
        maxWidth: '700px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
        textAlign: 'center',
        color: '#222',
        fontFamily: 'inherit',
      }}>
        <h1 style={{ color: '#1976d2', marginBottom: '0.5rem', fontSize: '2rem' }}>Herzlich willkommen!</h1>
        <p style={{ fontSize: '1.15rem', margin: 0 }}>
          <b>Afroshop Mara African & Asian Food</b><br/>
          <span style={{ color: '#444' }}>Lothringer Straße 222, 46045 Oberhausen</span><br/>
          <span style={{ color: '#1976d2', fontWeight: 500 }}>Öffnungszeiten:</span><br/>
          Montag – Samstag: 10:00 – 20:00 Uhr<br/>
          Sonntag: Geschlossen
        </p>
      </section>

      { cartOpen && (  
        <Cart cart={cart} onClose={() => setCartOpen(false)} onIncrement={incrementItem} onDecrement={decrementItem} />
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
      
      {/* ------Chatbot------ */}
      <div
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1000,
        }}
      >
        <a
          className="whatsapp-chatbot-btn"
          href="https://wa.me/4915771126278?text=Hallo%2C%20ich%20möchte%20mehr%20Informationen%20über%20Afroshop%20Mara"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            background: "#25D366",
            color: "#fff",
            borderRadius: "50px",
            padding: "12px 18px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            fontSize: "1.1rem"
          }}
        >
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#25D366" />
            <path d="M23.5 18.5c-.3-.2-1.8-.9-2.1-1-...Z" fill="#fff" />
          </svg>
          <span style={{ margin: 8, fontSize: "0.9rem" }}>Chat mit Mara</span>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
