const express = require('express');
const session = require('express-session');
const controller = require('./controller');
const massive = require('massive');
const app = express()
require('dotenv').config()

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

massive ({
    connectionString:CONNECTION_STRING,
    ssl: {rejectAunauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('db connected')
}).catch(err => console.log('cannot connect to db', err))

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false, 
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}))

app.use(express.json());

const port = 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})

