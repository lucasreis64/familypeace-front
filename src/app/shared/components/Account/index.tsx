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
import { Loading } from '../Auth';
import { DashboardContext } from '../../contexts/DashboardContext';

export function PersonalInfo() {
  const { enrollment } = useEnrollment();
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
        <h1>PERSONAL INFORMATION</h1>
        <FormContainer onSubmit={handleSubmit}>
          <InputContainer>
            <h1>Name</h1>
            <Input
              placeholder="Your name"
              name="name"
              type="text"
              value={data?.name || ''}
              onChange={ e => { compareChanges(handleChange('name')(e)); } }
              disabled = {updateEnrollmentLoading}
            />
          </InputContainer>
          <InputContainer>
            <h1>Birthdate</h1>
            <Input
              placeholder="Your Birthdate"
              name="birthdate"
              type="date"
              value={formatDate(data.birthday)}
              onChange={ e => {  compareChanges(handleChange('birthday', (d) => d && formatDate(d))(e)); } }
              disabled = {updateEnrollmentLoading}
            />
          </InputContainer>
          <InputContainer>
            <h1>Phone</h1>
            <Input
              placeholder="Your Phone"
              name="phone"
              type="tel"
              value={data?.phone || ''}
              onChange={ e => { compareChanges(handleChange('phone', (d) => d && formatPhone(d))(e)); } }
              disabled = {updateEnrollmentLoading}
            />
          </InputContainer>
          <InputContainer>
            <h1>Profile Picture</h1>
            <Input
              placeholder="Picture url"
              name="profile picture"
              type="url"
              value={data?.profilePicture || ''}
              onChange={e => { compareChanges(handleChange('profilePicture')(e)); }}
              disabled = {updateEnrollmentLoading}
            />
          </InputContainer>
          <InputContainer>
            <div>
              <h1>Family</h1>
              <Input 
                value={data?.family || 'NOT FOUND'}
                disabled
              />
            </div>
          </InputContainer>
          <SubmitContainer>
            {updateEnrollmentLoading ?
              <Button pulse={pulse} type="submit" className='not-allowed'>
                <Loading/>
              </Button>:
              <Button pulse={pulse} type="submit" disabled = {!pulse || updateEnrollmentLoading} className = {pulse && !updateEnrollmentLoading ? '' : 'not-allowed'}>
                <h1>Save</h1>
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

interface ButtonProps {
  pulse: boolean;
}

export const Button = styled.button<ButtonProps>`
  font-family: "Roboto";
  font-weight: 700;
  width: 70%;
  height: 45px;
  animation: ${MoovingBackground} 5s ease infinite, ${({ pulse }) => pulse ? Pulse : 'none'} ${({ pulse }) => pulse ? '1000ms ease infinite' : ''};
  background-size: 300% 100%;
  background-image: ${LightGradientFour};
  border-radius: 16px;
  box-shadow: 7px 3px 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4.6px);
  -webkit-backdrop-filter: blur(4.6px);
  border: 0px solid rgba(252, 252, 252, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  h1{
    color: #ffffffc8;
    font-weight: 700;
  }
  cursor: inherit !important;
`;

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

export const InputContainer = styled.div`
  box-sizing: border-box;
  width: 250px;
  animation: ${MoovingBackground} 5s ease infinite;
  background-size: 300% 100%;
  background-image: ${GradientFour};
  border-radius: 16px;
  padding: 10px 10px;
  &:hover{
    background-image: ${GradientFour};
  }
  h1{
    font-size: 20px !important;
    color: #ffffff58;
    font-weight: 700;
    &:hover{
      background-image: ${LightGradientFour};
    }
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
  color: white;
  opacity: 0.5;
  font-size: 20px;
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
    h1{
      font-size: 25px;
      font-weight: 700;
    }
    width: 70%;
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
