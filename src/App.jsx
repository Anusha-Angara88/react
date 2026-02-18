import { Routes, Route } from "react-router-dom";
import Sigin from "./Components/Sigin";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Split from "./Components/Split";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sigin />} />
      <Route path="/split" element={<Split />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
