import React from 'react';

function Ueberuns() {
  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '800px', 
      margin: '0 auto',
      lineHeight: '1.6',
      color: '#2c3e50'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        marginBottom: '2rem',
        textAlign: 'center',
        color: '#ffb347',
        fontWeight: 'bold'
      }}>
        Über uns
      </h1>
      
      <div style={{
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <h2 style={{
          color: '#2d3e50',
          marginBottom: '1rem',
          fontSize: '1.5rem'
        }}>
          Willkommen bei Afroshop Mara
        </h2>
        
        <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
          Herzlich willkommen bei Afroshop Mara! Wir sind Ihr zuverlässiger Partner für 
          authentische afrikanische Produkte in Deutschland. Unser Shop bietet eine vielfältige 
          Auswahl an hochwertigen Lebensmitteln, Getränken, Kosmetik und vielem mehr direkt 
          aus Afrika.
        </p>
        
        <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
          Mit jahrelanger Erfahrung im Import und Vertrieb afrikanischer Spezialitäten 
          garantieren wir Ihnen Qualität und Authentizität. Von traditionellen Gewürzen 
          bis hin zu modernen Pflegeprodukten - bei uns finden Sie alles, was Ihr Herz begehrt.
        </p>
      </div>

      <div style={{
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <h2 style={{
          color: '#2d3e50',
          marginBottom: '1rem',
          fontSize: '1.5rem'
        }}>
          Unsere Mission
        </h2>
        
        <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
          Unser Ziel ist es, die Vielfalt und den Reichtum der afrikanischen Kultur durch 
          erstklassige Produkte nach Deutschland zu bringen. Wir arbeiten direkt mit 
          vertrauenswürdigen Lieferanten zusammen, um Ihnen die beste Qualität zu 
          garantieren.
        </p>
      </div>

      <div style={{
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{
          color: '#2d3e50',
          marginBottom: '1rem',
          fontSize: '1.5rem'
        }}>
          Warum Afroshop Mara?
        </h2>
        
        <ul style={{ 
          listStyle: 'none', 
          padding: 0,
          fontSize: '1.1rem'
        }}>
          <li style={{ 
            marginBottom: '0.8rem', 
            paddingLeft: '1.5rem',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              left: 0,
              color: '#ffb347',
              fontWeight: 'bold'
            }}>✓</span>
            Authentische afrikanische Produkte
          </li>
          <li style={{ 
            marginBottom: '0.8rem', 
            paddingLeft: '1.5rem',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              left: 0,
              color: '#ffb347',
              fontWeight: 'bold'
            }}>✓</span>
            Höchste Qualitätsstandards
          </li>
          <li style={{ 
            marginBottom: '0.8rem', 
            paddingLeft: '1.5rem',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              left: 0,
              color: '#ffb347',
              fontWeight: 'bold'
            }}>✓</span>
            Schnelle und sichere Lieferung
          </li>
          <li style={{ 
            marginBottom: '0.8rem', 
            paddingLeft: '1.5rem',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              left: 0,
              color: '#ffb347',
              fontWeight: 'bold'
            }}>✓</span>
            Persönlicher Kundenservice
          </li>
          <li style={{ 
            paddingLeft: '1.5rem',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              left: 0,
              color: '#ffb347',
              fontWeight: 'bold'
            }}>✓</span>
            Faire Preise
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Ueberuns;