const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

app.get('/', (req, res) => {
    res.send('Teste');
});

app.listen(3333);
