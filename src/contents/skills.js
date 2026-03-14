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
          name: "Vue3",
          logo: "https://www.technicalife.net/wp-content/uploads/2022/11/logo.png",
        },
        {
          id: 7,
          name: "NestJS",
          logo: "https://vectorseek.com/wp-content/uploads/2023/09/NestJS-Logo-Vector.svg-.png",
        },
        {
          id: 8,
          name: "MongoDB",
          logo: "https://fanz0.github.io/PersonalPortfolio.github.io/assets/logos/mongodb-logo.png",
        },
        {
          id: 9,
          name: "Figma",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/960px-Figma-logo.svg.png?20190122211436",
        },
        {
          id: 10,
          name: "Github",
          logo: "https://www.svgrepo.com/show/445786/github.svg",
        },
        {
          id: 11,
          name: "Mysql",
          logo: "https://www.svgrepo.com/show/303251/mysql-logo.svg",
        },
        {
          id: 12,
          name: "Postman",
          logo: "https://iconape.com/wp-content/files/sw/371325/svg/371325.svg",
        },
        {
          id: 13,
          name: "express.js",
          logo: "https://images.seeklogo.com/logo-png/33/2/express-js-logo-png_seeklogo-339850.png",
        },
        {
          id: 14,
          name: "Expo",
          logo: "https://www.svgrepo.com/show/341805/expo.svg",
        },
      ],
    };
  }

  render() {
    const { languagesData } = this.state;
    const delaystep = 0.2;
    return (
      <div className="condiv skills">
        <h1 className="subtopic">My skills</h1>
        <ul>
          {languagesData.map((language, index) => {
            const animationDelay = index * delaystep;
            return (
              <li
                key={language.id}
                className="language-item"
                style={{ animationDelay: `${animationDelay}s` }}
              >
                <img
                  src={language.logo}
                  alt={language.name}
                  className="language-logo"
                />
                <h3>
                  <p className="language-name">{language.name}</p>
                </h3>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Skills;
