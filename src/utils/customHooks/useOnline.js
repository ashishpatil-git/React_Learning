import { useState,useEffect } from "react";

const useOnline = () =>{
    const [isOnline,setIsOnline] = useState(true);

    
    useEffect(()=>{
        const handleOnline = () =>{
            setIsOnline(true);
        }
        const handleOffline = () =>{
            setIsOnline(false);
        }
        
        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);

        // Similar to code cleaning in componentWillUnmount in class component, we can do same thing here as,
        return ()=>{
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
        }
    },[]);

    return isOnline;
}

export default useOnline;