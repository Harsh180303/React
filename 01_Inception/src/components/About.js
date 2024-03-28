// import User from "./User";
// import UserClass from "./UserClass";

// const About = () => {


    
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Harsh's Learning path</h2>
//             {/* <User name={"Harsh (function)"} /> */}

//             <UserClass name={"Harsh (class)"} location={"Bhopal"}/>
//         </div>
//     )
// }

// export default About;

import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        
        return (
            <div>
                <h1>About</h1>
                <h2>This is Harsh's Learning path</h2>
                {/* <User name={"Harsh (function)"} /> */}
                <UserClass name={"Harsh Chourasiya"} location={"Bhopal"}/>
            </div>
        )
    }
    
}

export default About;