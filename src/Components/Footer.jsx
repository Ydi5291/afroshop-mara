import React from 'react';
import '../Styles/Footer.css';
import facebookIcon from '../images/SocialNetwork/facebook.png';
import instagramIcon from '../images/SocialNetwork/instagram.jpg';
import tiktokIcon from '../images/SocialNetwork/tiktok.png';
import twitterIcon from '../images/SocialNetwork/twitter.png';
import youtubeIcon from '../images/SocialNetwork/youtube.png';

function Footer() {
  return (
    <footer className="App-footer">
      <div className="footer-main">
        <div className="footer-info">
          <h3>Afroshop Mara African & Asian Food</h3>
          <p>Virchowstr 6, 46047 Oberhausen</p>
          <p><b>Öffnungszeiten:</b><br/>Mo–Sa: 10:00–20:00 Uhr<br/>So: Geschlossen</p>
        </div>
        <div className="footer-links">
          <a href="#Impressum">Impressum</a>
          <a href="#AGB">AGB</a>
          <a href="#Kontakt">Kontakt</a>
        </div>
        <div className="footer-social">
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
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Afro Shop Mara. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}

export default Footer;