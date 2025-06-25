import React, { Component } from "react";
import miniProject from "../asset/miniProject.mp4";
import Projectcard from "../components/Projectcard";
import Bigproject from "../asset/Bigproject.mp4"

class Project extends Component {
  render() {
    const delaystep = 0.2;
    const project = [
      {
        title: "แคตตาล็อกเกี่ยวกับการ์ดเกม",
        tools: "React Native,expo,Node.js",
        video: miniProject,
        detail:"ในโปรเจคนี้เป็นมินิโปรเจคที่พัฒนาในการเรียนวิชา Mobile application ซึ่งเป็นโปรเจคที่ผู้พัฒนาได้ฝึกและทดลองเกี่ยวกับการใช้ component ต่างๆ ในการพัฒนา",
        link: 'https://github.com/Chisanuphong2407/card-came-catelog'
      },
      {
        title: "ระบบจัดการแข่งขัน TCG (กำลังศึกษาและพัฒนา)",
        tools: "React Native,expo,Node.js,express.js,Mysql,RestfulApi",
        video: Bigproject,
        detail:"โปรเจคนี้เป็นปริญญานิพนธ์ เป็นระบบการจัดการแข่งขันการ์ดเกมประกอบด้วยระบการสร้างกิจกรรม สมัคร และทำการแข่งขัน พัฒนาในแพลตฟอร์ม Mobile",
        link: 'https://github.com/Chisanuphong2407/TCGCompanions'
      },
    ];
    return (
      <div className="condiv">
        <h1 className="subtopic">Project</h1>
        {project.map((data, index) => {
          const animationDelay = index * delaystep; // คำนวณ delay สำหรับแต่ละการ์ด

          return (
            
            <Projectcard
              key={index} // ใช้ index เป็น key ชั่วคราว (ควรใช้ unique ID ถ้ามี)
              video={data.video}
              title={data.title}
              detail={data.detail}
              tools={data.tools}
              classNameProp="widecard-animated" // ส่ง className เข้าไปให้ Widecard
              styleProp={{ animationDelay: `${animationDelay}s` }} // ส่ง inline style เข้าไป
              linkTo={data.link}
            />
          );
        })}
      </div>
    );
  }
}

export default Project;
