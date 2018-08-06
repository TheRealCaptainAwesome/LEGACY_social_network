import React, { Component } from "react";
import "./App.css";

// Import containers
import Navbar from "./components/containers/navbar/Navbar";
import Footer from "./components/containers/footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;
