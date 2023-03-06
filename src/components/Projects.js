import React from "react";
import cocktailProject from '../images/cocktail-project.PNG';
import gitHub from '../images/github.png';
import workDay from '../images/workday-planner.PNG';
import readMe from '../images/readme-generator.jpg';

function Projects() {
    return (
    <section id="my-projects">
        <div className="grid-container container-fluid">
          <div className="grid-item1">
            <div className="row">
              <div className="col"> 
                <div className="card">
                  <img className="card-img-top" src={cocktailProject} alt="Project #1"></img>
                    <div className="card-body">
                      <h5 className="card-title">Cocktail O'Clock</h5>
                      <p className="card-text">A complete frontend application - The home of Cocktails!</p>
                      <a href="https://josephnamihas.github.io/Cocktail-O-Clock/" className="btn btn-primary">Go to Project</a>
                    </div>
                 </div>
              </div>
            </div>
          </div>
    
        <div className="grid-item2">
          <div className="row">
            <div className="col"> 
              <div className="card">
              <img className="card-img-top" src={gitHub} alt="GitHub Profile"></img>
                  <div className="card-body">
                    <h5 className="card-title">GitHub</h5>
                    <p className="card-text">The home of all my projects, contributions and code snippets</p>
                    <a href="https://github.com/JosephNamihas" className="btn btn-primary">Go to Profile</a>
                  </div>
               </div>
            </div>
          </div>
        </div>
    
        <div className="grid-item3">
          <div className="row">
            <div className="col"> 
              <div className="card">
                <img className="card-img-top" src={workDay} alt="Workday Planner"></img>
                  <div className="card-body">
                    <h5 className="card-title">Workday Planner</h5>
                    <p className="card-text">A handy planner which utilises local storage to keep your day on track</p>
                    <a href="https://github.com/JosephNamihas/Daily-Planner" className="btn btn-primary">Go to Project</a>
                  </div>
               </div>
            </div>
          </div>
        </div>
    
        <div className="grid-item4">
          <div className="row">
            <div className="col"> 
              <div className="card">
                <img className="card-img-top" src={readMe} alt="ReadME Generator"></img>
                  <div className="card-body">
                    <h5 className="card-title">ReadME Generator</h5>
                    <p className="card-text">A Node.js command line application, utlising inquirier to generate a README for your projects</p>
                    <a href="https://github.com/JosephNamihas/README-Generator" className="btn btn-primary">Go to Project</a>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    
    </section>
    )
}

export default Projects;