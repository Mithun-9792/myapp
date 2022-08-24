// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); //whether dark mode is enable or not
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert(
      { msg: message, type: type },
      setTimeout(() => {
        setalert(null);
      }, 2000)
    );
  };

  const togglemode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled!", "success");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#0f3056";
      showAlert("Dark mode enabled!", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="FirstApp"
          about="AboutUs"
          mode={mode}
          togglemode={togglemode}
        />
        <div style={{ height: "50px" }}>
          <Alert alert={alert} />
        </div>
        <div className="container">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <Form
                  showAlert={showAlert}
                  heading="Enter Text Below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
