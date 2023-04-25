import { createContext, useState } from 'react';
import React from 'react';
import { useLocalStorage } from '../hooks';

interface UserContextData {
  userData: string;
  setUserData: React.Dispatch<React.SetStateAction<string>>;
  stayLoggedIn: boolean;
  setStayLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<UserContextData>({} as UserContextData);

interface UserProps {
  children: React.ReactNode
}

export const UserProvider: React.FC<UserProps> = ({ children }) => {
  const [userData, setUserData] = useLocalStorage('userData', {});
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  
  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        stayLoggedIn,
        setStayLoggedIn
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
