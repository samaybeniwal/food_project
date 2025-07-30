import React from "react";
import UserClass from "../components/UserClass";

class About extends React.Component{
    constructor(props){
        super(props)
        this.state ={
           userInfo :{

           }
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/samaybeniwal")
        const json = await data.json()
        console.log(json)
        this.setState({
            userInfo:json
        })

    }
    render(){
        const {name} = this.state.userInfo
        return(
            <div>
                <h1> Name : {name} </h1>
                <UserClass /> 
            </div>
        )
    }
}

export default About