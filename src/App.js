import "./App.css";
import Navbar from "./components/Navbar";
import { Layout } from "./components/styled/Layout.styled";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Layout>
        <Navbar />
        <Hero />
      </Layout>
    </div>
  );
}

export default App;
