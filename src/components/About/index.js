import React from 'react';
// import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    return (
        <section className="my-5">
            <div>
            <h1 id="about">About me</h1>
            </div>
            <div class="flex-row hero">
            <h4 class="aboutMeText">
                seitan heirloom post-ironic pop-up iPhone mlkshk hella selfies fashion axe occupy readymade put a bird on it
                messenger bag Wes Anderson Schlitz plaid Bushwick church-key lo-fi skateboard slow-carb hashtag trust fund
                Williamsburg biodiesel fixie farm-to-table 8-bit banjo XOXO Banksy chillwave bicycle rights retro cliche
                tattooed bespoke irony mumblecore Shoreditch deep v polaroid McSweeney's bitters.
            </h4>
            {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
            </div>
        </section>
      );
}

export default About;