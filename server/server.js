const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
})

app.get('/data', (req, res) => {
    res.json({
        name: 'imooc recat',
        type: 'it'
    });
})

app.listen(9093, () => {
    console.log('Node app start at port 9093');
})