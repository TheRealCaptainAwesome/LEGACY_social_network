import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// Import containers
import Navbar from "./components/containers/navbar/Navbar";
import Footer from "./components/containers/footer/Footer";
import Main from "./components/containers/main/Main";
import Register from "./components/containers/register/Register";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div class="container">
            <Route exact path="/" component={Main} />
            <Route exact path="/register" component={Register} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
