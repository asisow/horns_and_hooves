
import './App.css';
import About from './Components/About';
import Work from './Components/Work';
import Home from './Components/Home';
import Testimonials from './Components/Testimonials';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
