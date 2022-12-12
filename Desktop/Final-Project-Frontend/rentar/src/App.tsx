import * as React from "react";
import Footer from "./Footer/Footer";
import LoginFrom from "./Login/LoginPage";
import  Simple from "./Navbar/Nav";
import Register from "./Register/Register";
import ProtectedRoute from "./Login/ProtectedRouter";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/home'
import Buildinginfo from "./Building/Building";


const navigation = {
  brand: { name: 'Rentar', to: '/' },
  links: [
    { name: 'Login', to: '/' },
    { name: 'Building', to: '/Building' },
    { name: 'Tenant', to: '/tenant' }
  ]
};
function App() {
  const { brand, links } = navigation;
  return (
    <>
   
    < Simple />
    
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Building" element={<Buildinginfo/>}/>
        
        {/* <Route el ement={<ProtectedRoute />}/> */}
          
       </Routes>
      </BrowserRouter>
      <Footer/>
      
     

    </>
  );
}

export default App;