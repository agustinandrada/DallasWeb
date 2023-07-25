import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Admin from "./Views/Admin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
