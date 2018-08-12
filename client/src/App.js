import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// Import containers
import Navbar from "./components/containers/navbar/Navbar";
import Footer from "./components/containers/footer/Footer";
import Main from "./components/containers/main/Main";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Main} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
