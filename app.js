const express = require('express');
const app = express();
require('dotenv');

app.use(express.json());

app.get('/health', (req, res) => {
    res.send('Hello')
});

app.listen(2020, (req, res) => {
    console.log("Backend is ready for use!");
});