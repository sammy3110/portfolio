import "./App.css";
import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import { Layout } from "./components/styled/Layout.styled";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {

  const scroll = useRef();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scroll.current.style.display = "block";
    } else {
      scroll.current.style.display = "none";
    }
  }

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  return (
    <div className="App">
      <Layout>
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Skills />
        <Footer />
        <div ref={scroll} onClick={scrollToTop} className="scroll-top">
          <i class="fa-solid fa-angle-up"></i>
        </div>
      </Layout>
    </div>
  );
}

export default App;
