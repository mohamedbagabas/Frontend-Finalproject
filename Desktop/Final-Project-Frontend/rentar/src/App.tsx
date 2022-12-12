import * as React from "react";
import Footer from "./Footer/Footer";
import LoginFrom from "./Login/LoginPage";
import NavbarScroller from "./Navbar/Nav";
import Register from "./Register/Register";
import ProtectedRoute from "./Login/ProtectedRouter";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const navigation = {
  brand: { name: 'Rentar', to: '/' },
  links: [
    { name: 'Login', to: '/login' },
    { name: 'Building', to: '/Buidling' },
    { name: 'Tenant', to: '/tenant' }
  ]
};
function App() {
  const { brand, links } = navigation;
  return (
    <>
    <NavbarScroller brand={brand} links={links} />
      <BrowserRouter>
       <Routes>
        <Route path="/Login" element={<LoginFrom/>}/>
        <Route path="/Register" element={<Register/>}/>
        
        {/* <Route element={<ProtectedRoute />}/> */}
          
       </Routes>
      </BrowserRouter>
      <Footer/>
      
     

    </>
  );
}

export default App;