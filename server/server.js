const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
})

app.get('/data', (req, res) => {
    res.json({
        user: '张德标',
        age: 25
    });
})

app.listen(9093, () => {
    console.log('Node app start at port 9093');
})

// TODO: 说好的MongoDB的介绍