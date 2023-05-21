// When creating custom Hooks, always remember to add "use" before name.
// eg : useRestaurant
import { useState,useEffect } from "react";

const useRestaurant=(id)=>{
    const [restautant,setRestaurant] = useState([]);
    useEffect(()=>{
        getRestoDetals();
    },[]);

    const getRestoDetals = async() =>{
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.029844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING");
        // const response = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId"+id);
        const jsonData =  await response.json();
        setRestaurant(jsonData?.data?.cards[0]?.data?.data?.cards);
    };
    return restautant;
}

export default useRestaurant;