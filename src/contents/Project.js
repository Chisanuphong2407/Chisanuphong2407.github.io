import React, { Component } from "react";
import miniProject from "../asset/miniProject.mp4";
import Projectcard from "../components/Projectcard";
import Bigproject from "../asset/Bigproject.mp4";
import sideProject from "../asset/sideProject.png";

class Project extends Component {
  render() {
    const delaystep = 0.2;
    const project = [
      {
        title: "ระบบจัดการแข่งขัน TCG",
        tools: "React Native,Expo,Node.js,express.js,Mysql,RestfulApi",
        video: Bigproject,
        detail:
          "โปรเจกต์นี้เป็นปริญญานิพนธ์ เป็นระบบการจัดการแข่งขันการ์ดเกมประกอบด้วยระบบการสร้างกิจกรรม สมัคร และทำการแข่งขัน พัฒนาในแพลตฟอร์ม Mobile",
        link: "https://github.com/Chisanuphong2407/TCGCompanions",
      },
      {
        title: "แคตตาล็อกเกี่ยวกับการ์ดเกม (ไม่เชื่อม database)",
        tools: "React Native,Expo,Node.js",
        video: miniProject,
        detail:
          "ในโปรเจกต์นี้เป็นมินิโปรเจคที่พัฒนาในการเรียนวิชา Mobile application ซึ่งเป็นโปรเจคที่ผู้พัฒนาได้ฝึกและทดลองเกี่ยวกับการใช้ component ต่างๆ ในการพัฒนา",
        link: "https://snack.expo.dev/@crmm/github.com-chisanuphong2407-card-came-catelog",
      },
      {
        title: "ระบบจัดการสินค้า",
        tools: "Vue3,Node.js,NestJS,MongoDB,RestfulApi",
        image: sideProject,
        detail:
          "โปรเจกต์นี้เป็นโปรเจกต์ที่ ได้รับมอบหมายก่อนที่จะทำการฝึกสหกิจศึกษากับโปรดักต์จริง ประกอบด้วยการ สร้าง ลบ ดูข้อมูล และอัพเดตข้อมูลสินค้าได้ สามารถเพิ่มหมวดหมู่และหน่วยสินค้าได้",
        link: "https://github.com/Chisanuphong2407/side-project",
        link2: "https://github.com/Chisanuphong2407/side-project-BE",
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
              video={data.video || null}
              image={data.image || null}
              title={data.title}
              detail={data.detail}
              tools={data.tools}
              classNameProp="widecard-animated" // ส่ง className เข้าไปให้ Widecard
              styleProp={{ animationDelay: `${animationDelay}s` }} // ส่ง inline style เข้าไป
              linkTo={data.link}
              link2To={data.link2 || null}
            />
          );
        })}
      </div>
    );
  }
}

export default Project;
