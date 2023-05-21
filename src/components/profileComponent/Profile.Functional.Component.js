// WE DO NOT MUTATE STATE DIRECTLY, INSTEAD WE USE UPDATING Function.
import { useState } from "react";

const ProfileFunctionalComponent = (props) =>{
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    return(
        <div>
            <h2>This is a Profile Functional Component</h2>;
            <h2>Props are accessed as : {props.name}</h2>
            <h2>Count is accessed as : {count1}</h2>
            <button onClick={()=>setCount1(count1+1)}>Update Count</button>
        </div>
    )
}
export default ProfileFunctionalComponent;