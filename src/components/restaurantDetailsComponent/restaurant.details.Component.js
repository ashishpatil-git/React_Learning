// Here's how we read the dynamic route URL params using useParams Hook. 
import { useParams } from "react-router-dom";
import { baseURL,SAMPLE_MENU } from "../../constants/apiConstants";
import { useEffect, useState } from "react";
import ShimmerUI from "../shimmerUiComponent/shimmer";

const RestaurantDetails = () =>{
    // const reqParams = useParams();
    const {id} = useParams();
    const [restautant,setRestaurant] = useState([]);
    const [restoImg,setrestoImg] = useState("");
    
    useEffect(()=>{
        getRestoDetals();
    },[]);
    useEffect(()=>{
        getRestoImg(id);
    },[restautant])
    // console.log(restautant[0].data.id);
    
    const getRestoDetals = async() =>{
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.029844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING");
        // const response = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId");
        const jsonData =  await response.json();
        setRestaurant(jsonData?.data?.cards[0]?.data?.data?.cards);
    }
    async function getRestoImg(resID){
        const filtered = restautant?.filter((item)=>item.data.id==resID);
        // console.log("filtered",resID,filtered[0]?.data);
        setrestoImg(filtered[0]?.data);
    }

    if(!restautant) return null;

    return (restautant.length==0) ? <ShimmerUI units={4}/> : (
        <>
        <div className="menu-item-list">
            <div>
            {/* <h1>Restaurant ID : {reqParams.id}</h1> */}
            <h1>Restaurant ID : {id}</h1>
            <h3>Restaurant-name : {restoImg?.name}</h3>
            <img className="restaurant-img" src={baseURL + restoImg?.cloudinaryImageId}></img>
            </div>
            <div>
            <h3>Menu Items</h3>
            <ol>
                {/* {    
                    SAMPLE_MENU["menu-items"].map((item)=>{
                        return (<li>{item}</li>);
                    })
                } */}
                {    
                    Object.values(SAMPLE_MENU["menu-items"]).map((item)=>{
                        return (<li>{item}</li>);
                    })
                }
            </ol>
            </div>
        </div>
        <h3 className="welcome-msg">Thank you for the Visit</h3>
        </>
    )
};

export default RestaurantDetails;