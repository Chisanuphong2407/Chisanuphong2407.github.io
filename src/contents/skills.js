import React, { Component } from 'react'

class Skills extends Component {
    constructor(props){
        super(props);

        this.state = {
            "Myskills": ["Javascript","HTML","CSS","SQL","React Native","Node.js","Expo","Figma","Github","Mysql","express.js","draw.io","Postman"]
        }
    }

    render() {
        return (
            <div className='condiv skills'>
                <h1>
                    <ul>
                        {this.state.Myskills.map((value) => {
                            return(
                                <li>{value}</li>
                            )
                        })}
                    </ul>
                </h1>
            </div>
        )
    }
}

export default Skills;