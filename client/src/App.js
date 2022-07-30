import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PropertyView from './components/PropertyView';
import AddProperty from './components/AddProperty';
function App() {
  return (
    <div className="App">
   
      

      <BrowserRouter>
      <Routes>
            <Route path="/" element={<PropertyView/>}></Route>
           
            <Route path="/addproperty" element={<AddProperty/>}></Route>        
          </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
