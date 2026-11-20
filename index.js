import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

const uri = process.env.MONGO_URI;

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(port, async () => {
    console.log(`Server running on port ${port}`);
});