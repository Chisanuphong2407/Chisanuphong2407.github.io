import React, { Component } from "react";
import Widecard from "../components/Widecard";
import schoolpic from "../img/school.jpeg";
import universitypic from "../img/university.jpeg";

class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <div className="Widecardcontent">
          <Widecard
            img={schoolpic}
            title="มัธยมศึกษาปีที่ 6"
            where="โรงเรียนหนองบัวฮีวิทยาคม"
            from="2016"
            to="2022"
          />
          <Widecard
            img={universitypic}
            title="อุดมศึกษา"
            where="มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตเฉลิมพระเกียรติ จ.สกลนคร"
            from="2022"
            to="ปัจจุบัน"
          />
        </div>
      </div>
    );
  }
}

export default Education;
