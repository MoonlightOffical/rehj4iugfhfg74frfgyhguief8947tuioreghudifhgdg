export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { key, username } = req.body;
  if (key !== process.env.API_SECRET) return res.status(403).json({ error: "Forbidden" });

  // Save bans in Vercel KV (or just memory for testing)
  global.bans = global.bans || [];
  if (!global.bans.includes(username.toLowerCase())) {
    global.bans.push(username.toLowerCase());
  }

  return res.status(200).json({ success: true, action: "banned", username });
}
