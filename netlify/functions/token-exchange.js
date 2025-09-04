export async function handler(event, context) {
  const qs = event.queryStringParameters;
  const code = qs.code;
  if (!code) return { statusCode: 400, body: "Missing code" };

  const resp = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      code,
      grant_type: "authorization_code"
    })
  });
  const data = await resp.json();
  return { statusCode: 200, body: JSON.stringify(data) };
}
