import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Admin from "./Views/Admin";

function App() {
  return (
    <div className="bg-white bg-no-repeat bg-cover overflow-hidden">
      <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Home/>
    </div>
  );
}

export default App;