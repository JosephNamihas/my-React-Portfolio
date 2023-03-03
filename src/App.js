import NavBar from './components/NavBar';
import './styles/ContactMe.css';
import './styles/Jumbotron.css';
import './styles/NavBar.css';
import './styles/AboutMe.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from './components/Jumbotron';
import ContactMe from './components/ContactMe';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div>
      <NavBar />
      <main>
      <Jumbotron />
      <AboutMe />
     </main>
    </div>
  );
}

export default App;




// Finish Project Section
// Add ContactMe to App
