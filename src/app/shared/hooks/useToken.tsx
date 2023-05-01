import { useContext } from 'react';

import { UserContext } from '../contexts/UserContext';

export default function useToken() {
  const { userData: user, contextUserData: contextUser } = useContext(UserContext);

  if(Object.keys(user).length === 0) {
    return contextUser.token;
  }

  return user.token;
}
