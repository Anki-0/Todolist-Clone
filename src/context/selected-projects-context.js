import { createContext, useContext, useState } from 'react';

export const selectedProjectsContext = createContext();

export const SelectedProjectProvider = ({ children }) => {
  const { selectedProjects, setSelectedProjects } = useState('INBOX');

  return (
    <selectedProjectsContext.Provider
      value={{ selectedProjects, setSelectedProjects }}
    >
      {children}
    </selectedProjectsContext.Provider>
  );
};

export const useSelectedProjectValue = () =>
  useContext(selectedProjectsContext);
