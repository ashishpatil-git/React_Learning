// Here we will create class components instead of functional one.
// we need to extent class to React.Component to clear class component.
// render(){} method here retuns the required JSX that needs to be rendered in DOM.
// In order to access props in class component, we can access them as "this.props".
// Alternative of useState in class component is by creating a constructor and using "this.state" method.
// "this.state" can be used to set initial value to our state variables.
// In class component, we can write multiple "this.state" so we can create multiple state variable wrapped inside a single "this.state" object
// WE DO NOT MUTATE(UPDATE) STATE DIRECTLY, INSTEAD WE USE UPDATING Function.
// In order to update state variable in class component, we use "this.setState" function.
// componententDidMount(){} in Class component is an alternative of useEffect() Hook and is a best place to make an API call.
// componententDidMount(){} is only called Once.
// componententDidUpdate(){} is called on every state update.
/*
Homework :-
1. when passing props to class constructor,why do we write super(props).
2. How does this.setState works.
*/

import React from "react";

class Profile extends React.Component{
    // render(){} --> This is the heart of class component--> this returns the JSX to DOM.
    constructor(props){
        super(props);
        // Setting initial value of state
        this.state = {
            userInfo : {    //state variable 1
                name : "Fake Name",  
                location : "Dummy Location"  
            },    
            count1 : 0      //state variable 2
        }
    }

    async componentDidMount(){
        // Best place to fetch API call.
        const linkedinData = await fetch("https://api.github.com/users/mayush-ash");
        const responseData = await linkedinData.json();
        this.setState({
            userInfo : responseData
        })
        console.log("componentDidMount");
        // this.timer = setInterval(()=>console.log("Hello ji"),1000)
    }

    componentDidUpdate(prevProps,prevState){
        // renders on every state Update
        // Called when you move from current component to another component --Akshay SAIni -Class 10, 2:33:40
        // Will not be called if no update happens to state variables.

        console.log("componentDidUpdate");
        // Similar to dependency array in useEffect, here also we can implement same logic using below logic.
        // If we use count1 in useeffect dependency array, we implement here as,
        if(this.state.count1!=prevState.count1 || this.state.userInfo!=prevProps.userInfo){
            //some logic
        }
        // if there's a requirement to implement logic for two state variables, people use to write two if conditions.
    }

    componentWillUnmount(){
        // Run cleanup activity
        // clearInterval(this.timer);
        console.log("componentWillUnmount");
    }

    render(){
        const {count1} = this.state;
        return (
            <div>
                {/* <h1>This is a Profile Class Component</h1>
                <h2>Props are accessed as : {this.props.name}</h2>
                <h2>Normal way to access Count : {this.state.count1}</h2>
                <h2>Count is accessed as : {count1}</h2>
                <h2>object is accessed as : {Object.keys(this.state.userInfo).join(",")}</h2> */}
                {/* WE DO NOT MUTATE STATE DIRECTLY, INSTEAD WE USE UPDATING Function. */}
                {/* NEVER DO this.state.count=1..not a good practice */}
                {/* <button onClick={()=>this.setState({
                    count1 : count1+1,   //Updating state variable "count1"
                    count2 : count1+1    //Updating state variable "count2"
                })}>Update Count</button> */}

                <h1>This is a Profile Class Component</h1>
                <img src={this.state.userInfo.avatar_url} />
                <h2>UserName is : {this.props.name}</h2>
                <h2>Name : {this.state.userInfo.name}</h2>
                <h2>Location : {this.state.userInfo.location}</h2>
            </div>
        )
    }
}

export default Profile;