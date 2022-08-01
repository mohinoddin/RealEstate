import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import "./signin.css"


const Signin = () => {

    const[visibility,setVisibility]=useState(false);

    const toggleBtn=()=>{
        setVisibility(prevVisibility=>!prevVisibility)
    }
   
    let navigate = useNavigate()

    const naviSignup = () => {
        navigate("/signup")
    }
    const [signindata, setSignindata] = useState({ email:"", password:"" })

    const handleLogin = () => {
        axios({
           
            url: "http://localhost:3001/signin",
            method: "POST",
            headers: {
                

            },
            data: signindata
        }).then((res) => {
            
            localStorage.setItem("authorization", res.data.authToken);
            if(res.data.authToken.length>0){
                alert(`${signindata.email} signed in sucessfully`) 
                  
                navigate("/listproperty")
            }
            
         

        }).catch((err) => {
            alert(err.response.data)
            if(err.response.data==="email not exist please signup"){
                navigate("/signup")
            }
          
        })

    }

    return (
        <div className="logincontainer">
            <div className="logbox">
            <h1 className="logologin">Logo</h1>
            <p  className="paragraph2">Enter your credentials to access your account </p>
            {/* <form > */}
                <div>
                <input className="logininput1" placeholder="Email ID" type="text" onChange={(e) => { setSignindata({ ...signindata, email: e.target.value }) }} />
                </div>
                <div className="input-wrapper">
                <input  className="logininput2"placeholder="Password" type={visibility?"text":"password"} onChange={(e) => { setSignindata({ ...signindata, password: e.target.value }) }} />
                <button className="btn" onClick={toggleBtn}>{
                visibility?<AiOutlineEye/>:<AiOutlineEyeInvisible/>
                }</button>
                </div>
                <button className="signin" onClick={handleLogin}>Sign In</button>
                <p className="mukku" onClick={naviSignup}>Sign up</p>
                </div>
                
             {/* </form> */}
             <div className="pandu">
             <span >Don't have an account?</span>
             <p className="blue" onClick={naviSignup}>Sign up</p>
             </div>
           
        </div>
    )
}

export default Signin
