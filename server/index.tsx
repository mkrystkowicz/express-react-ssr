import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import App from '../client/components/App';
import { ServerStyleSheet } from 'styled-components';
import { createTemplate } from './createTemplate';

const app = express();
const port = 3000;

app.get('/', (_, res) => {
  const sheet = new ServerStyleSheet()
  const content = ReactDOMServer.renderToString(sheet.collectStyles(<App />));
  const styleTags = sheet.getStyleTags();

  const clientBundleScript = `<script src="http://localhost:8080/scripts/bundle.js"></script>`;

  const template = createTemplate({ clientBundleScript, styleTags, content });

  res.send(template);
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
