const express = require('express');
const path = require('path');

const PORT = 4000;
const app = new express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'))
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});