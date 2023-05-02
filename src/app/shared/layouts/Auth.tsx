import { Page } from '../components/Page';
import { StyledContainer } from '../components/Auth';
import React from 'react';

interface AuthProps {
  children: React.ReactNode;
  dropAnimation: boolean;
  nextPageAnimation?: boolean;
};

export const AuthLayout: React.FC<AuthProps> = ({ children, dropAnimation, nextPageAnimation }) => {
  return (
    <Page>
      <StyledContainer width="400px" height="520px" dropAnimation = {dropAnimation} nextPageAnimation = {nextPageAnimation}>
        {children}
      </StyledContainer>
    </Page>
  );
};

