import styled from 'styled-components';
import { deslizarCima, tremerZoom, ZoomInLeftAnimation } from '../../animations/animations';
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
  box-shadow: 10px 20px 30px rgba(0, 0, 0, 0.5);
  width: 400px;
  height: 520px;
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
  @media (max-width: 600px) {
    height: 100vh !important;
    width: 90vw !important;
    padding: 15px;
  }
`;

interface DivProps {
  loading: string;
};

export const Logo = styled.div<DivProps>`
  h1{
    font-family: "Saira Stencil One";
    margin-bottom: 25px;
    font-weight: 400;
    font-size: 32px;
    color: #ffffff;
    filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.9));
    opacity: 0.7px;
  }
  img{
    height: 50px;
    margin-bottom: -25px;
    filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.6));
  }
  animation: ${(props) => (props.loading === 'true' ? tremerZoom : 'none')} ${time}, ${ZoomInLeftAnimation} ${'1000ms'} 1 ${'none'};
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
  background: rgba(75, 120, 155, 0.3);
  border-radius: 16px;
  box-shadow: 7px 3px 15px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4.6px);
  -webkit-backdrop-filter: blur(4.6px);
  border: 0px solid #cadbe9;
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
  background: rgba(75, 120, 155, 0.0);
  border-radius: 16px;
  box-shadow: 7px 3px 15px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4.6px);
  -webkit-backdrop-filter: blur(4.6px);
  border: 1px solid rgba(252, 252, 252, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${(props) => (props.loading === 'true' ? 'none' : deslizarCima)} ${time};
  margin-top: 10px;
  &:hover{
    background: rgba(75, 120, 155, 0.4);
  }
`;

export const Check = styled.img`
  height: 16px;
  width: 16px;
  opacity: 1;
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
  filter: drop-shadow(5px 5px 7px rgba(0, 0, 0, 0.9));
  @media (max-width: 600px) {
    font-size: 16px;
  }
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
  filter: drop-shadow(5px 5px 8px rgba(0, 0, 0, 1));
  &:hover{
    opacity: 1;
  }
  @media (max-width: 600px) {
    font-size: 17px;
  }
`;

export const Loading = () => (
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
