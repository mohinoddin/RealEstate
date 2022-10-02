import "./Header.css"
// import {CgChevronDown} from  "react-icons/cg";
// import {BiUser} from  "react-icons/bi";
import Logout from '../logout'
import user from '../../icons/user.png'
import dropdown from '../../icons/dropdown.png'

const Header = ()=>{

    const userId = localStorage.getItem("userid");
    const userName= userId.split('@')[0]

    return(
        <>

        <div className='headercontainer'>
       <div className='userid'>USER ID: {userId}</div>
       
       <div className='dropdown'><img src={user} width='16px' height='16px' alt=""/> 
         {userName} <img src={dropdown} width='16px' height='16px' alt=""/>
       <div className="dropdown-content">
        <Logout />
         
            {/* <a href="/logout">Logout</a> */}
       </div>
       </div>
       
       </div>

       <div className="headerbtmline"></div>

        </>
    )
}
export default Header