import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Admin from "./Views/Admin";
import Nav from "./Views/Nav"


function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
