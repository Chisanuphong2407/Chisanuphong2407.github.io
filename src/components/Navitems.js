import React, { Component} from "react";
import { NavLink } from "react-router-dom";

class Navitems extends Component {
  render() {
    const {item,tolink } = this.props;
    return (
      <li id={item} className="nav-link">
        <NavLink
          to={tolink}
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          {this.props.item}
        </NavLink>
      </li>
    );
  }
}

export default Navitems;
