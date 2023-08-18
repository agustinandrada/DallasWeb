import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Admin from "./Views/Admin";
import Nav from "./Views/Nav"
import Footer from "./Views/Footer"

function App() {
  return (
    <div className="bg-site bg-cover overflow-hidden ">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
