/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";
import Tilt from 'react-parallax-tilt';
import { useTranslation } from 'react-i18next';

import './About.css';

import profile from '../../assets/profile.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const greetings = "Hello there!";

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <Tilt>
            <div className="_img"
              style={{ 
                background: "url(" + profile + ")",
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
            </div>
          </Tilt>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${t(greetings)}`} />
            </Typography>
            <p className="aboutme">
                  {t(`My name is Krystian Owczarek, and I am a programmer. I am always ready for new and challenging tasks. I specialize in creating beautifully formatted websites and applications. My projects mainly involve the development of websites, web applications, and mobile applications. I am here to help you realize your technological visions.`)}
            </p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> {t('Send me a message.')}</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
