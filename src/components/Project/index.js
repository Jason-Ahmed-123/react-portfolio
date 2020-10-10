import React from 'react';
import photo from "../../assets/small/book-garden-screenshot-small.png";
import photo2 from "../../assets/small/portfolio-screenshot-small.png";
import photo3 from "../../assets/small/run-buddy-screenshot-small.png";
import photo4 from "../../assets/small/taskinator-screenshot-small.png";
import photo5 from "../../assets/small/weather-dashboard-screenshot-small.png";
import photo6 from "../../assets/small/collab-screenshot-small.png";


function Project() {
    return (
      <section>
        <h1 id="project">Gallery</h1>
        <p>A sampling of my projects</p>
      <div className="flex-row imageHolder">
      <a href="https://jason-ahmed-123.github.io/groupproject1-book-garden/" target = "">
          <img src={photo} alt="Book Garden screenshot" className="img-thumbnail mx-2"/>
      </a>
      <a href = "https://jason-ahmed-123.github.io/run-buddy/" target = "">
          <img src={photo3} alt="Run Buddy screenshot" className="img-thumbnail mx-2"/>
      </a>
      <a href="https://jason-ahmed-123.github.io/taskinator/" target = "">
          <img src={photo4} alt="Taskinator screenshot" className="img-thumbnail mx-2"/>
      </a>
      </div>
      <div className="flex-row">
      <a href="https://jason-ahmed-123.github.io/Week2-Challenge-Portfolio/" target = "">
          <img src={photo2} alt="Portfolio screenshot" className="img-thumbnail mx-2"/>
      </a>
      <a href="https://jason-ahmed-123.github.io/week6-weather-dashboard/" target = "">
          <img src={photo5} alt="Weather Dashboard screenshot" className="img-thumbnail mx-2"/>
      </a>
      <a href = "https://immense-wave-96747.herokuapp.com/" target = "">
          <img src={photo6} alt="Collab screenshot" className="img-thumbnail mx-2"/>
      </a>
      </div>
      </section>
    );
  }

export default Project;