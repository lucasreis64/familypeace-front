import React from 'react';
import styled from 'styled-components';
import { MoovingBackground } from '../../../animations/animations';
import { GradientFour, LightGradientFour } from '../../../constants';

interface NavButtonProps {
  active: boolean;
  children: React.ReactNode;
  hover: boolean;
  icon: string;
}

export function NavButton({ active, hover, icon, children }: NavButtonProps) {
  return (
    <Button  icon = {icon} hover = {hover} active = {active}>
      {children}
    </Button>
  );
};

type styledButtonProps = {
  active: boolean,
  hover: boolean,
  icon: string,
}

const Button = styled.button<styledButtonProps>`
  color: white;
  width: 100%;
  height: 100px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${props => props.active && !props.hover ? 'background: linear-gradient(-45deg, rgba(68,68,68,0.15) 8%, rgba(140,140,140,0.15) 24%, rgba(68,68,68,0.15) 47%, rgba(140,140,140,0.15) 72%, rgba(68,68,68,0.15) 96%);' : ''}
  animation: ${MoovingBackground} 10s ease infinite;
  background-size: 300% 100%;
  div{
    height: 40px;
    width: 40px;
    animation: ${MoovingBackground} 5s ease infinite;
    background-size: 300% 100%;
    background-image: ${LightGradientFour};
    -webkit-mask-image: url(${props => props.icon});
    mask-image: url(${props => props.icon});
    mask-repeat: no-repeat;
    mask-position: center center;
    mask-size: cover;
  }
  h1{
    font-weight: 900;
  }

  &:hover {
    background: linear-gradient(-45deg, rgba(68,68,68,0.15) 8%, rgba(140,140,140,0.15) 24%, rgba(68,68,68,0.15) 47%, rgba(140,140,140,0.15) 72%, rgba(68,68,68,0.15) 96%);
    h1, div{
      background-image: ${GradientFour};
    }
  }

  & > *:not(:last-child) {
    margin-bottom: 4px;
  }

  & > *:first-child {
    font-size: 28px;
    color: #124090;
  }

  @media (max-width: 600px) {
    height: 80px;
  }
`;
