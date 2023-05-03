import styled from 'styled-components';
import useEnrollment from '../../hooks/api/useEnrollment';
import useUpdateEnrollment from '../../hooks/api/useUpdateEnrollment';
import FormValidations from './FormValidations';
import { useForm } from '../../hooks/useForm';
import { toast } from 'react-toastify';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts';
import { GradientFour, LightGradientFour } from '../../constants';
import { MoovingBackground, Opacity, Pulse } from '../../animations/animations';
import { formatDate } from '../../../../helpers/dateFormatter';
import { formatPhone } from '../../../../helpers/phoneFormatter';
import { exclude } from '../../../../helpers/excludeKey';
import { isObjectEqual } from '../../../../helpers/objectComparator';
import { UpdateEnrollmentParams } from '../../../../protocols';
import { DashboardContext } from '../../contexts/DashboardContext';
import { ThreeDots } from 'react-loader-spinner';
import { Loading } from '../Auth';

export function PersonalInfo() {
  const { enrollment, enrollmentLoading } = useEnrollment();
  const { updateEnrollmentLoading, updateEnrollment } = useUpdateEnrollment();
  const { contextUserData, userData, setUserData } = useContext(UserContext);
  const { setUpdatePage, updatePage } = useContext(DashboardContext);
  const [ pulse, setPulse ] = useState(false);

  const {
    handleSubmit,
    handleChange,
    data,
    errors,
    setData,
  } = useForm({
    validations: FormValidations,

    onSubmit: async(data) => {
      const newData = {
        name: data.name,
        birthday: data.birthday,
        profilePicture: data.profilePicture,
        phone: data.phone.replace(/[^0-9]+/g, '').replace(/^(\d{2})(9?\d{4})(\d{4})$/, '($1) $2-$3'),
      };

      try {
        await updateEnrollment(newData);
        setUpdatePage(!updatePage);
        toast.success('Informações salvas com sucesso!');
      } catch (err) {
        toast.error('Não foi possível salvar suas informações!');
      }
    },

    initialValues: {
      name: '',
      birthday: '',
      phone: '',
      profilePicture: '',
    },
  });

  useEffect(() => {
    if (enrollment) {
      setData({
        name: enrollment.name,
        birthday: enrollment.birthday,
        phone: enrollment.phone,
        profilePicture: enrollment.profilePicture,
      });
      if (Object.keys(userData).length > 0) {
        setUserData({
          token: userData.token,
          user: {
            name: enrollment.name,
            id: userData.user.id,
            email: userData.user.email,
            profilePicture: enrollment.profilePicture,
          }
        });
      }
    }
  }, [enrollment]);

  function compareChanges( handleChange: UpdateEnrollmentParams) {
    if((isObjectEqual(exclude(enrollment, 'id', 'family'), handleChange)))
      return setPulse(false);
    setPulse(true);
  }

  return (
    <Container>
      <LeftContainer>
        <RoundFrame className = 'gradientDiv'><img src={enrollment?.profilePicture || (contextUserData?.user.profilePicture)} alt="profilePicture" /></RoundFrame>
        <h1>{enrollment?.name || contextUserData?.user.name}</h1>
        <h2>{contextUserData?.user.email}</h2>
      </LeftContainer>
      <Line className = 'gradientDiv'/>
      <RightContainer>
        <Title>PERSONAL INFORMATION</Title>
        <FormContainer onSubmit={handleSubmit}>
          <InputContainer load = {enrollmentLoading}>
            <h1>Name</h1>
            <Input
              placeholder="Your name"
              name="name"
              type="text"
              value={data?.name || ''}
              onChange={ e => { compareChanges(handleChange('name')(e)); } }
              disabled = {updateEnrollmentLoading}
            />
            {enrollmentLoading ? <LoadingInput/> : ''}
            {errors.name && <Error>{errors.name}</Error>}
          </InputContainer>
          <InputContainer  load = {enrollmentLoading}>
            <h1>Birthdate</h1>
            <Input
              placeholder="Your Birthdate"
              name="birthdate"
              type="date"
              value={formatDate(data.birthday)}
              onChange={ e => {  compareChanges(handleChange('birthday', (d) => d && formatDate(d))(e)); } }
              disabled = {updateEnrollmentLoading}
            />
            {enrollmentLoading ? <LoadingInput/> : ''}
            {errors.birthday && <Error>{errors.birthday}</Error>}
          </InputContainer>
          <InputContainer  load = {enrollmentLoading}>
            <h1>Phone</h1>
            <Input
              placeholder="Your Phone"
              name="phone"
              type="tel"
              value={data?.phone || ''}
              onChange={ e => { compareChanges(handleChange('phone', (d) => d && formatPhone(d))(e)); } }
              disabled = {updateEnrollmentLoading}
            />
            {enrollmentLoading ? <LoadingInput/> : ''}
            {errors.phone && <Error>{errors.phone}</Error>}
          </InputContainer>
          <InputContainer  load = {enrollmentLoading}>
            <h1>Profile Picture</h1>
            <Input
              placeholder="Picture url"
              name="profile picture"
              type="url"
              value={data?.profilePicture || ''}
              onChange={e => { compareChanges(handleChange('profilePicture')(e)); }}
              disabled = {updateEnrollmentLoading}
            />
            {enrollmentLoading ? <LoadingInput/> : ''}
            {errors.profilePicture && <Error>{errors.profilePicture}</Error>}
          </InputContainer>
          <InputContainer  load = {enrollmentLoading}>
            <div>
              <h1>Family</h1>
              <Input 
                value={enrollment?.family.toUpperCase() || 'NOT FOUND'}
                disabled
              />
            </div>
            {enrollmentLoading ? <LoadingInput/> : ''}
          </InputContainer>
          <SubmitContainer>
            {updateEnrollmentLoading ?
              <Button pulse={pulse} type="submit" className='not-allowed'>
                <Loading/>
              </Button>:
              <Button
                pulse={pulse} 
                type="submit" 
                disabled = {!pulse || updateEnrollmentLoading} 
                className = {pulse && !updateEnrollmentLoading ? '' : 'not-allowed'}
              >
                <h1>Save Info</h1>
              </Button>
            }
          </SubmitContainer>
        </FormContainer>
      </RightContainer>
    </Container>
  );
};

