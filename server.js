let Express = require('express');
let { MongoClient } = require('mongodb'); // Correct casing for MongoClient
let cors = require('cors');
const multer = require('multer');

let app = Express();
app.use(cors());

let CONNECTION_STRING = "mongodb+srv://Karthick_Ponkali:54q2A9N6mDPaWn2N@storytree.gpm6l.mongodb.net/?retryWrites=true&w=majority&appName=StoryTree";

let DATABASE_NAME = "StoryTree";
let database;

app.listen(5038, async () => {
    try {
        console.log('Connecting to MongoDB...');
        const client = await MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
        database = client.db(DATABASE_NAME);
        console.log('Database Connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
});
