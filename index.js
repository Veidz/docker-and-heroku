const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req, res) => res.send(`<h2> Listening on port: ${port} </h2>`));
app.listen(port, () => `Online: ${port}`);
