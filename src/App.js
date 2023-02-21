import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Banner from './LandingPage/Banner/Banner';
import Hero from './LandingPage/Hero/Hero';
import Services from './LandingPage/Services/Services';
import Features from './LandingPage/Features/Features';
import How from './LandingPage/How/How';
import Intro from './LandingPage/Intro/Intro';
import Testimonials from './LandingPage/Testimonials/Testimonials';
import Contact from './LandingPage/Contact/Contact';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <Intro/>
    <Services/>
    <Features/>
    <How/>
    <Testimonials/>
    <Banner/>
    <Contact/>
    <Footer/>
    </div>
    // 90CAF9
  );
}

export default App;
