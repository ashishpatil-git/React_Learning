import { Outlet } from "react-router-dom";
import React from "react";
import ProfileFunctionalComponent from "../profileComponent/Profile.Functional.Component";
import Profile from '../profileComponent/Profile.Class.Component';
// const About1 = () =>{
//     return (
//         <div>
//             <h1>We are on About US Page</h1>
//             <p>This is from Namaste React Session 9 -- React router learnings </p>
//             <ProfileFunctionalComponent name={"Vijay"}/>  {/*Normal way we call our Functional Component */}
//             <Profile name={"Sanjay"}/> 
//             {/* Commenting below for a while as it will not render the child component until avobe once is present. */}
//             <Outlet />                      {/*Routed Child Components will be called in place of Outlet */}
//         </div>
//     )
// }

class About extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("Parent - componentDidMount");
    }

    componentDidUpdate(prevProps,prevState){
        // Will not be called if no update happens to state variables.
        console.log("Parent - componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("Parent - componentWillUnmount");
    }

    render(){
        return (
            <div>
                <h1>We are on About US Page</h1>
                <p>This is from Namaste React Session 9 -- React router learnings </p>
                <Profile name={"Sanjay"}/> {/*We have used Class component so comment else part*/}
                {/* <ProfileFunctionalComponent name={"Vijay"}/>  Normal way we call our Functional Component */}
                {/* Commenting below for a while as it will not render the child component until avobe once is present. */}
                {/* <Outlet />                      Routed Child Components will be called in place of Outlet */}
            </div>
        )
    }
}
export default About;