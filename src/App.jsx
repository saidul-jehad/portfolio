import  { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from './components/Contact'
import Footer from './components/Footer'
import Aos from "aos";
import "aos/dist/aos.css"



const App = () => {
  useEffect(() => {
    Aos.init();

  }, [])

  return (
    <>
      <div className="container font-garamond" >
        <Navbar></Navbar>
        <Home />
        {/* <Experience /> */}
        <Skills />
        <Projects />
        <Contact />
      <Footer></Footer>
      </div>
    </>
  );
};

export default App;
