import styled from 'styled-components';
import { MoovingBackground } from '../animations/animations';
import { GradientFour, LightGradientFour } from '../constants';

interface DivProps {
  height?: string;
  width?: string;
}

export const Page = styled.div<DivProps>`
background: ${GradientFour};
  animation: ${MoovingBackground} 10s ease infinite;
  background-size: 200% 100%;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 48px;

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }

  & > * {
    text-align: center;
  }

  overflow: hidden !important;
  ::-webkit-scrollbar {
    display: none !important;
  }

  ::-webkit-scrollbar-thumb {
    display: none !important;
  }

  @media (max-width: 600px) {
    padding: 0;
    background-size: 300% 100%;
  }
`;
