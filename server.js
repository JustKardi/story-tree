let Express = require('express');
let Mongoclient = require('mongdb').Mongoclient;
let cors = require('cors');
const multer = require('multer');

let app = Express();
app.use(cors());

let CONNECTION_STRING = "mongodb+srv://Karthick_Ponkali:54q2A9N6mDPaWn2N@storytree.gpm6l.mongodb.net/?retryWrites=true&w=majority&appName=StoryTree";

let DATABASE_NAME = "StoryTree";
let database;

app.listen(5038, ()=>{
    Mongoclient.connect(CONNECTION_STRING, (error, client)=>{
        database = client.db(DATABASE_NAME);
    })
})