import styled from 'styled-components';
import useEnrollment from '../../hooks/api/useEnrollment';
import useUpdateEnrollment from '../../hooks/api/useUpdateEnrollment';
import FormValidations from './FormValidations';
import { useForm } from '../../hooks/useForm';
import { toast } from 'react-toastify';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts';
import { GradientFour } from '../../constants';

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
        console.log('oi');
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
      </RightContainer>
    </Container>
  );
};

export const Container = styled.div`
  height: 100%;
  box-sizing: border-box;
  display: flex;
`;

export const RightContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 30px 30px;
    h1{
      font-size: 25px;
      font-weight: 700;
    }
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
