import React from 'react';
import { Login } from '../views/Login';
import { Providers } from './Providers';

const App: React.FC = () => (
  <Providers>
    <Login />
  </Providers>
);

export default App;
