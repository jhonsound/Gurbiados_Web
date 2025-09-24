import Navbar from "./components/Layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import Footer from "./components/Layout/Footer";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import About from "./pages/About";
import Client from "./pages/Client";

function App() {
  return (
    <Router>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Toolbar />
        <Box component={"main"} flexGrow={1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/clients" element={<Client />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
