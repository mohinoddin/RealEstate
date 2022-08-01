import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import './signup.css'


const Signup = () => {
    let navigate = useNavigate()

    const [signupData, setSignupData] = useState({ email: "", password: "", confirmpassword: "" })


    const handleSignup = () => {
        if (signupData.password === signupData.confirmpassword) {
            axios({
                url: "http://localhost:3001/signup",
                method: "POST",
                headers: {

                },
                data: signupData
            }).then((res) => {
                if(res==="email already exist"){
                alert("email already exist")
                }else{
                    alert(`${signupData.email} signedup sucessfully`)
                }
                navigate("/")
            }).catch((err) => {
                console.log(err)
            })
        } else {
            alert("pasword and confirmpassword should be same")
        }
    }
    const navisignin = () => {
        navigate("/")
    }
    return (
        <div className="signupcontainer">
            <div className="box">
                <h1 className="logo">Logo</h1>
                <p className="para">Create New Account</p>
                <form>
                    <div id="email">
                        <input className="signup-input" type="text" placeholder="Email ID" onChange={(e) => { setSignupData({ ...signupData, email: e.target.value }) }} />
                    </div>
                    <div id="password">
                        <input className="signup-input" type="password" placeholder="Password" id="password" onChange={(e) => { setSignupData({ ...signupData, password: e.target.value }) }} />
                    </div>
                    <div id="confirmpassword">
                        <input className="signup-input" type="password" placeholder=" Confirm password" id=" confirm password" onChange={(e) => { setSignupData({ ...signupData, confirmpassword: e.target.value }) }} />
                    </div>
                </form>
                <button className="sign"onClick={handleSignup}>Sign Up</button>
            </div>
            <p className="foot" onClick={navisignin}>Sign-in</p>
        </div>
    )
}
export default Signup