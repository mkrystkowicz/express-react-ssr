import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import App from '../client/components/App';
import { createTemplate } from './createTemplate';

const app = express();
const port = 3000;

app.get('/', (_, res) => {
  const content = ReactDOMServer.renderToString(<App />);

  const clientBundleScript = `<script src="http://localhost:8080/scripts/bundle.js"></script>`;
  const clientBundleStyle = `<link rel="stylesheet" href="http://localhost:8080/styles/bundle.css">`;

  const template = createTemplate({ clientBundleScript, clientBundleStyle, content });

  res.send(template);
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
