'use client'
import { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    const consent = getCookie('userConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsentDecision = (decision: 'all' | 'essential' | 'none') => {
    console.log("Current cookies:", document.cookie);
    setIsVisible(false);
    setCookie('userConsent', decision);
        console.log("Cookie set. Checking value...");
        console.log(`Cookie value for userConsent:`, getCookie('userConsent'));

    if (decision === 'all') {
      fetch('/api/storeConsent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ consent: decision }),
      });
    }
  };

  const setCookie = (name: string, value: string) => {
    document.cookie = `${name}=${value}; path=/; max-age=31536000`;
  };

  const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      const cookiePart = parts.pop();
      if (cookiePart) {
        const cookieValue = cookiePart.split(';').shift();
        console.log(`Cookie value for ${name}:`, cookieValue);
        return cookieValue ? cookieValue : null;
      }
    }
    return null;
  };
  

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-8 mx-auto max-w-2xl bg-white p-4 shadow-md text-center border-2 border-casal-500 rounded-lg z-50">
      <p className="text-2xl text-black font-bold mb-4">Usamos cookies para mejorar tu experiencia. Puedes saber más en la <a href="/cookiepolicy" style={{ textDecoration: 'underline' }}>política de cookies</a>.</p>
      <div className="flex justify-center space-x-2">
        <button onClick={() => handleConsentDecision('all')} className="bg-casal-400 text-white text-xl px-4 py-2 rounded hover:bg-green-400">Aceptar todas</button>
        <button onClick={() => handleConsentDecision('essential')} className="bg-dovegray-400 text-white text-xl px-4 py-2 rounded hover:bg-dovegray-600">Aceptar solo las esenciales</button>
        <button onClick={() => handleConsentDecision('none')} className="bg-dovegray-900 text-white text-xl px-4 py-2 rounded hover:bg-red-600">Denegar</button>
      </div>
    </div>
  );
};

export default CookieBanner;