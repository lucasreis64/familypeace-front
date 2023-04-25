import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useSignUp from '../../shared/hooks/api/useSignUp';
import lotusFlower from '../../assets/images/lotusflower-spaced.png';
import { Button, Input, Loading, Logo, P } from '../../shared/components/Auth';
import { AuthLayout } from '../../shared/layouts/Auth';
import { Link } from 'react-router-dom';
import { restartTime } from '../Sign-in';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signUpLoading, signUp } = useSignUp();
  const navigate = useNavigate();

  useEffect(() => restartTime(), []);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast('As senhas devem ser iguais!');
    } else {
      try {
        await signUp(email, password);
        toast('Inscrito com sucesso! Por favor, faça login.');
        navigate('/sign-in');
      } catch (error) {
        toast('Não foi possível fazer o cadastro!');
      }
    }
  }

  return (
    <AuthLayout>
      <Logo className = 'logo' loading = { signUpLoading }>
        <img src={lotusFlower} alt=""/>
        <h1>FamilyPeace</h1>
      </Logo>
      {!signUpLoading ? (
        <>
          <form action="" onSubmit={submit}>
            <Input
              name="name"
              type="name"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
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
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Input
              name="password"
              type="password"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <Button loading= { signUpLoading } >Sign-up</Button>
          </form>
          <Link to="/sign-in">
            <P>Already signed-up? Sign-in!</P>
          </Link>
        </>
      ) : (
        <>
          <form action="" onSubmit={submit}>
            <Input
              name="name"
              type="name"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled
            />
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
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled
            />
            <Input
              name="password"
              type="password"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled
            />
            <Button loading={signUpLoading} disabled><Loading /></Button>
          </form>
          <Link to="/sign-in">
            <P>Already signed-up? Sign-in!</P>
          </Link>
        </>
      )}
    </AuthLayout>
  );
}

