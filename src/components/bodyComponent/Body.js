import RestaurantCard from "../restaurantCard/RestaurantCard";
import React, { useEffect, useState } from "react";
import ShimmerUI from "../shimmerUiComponent/shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/helper";
import useAllRestaurants from "../../utils/customHooks/useAllRestaurants";
import useOnline from "../../utils/customHooks/useOnline";

const Body = () => {
    //   *****************Custom hook used instead***************************
    // const [allRestaurants, setAllRestaurants] = useState([]);
    const allRestaurants = useAllRestaurants();

    const [searchInput, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    //   *****************Custom hook used instead***************************
    useEffect(() => {
        setFilteredRestaurants(allRestaurants);
    }, [allRestaurants]);

    // useEffect(() => {
    //     getRestaurants();
    // }, []);
    // console.log("rendered");
    // async function getRestaurants() {
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.029844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING");
    //     const jsonData = await data.json();
    //     setAllRestaurants(jsonData?.data?.cards[0]?.data?.data?.cards);
    //     setFilteredRestaurants(jsonData?.data?.cards[0]?.data?.data?.cards);
    //     return jsonData;
    // }
//   *****************Custom hook useAllRestaurants used instead***************************

    //Handling the case if user goes offlince during rendering using custom hook. (tested using Network tab offline option)
    const isOnline = useOnline();
    if(!isOnline) return <h1>You are Connected to your internet, Please check the Connection...</h1>
    
    // Early Return-->Way to avoid Component Rendering When No Data Present
    if(!allRestaurants) return null;

    // Condition Rendering
    return (allRestaurants.length == 0) ? <ShimmerUI units={10} /> : (
        <>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="search"
                    className="search-input"
                    value={searchInput}
                    onChange={(e) => setSearchText(e.target.value)}
                ></input>
                <button className="search-btn" onClick={() => {
                    const data = filterData(searchInput, allRestaurants);
                    setFilteredRestaurants(data);
                }}>Search</button>
            </div>
            <div className="restaurant-list">
                {(filteredRestaurants?.length==0) ? <h1>No restaurant matches your Search</h1> : filteredRestaurants.map((response) => (
                    <Link to={"/restaurant/"+response.data.id}><RestaurantCard {...response.data} key={response.data.id} /></Link>
                ))}
            </div>
        </>
    );
};

export default Body;
