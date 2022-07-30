import Signup from "./components/signup";
import Signin from "./components/signin";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';

function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Signin/>}></Route>
  <Route path="/signup" element={<Signup/>}></Route> 
  </Routes>
  </BrowserRouter>
  );
}

export default App;
