import "./App.css";
import About from "./views/about/About";
import Contact from "./views/contact/Contact";
import Footer from "./views/footer/Footer";
import Header from "./views/header/Header";
import Navbar from "./views/navbar/Navbar";
import Project from "./views/project/Project";
import Services from "./views/services/Services";
import Testimonial from "./views/testimonials/Testimonial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Project/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
