import React, { Component } from "react";
import Social from "../components/Social";
import profilepic from "../img/university.jpeg";
import { ReactTyped } from "react-typed";

class Home extends Component {
  render() {
    return (
      <div className="condiv Home">
        <h1>welcome to my Portfolio</h1>
        <img src={profilepic} alt="profile" className="profilepic" />
        <p className="typingeffect">
          <ReactTyped
            strings={[
              "Hi visitor, Nice to meet you.",
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
