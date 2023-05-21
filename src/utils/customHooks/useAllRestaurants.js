import { useEffect, useState } from "react";
import {BASE_API_URL} from "../../constants/apiConstants";

const useAllRestaurants = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch(BASE_API_URL);
        const jsonData = await data.json();
        setAllRestaurants(jsonData?.data?.cards[0]?.data?.data?.cards);
        // This cannot be set here, so I have handled this using useEffect hook in body component and made this return result as dependency.
        // setFilteredRestaurants(jsonData?.data?.cards[0]?.data?.data?.cards);
    }
    return allRestaurants;
}

export default useAllRestaurants;
