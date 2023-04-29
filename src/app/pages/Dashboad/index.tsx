import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../../shared/components/Account/Header';
import { NavBar } from '../../shared/components/Dashboard/NavBar';
import { DashboardLayout } from '../../shared/layouts/Dashboard';

export function Dashboard() {
  return( 
    <DashboardLayout >
      <NavBar/>
      <Container>
        <Header/>
        <Outlet/>
      </Container>
    </DashboardLayout>
  );
};

const Container = styled.div`
  padding: 30px;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  background: rgba(12, 12, 12, 0.5);
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
`;
