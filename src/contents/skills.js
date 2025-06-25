import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      languagesData: [
        {
          id: 1,
          name: "JavaScript",
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },
        {
          id: 2,
          name: "React Native",
          logo: "https://www.onu.ro/wp/wp-content/uploads/2020/03/react-native-logo-884x1024.png",
        },
        {
          id: 3,
          name: "HTML",
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        },
        {
          id: 4,
          name: "CSS",
          logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        },
        {
          id: 5,
          name: "Node.js",
          logo: "https://nodejs.org/static/logos/jsIconGreen.svg",
        },
        {
          id: 6,
          name: "Expo",
          logo: "https://www.svgrepo.com/show/341805/expo.svg",
        },
        {
          id: 7,
          name: "Figma",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/960px-Figma-logo.svg.png?20190122211436",
        },
        {
          id: 8,
          name: "Github",
          logo: "https://www.svgrepo.com/show/445786/github.svg",
        },
        {
          id: 9,
          name: "Mysql",
          logo: "https://www.svgrepo.com/show/303251/mysql-logo.svg",
        },
        {
          id: 10,
          name: "Postman",
          logo: "https://iconape.com/wp-content/files/sw/371325/svg/371325.svg",
        },
                {
          id: 11,
          name: "express.js",
          logo: "https://seekvectors.com/files/download/express.js-logo.png",
        },
      ],
    };
  }

  render() {
    const { languagesData } = this.state;
    return (
      <div className="condiv skills">
        <h1>
          <ul>
            {languagesData.map((language) => {
              // Rename 'value' to 'language' for clarity
              return (
                <li key={language.id} className="language-item">
                  <img
                    src={language.logo}
                    alt={language.name}
                    className="language-logo"
                  />
                  <p className="language-name">{language.name}</p>
                </li>
              );
            })}
          </ul>
        </h1>
      </div>
    );
  }
}

export default Skills;
