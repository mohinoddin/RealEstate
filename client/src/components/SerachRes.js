import "./propertylist/PropertyList.css"
import { BsSearch ,BsPlus} from "react-icons/bs";
import AddProperty from './AddProperty'
import { Link } from 'react-router-dom';
const SearchRes = ()=>{

    return(
        <>

<div className='seracharea'>
        
        {/* <input type='text' className='searchbtn' placeholder='Search ppd id'></input> */}
 
 
 
 <div class="searchbtn">
   <input type="text" placeholder="Search ppd id" className="isearch" />
   <button type="submit" className="isearchbtn"><BsSearch className="btncolor"/></button>
 </div>
        
        {/* <button type='sumbit' className='addbtn' onClick={signup}> 
        <BsPlus /> Add Property
        </button> */}
        <Link to='/addproperty'><button type='sumbit' className='addbtn' onClick={AddProperty}> 
        <BsPlus /> Add Property
        </button></Link>
        </div>
        </>
        


    )
}
export default SearchRes