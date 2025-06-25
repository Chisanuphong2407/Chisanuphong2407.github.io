import React, { Component } from "react";
import Social from "../components/Social";
import profilepic from "../img/profile.jpeg";
import Typed from "react-typed";

class Home extends Component {
  render() {
    return (
      <div className="condiv Home">
        <img src={profilepic} alt="profile" className="profilepic" />
        <p></p>
        <Social />
      </div>
    );
  }
}

export default Home;
