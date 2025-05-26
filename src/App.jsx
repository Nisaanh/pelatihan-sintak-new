import "./App.css";
import CardName from "./CardName";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./Pages/About";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import NotFoundPage from "./Pages/NotFoundPage";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NotFoundPage/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
