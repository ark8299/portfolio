import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ananth Radhakrishnan </span>.
            <br />
            I am currently pursuing my Masters (M.S) in Computer Science and Engineering from <span className="purple"> University of California, San Diego, California</span>.
            <br />
            <br />
            <br />
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Professional Experience <strong className="purple"></strong>
            </h1>

            <h3 style={{ paddingBottom: "20px" }}>
              <strong className="purple">Barclays, India | Software Developer</strong>
            </h3>
            <h5 style={{ paddingBottom: "20px" }}>
              <strong className="purple">Dcypher | Full Stack</strong>
            </h5>
            <ul>
              <li>Developed an application that automates masking, tokenization and migration of data from PROD to Non PROD environment.</li>
              <li>Designed a Python package to incorporate teradata to SQL server file transfer, increasing app utilization by 55% within Barclays</li>
              <li>Integrated event notification, masking tools that were used by 60+ teams(1K+ users) to monitor and customize their datacopy tasks </li>
              <li>Implemented OOPs concept across the entire codebase and optimized the code by revamping the application using Python, MySQL. </li>
            </ul>
            <br />

            <h5 style={{ paddingBottom: "20px" }}>
              <strong className="purple">CloudIT | Backend Developer</strong>
            </h5>
            <ul>
              <li>Spearheaded the development of CloudIT application, a service used by 875k live consumers, using Java, Spring Boot and MongoDB</li>
              <li>Developed 3 REST APIs and optimized data ingestion process using multithreading, reducing response time of upload service by 40%</li>
              <li>Executed legacy code migration of CloudIT, improving code maintainability by 60% and boost in service performance by 20% </li>
              <li>Collaborated with multiple product teams and handled 30% of Barclays Document Journeys in PROD through Jenkins and Docker</li>
            </ul>
            <br />
            <h5 style={{ paddingBottom: "20px" }}>
              <strong className="purple">AI Automation | Graduate Intern</strong>
            </h5>
            <ul>
              <li>Developed an AI-based Universal Test Automation tool for robust script-less application testing using ML and Computer Vision</li>
              <li>Implemented NLTK (NLP) techniques to pre-process documents and trained a SVM model to classify and test input fields</li>
              <li>Achieved accuracy of 93% during prelimnary testing. Tool automates large-scale manual application testing thus reducing cost</li>
            </ul>
            <br />
            <br />
          </p>
          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Commit to building things that go beyond the ordinary, making a tangible difference in the world."{" "}
          </p>
          <footer className="blockquote-footer">Kishore</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
