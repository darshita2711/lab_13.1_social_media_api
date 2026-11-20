
import 'dotenv/config' ;
import express from 'express';
import { MongoClient } from 'mongodb';


const app = express();

const port = process.env.PORT || 5000;

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let isConnected = false;

// Home route
app.get('/', (req, res) => {
    if (isConnected) {
        res.status(200).json({
            message: 'Successfully connected to the database!'
        });
    } else {
        res.status(500).json({
            message: 'Failed to connect to the database.'
        });
    }
});


async function run() {
    try {
        await client.connect();

        await client.db('admin').command({ ping: 1 });

        console.log('Connected successfully to MongoDB!');

        isConnected = true;

    } catch (error) {
        console.error('MongoDB connection failed:', error.message);

        isConnected = false;
    }
}
app.listen(port, async () => {
    console.log(`Server running on port ${port}`);
    await run()
});