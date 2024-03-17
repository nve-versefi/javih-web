import clientPromise from '@/app/lib/mongodb'; 

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("Calendario");
    const items = await db.collection("Calendario Conciertos").find({}).toArray();
    console.log('Retrieved items:', items);
    res.status(200).json(items); 
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to fetch the carousel data" });
  }
};