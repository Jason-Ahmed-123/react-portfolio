import React from 'react';
import photo from "../../assets/small/commercial/0.jpg";

function Project() {
    return (
      <section>
        <h1>PROJECT</h1>
        <p>GALLERY</p>
        <div className="flex-row">
          <img
            src={photo} alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
      </div>
      </section>
    );
  }

export default Project;