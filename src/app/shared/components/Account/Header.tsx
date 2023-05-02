import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logout from '../../../assets/images/logout.png';
import { MoovingBackground, Opacity } from '../../animations/animations';
import { GradientFour, LightGradientFour } from '../../constants';
import { UserContext } from '../../contexts';
import { DashboardContext } from '../../contexts/DashboardContext';

export function Header() {
  const { routeName } = useContext(DashboardContext);
  const { setUserData, setContextUserData } = useContext(UserContext);
  const navigate = useNavigate();

  function signOut() {
    setUserData({} as any);
    setContextUserData({} as any);
    navigate('/sign-in');
  }

  return (
    <Container key={routeName} routeName = { routeName }>
      <div>
        <h1>{ routeName.toUpperCase() }</h1>
        <button onClick={signOut}></button>
      </div>
      <Line/>
    </Container>
  );
};

interface ContainerProps {
  routeName: string;
}

const Container = styled.div<ContainerProps>`
  animation: ${Opacity} 500ms;

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  h1{
    font-weight: 700;
    font-size: 30px;
  }
  button{
    border: none;
    animation: ${MoovingBackground} 5s ease infinite;
    background-size: 300% 100%;
    width: 40px;
    height: 35px;
    background-image: ${LightGradientFour};
    -webkit-mask-image: url(${logout});
    mask-image: url(${logout});
    mask-repeat: no-repeat;
    mask-position: center center;
    mask-size: cover;
    &:hover{
      background-image: ${GradientFour};
    }
  }
`;

const Line = styled.div`
  animation: ${MoovingBackground} 5s ease infinite;
  background-size: 300% 100%;
  height: 3px;
  width: 100%;
  background-image: ${LightGradientFour};
  margin-top: 20px;
  &:hover{
      background-image: ${GradientFour};
  }
`;
