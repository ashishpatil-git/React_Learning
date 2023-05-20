import { useState } from "react";
import sfLogo from "../../assets/images/sfLogo.jpg";
import { Link } from "react-router-dom";

const Title = () => (
    <Link to="/">
    <img className="logo" alt="logo" src={sfLogo}/>
    <h1 className="apptitle">Food Villa</h1>
    </Link>
)

const HeadingComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <div className="heading">
            <Title />
            <div className="nav-items">
                <ul className="nav-items-list">
                    <li><Link to="/">Home</Link></li>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                </ul>
            </div>
            {
                isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)}>LogOut</button> : <button onClick={()=>setIsLoggedIn(true)}>Login</button>
            }
        </div>
    )
}
export default HeadingComponent;