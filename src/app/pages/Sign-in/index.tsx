import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, CheckEmpty, CheckMarked, Input, Label, Loading, LogoComplete, LotusFlower, P } from '../../shared/components/Auth';
import { UserContext } from '../../shared/contexts';
import { useSignIn } from '../../shared/hooks/api/useSignIn';
import { AuthLayout } from '../../shared/layouts/Auth';
export let timeMs: number;

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signInLoading, signIn } = useSignIn();
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const { setUserData, setContextUserData } = useContext(UserContext);
  const [ dropAnimation, setDropAnimation ] = useState(false);
  const navigate = useNavigate();
  timeMs = 900;
  
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const userData = await signIn(email, password);
      setContextUserData(userData);
      if(stayLoggedIn)
        setUserData(userData);
      toast.success('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (err) {
      toast.error('Não foi possível fazer o login!');
    }
  };

  async function goToSignUp() {
    timeMs = 900;
    setDropAnimation(true);
    setTimeout(() => {
      setDropAnimation(false);
      navigate('/sign-up');
    }, 990);
  }

  return (
    <AuthLayout dropAnimation = {dropAnimation}>
      <LogoComplete loading = { signInLoading.toString() }>
        <LotusFlower className='lotus'/>
        <h1>FamilyPeace</h1>
      </LogoComplete>
      <form action="" onSubmit={submit}>
        <Input
          name="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled = {signInLoading}
        />
        <Input
          name="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled = {signInLoading}
        />
        <Button disabled = {signInLoading}>{signInLoading? <Loading /> : <h1>Sign-in</h1>}</Button>
        <Label>
          <p>Keep Me Logged In!</p>
          { stayLoggedIn ? 
            <CheckMarked onClick={signInLoading? () => 10 : () => setStayLoggedIn(!stayLoggedIn)}/>
            : 
            <CheckEmpty onClick={signInLoading? () => 10 : () => setStayLoggedIn(!stayLoggedIn)}/> 
          }
        </Label>
      </form>
      <P onClick={signInLoading ? () => 10 : goToSignUp}>New user? Sign-up!</P>
    </AuthLayout>
  );
};

export function time() {
  if(!timeMs) 
    timeMs=400;
  timeMs += 50;
  return timeMs + 'ms';
}
