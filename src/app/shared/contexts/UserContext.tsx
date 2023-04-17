import { createContext } from 'react';
import React from 'react';
import { useLocalStorage } from '../hooks';

interface UserContextData {
  userData: string;
  setUserData: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserContextData>({} as UserContextData);

interface UserProps {
  children: React.ReactNode
}

export const UserProvider: React.FC<UserProps> = ({ children }) => {
  const [userData, setUserData] = useLocalStorage('userData', {});
  
  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
