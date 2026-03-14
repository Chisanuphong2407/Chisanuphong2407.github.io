import React, { Component } from "react";
import profilepic from "../img/profile.jpeg";

class About extends Component {
  render() {
    return (
      <div className="condiv About">
        <div className="Aboutcontent">
          <h1 className="subtopic">About me</h1>
          <img src={profilepic} alt="profile" className="aboutpic" />
          <h3> Hi!, I'm Chisanuphong Jampathep</h3>
          <p>
            สวัสดีครับ ผมนายชิษณุพงศ์ จำปาเทพ เป็นนิสิตจบใหม่จาก
            มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตเฉลิมพระเกียรติ จังหวัดสกลนคร
            มีความสนใจในการพัฒนาซอฟต์แวร์ โดยมีทักษะหลักคือ React Native, Vue3
            และ NestJS ผมมีกระบวนการคิดที่เป็นเหตุเป็นผล
            ชอบวางแผนโครงสร้างระบบให้มีประสิทธิภาพ
            และพร้อมที่จะเรียนรู้เทคโนโลยีใหม่ๆ
            เพื่อสร้างสรรค์ผลงานที่มีคุณภาพให้แก่องค์กรครับ
          </p>
        </div>
      </div>
    );
  }
}

export default About;
