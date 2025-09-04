export async function handler(event, context) {
  try {
    const token = process.env.STRAVA_ACCESS_TOKEN;
    if (!token) return { statusCode: 400, body: "Missing STRAVA_ACCESS_TOKEN" };
    const resp = await fetch("https://www.strava.com/api/v3/athlete/activities?per_page=5", {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await resp.json();
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (e) {
    return { statusCode: 500, body: e.toString() };
  }
}
