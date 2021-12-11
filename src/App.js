import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Navigationbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
