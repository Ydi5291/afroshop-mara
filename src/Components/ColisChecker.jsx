import React, { useState } from "react";

const ColisChecker = () => {
  const [codeColis, setCodeColis] = useState("");
  const [reponse, setReponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Remplace cette URL par ton URL Webhook Make.com
  const webhookURL = "https://hook.eu2.make.com/ywebfx8gnaot9rk1umvq3499kaengjnq";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setReponse("");

    try {
      // Envoi POST avec le code colis au webhook
      const res = await fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ codeColis }),
      });

      if (!res.ok) {
        throw new Error("Serverfehler");
      }

      const data = await res.json();

      // Supposons que Make renvoie un objet { message: "texte à afficher" }
      setReponse(data.message || "Keine Antwort erhalten");
    } catch (err) {
      setError("Fehler beim Verbinden mit dem Server");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setCodeColis("");
    setReponse("");
    setError(null);
  };

  return (
    <>
      {/* Bulle flottante */}
      <div 
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: '25px',
          right: '24px',
          width: '60px',
          height: '60px',
          backgroundColor: '#4a5568',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          color: '#fff',
          fontSize: '24px'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.backgroundColor = '#2d3e50';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.backgroundColor = '#4a5568';
        }}
      >
        📦
      </div>

      {/* Modal */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1001
        }}>
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: '30px',
            maxWidth: '450px',
            width: '90%',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            position: 'relative'
          }}>
            {/* Bouton fermer */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#666',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f0f0f0';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              ×
            </button>

            <h3 style={{ 
              margin: '0 0 20px 0', 
              color: '#2c3e50', 
              fontSize: '1.4rem',
              textAlign: 'center'
            }}>
              📦 Überprüfen Sie Ihr Paket
            </h3>
            
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Paketcode eingeben"
                value={codeColis}
                onChange={(e) => setCodeColis(e.target.value)}
                required
                style={{ 
                  width: "100%", 
                  padding: "15px", 
                  marginBottom: "15px",
                  border: "2px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "16px",
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#4a5568';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#ddd';
                }}
              />
              <button 
                type="submit" 
                disabled={loading} 
                style={{ 
                  width: "100%",
                  padding: "15px",
                  backgroundColor: loading ? "#ccc" : "#4a5568",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: loading ? "not-allowed" : "pointer",
                  fontSize: "16px",
                  fontWeight: "600",
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => {
                  if (!loading) e.target.style.backgroundColor = '#2d3e50';
                }}
                onMouseLeave={(e) => {
                  if (!loading) e.target.style.backgroundColor = '#4a5568';
                }}
              >
                {loading ? "Überprüfung..." : "Überprüfen"}
              </button>
            </form>

            {error && (
              <p style={{ 
                color: "red", 
                marginTop: "15px", 
                fontSize: "14px",
                textAlign: 'center',
                backgroundColor: '#ffebee',
                padding: '10px',
                borderRadius: '6px'
              }}>
                {error}
              </p>
            )}
            
            {reponse && (
              <p style={{ 
                marginTop: "20px", 
                color: "#2c3e50", 
                fontSize: "15px",
                backgroundColor: '#f0f9ff',
                padding: '15px',
                borderRadius: '8px',
                border: '1px solid #e3f2fd'
              }}>
                {reponse}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ColisChecker;
