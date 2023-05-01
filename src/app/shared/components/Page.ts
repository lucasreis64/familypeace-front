import styled from 'styled-components';
import { MoovingBackground } from '../animations/animations';

interface DivProps {
  height?: string;
  width?: string;
}

export const Page = styled.div<DivProps>`
background: linear-gradient(-45deg, rgba(51,65,166,1) 0%, rgba(159,61,61,1) 23%, rgba(51,65,166,1) 51%, rgba(159,61,61,1) 80%, rgba(51,65,166,1) 100%);
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
