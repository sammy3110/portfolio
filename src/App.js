import "./App.css";
import Navbar from "./components/Navbar";
import { Layout } from "./components/styled/Layout.styled";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Layout>
        <Navbar />
        <Hero />
        <About />
      </Layout>
    </div>
  );
}

export default App;
