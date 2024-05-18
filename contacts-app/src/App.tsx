import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "components/Navbar";
import AppRoutes from "routes/Routes";
import "assets/styles.css";
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <AppRoutes />
      </>
    </Router>
  );
}

export default App;
