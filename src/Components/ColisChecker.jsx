import React, { useState } from "react";

const ColisChecker = () => {
  const [codeColis, setCodeColis] = useState("");
  const [reponse, setReponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Utilise les variables d'environnement sécurisées
  const webhookURL = process.env.REACT_APP_WEBHOOK_URL || "https://hook.eu2.make.com/8mnseywrujqs57hwmaeyb9qkakfpo1uh";
  const apiKey = process.env.REACT_APP_API_KEY || "Diamal199152";

  // Fonction pour normaliser le code (majuscules + trim)
  const normalizeCode = (code) => {
    return code.trim().toUpperCase();
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError(null);
  setReponse("");

  // Normaliser le code avant envoi
  const normalizedCode = normalizeCode(codeColis);

  // Validation basique côté client
  if (normalizedCode.length < 3) {
    setError("Ups! Der Code ist zu kurz. Bitte geben Sie einen gültigen Code ein.");
    setLoading(false);
    return;
  }

  try {
    const res = await fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-make-apikey": apiKey
      },
      body: JSON.stringify({ codeColis: normalizedCode }),
    });

    if (!res.ok) {
      // Gestion des erreurs HTTP
      if (res.status === 401 || res.status === 403) {
        throw new Error("Authentifizierungsfehler");
      } else if (res.status === 404) {
        throw new Error("CODE_NOT_FOUND");
      } else if (res.status >= 500) {
        throw new Error("Serverfehler");
      } else {
        throw new Error("Unbekannter Fehler");
      }
    }

    // Récupère la réponse
   
    const responseText = await res.text();
    
    // Vérifier si la réponse indique un code invalide
    if (responseText.includes("not found") || 
        responseText.includes("nicht gefunden") || 
        responseText.includes("invalid") || 
        responseText.includes("ungültig") ||
        responseText.toLowerCase().includes("error") ||
        responseText.trim() === "" ||
        responseText.includes("404") ||
        responseText.includes(": ist .") ||  // Détecte "Ihr Paket : ist ."
        responseText.includes("Ihr Paket : ist") ||  // Pattern spécifique
        responseText.match(/Ihr Paket\s*:\s*ist\s*\./) ||  // Regex flexible
        responseText.includes("Paket :  ist") ||  // Avec espaces multiples
        responseText.match(/:\s*ist\s*\./)) {  // Pattern général ": ist ."
      
      setError("Ups! Du hast entweder ein falsches Code eingegeben oder dein Code existiert nicht in unserem Datenbank.");
      return;
    }
    
    // Essaie de parser comme JSON
    try {
      const data = JSON.parse(responseText);
      
      // Vérifier les messages d'erreur dans le JSON
      if (data.error || data.status === "error" || data.message?.includes("not found") ||
          data.message?.includes(": ist .") || data.body?.includes(": ist .")) {
        setError("Ups! Du hast entweder ein falsches Code eingegeben oder dein Code existiert nicht in unserem Datenbank.");
        return;
      }
      
      setReponse(data.message || data.body || responseText || "Paket erfolgreich gefunden!");
    } catch (jsonError) {
      // Si ce n'est pas du JSON, utilise le texte brut
      setReponse(responseText || "Anfrage erfolgreich gesendet ✅");
    }
    
  } catch (err) {
    console.error("Fehler:", err);
    
    if (err.message === "CODE_NOT_FOUND") {
      setError("Ups! Du hast entweder ein falsches Code eingegeben oder dein Code existiert nicht in unserem Datenbank.");
    } else if (err.message === "Authentifizierungsfehler") {
      setError("Authentifizierungsfehler. Bitte versuchen Sie es später erneut.");
    } else if (err.message === "Serverfehler") {
      setError("Serverfehler. Bitte versuchen Sie es später erneut.");
    } else {
      setError("Verbindungsfehler. Bitte überprüfen Sie Ihre Internetverbindung.");
    }
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

  // Fonction pour gérer le changement d'input avec normalisation en temps réel
  const handleInputChange = (e) => {
    const value = e.target.value;
    setCodeColis(value);
    // Effacer les erreurs quand l'utilisateur tape
    if (error) setError(null);
    if (reponse) setReponse("");
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
                placeholder="Paketcode eingeben (z.B. 123ABC)"
                value={codeColis}
                onChange={handleInputChange}
                required
                style={{ 
                  width: "70%", 
                  padding: "15px", 
                  marginBottom: "15px",
                  border: `2px solid ${error ? '#ff6b6b' : '#ddd'}`,
                  borderRadius: "8px",
                  fontSize: "16px",
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = error ? '#ff6b6b' : '#4a5568';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = error ? '#ff6b6b' : '#ddd';
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
              <div style={{ 
                color: "#d32f2f", 
                marginTop: "15px", 
                fontSize: "14px",
                textAlign: 'center',
                backgroundColor: '#ffebee',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ffcdd2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                <span style={{ fontSize: '16px' }}>⚠️</span>
                {error}
              </div>
            )}
            
                {reponse && (
              <div style={{ 
                marginTop: "20px", 
                color: "#2c3e50", 
                fontSize: "15px",
                backgroundColor: '#e8f5e8',
                padding: '15px',
                borderRadius: '8px',
                border: '1px solid #c8e6c9',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px'
              }}>
                <span style={{ fontSize: '16px', marginTop: '1px' }}>
                  {reponse.toLowerCase().includes('angekommen') ? '😊' : '😔'}
                </span>
                <span>
                  {reponse.toLowerCase().includes('angekommen') 
                    ? reponse.replace(/angekommen/gi, 'angekommen 😊')
                    : reponse
                  }
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ColisChecker;
