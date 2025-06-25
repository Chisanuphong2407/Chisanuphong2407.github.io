import React,{ Component } from 'react'
import Navitems from './Navitems'

class Navbar extends Component {
    render(){
        return(
            <nav>
                <ul>
                    <Navitems item="Home" tolink="/" ></Navitems>
                    <Navitems item="About me" tolink="/About"></Navitems>
                    <Navitems item="Education" tolink="/Education"></Navitems>
                    <Navitems item="skills" tolink="/skills"></Navitems>
                    <Navitems item="contact" tolink="/contact"></Navitems>
                </ul>
            </nav>
        )
    }
}

export default Navbar