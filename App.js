// HMR - Hot Module Reloading
// File Watcher Algorithm - C++
import React from "react";
import ReactDOM from "react-dom/client";
import response,{baseURL} from "./data/swiggyData";

const Title = () => (
    <a href="/">
    <img className="logo" alt="logo" src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg"/>
    <h1 className="apptitle">Food Villa</h1>
    </a>
)

const RestaurantCard = ({cloudinaryImageId,name,cuisines,lastMileTravelString}) =>{
    return (
        <div className="card">
            <img src={`baseURL${cloudinaryImageId}`}></img>
            <h3>{name}</h3>
            <h3>{cuisines.join(",")}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
    )
}

const HeadingComponent = () => {
    return(
        <div className="heading">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
/* Normal way to create element but is not feasible if there are bulk to create, so we use map function*/
// const Body = () =>{
//     return (
//         <div className="restaurantList">
//             <RestaurantCard {...response[0].data}/>
//             <RestaurantCard {...response[1].data}/>
//             <RestaurantCard {...response[2].data}/>
//             <RestaurantCard {...response[3].data}/>
//             <RestaurantCard {...response[4].data}/>
//             <RestaurantCard {...response[5].data}/>
//             <RestaurantCard {...response[0].data}/>
//         </div>
//     )
// }

const Body = () =>{
    return (
        <div className="restaurantList">
        {
            response.map(restaurant=><RestaurantCard {...restaurant.data} key={restaurant.data.id}/>)
        }
        </div>
    )
}

const Footer = () =>{
    return (
        <h4>This is Footer</h4>
    )
}

const AppLayout =() =>{
    return(
        <React.Fragment>
            <HeadingComponent />
            <Body />
            <Footer />        
        </React.Fragment>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);