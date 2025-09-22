export default function handler(req, res) {
  global.bans = global.bans || [];
  return res.status(200).json(global.bans);
}
