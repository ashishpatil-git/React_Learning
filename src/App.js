// HMR - Hot Module Reloading
// File Watcher Algorithm - C++
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

import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "../src/components/headerComponent/Header"
import Body from "../src/components/bodyComponent/Body";
import Footer from "../src/components/footerComponent/Footer";

const AppLayout =() =>{
    return(
        <React.Fragment>
            <HeaderComponent />
            <Body />
            <Footer />        
        </React.Fragment>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);