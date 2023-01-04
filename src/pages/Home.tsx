import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from '../utils/usePersistedState';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import GlobalStyle from '../styles/global';
import Header from '../components/Header';
import Principal from '../components/Principal';
import Waves from '../components/Waves';
import Skills from '../components/Skills';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

function Home() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme}/>
        <Principal toggleTheme={toggleTheme}/>
        <Waves toggleTheme={toggleTheme}/>
        <Skills toggleTheme={toggleTheme}/>
        <About toggleTheme={toggleTheme}/>
        <Projects toggleTheme={toggleTheme}/>
        <Contact toggleTheme={toggleTheme}/>
      </div>
    </ThemeProvider>
  );
}

export default Home;
