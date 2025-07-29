import React from 'react';
import '../Styles/Footer.css';
import facebookIcon from '../images/SocialNetwork/facebook.png';
import instagramIcon from '../images/SocialNetwork/instagram.jpg';
import tiktokIcon from '../images/SocialNetwork/tiktok.png';
import twitterIcon from '../images/SocialNetwork/twitter.png';
import youtubeIcon from '../images/SocialNetwork/youtube.png';

function Footer({ onNav }) {
  return (
    <footer className="App-footer">
      <div className="footer-main">
        <div className="footer-info">
          <h3>Afroshop Mara African & Asian Food</h3>
          <p>Virchowstr 6, 46047 Oberhausen</p>
          <p><b>Öffnungszeiten:</b><br/>Mo–Sa: 10:00–20:00 Uhr<br/>So: Geschlossen</p>
        </div>
        
        <div className="footer-navigation">
          <h4 style={{color: '#ffb347', marginBottom: '0.8rem', fontSize: '1.1rem'}}>Navigation</h4>
          <button onClick={() => onNav && onNav('Lebensmittel')} className="footer-nav-btn">Lebensmittel</button>
          <button onClick={() => onNav && onNav('Kosmetik')} className="footer-nav-btn">Kosmetik</button>
          <button onClick={() => onNav && onNav('Drinks')} className="footer-nav-btn">Drinks</button>
          <button onClick={() => onNav && onNav('Sonstiges')} className="footer-nav-btn">Sonstiges</button>
        </div>
        
        <div className="footer-links">
          <h4 style={{color: '#ffb347', marginBottom: '0.8rem', fontSize: '1.1rem'}}>Service</h4>
          <button onClick={() => onNav && onNav('Ueberuns')} className="footer-nav-btn">Über uns</button>
          <button onClick={() => onNav && onNav('Kontakt')} className="footer-nav-btn">Kontakt</button>
          <button onClick={() => onNav && onNav('Impressum')} className="footer-nav-btn">Impressum</button>
          <button onClick={() => onNav && onNav('AGB')} className="footer-nav-btn">AGB</button>
        </div>
        
        <div className="footer-social">
          <h4 style={{color: '#ffb347', marginBottom: '0.8rem', fontSize: '1.1rem'}}>Folgen Sie uns</h4>
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