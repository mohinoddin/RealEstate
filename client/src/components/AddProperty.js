import "./PropertyView.css"
// import Addproperty from "./addproperty";
import SideNavBar from "./sidenavbar/SideNavBar";
import Header from "./headerpage/Header";


const Signup = ()=>{
    return(
        <>
        <div  className="maincontainer">
       <div  className="sidenav">
        <SideNavBar />
       </div>

       <div  className="subpart">
       <div className="headerpart">
       <Header />
       </div>

       
       
       
       {/* <div className="propertylstpart"> <Addproperty /></div> */}
       
       </div>

       </div>

        </>
    )
}
export default Signup