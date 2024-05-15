import React, { useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { TbBrandCSharp } from "react-icons/tb";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiPhp,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiPhpmyadmin,
  SiRedux,
  SiRender,
  SiNetlify,
  SiWordpress,
  SiElementor,
  SiThreedotjs,
  SiWoocommerce,
  SiYoast,
} from "react-icons/si";
import { TextDecrypt } from "../content/TextDecrypt";
import { Typography } from "@material-ui/core";
import { ThemeContext } from "../theme/ThemeProvider";
import { useTranslation } from 'react-i18next';

function Techstack() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t } = useTranslation();

  useEffect(() => { console.log(theme) }, [theme]);

  return (
      <section id='skills'>
        <Typography style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem' }} component='h2' variant="h5">
          <TextDecrypt text={t(`Professional Skillset`)} />
        </Typography>
        <Row style={{ display: 'flex', justifyContent: "center", flexFlow: "row wrap", paddingBottom: "50px" }} className={theme === 'light' ? 'black' : 'white'}>
          <Col xs={4} md={2} className="tech-icons">
            <DiHtml5 />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiCss3 />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPhp />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <TbBrandCSharp />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiReact />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiRedux />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiNextdotjs />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiThreedotjs />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <DiGit />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPhpmyadmin />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPostgresql />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiFirebase />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiVisualstudiocode />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiPostman />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiVercel />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiRender />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiNetlify />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiWordpress />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiElementor />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiWoocommerce />
          </Col>
          <Col xs={4} md={2} className="tech-icons">
            <SiYoast />
          </Col>
        </Row>
      </section>
  );
}

export default Techstack;
