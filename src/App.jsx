import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signin from "./Components/Signin.jsx";
import Login from "./Components/Login.jsx";

import Split from "./Components/Split.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/split" element={<Split />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
