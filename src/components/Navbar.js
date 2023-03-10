import React from "react";

function NavBar() {
  return (
  <nav className="customNav navbar navbar-expand-lg navbar-light">
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="btn btn-primary btn-about mr-1" href="#about-me" role="button" >About Me</a>
      <a className="btn btn-primary btn-projects mr-1" href="#my-projects" role="button">Projects</a>
      <a className="btn btn-primary btn-contact mr-1" href="#contact-me" role="button">Contact Me</a>
      <a className="btn btn-primary btn-contact mr-1" href="https://docs.google.com/document/d/1uNc9zjjRbLhtHai4OrFUiJ3byn78mpn7YH9F6nqeIHA/edit" role="button">View CV</a>
    </div>
  </div>
</nav>)
}

export default NavBar;