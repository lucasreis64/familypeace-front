import styled from 'styled-components';
import useEnrollment from '../../hooks/api/useEnrollment';
import useUpdateEnrollment from '../../hooks/api/useUpdateEnrollment';
import FormValidations from './FormValidations';
import { useForm } from '../../hooks/useForm';
import { toast } from 'react-toastify';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts';
import { GradientFour, LightGradientFour } from '../../constants';
import { MoovingBackground } from '../../animations/animations';
import dayjs from 'dayjs';
import CustomParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(CustomParseFormat);

export function PersonalInfo() {
  const { enrollment, enrollmentLoading } = useEnrollment();
  const { updateEnrollmentLoading, updateEnrollment } = useUpdateEnrollment();
  const { contextUserData, userData, setUserData } = useContext(UserContext);

  const {
    handleSubmit,
    handleChange,
    data,
    errors,
    setData,
    customHandleChange,
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
        console.log(enrollment.birthday, dayjs(data.birthday).format('YYYY-MM-DD'));
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
        <FormContainer>
          <InputContainer>
            <h1>Name</h1>
            <Input
              placeholder="Your name"
              name="name"
              type="text"
              value={data?.name || ''}
              onChange={ e => handleChange('name')(e) }
            />
          </InputContainer>
          <InputContainer>
            <h1>Birthdate</h1>
            <Input
              placeholder="Your Birthdate"
              name="birthdate"
              type="date"
              value={dayjs(data.birthday).format('YYYY-MM-DD').toString()}
              onChange={ e => handleChange('birthday', (d) => d && dayjs(d).format('YYYY-MM-DD'))(e) }
            />
          </InputContainer>
          <InputContainer>
            <h1>Birthdate</h1>
            <Input
              placeholder="Your Phone"
              name="birthdate"
              type="date"
              value={dayjs(data.birthday).format('YYYY-MM-DD').toString()}
              onChange={ e => handleChange('birthday')(e) }
            />
          </InputContainer>
        </FormContainer>
      </RightContainer>
    </Container>
  );
};

export const Container = styled.div`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  gap: 30px;
`;

export const FormContainer = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
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
    color: #ffffff58;
    font-weight: 700;
    &:hover{
      background-image: ${LightGradientFour};
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
  font-size: 23px;
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
