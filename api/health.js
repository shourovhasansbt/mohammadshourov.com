module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();
  return res.status(200).json({
    ok: true,
    service: 'CleanPixel AI Vercel Node.js API',
    nodeVersion: process.version,
    cloudAiConfigured: Boolean(process.env.CLIPDROP_API_KEY),
    timestamp: new Date().toISOString()
  });
};
