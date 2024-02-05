import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/ananth__.JPEG";
import myImg from "../../Assets/studenthome.png";

import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> ME </span>
            </h1>
            <p className="home-about-body">
            I am Ananth, a first-year computer science Masters student at the University of California San Diego (UCSD).
              <br />
              <br />I am fluent in
              <i>
                <b className="purple"> C++, Python, Java, MySQL  </b>
              </i> and have worked on multiple Deep Learning Research Projects.
              <br /> 
              <br />
              My field of Interest's are  &nbsp;
              <i>
                <b className="purple">Software Development  </b> and
                and building new {" "}
                <b className="purple">
                AI Research projects.
                </b>
              </i>
              <br />
              <br />
              I am actively looking for Summer 2024 Internship opportunities in <b className="purple">Software Development</b> and
              <i>
                <b className="purple">
                  {" "}
                  and Machine Learning.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ark8299"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="ananthr.8299@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
                
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ananth8299/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
