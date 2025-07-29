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
import Schill from './images/ImgLebensmittel/Schill.jpg';
import KosmetikImg from './images/ImgKosmetik/Kosmetik.jpg';
import Bissap from './images/ImgDrink/Bissap.png';
import { useState, useRef } from 'react';

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
  const [whatsAppPos, setWhatsAppPos] = useState({ x: 24, y: 24 });
  const dragRef = useRef(null);
  const dragOffset = useRef({ x: 0, y: 0 });
  const dragging = useRef(false);

  // Gestion du drag
  const onDragStart = (e) => {
    dragging.current = true;
    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
    dragOffset.current = {
      x: clientX - whatsAppPos.x,
      y: clientY - whatsAppPos.y,
    };
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragEnd);
    document.addEventListener('touchmove', onDragMove, { passive: false });
    document.addEventListener('touchend', onDragEnd);
  };
  const onDragMove = (e) => {
    if (!dragging.current) return;
    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
    setWhatsAppPos({
      x: Math.max(0, clientX - dragOffset.current.x),
      y: Math.max(0, clientY - dragOffset.current.y),
    });
    if (e.type === 'touchmove') e.preventDefault();
  };
  const onDragEnd = () => {
    dragging.current = false;
    document.removeEventListener('mousemove', onDragMove);
    document.removeEventListener('mouseup', onDragEnd);
    document.removeEventListener('touchmove', onDragMove);
    document.removeEventListener('touchend', onDragEnd);
  };

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
  }

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
          <span style={{ color: '#444' }}>Virchowstr 6, 46047 Oberhausen</span><br/>
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
      
      {/* ------Chatbot------ */}
      <div
        ref={dragRef}
        style={{
          position: "fixed",
          bottom: 'unset',
          right: 'unset',
          left: whatsAppPos.x,
          top: whatsAppPos.y,
          zIndex: 1000,
          touchAction: 'none',
          cursor: 'grab',
        }}
        onMouseDown={onDragStart}
        onTouchStart={onDragStart}
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
            <path d="M23.5 18.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.6-.2-.8.2l-1.1 1.4c-.1.2-.3.2-.5.1-1.3-.6-2.4-1.4-3.3-2.4-.9-1-1.8-2-2.4-3.3-.1-.2-.1-.4.1-.5l1.4-1.1c.4-.3.5-.6.2-.8-.1-.3-.9-1.8-1-2.1-.1-.3-.3-.3-.6-.3h-1.1c-.3 0-.8.1-1.2.5-.4.4-1.5 1.5-1.5 3.6s1.5 4.2 1.7 4.5c.2.3 3 4.6 7.3 6.4 4.3 1.8 4.3 1.2 5.1 1.1.8-.1 2.6-1.1 3-2.1.4-1 .4-1.9.3-2.1Z" fill="#fff" />
          </svg>
          <span style={{ margin: 8, fontSize: "0.9rem" }}>Chat mit Mara</span>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
