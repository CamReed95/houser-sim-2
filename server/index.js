const express = require('express');
// const session = require('express-session');
const controller = require('./controller');
const massive = require('massive');


const app = express();

app.use(express.json());

const port = 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})

