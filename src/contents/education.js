import React, { Component } from "react";
import Widecard from "../components/Widecard";
import schoolpic from "../img/school.jpeg";
import universitypic from "../img/university.jpeg";

class Education extends Component {
  render() {
    const delaystep = 0.2;
    const education = [
      {
        img: schoolpic,
        title: "มัธยมศึกษาปีที่ 6",
        where: "โรงเรียนหนองบัวฮีวิทยาคม",
        detail:"สายการเรียน วิทย์-คณิต",
        from: "2016",
        to: "2022",
      },
      {
        img: universitypic,
        title: "อุดมศึกษา",
        detail:"สาขาวิทยาการคอมพิวเตอร์",
        where: "มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตเฉลิมพระเกียรติ จ.สกลนคร",
        from: "2022",
        to: "ปัจจุบัน",
      },
    ];
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        {education.map((data, index) => {
        const animationDelay = index * delaystep; // คำนวณ delay สำหรับแต่ละการ์ด

        return (
          <Widecard
            key={index} // ใช้ index เป็น key ชั่วคราว (ควรใช้ unique ID ถ้ามี)
            img={data.img}
            title={data.title}
            detail={data.detail}
            where={data.where}
            from={data.from}
            to={data.to}
            // เพิ่ม className สำหรับแอนิเมชั่น และกำหนด inline style สำหรับ delay
            classNameProp="widecard-animated" // ส่ง className เข้าไปให้ Widecard
            styleProp={{ animationDelay: `${animationDelay}s` }} // ส่ง inline style เข้าไป
          />
        );
      })}
      </div>
    );
  }
}

export default Education;
