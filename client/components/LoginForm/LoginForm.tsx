import React from 'react';
import styled from 'styled-components';
import { Input } from '../UI/Input/Input';
import { StyledWrapper } from '../UI/Wrapper/Wrapper';
import { Button } from '../UI/Button/Button';

const Title = styled.h2`
  color: ${props => props.theme.color};
  font-size: 22px;
`;

const StyledInput = styled(Input)`
  margin: 16px;
`

const FormWrapper = styled(StyledWrapper)`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
`

export const LoginForm = () => (
  <FormWrapper>
    <Title>Register</Title>
    <StyledInput placeholder="Login" type="text" />
    <StyledInput placeholder="Password" type="password" />
    <Button>Register</Button>
  </FormWrapper>
);
