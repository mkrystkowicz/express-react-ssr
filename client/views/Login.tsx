import React from 'react';
import styled from 'styled-components';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { Logo } from '../components/UI/Logo/Logo';

const SectionWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledLogo = styled(Logo)`
  margin-bottom: 2rem;
`

export const Login: React.FC = () => {
  return (
    <SectionWrapper>
      <StyledLogo>Logo</StyledLogo>
      <LoginForm />
    </SectionWrapper>
  );
};
