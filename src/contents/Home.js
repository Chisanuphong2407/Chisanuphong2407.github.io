import React, { Component } from "react";
import Social from "../components/Social";
import profilepic from "../img/profile.jpeg";
import { ReactTyped } from "react-typed";

class Home extends Component {
  render() {
    return (
      <div className="condiv Home">
        <img src={profilepic} alt="profile" className="profilepic" />
        <p className="typingeffect">
          <ReactTyped
            strings={[
              "Hi visiter, Welcome to my Portfolio!",
              "I'm Chisanuphong, a Developer.",
            ]}
            typeSpeed={50} 
            loop 
          />
        </p>
        <Social />
      </div>
    );
  }
}

export default Home;
