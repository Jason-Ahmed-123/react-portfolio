import React from 'react';
import photo from "../../assets/small/commercial/book-garden-screenshot-small.png";
import photo2 from "../../assets/small/commercial/portfolio-screenshot-small.png";
import photo3 from "../../assets/small/commercial/run-buddy-screenshot-small.png";
import photo4 from "../../assets/small/commercial/taskinator-screenshot-small.png";
import photo5 from "../../assets/small/commercial/weather-dashboard-screenshot-small.png";
import photo6 from "../../assets/small/commercial/collab-screenshot-small.png";


function Project() {
    return (
      <section>
        <h1>PROJECT</h1>
        <p>GALLERY</p>
      <div className="flex-row">
          <img
            src={photo} alt="Book Garden screenshot" className="img-thumbnail mx-2"
          />
          <img
            src={photo2} alt="Portfolio screenshot" className="img-thumbnail mx-2"
          />
          <img
            src={photo3} alt="Run Buddy screenshot" className="img-thumbnail mx-2"
          />
      </div>
      <div className="flex-row">
          <img
            src={photo4} alt="Taskinator screenshot" className="img-thumbnail mx-2"
          />
          <img
            src={photo5} alt="Weather Dashboard screenshot" className="img-thumbnail mx-2"
          />
          <img
            src={photo6} alt="Workday Scheduler screenshot" className="img-thumbnail mx-2"
          />
      </div>
      </section>
    );
  }

export default Project;