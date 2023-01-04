import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from '../utils/usePersistedState';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import GlobalStyle from '../styles/global';
import Header from '../components/Header';
import Principal from '../components/PrincipalAbout';
import Contact from '../components/Contact';
import Certificates from '../components/Certificates';

interface Props {
    toggleTheme(): void;
}

const About: React.FC<Props> = () => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

    const toggleTheme = () => {
      setTheme(theme.title === 'light' ? dark : light)
    }

    window.scrollTo(0, 0);
  
    return (
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyle />
          <Header toggleTheme={toggleTheme}/>
          <Principal toggleTheme={toggleTheme}/>
          <Certificates toggleTheme={toggleTheme}/>
          <Contact toggleTheme={toggleTheme}/>
        </div>
      </ThemeProvider>
    );
}

export default About;