import React, { lazy, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import { Home } from "../pages/Home";

// const Resume = lazy(() => import("../pages/Resume"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

export const App = () => {
    const { i18n } = useTranslation();
    logCredits();

    useEffect(() => {
      i18next.changeLanguage('pl');
    }, [])

    useEffect(() => {
      const nav = document.querySelector('nav');
      if(nav){
        if(i18n.language === 'pl'){
          if(window.screen.height <= 768){
            nav.style.top = '4%';
          }else{
            nav.style.top = '15%';
          }
          nav.style.left = '-11.1rem';
        }else{
          nav.style.top = '15%';
          nav.style.left = '-8.5rem';
        }
      }
    }, [i18n.language])

    window.addEventListener('resize', function() {
      // Tutaj umieść kod do wykonania po zmianie rozmiaru okna
      const nav = document.querySelector('nav');
      if(nav){
        if(i18n.language === 'pl'){
          if(window.screen.height <= 768){
            nav.style.top = '4%';
          }else{
            nav.style.top = '15%';
          }
          nav.style.left = '-11.1rem';
        }else{
          nav.style.top = '15%';
          nav.style.left = '-8.5rem';
        }
      }
    });

    return (
      <ThemeProvider>
        <CssBaseline />
        <Router>
          <HelmetMeta />
          <Switch>
              <Route path="/" exact component={Home} />
              {/* <Route path="/resume" component={Resume} /> */}
              <Route path="*" component={PageNotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
};
