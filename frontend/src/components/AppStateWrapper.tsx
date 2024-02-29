import React from 'react';
import useApplyTheme from '@/hooks/useApplyTheme';

const AppStateWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useApplyTheme();
  return <>
    {children}
  </>;
};

export default AppStateWrapper;
