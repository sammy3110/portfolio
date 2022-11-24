import "./App.css";
import Navbar from "./components/Navbar";
import { Layout } from "./components/styled/Layout.styled";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Layout>
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Skills />
      </Layout>
    </div>
  );
}

export default App;
