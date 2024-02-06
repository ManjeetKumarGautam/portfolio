import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
