import React, { Component } from "react";
import Navitems from "./Navitems";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <Navitems item="Home" tolink="/"></Navitems>
          <Navitems item="About me" tolink="/About"></Navitems>
          <Navitems item="Education" tolink="/Education"></Navitems>
          <Navitems item="Skills" tolink="/skills"></Navitems>
          <Navitems item="Project" tolink="/project"></Navitems>
          <Navitems item="Contact" tolink="/contact"></Navitems>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
