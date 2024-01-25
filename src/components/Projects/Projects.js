import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tictactoe from "../../Assets/Projects/tictactoe.png";
import currencyconverter from "../../Assets/Projects/currencyconverter.png";
import aisummarizer from "../../Assets/Projects/aisummarizer.png";
import plantnursery from "../../Assets/Projects/plantnursery.png";
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
              imgPath={plantnursery}
              title="Plant Nursery Website"
              description=" Designed and developed a plant nursery website using HTML, CSS, and JavaScript. Integrated interactive features, enhancing user experience. Demonstrated skills in web development, showcasing creativity, and technical proficiency"
              ghLink="https://github.com/khansaad593/plant_nursery.github.io"
              demoLink="https://khansaad593.github.io/plant_nursery.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aisummarizer}
              title="Ai-Summarizer"
              description="The AI Summarizer Project is a web application that utilizes Artificial Intelligence(AI) to Summarize text content.The AI-powered summarization algorithm will generate concise summaries,highlighting the key points and important information.Integrated RapidAPI to leverage powerful natural language processing tools for efficient text summarization."
              ghLink="https://github.com/khansaad593/ai_summarizer_project"
              demoLink="https://text-summarizer.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              title="TIC-TAC-TOE"
              description="Developed an engaging Tic-Tac-Toe game using HTML, CSS, and JavaScript. Implemented interactive features, allowing users to enjoy a classic game with a modern and visually appealing interface."
              ghLink="https://github.com/khansaad593/TIC_TAC_TOE"
              demoLink="https://khansaad593.github.io/TIC_TAC_TOE/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currencyconverter}
              title="Currency Converter"
              description="A platform dedicated to the distribution of Kannada movies and the latest news articles, providing a comprehensive hub for enthusiasts and cinephiles."
              ghLink="https://github.com/khansaad593/currency_converter.github.io"
              demoLink="https://khansaad593.github.io/currency_converter.github.io/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
