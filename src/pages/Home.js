import React, { useEffect } from 'react';
import { LogoLink } from '../components/logo/LogoLink';
import { Content } from '../components/content/Content';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { LanguageToggle } from '../components/language/LanguageToggle';
import { Resume } from '../components/resume/Resume';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import { SideNavbar } from '../components/nav/SideNavbar';
import { Works } from '../components/works/Works';
import { About } from '../components/about/About';
import { Contact } from '../components/contact/Contact';
import Skillset from '../components/about/Skillset';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

export const Home = () => {
  const { i18n } = useTranslation();

  const classes = useStyles();

  const toggleLanguage = () => {
    i18next.changeLanguage(i18n.language === 'pl' ? 'en' : 'pl');
  }

  return (
    <>
      <div className={classes.root} id="home">
        <DisplacementSphere />
        {/* <LogoLink /> */}
        <Content />
        <LanguageToggle toggleLanguage={toggleLanguage} />
        <ThemeToggle />
        <Hidden smDown>
          <SocialIcons />
        </Hidden>
        <Hidden mdUp>
          <SpeedDials />
        </Hidden>
        <Resume />
      </div>
      <SideNavbar />
      <Works />
      <About />
      <Skillset />
      <Contact />
    </>
  );
};
