import { useNavigate } from "react-router-dom"

const Logout=()=>{
    const nav=useNavigate()
    const logoutHandle=()=>{
localStorage.setItem(aut)
    }

    return(
<button onClick={logoutHandle}>Logou</button>
    )
}