import styled from 'styled-components';

export function Account() {
  return (
    <Container>
      <Info>
        <LeftContainer>
          
        </LeftContainer>
      </Info>
    </Container>
  );
};

const Info = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const LeftContainer = styled.div`
  height: 100%;
`;

