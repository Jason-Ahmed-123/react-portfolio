import React from 'react';
import photo from "../../assets/small/commercial/book-garden-screenshot-small.png";
import photo2 from "../../assets/small/commercial/portfolio-screenshot-small.png";
import photo3 from "../../assets/small/commercial/run-buddy-screenshot-small.png";


function Project() {
    return (
      <section>
        <h1>PROJECT</h1>
        <p>GALLERY</p>
      <div className="flex-row">
          <img
            src={photo} alt="Book Garden screenshot" className="img-thumbnail mx-1"
          />
      </div>
      <div className="flex-row">
          <img
            src={photo2} alt="Portfolio screenshot" className="img-thumbnail mx-1"
          />
      </div>
      <div className="flex-row">
          <img
            src={photo3} alt="Run Buddy screenshot" className="img-thumbnail mx-1"
          />
      </div>
      </section>
    );
  }

export default Project;