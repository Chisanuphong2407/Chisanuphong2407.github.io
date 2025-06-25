import React, { Component } from "react";
import { Link } from "react-router-dom";

class Projectcard extends Component {
  render() {
    return (
      // ใช้ props ที่ส่งเข้ามาสำหรับ className และ style
      <Link to={this.props.linkTo} className="Linkproject">
        <div
          className={`widecard ${this.props.classNameProp || ""}`}
          style={this.props.styleProp}
        >
          <video className="widecard-video" controls muted autoPlay loop>
            <source src={this.props.video} type="video/mp4" />
            {/* คุณสามารถเพิ่ม source สำหรับ format อื่นๆ ได้ เช่น type="video/webm" */}
            Your browser does not support the video tag.
          </video>

          <div className="widecard-con">
            <h3>{this.props.title}</h3>
            <h4>tools: {this.props.tools}</h4>
            <p>{this.props.detail}</p>
            <p>{this.props.link}</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default Projectcard;
