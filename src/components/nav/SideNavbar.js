/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Typography } from "@material-ui/core";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import "./SideNavbar.css";

export const SideNavbar = () => {
  const [activeNav, setActiveNav] = useState('#');
  const {t} = useTranslation();

  return (
    <nav style={{ zIndex: '100' }}>
      <a href="#" 
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <Typography>
          {t('Home')}
        </Typography>
      </a>
      <a href="#works"
        onClick={() => setActiveNav('#works')}
        className={activeNav === '#works' ? 'active' : ''}
      >
        <Typography>
        {t('Projects')}
        </Typography>
      </a>
      <a href="#about" 
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <Typography>
        {t('About')}
        </Typography>
      </a>
      <a href="#skills" 
        onClick={() => setActiveNav('#skills')}
        className={activeNav === '#skills' ? 'active' : ''}
      >
        <Typography>
        {t('Skills')}
        </Typography>
      </a>
      <a href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <Typography>
        {t('Contact')}
        </Typography>
      </a>
    </nav>
  );
};