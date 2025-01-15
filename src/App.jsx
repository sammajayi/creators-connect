import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Register from "./components/Auth/Register";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
