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
import 'bootstrap/dist/css/bootstrap.min.css';


//import hash router

function App() {
  return (
    <div>
      <NavBar />
      <Jumbotron />
      <AboutMe />
      <Footer />
      <hr></hr>

      <NavBar />
      <Jumbotron />
      <ContactMe />
      <Footer />

      <hr></hr>
      <NavBar />
      <Jumbotron />
      <Projects />
     <Footer />
    </div>
  );
}

// Three Pages - About Me, Contact Me, Project Gallery

export default App;

// Finish Project Section
// Add ContactMe to App
