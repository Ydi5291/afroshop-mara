import React, { useState } from 'react';

function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Créer un lien mailto avec les données du formulaire
    const mailtoLink = `mailto:diallom17@yahoo.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nNachricht:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '900px', 
      margin: '0 auto',
      color: '#2c3e50'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        marginBottom: '2rem',
        textAlign: 'center',
        color: '#4a5568',
        fontWeight: 'bold'
      }}>
        Uns Kontaktieren
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        {/* Informations de contact */}
        <div style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            color: '#2d3e50',
            marginBottom: '1.5rem',
            fontSize: '1.5rem',
            textAlign: 'center'
          }}>
            Kontaktinformationen
          </h2>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{
              color: '#4a5568',
              marginBottom: '0.5rem',
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              📧 E-Mail
            </h3>
            <a 
              href="mailto:diallom17@yahoo.com"
              style={{
                color: '#2d3e50',
                textDecoration: 'none',
                fontSize: '1.1rem',
                padding: '0.5rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '6px',
                display: 'inline-block',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#e9ecef'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#f8f9fa'}
            >
              diallom17@yahoo.com
            </a>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{
              color: '#4a5568',
              marginBottom: '0.5rem',
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              📱 WhatsApp
            </h3>
            <a 
              href="https://wa.me/491234567890"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#25D366',
                textDecoration: 'none',
                fontSize: '1.1rem',
                padding: '0.5rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '6px',
                display: 'inline-block',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#e8f5e8'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#f8f9fa'}
            >
              Chat mit uns auf WhatsApp
            </a>
          </div>

          <div>
            <h3 style={{
              color: '#4a5568',
              marginBottom: '0.5rem',
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              ⏰ Öffnungszeiten
            </h3>
            <div style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              color: '#2c3e50'
            }}>
              <p>Montag - Freitag: 9:00 - 18:00</p>
              <p>Samstag: 10:00 - 16:00</p>
              <p>Sonntag: Geschlossen</p>
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            color: '#2d3e50',
            marginBottom: '1.5rem',
            fontSize: '1.5rem',
            textAlign: 'center'
          }}>
            Nachricht senden
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#2d3e50',
                fontWeight: '500'
              }}>
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '2px solid #e9ecef',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#4a5568'}
                onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#2d3e50',
                fontWeight: '500'
              }}>
                E-Mail *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '2px solid #e9ecef',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#4a5568'}
                onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#2d3e50',
                fontWeight: '500'
              }}>
                Betreff *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '2px solid #e9ecef',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#4a5568'}
                onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#2d3e50',
                fontWeight: '500'
              }}>
                Nachricht *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '2px solid #e9ecef',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  transition: 'border-color 0.2s',
                  resize: 'vertical',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#4a5568'}
                onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '1rem',
                backgroundColor: '#4a5568',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.2s, transform 0.1s'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#e67e22';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#4a5568';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Nachricht senden
            </button>
          </form>
        </div>
      </div>

      {/* Section FAQ */}
      <div style={{
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{
          color: '#2d3e50',
          marginBottom: '1.5rem',
          fontSize: '1.5rem',
          textAlign: 'center'
        }}>
          Häufig gestellte Fragen
        </h2>
        
        <div style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ color: '#4a5568', marginBottom: '0.5rem' }}>
              Wie lange dauert die Lieferung?
            </h4>
            <p>In der Regel liefern wir innerhalb von 2-5 Werktagen in ganz Deutschland.</p>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ color: '#4a5568', marginBottom: '0.5rem' }}>
              Welche Zahlungsmethoden akzeptieren Sie?
            </h4>
            <p>Wir akzeptieren Barzahlung bei Abholung, PayPal und Klarna.</p>
          </div>
          
          <div>
            <h4 style={{ color: '#4a5568', marginBottom: '0.5rem' }}>
              Kann ich Produkte abholen?
            </h4>
            <p>Ja, Sie können Ihre Bestellung gerne bei uns vor Ort abholen. Kontaktieren Sie uns für weitere Details.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
