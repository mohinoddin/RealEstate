import "./Header.css"
import {CgChevronDown} from  "react-icons/cg";
import {BiUser} from  "react-icons/bi";
const Header = ()=>{

    const userId = localStorage.getItem("userid");

    return(
        <>

        <div className='headercontainer'>
       <div className='userid'>USER ID: {userId}</div>
       <div className='username'><BiUser /> User Name <CgChevronDown /></div>
       

       </div>

       <div className="headerbtmline"></div>


       

        </>
    )
}
export default Header