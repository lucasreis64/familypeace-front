import styled from 'styled-components';

interface DivProps {
  height?: string;
  width?: string;
}

export const Page = styled.div<DivProps>`

  @keyframes Gradient {
    0% {
        background-position: 0% 50%
    }
    25% {
        background-position: 50% 0%
    }
    50%{
      background-position: 100% 50%
    }
    75% {
        background-position: 50% 100%
    }
    100%{
      background-position: 0% 50%
    }
  }
  background: linear-gradient(-45deg, rgba(13,177,204,1) 9%, rgba(107,57,205,1) 34%, rgba(33,151,204,1) 60%, rgba(107,57,205,1) 87%);
  animation: Gradient 10s ease infinite;
  background-size: 200% 200%;
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

  @media (max-width: 600px) {
    padding: 0;
  }
`;
