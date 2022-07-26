import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextEedit from "./components/TextEedit";
import About from "./components/About";
import {
   BrowserRouter as Router,
     Switch, 
     Route,
    Link
  } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
      console.log("This is Time Block");
    }, 2600);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled ", "success");
    } else {
      setMode("dark");
      document.body.style.background = "black";
      showAlert("Dark mode has been enabled ", "success");
    }
  };

  return (
    <>
      {/* <About/> */}
      <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
     <div className="container my-3">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
              <TextEedit
                showAlert={showAlert}
                heading="Enter text to analyze"
                mode={mode}
              />
          </Route>
         </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
