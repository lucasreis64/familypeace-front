import { Page } from '../components/Page';
import { StyledContainer } from '../components/Auth';
import React from 'react';

interface AuthProps {
  children: React.ReactNode
};

export const AuthLayout: React.FC<AuthProps> = ({ children }) => {
  return (
    <Page>
      <StyledContainer>
        {children}
      </StyledContainer>
    </Page>
  );
};

