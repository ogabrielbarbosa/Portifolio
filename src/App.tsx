import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/projetos' element={<Projects toggleTheme={toggleTheme}/>}></Route>
          <Route path='/sobre' element={<About toggleTheme={toggleTheme}/>}></Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>

  );
}

export default App;
