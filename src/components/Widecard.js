import React, { Component } from "react";

class Widecard extends Component {
  render() {
    return (
      // ใช้ props ที่ส่งเข้ามาสำหรับ className และ style
        <div
          className={`widecard ${this.props.classNameProp || ""}`}
          style={this.props.styleProp}
        >
          <img
            src={this.props.img}
            alt={this.props.title}
            className="widecard-image"
          />

          <div className="widecard-con">
            <h3>{this.props.title}</h3>
            <h4>{this.props.where}</h4>
            <p>{this.props.detail}</p>
            <p>
              {this.props.from} - {this.props.to}
            </p>
          </div>
        </div>
    );
  }
}

export default Widecard;
