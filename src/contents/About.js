import React, { Component } from 'react'
import profilepic from "../img/profile.jpeg"

class About extends Component {
    render() {
        return(
            <div className='condiv About'>
                <h1 className='subtopic'>About me</h1>
                <img src={profilepic} alt="profile" className="profilepic" />
                <h3> Hi!, I'm Chisanuphong Jampathep</h3>
                <p>สวัสดีครับ ผมนายชิษณุพงศ์ จำปาเทพ กำลังศึกษาอยู่ที่มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตเฉลิมพระเกียรติ จ.สกลนคร สาขาวิทยาการคอมพิวเตอร์ชั้นปีที่ 4 มีความสนใจเกี่ยวกับการพัฒนาโปรแกรมในแพลตฟอร์ม Mobile เป็นพิเศษ แต่พร้อมที่จะเรียนรู้ในด้านอื่นๆ ในสายงานของโปรแกรมเมอร์ เช่น web developer, tester เป็นต้นครับ</p>
            </div>
        )
    }
}

export default About;