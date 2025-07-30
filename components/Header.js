import { useState } from "react"
import { Link } from "react-router"
import { useState } from "react"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = ()=>{
    const[btn,setBtn] = useState("login")
    const onlineStatus = useOnlineStatus();
    return(
        <div className="header">
            <div className="logo-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRESsGm92deQDTJR9fiWcHZ8S94NCmFLSkkQg&s" alt="image" id="logo"/>
            </div>
            <div className="nav-items">
                <ul className="nav-items">
                    <li> 
                        <Link to = "/"  className="nav-links">Home</Link>
                    </li>
                    <li> 
                        <Link to = "/about" className="nav-links">About</Link>
                    </li>
                   <li> 
                        <Link to = "/contact" className="nav-links">Contact</Link>
                    </li>
                    <li className="nav-links">Cart</li>
                    <li>Online Status : {onlineStatus === true ?"✅" : "🔴"}</li>
                </ul>
            </div>
            <button className="btn"
            onClick={()=>{
                 btn ==="login"
                 ? setBtn("logout")
                 :setBtn("login")
            }}
            >{btn}</button>

        </div>
    
    )
}
export default Header