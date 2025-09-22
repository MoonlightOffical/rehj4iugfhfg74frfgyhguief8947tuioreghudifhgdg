export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { key, username } = req.body;
  if (key !== process.env.API_SECRET) return res.status(403).json({ error: "Forbidden" });

  global.bans = global.bans || [];
  global.bans = global.bans.filter(name => name !== username.toLowerCase());

  return res.status(200).json({ success: true, action: "unbanned", username });
}
