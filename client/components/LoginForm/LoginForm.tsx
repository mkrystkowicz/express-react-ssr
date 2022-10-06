import React from 'react';
import { FormWrapper, Title, StyledInput } from './styles';
import { Button } from '../UI/Button/Button';

export const LoginForm = () => (
  <FormWrapper>
    <Title>Register</Title>
    <StyledInput placeholder="Login" type="text" />
    <StyledInput placeholder="Password" type="password" />
    <Button>Register</Button>
  </FormWrapper>
);
