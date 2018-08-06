import React, { Component } from "react";
import "./App.css";

// Import containers
import Navbar from "./components/containers/navbar/Navbar";
import Footer from "./components/containers/footer/Footer";
import Main from "./components/containers/main/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
