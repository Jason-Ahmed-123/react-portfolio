import React from 'react';
// import coverImage from "../../assets/cover/cover-image.jpg";
import myPhoto from "../../assets/cover/photo.png";

function About() {
    return (
        <section className="my-5">
            
            <h1 id="about">About me</h1>
            <br></br>

            <div class="flex-container">
            <div class="flex-child-left">
                <img src={myPhoto} className="" style={{ width: "75%"}} alt="MyPhoto" />
            </div>
               
            <div class="flex-row hero flex-child-right">    
            <h5 class="aboutMeText">
            Hi there! I am a Full-Stack Web Developer with a background in Capital Markets Finance and a life-long dedication to learning! 
            Recently earned a certificate in full stack development from UCLA, with skills in JavaScript, CSS, Bootstrap, React.js, the MERN Stack, and responsive web design. 
            I am effective at combining creativity and problem solving to develop user-friendly web applications with unique, eye-catching designs.
            Known amongst colleagues for strong wit and attention to detail, no matter the complexity of the project.
            </h5>    
            </div>
            </div>

        </section>
      );
}

export default About;