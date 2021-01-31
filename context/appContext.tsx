// import { createContext, useContext } from 'react';

// const AppContext = createContext(null);

// export function AppWrapper({ children }) {
//   let sharedState = {
//     mode:
//   };

//   return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
// }

// export function useAppContext() {
//   return useContext(AppContext);
// }

import React, { createContext, useState } from 'react';

type Mode = 'dark' | 'light';

type ContextProps = {
  mode: Mode;
  toggle: () => void;
};

export const ModeContext = createContext<Partial<ContextProps>>({ mode: 'light' });

const ModeContextProvider = (props) => {
  const { children } = props;
  const [currentMode, setCurrentMode] = useState<Mode>('light');

  const toggle = (): void => {
    const newMode = currentMode === 'light' ? 'dark' : 'light';
    setCurrentMode(newMode);
  };

  return (
    <ModeContext.Provider value={{ mode: currentMode, toggle }}>{children}</ModeContext.Provider>
  );
};

export default ModeContextProvider;
