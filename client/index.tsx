import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './components/App';

const root = document.getElementById('ssr-app') as Element;
hydrateRoot(root, <App />); 