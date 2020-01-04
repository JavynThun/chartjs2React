import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./auth";
import PrivateRoute from "./components/privateRoute";
import Navbar from './components/Navbar'


class App extends Component {
  render() {
  return (
    <AuthProvider>
      <Router>
        <div>
        <Navbar/>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            
        </div>
      </Router>
    </AuthProvider>
  );
};
}

export default App;