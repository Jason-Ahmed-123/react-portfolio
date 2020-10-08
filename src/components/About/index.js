import React from 'react';
// import coverImage from "../../assets/cover/cover-image.jpg";
import myPhoto from "../../assets/cover/photo.png";

function About() {
    return (
        <section className="my-5">
            <div>
            <h1 id="about">About me</h1>
            </div>
            <div>
                <img src={myPhoto} className="" style={{ width: "10%"}} alt="MyPhoto" />
            </div>
            <br></br>
            <div class="flex-row hero">
            <h5 class="aboutMeText">
                seitan heirloom post-ironic pop-up iPhone mlkshk hella selfies fashion axe occupy readymade put a bird on it
                messenger bag Wes Anderson Schlitz plaid Bushwick church-key lo-fi skateboard slow-carb hashtag trust fund
                Williamsburg biodiesel fixie farm-to-table 8-bit banjo XOXO Banksy chillwave bicycle rights retro cliche
                tattooed bespoke irony mumblecore Shoreditch deep v polaroid McSweeney's bitters. Cray gentrify tofu Marfa you
                probably haven't heard of them yr banh mi asymmetrical art party selvage letterpress High Life.
            </h5>
            {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
            </div>
        </section>
      );
}

export default About;