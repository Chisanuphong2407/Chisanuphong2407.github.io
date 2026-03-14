import React, { Component } from "react";
import { Link } from "react-router-dom";

class Projectcard extends Component {
  render() {
    if (this.props.link2To) {
      return (
        // ใช้ props ที่ส่งเข้ามาสำหรับ className และ style
        // <Link
        //   to={this.props.linkTo}
        //   target="_blank"
        //   rel="noopener noreferrer"
        //   className="Linkproject"
        // >
        <div
          className={`projectcard ${this.props.classNameProp || ""}`}
          style={this.props.styleProp}
        >
          {this.props.video ? (
            <video className="widecard-video" controls muted autoPlay loop>
              <source src={this.props.video} type="video/mp4" />
              {/* คุณสามารถเพิ่ม source สำหรับ format อื่นๆ ได้ เช่น type="video/webm" */}
              Your browser does not support the video tag.
            </video>
          ) : (
            <img className="projectImg" src={this.props.image} />
          )}

          <div className="projectcard-con">
            <h3>{this.props.title}</h3>
            <h4>tools: {this.props.tools}</h4>
            <p>{this.props.detail}</p>
            <Link
              to={this.props.linkTo}
              target="_blank"
              rel="noopener noreferrer"
              className="Linkproject"
            >
              <p className="linkTitle">FrontEnd Github</p>
            </Link>
            <Link
              to={this.props.link2To}
              target="_blank"
              rel="noopener noreferrer"
              className="Linkproject"
            >
              <p className="linkTitle">BackEnd Github</p>
            </Link>
          </div>
        </div>
        // </Link>
      );
    } else {
      return (
        // ใช้ props ที่ส่งเข้ามาสำหรับ className และ style
        <Link
          to={this.props.linkTo}
          target="_blank"
          rel="noopener noreferrer"
          className="Linkproject"
        >
          <div
            className={`projectcard ${this.props.classNameProp || ""}`}
            style={this.props.styleProp}
          >
            {this.props.video ? (
              <video className="widecard-video" controls muted autoPlay loop>
                <source src={this.props.video} type="video/mp4" />
                {/* คุณสามารถเพิ่ม source สำหรับ format อื่นๆ ได้ เช่น type="video/webm" */}
                Your browser does not support the video tag.
              </video>
            ) : (
              <img className="projectImg" src={this.props.image} />
            )}

            <div className="projectcard-con">
              <h3>{this.props.title}</h3>
              <h4>tools: {this.props.tools}</h4>
              <p>{this.props.detail}</p>
            </div>
          </div>
        </Link>
      );
    }
  }
}

export default Projectcard;
