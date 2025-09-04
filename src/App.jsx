import React, { useState, useEffect } from 'react';

export default function App() {
  const [activities, setActivities] = useState([]);
  const [authUrl, setAuthUrl] = useState('');

  useEffect(() => {
    const clientId = import.meta.env.VITE_STRAVA_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_STRAVA_REDIRECT_URI;
    if (clientId && redirectUri) {
      setAuthUrl(
        `https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&approval_prompt=force&scope=activity:read`
      );
    }
  }, []);

  async function fetchActivities() {
    try {
      const res = await fetch('/.netlify/functions/strava-proxy');
      const data = await res.json();
      setActivities(data || []);
    } catch (e) {
      console.error('Erreur fetch Strava', e);
    }
  }

  return (
    <div className="app">
      <h1>Planificateur VTT XC</h1>
      {authUrl && (
        <a href={authUrl} className="button">Connecter Strava</a>
      )}
      <button onClick={fetchActivities} className="button">Charger mes activités</button>
      <ul>
        {activities.map(act => (
          <li key={act.id}>{act.name} - {Math.round(act.distance/1000)} km</li>
        ))}
      </ul>
    </div>
  );
}
