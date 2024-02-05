import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import astar from "../../Assets/Projects/astar.png";
import bpr from "../../Assets/Projects/bpr.png";
import gattention from "../../Assets/Projects/gattention.png";
import Hyperloop from "../../Assets/Projects/hyperloop.png";
import traffic from "../../Assets/Projects/traffic.png";
import covid from "../../Assets/Projects/covid.png";
import eeg from "../../Assets/Projects/eeg.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gattention}
              isBlog={false}
              title="Graph Attention Network"
              description="Developed a novel GAT network to investigate the spatial dependencies and correlation between different EEG networks & emotions. Designed a multimodal transformer architecture and achieved accuracy of 82% in classifying opioid misusers from healthy subjects"
              ghLink="https://github.com/ark8299"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eeg}
              isBlog={false}
              title="EEG Signal Analysis using ML"
              description="Built a Data-driven ML (GB,KNN) framework to characterize the alterations in physiological dynamics during a VR shooting task. Implemented a bio-toolkit using stacked CNN and LSTM neural network blocks for multimodal EEG ECG signal analysis-Physionet. Achieved accuracy close to State of Art in binary(95%) & 3-way(80%) classification. Published,“Affective Physiological State Analysis & Interpretable Predictive Modeling of Marksmanship in Go/NoGo VR Shooting Difficulty Task” in IEEE Affective Computing"
              ghLink="https://github.com/ark8299"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bpr}
              isBlog={false}
              title="Multimodal BPR"
              description="Developed Multimodal-BPR recommender system using images & texts addressing the cold-start problem for enhanced accuracy. Explored diverse fusion techniques to improve scalability for broader dataset- achieved 0.87 AUC score while testing on goodreads"
              ghLink="https://github.com/ark8299"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Rakshak - Covid Modelling"
              description="Developed a Agent-Based Simulator model of a University Campus to model the spatial spread of COVID-19. Applied Geographic Information System to parse spatial distribution of population, transport routes, healthcare facilities, lecture rooms. Used Bayesian Hyperparameter optimization to increase model performance by 80%."
              ghLink="https://github.com/ark8299"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traffic}
              isBlog={false}
              title="Traffic Flow Prediction"
              description="Developed a personal Travel Planner application which allows users to get an optimized cost and time effective travel plan with the support of a regression-based forecasting model that analyzed existing traffic conditions.Implemented Dijkstra’s algorithm, to map best possible routes after forecasting short term future traffic flow using different regression techniques(Linear & Polynomial Regression, MLP, RF, GB )."
              ghLink="https://github.com/ark8299"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={astar}
              isBlog={false}
              title="A* Search Algorithms "
              description="Systemized Monte Carlo game tree search in game of chess that predicts moves weighing expert opinion • Developed a library in C++ to perform the A* algorithm and solve search problems in OR graphs. Implemented the library that is compatible with all problem descriptions using virtual functions. Tested the optimality of the 8-Puzzle and Postman problem under the minimum cost path criterion"
              ghLink="https://github.com/ark8299"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hyperloop}
              isBlog={false}
              title="Kharagpur Hyperloop Research Group"
              description="Worked with a 23 member team to engineer a Hyperloop pod for competing in the SpaceX Hyperloop Pod Challenge. Modeled the relationship between the RPM of BLDC motor and the optimized levitation height using MATLAB. Designed a controller for synchronizing the speed of two BLDC motors used for carrying out levitation experiments"
              ghLink="https://github.com/ark8299"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
