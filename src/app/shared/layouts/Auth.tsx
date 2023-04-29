import { Page } from '../components/Page';
import { StyledContainer } from '../components/Auth';
import React from 'react';

interface AuthProps {
  children: React.ReactNode;
  dropAnimation: boolean;
};

export const AuthLayout: React.FC<AuthProps> = ({ children, dropAnimation }) => {
  return (
    <Page>
      <StyledContainer width="400px" height="520px" dropAnimation = {dropAnimation}>
        {children}
      </StyledContainer>
    </Page>
  );
};

