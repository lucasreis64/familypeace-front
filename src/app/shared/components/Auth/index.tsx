import styled from 'styled-components';
import { deslizarCima, tremerZoom } from '../../animations/animations';
import { ThreeDots } from 'react-loader-spinner';
import Container from '../Container';
import { time } from '../../../pages/Sign-in';

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  box-sizing: border-box;
  animation: ${deslizarCima} ${time};
  background: rgba(75, 120, 155, 0.3);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.6px);
  -webkit-backdrop-filter: blur(4.6px);
  border: 1px solid rgba(255, 255, 255, 0.75);
  form{
    display: flex;
        flex-direction: column;
        gap: 6px;
        width: 100%;
        gap: 10px;
  }
  &:hover{
    background: rgba(75, 120, 155, 0.4);
  }
`;
interface DivProps {
  loading: boolean;
}

export const Logo = styled.div<DivProps>`
  h1{
    font-family: "Saira Stencil One";
    margin-bottom: 25px;
    font-weight: 400;
    font-size: 32px;
    color: #ffffff;
    filter: drop-shadow(3px 3px 0px #000);
  }
  img{
    height: 50px;
    margin-bottom: -25px;
  }
  animation: ${(props) => (props.loading ? 'none' :deslizarCima)} ${time}, ${tremerZoom} ${'500ms'} 1 ${time};
  opacity: 0.7;
  margin-bottom: 30px;
  &:hover{
    opacity: 1;
  }
`;

export const Input = styled.input`
  padding-left: 8px;
  height: 45px;
  box-sizing: border-box;
  animation: ${deslizarCima} ${time};
  outline: none;
  background: rgba(75, 120, 155, 0);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.6px);
  -webkit-backdrop-filter: blur(4.6px);
  border: 1px solid #cadbe9;
  color: rgba(252, 253, 253, 0.7);
  &::placeholder {
        font-weight: 400;
        font-size: 20px;
        color: #dbdbdb;
        font-family: "Lexend Deca";
        opacity: 0.5;
  }
  &:hover{
    background: rgba(75, 120, 155, 0.2);
    &::placeholder {
        opacity: 1;
  }
  }
`;

type ButtonProps = DivProps;

export const Button = styled.button<ButtonProps>`
  font-family: "Lexend Deca";
  width: 100%;
  height: 45px;
  color: white;
  background: rgba(75, 120, 155, 0);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.6px);
  -webkit-backdrop-filter: blur(4.6px);
  border: 1px solid #cadbe9;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${(props) => (props.loading ? 'none' :deslizarCima)} ${time};
  margin-top: 10px;
  &:hover{
    background: rgba(75, 120, 155, 0.2);
  }
`;

export const Check = styled.img`
  height: 18px;
  width: 18px;
  opacity: 0.5;
  &:hover{
    opacity: 1;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: white;
  animation: ${deslizarCima} ${time};
  gap: 10px;
  opacity: 0.5;
`;

export const P = styled.p`
  margin-top: 20px;
  font-family: "Saira Stencil One";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-decoration: underline;
  color: #ffffff;
  opacity: 0.5;
  animation: ${deslizarCima} ${time};
  &:hover{
    opacity: 1;
  }
`;

export const loading = (
  <ThreeDots
    height="80"
    width="80"
    radius="9"
    color="white"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClass=''
    visible={true}
  />
);
