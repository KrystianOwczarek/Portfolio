import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../theme/ThemeProvider";
import { Tooltip, IconButton, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  iconButton: {
    position: "fixed",
    bottom: theme.spacing(6),
    right: theme.spacing(6),
    height: "2.5rem",
    width: "2.5rem",
  },
  icon: {
    fontSize: "1.25rem",
  },
}));

export const LanguageToggle = (props) => {
    const classes = useStyles();
    const { t, i18n } = useTranslation();

    return (
      <Tooltip
        title={t("Toggle language")}
        placement="right"
        TransitionComponent={Zoom}
      >
        <IconButton
          color="inherit"
          onClick={props.toggleLanguage}
          style={{ bottom: '105px' }}
          aria-label={"Toggle language"}
          className={classes.iconButton}
        >
          {i18n.language === "pl" ? (
              <strong>EN</strong>
          ) : (
              <strong>PL</strong>
          )}
        </IconButton>
      </Tooltip>
    );
};