const path = require('path');
const fs = require('fs');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const { App } = require('../src/App');

const express = require('express');

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
  fs.readFile(path.resolve(__dirname, 'public', 'index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occured');
    }

    const app = ReactDOMServer.renderToString(<App />);
    rendered = data.replace('<div id="root"></div>', `<div id="root">${app}</div>`);

    return res.send(rendered);
  });
});

app.use('/public', express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
