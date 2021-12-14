//imports
import React from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Layout from './components/Layout'
import Home from "./components/Home"
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Guitars from "./components/Guitars"

import Stores from "./components/Stores";

import GuitarState from "./context/Guitar/GuitarState";
import StoreState from "./context/Store/StoreState";

const Router = ()=>{
  return (
      <>
      <GuitarState>
          <StoreState>

         <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
                {/*localhost:3000/ */}
                <Route index element={<Home/>}/>
                <Route path="registro" element={<Register/>}/>
                <Route path="iniciar-sesion" element={<Login/>}/>  
                <Route path="guitarras" element={<Guitars/>}/>
                <Route path="tiendas" element={<Stores/>}/>
              </Route>
          </Routes>
        </BrowserRouter>

        </StoreState>
        </GuitarState>
      </>
  )
}

export default Router