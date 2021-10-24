const express = require('express');
const cors = require('cors');

const app = express();
const port= 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req, res) => {
    res.send('Hello world');
});

app.listen(port, () => {
    console.log('Running Server on Port', port);
});