/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { Typography } from "@material-ui/core";
import { useTranslation } from 'react-i18next';
import './Works.css';

// Import ../../assets/recentprojects/
import BarberShop from '../../assets/recentprojects/barber-svg.svg';
import BarberPlanner from '../../assets/recentprojects/barber-planner-svg.svg';
import Ecris from '../../assets/recentprojects/ecris.svg';
import Amazon from '../../assets/recentprojects/amazon.svg';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Barber Shop', 
      description: `The website created for a barber.`,
      alter: t('Barber Shop'),
      image: `${BarberShop}`,
      url: 'https://barbershopraszkow.pl'
    },
    { 
      id: 2,
      title: 'Barber Planner', 
      description: `Barber Planner is a web application designed for easy and convenient appointment scheduling. After registering as a client, you gain access to the planner, where you can book appointments with your barber. The app allows you to choose services, book appointments up to 3 months in advance, cancel appointments, and access a list of your reserved slots. Additionally, the administrator account provides the capability to book appointments for clients who schedule by phone. Entering the client's phone number assigns the appointment to their account. The administrator can also add new services and manage the list of appointments in a simple and efficient manner.`,
      alter: t('Barber Planner'),
      image: `${BarberPlanner}`,
      url: 'https://barber-planer.web.app'
    },
    // { 
    //   id: 1,
    //   title: 'Hal 3D Configurator', 
    //   description: `The Hal 3D Configurator project is an advanced web application designed to provide users with an immersive experience of customizing virtual spaces. Built upon the powerful Three.js framework, it allows users to interactively design and personalize various aspects of halls.`,
    //   alter: t('Hal 3D Configurator'),
    //   image: `${Configurator}`,
    //   url: 'https://konfigurator-hal-sk-system.vercel.app'
    // },
    // { 
    //   id: 2,
    //   title: 'Good Morning Doctor', 
    //   description: `This application is used by pharmaceutical company representatives to schedule visits to doctors. It offers numerous functionalities, including setting vacations, determining the number of visits per day, specifying days without representatives, and, on the representatives' side, options such as notifying doctors via SMS upon the representative's arrival, adding selected doctors from the database, among others. The application also includes an admin panel, from which messages can be sent to doctors and representatives via the built-in mailbox within the application, as well as managing accounts.`,
    //   alter: 'Dzień Dobry Doktorze',
    //   image: `${DDD}`,
    //   url: 'https://aplikacja.dziendobrydoktorze.pl'
    // },
    // { 
    //   id: 3,
    //   title: 'Ecris', 
    //   description: `The application provides services related to information on criminal records in Europe. It allows access to information about crimes, court sentences, or other aspects related to the criminal history of individuals in various European countries.`,
    //   alter: 'Ecris',
    //   image: `${Ecris}`,
    //   url: 'https://ecris-beta.onrender.com/'
    // },
    // { 
    //   id: 4,
    //   title: 'Inbound appointment Slam Oschatz', 
    //   description: `A website portfolio project for the Startup Dev Team
    //   built using MEVN stack to demonstrate the CRUD capabilities of the tech stack.`,
    //   alter: 'Inbound appointment Slam Oschatz',
    //   image: `${Amazon}`,
    // },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => {
          return (<div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title" style={(project.title === 'Inbound appointment Slam Oschatz' || project.title === 'Spotkanie przychodzące Slam Oschatz' ? { marginLeft: '2rem' } : {})}>
                <TextDecrypt text={ project.id + '. ' + t(project.title) } />
              </h3>
              <p className="description">
                { t(project.description) }
              </p>
              {(project.title === 'Inbound appointment Slam Oschatz' ? '' :  <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end'}}><a style={{ textDecoration: 'none' }} href={project.url} target="_blank"><button className="submit-btn" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80px', height: '40px', margin: '10px' }}><Typography component='span'>Live</Typography></button></a></div>)}
            </div>
          </div>
        )})}
      </Container>
    </section>
  );
};
