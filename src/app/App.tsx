import { UserProvider } from './shared/contexts';
import { Routes } from './routes';
import GlobalStyle from './shared/components/GlobalStyles';

export const App = () => {
  return (
    <UserProvider>
      <GlobalStyle />
      <Routes />
    </UserProvider>
  );
};

