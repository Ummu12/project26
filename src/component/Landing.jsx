import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Home } from "./Home";
import { Nav } from "./Nav";
import { Finance } from "./Finance";
import { HR } from "./HR";
import { Account } from "./Account";


 export const Landing=()=>{
    return(
     <BrowserRouter>
     <Nav/>
       <Routes>
        <Route path="/"   element={<Home/>} />
        <Route path="/Finance"   element={<Finance/>} />
        <Route path="/Account"   element={<Account/>} />
        <Route path="/HR"   element={<HR/>} />
       
       
       </Routes>
      
     </BrowserRouter>
    )
}