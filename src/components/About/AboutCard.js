import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ayush Srivastava </span>
            from <span className="purple"> Kanpur, India.</span>
            <br /> I am a Pre-final year student pursuing Btech in CSE from VIT,chennai.
            <br />
            Additionally, I am currently Working as an Intern in Grahnumb pvt ltd.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching diff Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring stuffs on net
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I am Batman"{" "}
          </p>
          <footer className="blockquote-footer">Ayush</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
