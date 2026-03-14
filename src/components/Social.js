import React, { Component } from "react";

class Social extends Component {
  render() {
    return (
      <div className="social">
        <a
          href="https://github.com/Chisanuphong2407"
          target="_blank"
          rel="noopender noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.facebook.com/mel.chitsanupong/"
          target="_blank"
          rel="noopender noreferrer"
        >
          <i class="fab fa-facebook"></i>
        </a>
      </div>
    );
  }
}

export default Social;
