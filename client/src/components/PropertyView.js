import "./PropertyView.css"
import PropertyList from "./propertylist/PropertyList";
import SideNavBar from "./sidenavbar/SideNavBar";
import Header from "./headerpage/Header";

const PropertyView = ()=>{
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

       
       
       
       <div className="propertylstpart"> <PropertyList /></div>
       
       </div>

       </div>
        </>
    )
}
export default PropertyView