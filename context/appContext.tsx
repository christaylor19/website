import React, { createContext, useState } from 'react';

type Mode = 'dark' | 'light';

type ContextProps = {
  mode: Mode;
  toggle: () => void;
};

export const ModeContext = createContext<Partial<ContextProps>>({ mode: 'light' });

const ModeContextProvider = (props) => {
  const { children } = props;
  const [currentMode, setCurrentMode] = useState<Mode>('dark');

  const toggle = (): void => {
    const newMode = currentMode === 'light' ? 'dark' : 'light';
    setCurrentMode(newMode);
  };

  return (
    <ModeContext.Provider value={{ mode: currentMode, toggle }}>{children}</ModeContext.Provider>
  );
};

export default ModeContextProvider;
