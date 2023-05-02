import { useContext } from 'react';
import { PersonalInfo } from '../../../shared/components/Account';
import { DashboardContext } from '../../../shared/contexts/DashboardContext';

export function Account() {
  const { updatePage } = useContext(DashboardContext);
  return (
    <PersonalInfo key = {updatePage.toString()} />
  );
};

