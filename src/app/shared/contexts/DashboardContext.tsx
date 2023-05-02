import { createContext, useState } from 'react';
import React from 'react';

interface DashboardContextData {
  routeName: string;
  setRouteName: React.Dispatch<React.SetStateAction<string>>;
  updatePage: boolean;
  setUpdatePage: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DashboardContext = createContext<DashboardContextData>({} as DashboardContextData);

interface UserProps {
  children: React.ReactNode
}

export const DashboardProvider: React.FC<UserProps> = ({ children }) => {
  const [routeName, setRouteName] = useState('');
  const [updatePage, setUpdatePage] = useState(false);
  
  return (
    <DashboardContext.Provider
      value={{
        routeName,
        setRouteName,
        updatePage,
        setUpdatePage
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
