const express = require('express');
const path = require('path');

const PORT = 4000;
const app = new express();

app.use(express.static('/public/'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/dist/index.html'))
});