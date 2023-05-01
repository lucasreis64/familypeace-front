import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useSignUp from '../../shared/hooks/api/useSignUp';
import lotusFlower from '../../assets/images/lotusflower-spaced.png';
import { Button, Input, Loading, LogoComplete, LotusFlower, P } from '../../shared/components/Auth';
import { AuthLayout } from '../../shared/layouts/Auth';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signUpLoading, signUp } = useSignUp();
  const [ dropAnimation, setDropAnimation ] = useState(false);
  const navigate = useNavigate();

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast('As senhas devem ser iguais!');
    } else {
      try {
        await signUp(email, password, name);
        toast('Inscrito com sucesso! Por favor, faça login.');
        navigate('/sign-in');
      } catch (error) {
        toast('Não foi possível fazer o cadastro!');
      }
    }
  }

  async function goToSignIn() {
    setDropAnimation(true);
    setTimeout(() => {
      setDropAnimation(false);
      navigate('/sign-in');
    }, 990);
  }

  return (
    <AuthLayout dropAnimation = {dropAnimation}>
      <LogoComplete className = 'logo' loading = { signUpLoading.toString() }>
        <LotusFlower className='lotus'/>
        <h1>FamilyPeace</h1>
      </LogoComplete>
      <form action="" onSubmit={submit}>
        <Input
          name="name"
          type="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled = {signUpLoading}
        />
        <Input
          name="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled = {signUpLoading}
        />
        <Input
          name="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled = {signUpLoading}
        />
        <Input
          name="password"
          type="password"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          disabled = {signUpLoading}
        />
        <Button disabled = {signUpLoading}>{signUpLoading? <Loading/> : <h1>Sign-up</h1>}</Button>
      </form>
      <P onClick={signUpLoading ? () => 10 : goToSignIn}>Already signed-up? Sign-in!</P>
    </AuthLayout>
  );
}

