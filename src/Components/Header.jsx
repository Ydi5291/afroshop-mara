import React, { useState } from 'react';
import '../Styles/Header.css';

function Header({ onNav, cart = [], onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (page) => {
    // Fermer le menu d'abord
    setMenuOpen(false);
    
    // Scroll smooth si la section existe
    const sectionMap = {
      Lebensmittel: 'lebensmittel',
      Kosmetik: 'kosmetik',
      Drinks: 'drinks',
      Sonstiges: 'sonstiges',
      Ueberuns: 'ueberuns',
      Kontakt: 'kontakt',
      Impressum: 'impressum',
      AGB: 'agb',
    };
    const sectionId = sectionMap[page];
    if (sectionId) {
      onNav(page);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Pour les autres pages (Über uns, Kontakt, Impressum, AGB)
      onNav(page);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 150);
    }
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
          className={`burger${menuOpen ? ' open' : ''}`}
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
        <button onClick={() => handleNav('Drinks')}>Drinks</button>
        <button onClick={() => handleNav('Ueberuns')}>Über uns</button>
        <button onClick={() => handleNav('Kontakt')}>Uns kontaktieren</button>
        <button onClick={() => handleNav('Impressum')}>Impressum</button>
        <button onClick={() => handleNav('AGB')}>AGB</button>
      </nav>
    </header>
  );
}

export default Header;
