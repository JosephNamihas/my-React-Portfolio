import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import ContactMe from './components/ContactMe';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Projects from './components/Projects';
import './styles/Jumbotron.css';
import './styles/NavBar.css';
import './styles/AboutMe.css';
import './styles/Footer.css';
import './styles/Projects.css';
import './styles/ContactMe.css'
import 'bootstrap/dist/css/bootstrap.min.css';


//import hash router

function App() {

  // we could create some state variable here, and then pass in that value into our COntactMe component in the return below, as a property={value}
  const [myStateVariable, setMyStateVariable ] = useState({
    myName: "Joseph Namihas",
    lead: "Welcome to my awesome web portfolio"
  })

  //setMyStateVariable({})

  return (
<div>
    <Router>
      
    <NavBar />
    <Jumbotron />
    <AboutMe />

      <Routes>
        <Route path ="/" element ={<AboutMe />} />
        <Route path ="ContactMe" element ={<ContactMe />} />
        <Route path ="Projects" element = {<Projects />} />

      </Routes>

      <Projects />
      <ContactMe />
      <Footer />
     </Router> 
    </div>
    
  );
}
// Router allows a specific URL bring up a component.
// Next route paths inside routes


// Three Pages - About Me, Contact Me, Project Gallery

export default App;

