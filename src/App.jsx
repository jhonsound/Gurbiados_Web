import Navbar from "./components/Layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import Footer from "./components/Layout/Footer";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh"
        }}
      >
        <Navbar />
        <Toolbar />
        <Box component={"main"} flexGrow={1}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
