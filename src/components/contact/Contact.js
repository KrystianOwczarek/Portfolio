/* eslint-disable no-unused-vars */
import React from "react";
import { useRef } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

import emailjs from '@emailjs/browser';

import './Contact.css';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "3em",
  },
  form: {
    width: '100%',
  },
  formfield: {
    width: '100%',
    marginBottom: '2rem',
  },
}));



export const Contact = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const greetings = "Say hello.";

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    const name = document.querySelector('input#outlined-name-input')
    const email = document.querySelector('input#outlined-password-input')
    const message = document.querySelector('textarea[name="message"]')
    if(name.value !== '' && email.value !== '' && message.value !== ''){
      emailjs.sendForm('service_gpnyjmu', 'template_vurr4ao', form.current, 'aIUXDF1E27inXVykg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Sent successfully!',
      showConfirmButton: false,
      timer: 1500
    })
    e.target.reset()
    }else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Please complete all fields!',
        showConfirmButton: false,
        timer: 1500
      })
    }
  };



    return (
      <section id="contact">
        <Container component="main" className={classes.main} maxWidth="md">
          <div className="contact">
            <div className="_form_wrapper">
              <form ref={form} onSubmit={sendEmail} className={classes.form}>
                <TextField
                  id="outlined-name-input"
                  label={t("Name")}
                  type="text"
                  size="small"
                  variant="filled"
                  name="name"
                  className={classes.formfield}
                />
                <TextField
                  id="outlined-password-input"
                  label="Email"
                  type="email"
                  size="small"
                  variant="filled"
                  name="email"
                  className={classes.formfield}
                />
                <TextField
                  id="outlined-password-input"
                  label={t("Message")}
                  type="textarea"
                  size="small"
                  multiline
                  minRows={5}
                  variant="filled"
                  name="message"
                  className={classes.formfield}
                />
                <button type="submit" value="Send" className="submit-btn">
                <i className="fas fa-terminal"></i>
                  <Typography component='span'> {t('Send Message')}</Typography>
                </button>
              </form>
            </div>
            <h1 className="contact_msg">
              <TextDecrypt text={t(greetings)}/>
            </h1>
          </div>
        </Container>
      </section>
  );
};
