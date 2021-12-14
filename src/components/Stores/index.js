import React, {useEffect, useContext} from "react";
import StoreContext from "../../context/Store/StoreContext";


export default function Stores() {
    const ctx = useContext(StoreContext)
    const {stores, hello, cambiaTexto} = ctx
    return (
        <>
           <p> Listado de Stores</p>
           <p>{hello}</p>
           <button onClick={()=>{cambiaTexto()}}>
               Cambiar el otro texto
           </button>
        </>
    )
}
