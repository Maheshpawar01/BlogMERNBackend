const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
const PORT = 8000;
require('dotenv').config();
require('./db')

app.use(bodyParser.json());
app.use(cors());
// app.use(cookieParser)


app.get('/', (req, res)=>{
    res.json({
        message: "The API is working"
    })
});

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})