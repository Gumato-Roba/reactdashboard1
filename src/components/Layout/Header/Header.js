import React from "react";
import "./header.css";
import { FaUserCircle, FaRegSun, FaRegBell} from "react-icons/fa";
import Img from '../../../imgs/profile.png'

export const Header = ({children}) => {
    return (
        
        <div className="icons">
            <div className="image">
                <img src={Img} alt="profile"/>
            </div>
            
            <FaRegSun />
            <FaRegBell />
            {children}
        </div>
       
    );

    


};
export default Header;