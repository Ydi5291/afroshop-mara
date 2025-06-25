import React, { useState } from 'react';
import '../Styles/Header.css';

function Header({ onNav, cart = [], onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (page) => {
    onNav(page);
    setMenuOpen(false);
  };

  return (
    <header className="App-header">
      <div className="header-actions">
        <div className="cart-header">
          <button className="cart-btn" onClick={onCartClick}>
            🛒 <span>{cart.length}</span>
          </button>
        </div>
        <button
          className="burger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Menü öffnen/schließen"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav className={`header-nav${menuOpen ? ' open' : ''}`}>
        <button onClick={() => handleNav('Lebensmittel')}>Lebensmittel</button>
        <button onClick={() => handleNav('Kosmetik')}>Kosmetik</button>
        <button onClick={() => handleNav('Sonstiges')}>Sonstiges</button>
        <button onClick={() => handleNav('UeberUns')}>Über uns</button>
        <button onClick={() => handleNav('Kontakt')}>Uns kontaktieren</button>
      </nav>
    </header>
  );
}

export default Header;