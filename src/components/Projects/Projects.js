import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Todlearn"
              description="🌟 TodLearn is more than just an app; it's an adventure for toddlers to learn basic math and English through exciting quizzes and unleash their creativity with the Scribble Board. Your feedback powers our journey, and we use Flutter, Dart, and Firebase Firestore to make it happen. Join the TodLearn universe and watch your toddler soar! 🚀🌟"
              ghLink="https://github.com/Sriyush/TodLearn.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Foodie"
              description="Foodie swings onto the scene as your ultimate online food ordering ally, empowering you to craft the perfect meal from a smorgasbord of global flavors. Just like Spider-Man weaving his web, you can customize burgers, pizzas, and more to create a meal that suits your every craving. For first-time users, Firebase Phone Authentication ensures a quick and secure sign-up, and once you're in, accessing your culinary dreams is as effortless as Spidey's wall-crawling. Foodie brings together diverse cuisines from around the world, just as Spider-Man battles various villains. From sizzling Mexican to comforting Italian, Foodie has it all covered. Your input is our greatest web-slinging tool! With our Feedback feature, you can help us fine-tune Foodie to perfection. Flutter and Dart ensure a smooth, user-friendly experience, akin to Spider-Man's graceful moves through the city. Download Foodie now, embrace your inner culinary superhero, and let your taste buds embark on a thrilling adventure! 🦸‍♀️🍽️."
              ghLink="https://github.com/Sriyush/Foddie-flutterapp.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="VideoFam"
              description="Your ultimate online video platform, where you effortlessly share your stories and explore others' tales, thanks to Flutter and Dart's smooth interface. Just like Spider-Man web-slinging through the city, uploading videos is a breeze. Discover captivating content, searching by title, and engage anonymously, adding an extra layer of privacy. Behind the scenes, Firebase powers VideoFam, storing videos securely in Firebase Storage, while Firestore Firebase meticulously organizes video details. Our dynamic comment system, fueled by Firebase Realtime Database, keeps conversations flowing. VideoFam, like Spider-Man's web, extends your abilities to connect with a global community of content creators. Embark on an exhilarating journey through the world of videos—download VideoFam now! 🦸‍♀️📺."
              ghLink="https://github.com/Sriyush/VideoFam-Flutter"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
