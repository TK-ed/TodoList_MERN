// importing dependencies
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv'
import router from './routes/todoRoute.js';
dotenv.config()

const app = express();

// environment variables
const port = process.env.PORT
const db = process.env.MONG_URI

// middlewares 
app.use(cors())
app.use(bodyParser.json());
app.use('/api',router)

// checking
app.get('/', (req, res) => {
    res.send('Hello World')
})

// DB connection and server config
mongoose.connect(db, 
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => {
        try {
            app.listen(port, console.log(`Connected to DB and listenin' on port ${port}`));
        } catch (err) {
            console.error(err)
        }
    })


