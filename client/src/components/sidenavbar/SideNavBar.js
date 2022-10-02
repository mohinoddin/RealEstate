import "./SideNavBar.css"
//import { RiHome3Line } from "react-icons/ri";
//import { IoIosNotifications } from "react-icons/io";
//import { BsFillTagFill } from "react-icons/bs";
//import { GrFormView, GrUpload, GrDownload } from 'react-icons/gr'
import property from '../../icons/property.png';
import bell from '../../icons/bell.png';
import receivedInterest from '../../icons/receivedInterest.png';
import sentInterest from '../../icons/sentInterest.png';
import visible from '../../icons/visible.png';
import tag from '../../icons/tag.png';

const SideNavBar = () => {
   
    return (
        <>
            <div className='sidebarconatiner'>

                <div className="logooption">

                    <header>LOGO</header>
                </div>
                <div className='sidesubcontainer' >
                    <div className="sideoption property">
                        <div><img src={property} width='16px' height='16px' alt=""/></div><div className='navvalue'>Property</div>
                    </div>
                    <div className="sideoption">
                        <div><img src={bell} width='16px' height='16px' alt=""/></div>
                        <div className='navvalue' >Assistant</div>

                    </div>
                    <div className="sideoption">
                        <div><img src={receivedInterest} width='16px' height='16px' alt=""/></div>
                        <div className='navvalue'>Received Interest</div>

                    </div>
                    <div className="sideoption">
                        <div><img src={sentInterest} width='16px' height='16px' alt=""/></div>
                        <div className='navvalue'>Sent Interest</div>

                    </div>
                    <div className="sideoption">
                        <div><img src={visible} width='16px' height='16px' alt=""/></div>
                        <div className='navvalue'>Property View</div>


                    </div>
                    <div className="sideoption">
                        <div><img src={tag} width='16px' height='16px' alt=""/></div>
                        <div className='navvalue'>Traffic Plan</div>

                    </div>
                </div>

            </div>

        </>
    )
}
export default SideNavBar