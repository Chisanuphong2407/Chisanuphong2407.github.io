import React,{ Component } from 'react'
import navitems from './Navitems'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state= {
            "Navitemactive": ''
        }
    }

    render(){
        return(
            <nav>
                <ul>
                    <navitems item="Home" tolink="/"></navitems>
                    <navitems item="About me" tolink="/About"></navitems>
                    <navitems item="Education" tolink="/Education"></navitems>
                    <navitems item="skills" tolink="/skills"></navitems>
                    <navitems item="contact" tolink="/contact"></navitems>
                </ul>
            </nav>
        )
    }
}