export const SubmitContainer = styled.div`
  width: 250px;
  display: flex;
  justify-content: center;
  .not-allowed{
    cursor: not-allowed !important;
  }
  cursor: pointer;
`;

const Error = styled.p`
  font-size: 15px;
  color: #ffffffb5;
  font-family: 'Roboto';
  font-weight: 700;
  font-style: italic;
  text-decoration: underline;
`;

interface ButtonProps {
  pulse: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: 70%;
  height: 45px;
  animation: ${MoovingBackground} 5s ease infinite, ${({ pulse }) => pulse ? Pulse : 'none'} ${({ pulse }) => pulse ? '1000ms ease infinite' : ''};
  background-size: 300% 100%;
  background-image: ${LightGradientFour};
  border-radius: 16px;
  box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4.6px);
  -webkit-backdrop-filter: blur(4.6px);
  border: 0px solid rgba(252, 252, 252, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  h1{
    font-family: "Roboto";
    font-weight: 700;
    color: #ffffff58;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.6));
  }
  cursor: inherit !important;
  &:hover{
    background-image: ${GradientFour};
    transition: 200ms;
    width: 72%;
    height: 48px;
    h1{
      
    }
  }
`;

export const LoadingInput = () => (
  <ThreeDots
    height="50"
    width="50"
    radius="9"
    color="white"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClass='loading'
    visible={true}
  />
);

export const Container = styled.div`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  gap: 10px;
  overflow: hidden;
  animation: ${Opacity} 1000ms ease 1;
`;

export const FormContainer = styled.form`
  display: flex;
  gap: 30px;
  width: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

interface InputContainerProps {
  load: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  box-sizing: border-box;
  height: 100px;
  width: 250px;
  animation: ${MoovingBackground} 5s ease infinite;
  background-size: 300% 100%;
  background-image: ${GradientFour};
  border-radius: 16px;
  padding: 10px 10px;
  box-shadow: 7px 3px 15px rgba(0, 0, 0, 0.3);
  &:hover{
    background-image: ${LightGradientFour};
    transition: 200ms;
  }
  h1{
    font-size: 20px !important;
    color: #ffffff58;
    font-weight: 700;
    &:hover{
      background-image: ${LightGradientFour};
    }
  }
  input{
    ${ ({ load }) => load ? 'display: none' : ''}
  }
  .loading{
    margin-top: 20px;
  }
  div{
    input{
      cursor: not-allowed;
    }
  }
`;

export const Input = styled.input`
  width: 90%;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid white;
  font-family: 'Roboto';
  font-weight: 700;
  border-radius: 16px;
  color: white;
  opacity: 0.5;
  font-size: 17px;
  box-shadow: 0px 20px 15px rgba(0, 0, 0, 0.4);
  padding-left: 10px;
  &::placeholder {
    font-family: 'Roboto';
    font-weight: 700;
    color: white;
    opacity: 0.5;
  }
`;

export const RightContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 30px 30px;
    gap: 30px;
    width: 70%;
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: 700;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.6));
`;

export const LeftContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 30%;
  h1{
    margin-top: 10px;
    font-size: 25px;
  }
  h2{
    height: 21px;
    margin-top: 5px;
    font-size: 20px;
    opacity: 0.7;
  }
`;

export const RoundFrame = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 158px;
    width: 158px;
    border-radius: 50%;
    margin-top: 100px;
    img{
    height: 150px;
    width: 150px;
    border-radius: 50%;
  }
`;

export const Line = styled.div`
    margin-top: 30px;
    width: 1px;
    height: 70%;
`;
