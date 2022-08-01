import {  useNavigate } from "react-router-dom"

const Logout=()=>{
    const nav=useNavigate()
    const logoutHandle=()=>{
        localStorage.clear()
// localStorage.setItem("authorization","")
 nav("/")
    }

    return(
<button onClick={logoutHandle}>Logou</button>
    )
}
export default Logout