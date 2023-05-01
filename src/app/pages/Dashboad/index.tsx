import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Opacity } from '../../shared/animations/animations';
import { Header } from '../../shared/components/Account/Header';
import { NavBar } from '../../shared/components/Dashboard/NavBar';
import { DashboardContext } from '../../shared/contexts/DashboardContext';
import { DashboardLayout } from '../../shared/layouts/Dashboard';

export function Dashboard() {
  const { routeName } = useContext(DashboardContext);

  return( 
    <DashboardLayout >
      <NavBar/>
      <Container key = { routeName }>
        <Header/>
        <Outlet/>
      </Container>
    </DashboardLayout>
  );
};

const Container = styled.div`
  animation: ${Opacity} 500ms;
  padding: 30px;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  background: rgba(12, 12, 12, 0.5);
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box !important;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
`;
