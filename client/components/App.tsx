import React from 'react';
import { LoginForm } from './LoginForm/LoginForm';
import { Providers } from './Providers';

const App: React.FC = () => (
  <Providers>
    <LoginForm />
  </Providers>
);

export default App;
