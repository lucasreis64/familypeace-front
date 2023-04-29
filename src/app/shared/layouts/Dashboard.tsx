import { Page } from '../components/Page';
import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';

interface AuthProps {
  children: React.ReactNode;
  dropAnimation?: boolean;
};

export const DashboardLayout: React.FC<AuthProps> = ({ children, dropAnimation }) => {
  return (
    <Page>
      <StyledContainer width="1040px" height="680px">
        {children}
      </StyledContainer>
    </Page>
  );
};

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: row;
  padding: 0;
  background: rgba(75, 120, 155, 0.3);
  border-radius: 16px;
  box-shadow: 10px 20px 30px rgba(0, 0, 0, 0.5);
  & > * {
    text-align: initial;
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;
