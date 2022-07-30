import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"


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
                console.log(res)
                navigate("/")
            }).catch((err) => {
                console.log(err)
            })
        } else {
            alert("pasword and confirmpassword should be same")
        }
    }
    const navisignin=()=>{
        navigate("/")
    }
    return (
        <div className="container">
            <div className="box">
                <h1>Logo</h1>
                <p>Create New Account</p>
                <form>
                    <div id="email">
                        <input type="text" placeholder="Email ID" onChange={(e) => { setSignupData({ ...signupData, email: e.target.value }) }} />
                    </div>
                    <div id="password">
                        <input type="password" placeholder="Password" id="password" onChange={(e) => { setSignupData({ ...signupData, password: e.target.value }) }} />
                    </div>
                    <div id="confirmpassword">
                        <input type="password" placeholder=" confirm password" id=" confirm password" onChange={(e) => { setSignupData({ ...signupData, confirmpassword: e.target.value }) }} />
                    </div>
                </form>
                <button onClick={handleSignup}>Sign Up</button>
            </div>
            <p onClick={navisignin}>Sign-in</p>
        </div>

    )
}
export default Signup