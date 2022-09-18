import { useState } from 'react';

export const useToggleColor = () : ['light' | 'dark', ()=> void] => {
  const [ mode, setMode ] = useState<'light' | 'dark'>('dark');

  const toggleColor = () => {
    setMode(prev => prev === 'light'? 'dark': 'light');
  };

  return [ mode, toggleColor ];
};