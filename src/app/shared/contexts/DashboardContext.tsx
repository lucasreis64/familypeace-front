import { createContext, useState } from 'react';
import React from 'react';

interface DashboardContextData {
  routeName: string;
  setRouteName: React.Dispatch<React.SetStateAction<string>>;
}

export const DashboardContext = createContext<DashboardContextData>({} as DashboardContextData);

interface UserProps {
  children: React.ReactNode
}

export const DashboardProvider: React.FC<UserProps> = ({ children }) => {
  const [routeName, setRouteName] = useState('');
  
  return (
    <DashboardContext.Provider
      value={{
        routeName,
        setRouteName
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
