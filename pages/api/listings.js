let listings = [];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, image, url, price, timestamp } = req.body;

    if (!title || !image || !url) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    listings.unshift({ title, image, url, price, timestamp });
    if (listings.length > 50) listings.pop(); // Keep the list short

    return res.status(200).json({ success: true });
  }

  if (req.method === 'GET') {
    return res.status(200).json(listings);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}