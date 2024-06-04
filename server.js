const express = require('express');
const path = require('path');
const sslRedirect = require('heroku-ssl-redirect').default;

const app = express();

// enable ssl redirect
app.use(sslRedirect());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port);