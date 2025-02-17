import { Navbar } from "./components/navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Home } from "./pages/home/home";
import Service from "./pages/services/service";
import Price123 from "./pages/prices/prices";
import Contact from "./pages/contact/contact";


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/price" element={<Price123 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
