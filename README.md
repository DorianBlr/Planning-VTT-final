# Planning VTT XC avec Strava

## Installation locale
```bash
npm install
npm run dev
```

## Déploiement Netlify
1. Créez un site sur Netlify et connectez ce repo
2. Ajoutez les variables d'environnement :
   - VITE_STRAVA_CLIENT_ID
   - VITE_STRAVA_REDIRECT_URI (ex: https://ton-site.netlify.app/)
   - STRAVA_CLIENT_ID
   - STRAVA_CLIENT_SECRET
   - STRAVA_ACCESS_TOKEN (token manuel pour tests)

3. Deploy !
