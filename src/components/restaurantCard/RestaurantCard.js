import {baseURL} from "../../constants/apiConstants";

const RestaurantCard = ({cloudinaryImageId,name,cuisines,lastMileTravelString}) =>{
    return (
        <div className="card">
            <img src={baseURL+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h3>{cuisines.join(",")}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
    )
}

export default RestaurantCard;