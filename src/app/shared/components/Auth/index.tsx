import styled from 'styled-components';
import { MoovingBackground, tremerZoom, ZoomInDownAnimation, ZoomInLeftAnimation, ZoomOutDownAnimation } from '../../animations/animations';
import { ThreeDots } from 'react-loader-spinner';
import Container from '../Container';
import { time } from '../../../pages/Sign-in';
import { GradientFour, LightGradientFour } from '../../constants';
import familypeace from '../../../assets/images/lotusflower-spaced.png';
import checkMarked from '../../../assets/images/check-marked.png';
import checkEmpty from '../../../assets/images/check-empty.png';

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  box-sizing: border-box;
  animation: ${ props =>  props.dropAnimation ? ZoomOutDownAnimation : ZoomInDownAnimation } ${ props =>  props.dropAnimation ? '1000ms' : '1000ms' };
  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  box-shadow: 10px 20px 30px rgba(0, 0, 0, 0.5);
  form{
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
    gap: 10px;
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

export const LogoComplete = styled.div<DivProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    font-family: "Saira Stencil One";
    margin-bottom: 25px;
    font-weight: 400;
    font-size: 32px;
    filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.9));
    opacity: 0.7px;
    height: 33px;
    &:hover{
      cursor: default;
    }
  }
  animation: ${(props) => (props.loading === 'true' ? tremerZoom : 'none')} ${time}, ${ZoomInLeftAnimation} ${'1000ms'} 1 ${'200ms'};
  margin-bottom: 30px;
  &:hover{
    opacity: 1;
    .lotus, h1{
      background-image: ${GradientFour};
    }
  }
`;

export const LotusFlower = styled.div`
  height: 30px;
  width: 90px;
  margin-bottom: -14px;
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.6));
  animation: ${MoovingBackground} 5s ease infinite;
  background-size: 300% 100%;
  background-image: ${LightGradientFour};
  -webkit-mask-image: url(${familypeace});
  mask-image: url(${familypeace});
  mask-repeat: no-repeat;
  mask-position: center center;
  mask-size: cover;

`;

export const Input = styled.input`
  padding-left: 8px;
  height: 45px;
  box-sizing: border-box;
  outline: none;
  animation: ${MoovingBackground} 5s ease infinite;
  background-size: 300% 100%;
  background-image: ${LightGradientFour};
  border-radius: 16px;
  box-shadow: 7px 3px 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4.6px);
  -webkit-backdrop-filter: blur(4.6px);
  border: 0px solid #cadbe9;
  color: rgba(252, 253, 253, 0.7);
  &::placeholder {
        font-family: 'Roboto';
        font-weight: 300;
        font-size: 20px;
        opacity: 0.7;
        color: #07020f;
  }
  &:hover{
    &::placeholder {
        opacity: 1;
  }
  }
`;

export const Button = styled.button`
  font-family: "Roboto";
  font-weight: 700;
  width: 100%;
  height: 45px;
  animation: ${MoovingBackground} 5s ease infinite;
  background-size: 300% 100%;
  background-image: ${GradientFour};
  border-radius: 16px;
  box-shadow: 7px 3px 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4.6px);
  -webkit-backdrop-filter: blur(4.6px);
  border: 0px solid rgba(252, 252, 252, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  &:hover{
    h1{
      background-image: ${LightGradientFour};
    }
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const CheckMarked = styled.div`
  height: 18px;
  width: 18px;
  opacity: 1;
  animation: ${MoovingBackground} 5s ease infinite;
  background-size: 300% 100%;
  background-image: ${LightGradientFour};
  mask-repeat: no-repeat;
  mask-position: center center;
  mask-size: cover;
  -webkit-mask-image: url(${checkMarked});
  mask-image: url(${checkMarked});
  &:hover{
      background-image: ${GradientFour};
      cursor: pointer;
  }
`;

export const CheckEmpty = styled.div`
  height: 18px;
  width: 18px;
  opacity: 1;
  animation: ${MoovingBackground} 5s ease infinite;
  background-size: 300% 100%;
  background-image: ${LightGradientFour};
  mask-repeat: no-repeat;
  mask-position: center center;
  mask-size: cover;
  -webkit-mask-image: url(${checkEmpty});
  mask-image: url(${checkEmpty});
  &:hover{
      background-image: ${GradientFour};
      cursor: pointer;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  gap: 10px;
  p{
    height: 19px;
    font-weight: 300;
  }
  &:hover{
    p, div{
      background-image: ${GradientFour};
    }
  }
  filter: drop-shadow(5px 5px 7px rgba(0, 0, 0, 0.9));
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const P = styled.p`
  margin-top: 20px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  height: 21px;
  font-size: 20px;
  filter: drop-shadow(5px 5px 8px rgba(0, 0, 0, 1));
  &:hover{
    opacity: 1;
    cursor: pointer;
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
