import { useState } from "react";

const Title = () => (
    <a href="/">
    <img className="logo" alt="logo" src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg"/>
    <h1 className="apptitle">Food Villa</h1>
    </a>
)

const HeadingComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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
            {
                isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)}>LogOut</button> : <button onClick={()=>setIsLoggedIn(true)}>Login</button>
            }
        </div>
    )
}
export default HeadingComponent;