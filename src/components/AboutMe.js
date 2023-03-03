import React from "react";

function AboutMe() {

    return (
        <section id="about-me">
        <div className="flex-container d-inline-flex p-2">
          <div className="aboutme-bio"><h2 className="header-aboutme">About Me</h2>
            <p>My name is Joe and I'm currently an IT Engineer from Brighton. I'm studying on a 16 week bootcamp to get me ready for a career transition into Web Development. This portfolio is a work in progress. I intend to add numerous features and keep my projects up to date throughout the course.
            On completion of my Frontend Webdesign course, I plan to volunteer and freelance until I have the experience required for a full time paid position.
    
            If you would like to work with me, please see my social media links at the bottom of the page
          </p>
          </div>
          <div class="aboutme-picture"><img src="images/joseph-namihas-400x400.jpg" alt="My picture"></img>
          </div>
        </div>
      </section>
    )
};

export default AboutMe;