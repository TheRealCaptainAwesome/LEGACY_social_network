import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logOut } from "./redux/actions/authActions";
import setAuth from "./redux/utilities/setAuth";

// Import containers
import Navbar from "./components/containers/navbar/Navbar";
import Footer from "./components/containers/footer/Footer";
import Main from "./components/containers/main/Main";
import Register from "./components/containers/register/Register";

// Import Store and Provider
import { Provider } from "react-redux";
import Store from "./redux/Store";

if (localStorage.authToken) {
  setAuth(localStorage.authToken);

  const setUser = jwt_decode(localStorage.authToken);
  Store.dispatch(setCurrentUser(setUser));

  const curTime = Date.now() / 1000; // divided by 1000 to get milliseconds

  if (setUser.exp < curTime) {
    Store.dispatch(logOut());

    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Router>
          <div>
            <Navbar />
            <div className="container">
              <Route exact path="/" component={Main} />
              <Route exact path="/register" component={Register} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
