import React from 'react';
import '../Styles/Footer.css';
import facebookIcon from '../images/SocialNetwork/facebook.png';
import instagramIcon from '../images/SocialNetwork/instagram.jpg';
import tiktokIcon from '../images/SocialNetwork/tiktok.png';
import twitterIcon from '../images/SocialNetwork/twitter.png';
import youtubeIcon from '../images/SocialNetwork/youtube.png';

function Footer({ onNav }) {
  const handleNav = (page) => {
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
      onNav(page);
      // Pour les autres pages, scroll vers le haut
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="App-footer">
      <div className="footer-main">
        <div className="footer-info">
          <h3>Afroshop Mara African & Asian Food</h3>
          <p>Virchowstr 6, 46047 Oberhausen</p>
          <p><b>Öffnungszeiten:</b><br/>Mo–Sa: 10:00–20:00 Uhr<br/>So: Geschlossen</p>
        </div>
        
        <div className="footer-navigation">
          <h4 style={{color: '#4a5568', marginBottom: '0.8rem', fontSize: '1.1rem'}}>Navigation</h4>
          <button onClick={() => handleNav('Lebensmittel')} className="footer-nav-btn">Lebensmittel</button>
          <button onClick={() => handleNav('Kosmetik')} className="footer-nav-btn">Kosmetik</button>
          <button onClick={() => handleNav('Drinks')} className="footer-nav-btn">Drinks</button>
          <button onClick={() => handleNav('Sonstiges')} className="footer-nav-btn">Sonstiges</button>
        </div>
        
        <div className="footer-links">
          <h4 style={{color: '#4a5568', marginBottom: '0.8rem', fontSize: '1.1rem'}}>Service</h4>
          <button onClick={() => handleNav('Ueberuns')} className="footer-nav-btn">Über uns</button>
          <button onClick={() => handleNav('Kontakt')} className="footer-nav-btn">Kontakt</button>
          <button onClick={() => handleNav('Impressum')} className="footer-nav-btn">Impressum</button>
          <button onClick={() => handleNav('AGB')} className="footer-nav-btn">AGB</button>
        </div>
        
        <div className="footer-social">
          <h4 style={{color: '#4a5568', marginBottom: '0.8rem', fontSize: '1.1rem'}}>Folgen Sie uns</h4>
          <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center'}}>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
              <img src={tiktokIcon} alt="TikTok" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <img src={youtubeIcon} alt="YouTube" />
            </a>
            <a href="https://wa.me/4915771126278" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{width: 28, height: 28, marginLeft: 2}} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Afro Shop Mara. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}

export default Footer;
