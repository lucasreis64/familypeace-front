import styled from 'styled-components';

interface DivProps {
  height?: string;
  width?: string;
  dropAnimation?: boolean;
}

export default styled.div<DivProps>`
  height: 100vh;
  max-height: ${props => props.height || '600px'};

  width: 100%;
  max-width: ${props => props.width || '1200px'};

  border-radius: 20px;
  background-color: #fff;
  box-shadow: 4px 4px 10px 5px rgba(0, 0, 0, .2);

  display: flex;
  overflow: hidden;
`;
