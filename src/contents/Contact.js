import React, { Component } from "react";
import Social from "../components/Social";

class Contact extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Contact Me</h1>
        <div className="contact-det">
          <h3>Facebook: Mel Chitsanupong</h3>
          <h3>Email: Chisanupong2407@gmail.com </h3>
          <h3>instagram: Mel.crmm</h3>
        </div>
        <Social />
      </div>
    );
  }
}

export default Contact;
