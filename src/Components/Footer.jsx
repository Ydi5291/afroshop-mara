import React from 'react';
import '../Styles/Footer.css';

function Footer() {
  return (
    <footer className="App-footer">
      <p>&copy; {new Date().getFullYear()} Afro Shop Mara. Alle Rechte vorbehalten.</p>
    </footer>
  );
}

export default Footer;