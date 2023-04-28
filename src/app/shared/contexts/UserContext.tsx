import { createContext, useState } from 'react';
import React from 'react';
import { useLocalStorage } from '../hooks';
import { userDataParams } from '../../../protocols';

interface UserContextData {
  userData: userDataParams;
  setUserData: React.Dispatch<React.SetStateAction<userDataParams>>;
  contextUserData: userDataParams;
  setContextUserData: React.Dispatch<React.SetStateAction<userDataParams>>;
}

export const UserContext = createContext<UserContextData>({} as UserContextData);

interface UserProps {
  children: React.ReactNode
}

export const UserProvider: React.FC<UserProps> = ({ children }) => {
  const [userData, setUserData] = useLocalStorage('userData', {});
  const [contextUserData, setContextUserData] = useState(userData);
  
  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        contextUserData,
        setContextUserData
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
