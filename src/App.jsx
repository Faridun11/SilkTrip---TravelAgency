import "./App.css";
import Header from "./Components/Header/Haeder";
import Footer from "./Components/Footer/Footer"
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SingleTours from "./Pages/SingleTour/SingleTours";
import Tours from "./Components/Tours/Tours"
import Contact from "./Pages/Contact/Contact"
import Preview from "./Pages/Preview/Preview";
import About from "./Pages/About/About";
import ScrollTop from "./Components/ScrollTop/ScrollTop";

function App() {
  return (
    <div className="App">
      <ScrollTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tours/:id" element={<SingleTours />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
