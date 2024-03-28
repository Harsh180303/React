import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "htp://dummy-photo.com"
            }
        }
    } 

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/harshchourasiya")
        const json = await data.json()

        this.setState({
            userInfo: json,
            
        })

        console.log(json)
    }

    componentWillUnmount() {
        console.log("Component Unmount")
    }
    
    render() {
        
        // const { name, location } = this.props
        const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Locatin: {location}</h3>
                <h4>Contact: @Harsh_18_03_03</h4>
            </div>
        )
    }
    
}

export default UserClass;