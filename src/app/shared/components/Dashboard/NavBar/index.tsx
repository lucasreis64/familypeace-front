import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { NavButton } from './NavButton';
import userIcon from '../../../../assets/images/user-profile.png';
import task from '../../../../assets/images/task.png';
import family from '../../../../assets/images/family.png';
import agenda from '../../../../assets/images/agenda.png';
import familypeace from '../../../../assets/images/lotusflower-spaced.png';
import { useContext, useState } from 'react';
import { DashboardContext } from '../../../contexts/DashboardContext';
import { MoovingBackground } from '../../../animations/animations';
import { GradientFour, LightGradientFour } from '../../../constants';

export function NavBar() {
  const [hover, setHover] = useState(false);
  const { setRouteName } = useContext(DashboardContext);
  const location = useLocation();

  function isActive(buttonPath: string, name: string) {
    if (location.pathname === buttonPath) {
      setTimeout(() => setRouteName(name), 1);
      return true;
    }
    return false;
  }

  return (
    <Container>
      <ButtonsContainer>
        <Link onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} to="/dashboard/account">
          <NavButton icon={userIcon} hover = {hover} active={isActive('/dashboard/account', 'Account')}>
            <div/>
            <h1>Account</h1>
          </NavButton>
        </Link>
        <Link onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} to="/dashboard/family">
          <NavButton icon={family} hover = {hover} active={isActive('/dashboard/family', 'Family')}>
            <div/>
            <h1>Family</h1>
          </NavButton>
        </Link>
        <Link onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} to="/dashboard/tasks">
          <NavButton icon={task} hover = {hover} active={isActive('/dashboard/tasks', 'Tasks')}>
            <div/>
            <h1>Tasks</h1>
          </NavButton>
        </Link>
        <Link onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} to="/dashboard/agenda">
          <NavButton icon={agenda} hover = {hover} active={isActive('/dashboard/agenda', 'Agenda')}>
            <div/>
            <h1>Agenda</h1>
          </NavButton>
        </Link>
      </ButtonsContainer>
      <Logo>
        <div/>
      </Logo>
    </Container>
  );
}

const Container = styled.div`
  width: 70px;
  height: 100%;
  border-right: px solid black;
  background: rgba(8, 8, 8, 0.3);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.8px);
  -webkit-backdrop-filter: blur(0.8px);
  transition: 500ms;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
  h1{
      font-size: 0;
      opacity: 0;
      transition: 300ms;
  }
  &:hover{
    width: 120px;
    transition: 500ms;
    h1{
      display: block;
      transition: 300ms;
      opacity: 1;
      font-size: 16px;
    }
  }
`;

const ButtonsContainer = styled.div`
  
`;

const Logo = styled.div`
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  div{
    height: 40px;
    width: 53px;
    animation: ${MoovingBackground} 5s ease infinite;
    background-size: 300% 100%;
    background-image: ${LightGradientFour};
    -webkit-mask-image: url(${familypeace});
    mask-image: url(${familypeace});
    mask-repeat: no-repeat;
    mask-position: center center;
    mask-size: cover;
    &:hover{
      background-image: ${GradientFour};
    }
  }
`;
