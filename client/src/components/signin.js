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
        console.log(signindata)
        axios({
           
            url: "http://localhost:3001/signin",
            method: "POST",
            headers: {

            },
            data: signindata
        }).then((data) => {
            console.log("1")
            localStorage.setItem("authorization", data.data.authToken);

            navigate("/listproperty")
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })

    }

    return (
        <div className="container">
            <h1>Logo</h1>
            <p>Enter your credentials to access your account </p>
            {/* <form > */}
                <div>
                <input className="password-field" placeholder="Email ID" type="text" onChange={(e) => { setSignindata({ ...signindata, email: e.target.value }) }} />
                </div>
                <div className="input-wrapper">
                <input  className="password-field"placeholder="Password" type={visibility?"text":"password"} onChange={(e) => { setSignindata({ ...signindata, password: e.target.value }) }} />
                <button className="btn" onClick={toggleBtn}>{
                visibility?<AiOutlineEyeInvisible/>:<AiOutlineEye/>
                }</button>
                </div>
                
             {/* </form> */}
             <button onClick={handleLogin}>Sign in</button>
             
             
            <p onClick={naviSignup}>Sign up</p>
        </div>
    )
}

export default Signin