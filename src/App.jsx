import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Home } from "./pages/home/home";
import Service from "./pages/services/service";
import Price123 from "./pages/prices/prices";
import Contact from "./pages/contact/contact";
import Index_admin from "./pages/admin_home/index_admin";
import Dashboard from "./pages/admin_home/dashboard";  // Import các trang con
import User_admin from "./pages/admin_home/user_admin";
import Settings from "./pages/admin_home/setting";
import Main_admin from "./pages/admin_home/main_admin";
import Pay from "./pages/pay/pay";
import Payment from "./pages/pay/payment";
import Feedback from "./pages/feedback/feedback";
import Help from "./pages/admin_home/help";
import Map from "./pages/map/Map";

function App() {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();

  // Kiểm tra nếu đường dẫn chứa "/admin" thì không hiển thị Navbar
  const showNavbar = !location.pathname.startsWith("/admin");

  return (
    <div>
      {showNavbar && <Navbar />} {/* Hiển thị Navbar nếu không ở trong "/admin" */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/price" element={<Price123 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/Map" element={<Map />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Index_admin />}>
          <Route index element={<Main_admin />} /> 
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="useradmin" element={<User_admin />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
