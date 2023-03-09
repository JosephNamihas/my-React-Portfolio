import React from "react";

function ContactMe() {
  return (
    <section id="contact-me">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Contact Me</h1>
          //TODO Contact Form here
          <div className="social-icons">
            <a href="https://twitter.com/JoeNamihas" alt="Twitter">
              <i className="fab fa-twitter" alt="Twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/joenamihas/" alt="LinkedIn">
              <i className="fab fa-linkedin-in" alt="LinkedIn"></i>
            </a>
            <a
              href="https://www.freecodecamp.org/JosephNamihas"
              alt="freeCodeCamp"
            >
              <i className="fab fa-free-code-camp" alt="FreeCodeCamp"></i>
            </a>
            <a href="https://github.com/JosephNamihas" alt="GitHub">
              <i className="fab fa-github" alt="GitHub"></i>
            </a>
            <a href="mailto: joenamihas@yahoo.co.uk" alt="E-mail">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
