import { MongoClient, ServerApiVersion } from 'mongodb';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			const data = req.body;

			const uri =
				'mongodb+srv://esrch:<password>@cluster0.jfna1.mongodb.net/?retryWrites=true&w=majority';
			const client = new MongoClient(uri);

			console.log('before connect');
			await client.connect();
			console.log('connected');

			const db = client.db('test');
			const collection = db.collection('meetups');

			const meetup = await collection.insertOne(data);

			await client.close();

			res.status(201).json({ message: 'Meetup inserted.' });
		} catch (e) {
			console.log(e);
		}
	} else {
		res.status(404).json({});
	}
}
