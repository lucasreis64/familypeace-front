import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Check, Input, Label, loading, Logo, P } from '../../shared/components/Auth';
import { UserContext } from '../../shared/contexts';
import { useSignIn } from '../../shared/hooks/api/useSignIn';
import { AuthLayout } from '../../shared/layouts/Auth';
import checkEmpty from '../../assets/images/check-empty.png';
import checkMarked from '../../assets/images/check-marked.png';
import lotusFlower from '../../assets/images/lotusflower.png';
let timeMs: number;

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signInLoading, signIn } = useSignIn();
  const { setUserData, stayLoggedIn, setStayLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  timeMs = 400;
  
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const userData = await signIn(email, password);
      setUserData(userData);
      toast.success('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (err) {
      toast.error('Não foi possível fazer o login!');
    }
  };

  return (
    <AuthLayout>
      <Logo loading = { signInLoading }>
        <img src={lotusFlower} alt=""/>
        <h1>FamilyPeace</h1>
      </Logo>
      {!signInLoading ? (
        <>
          <form action="" onSubmit={submit}>
            <Input
              name="email"
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              name="password"
              type="password"
              placeholder="senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button loading= { signInLoading } >Entrar</Button>
            <Label>
              Permanecer conectado?
              <Check
                src={stayLoggedIn ? checkMarked : checkEmpty}
                onClick={() => setStayLoggedIn(!stayLoggedIn)}
              />
            </Label>
          </form>
          <Link to="/sign-up">
            <P>New user? Sign-up!</P>
          </Link>
        </>
      ) : (
        <>
          <form action="" onSubmit={submit}>
            <Input
              name="email"
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled
            />
            <Input
              name="password"
              type="password"
              placeholder="senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled
            />
            <Button loading={signInLoading} disabled>{loading}</Button>
            <Label>
              Permanecer conectado?
              <Check
                src={stayLoggedIn ? checkMarked : checkEmpty}
              />
            </Label>
          </form>
          <Link to="/sign-up">
            <P>Primeira vez? Cadastre-se!</P>
          </Link>
        </>
      )}
    </AuthLayout>
  );
};

export function time() {
  timeMs += 50;
  return timeMs + 'ms';
}
