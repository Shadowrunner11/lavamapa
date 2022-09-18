import { createContext, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useToggleColor } from './hooks';
import Main from './pages/main';

export const ThemeCustomContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleColor: () => {}
});


function App () {
  const [ mode, toggleColor ] = useToggleColor();

  const colorMode = useMemo(() => ({
    toggleColor
  }),[]);

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode,
      }
    })
  ,[mode]);

  return (
    <ThemeCustomContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </ThemeCustomContext.Provider>
  );
}

export default App;
