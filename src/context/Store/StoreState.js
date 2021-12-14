import { useReducer } from "react";
import StoreContext from "./StoreContext";
import StoreReduce from "./StoreReduce";



const StoreState = (props) =>{
    const initialState = {
        stores: [],
        hello:"world"
    }

    //creacion de estadoo global
    const [globalState, dispatch]  = useReducer(StoreReduce, initialState)

    const cambiaTexto = () =>{
        dispatch({
            type:"CAMBIA_TEXTO",
            payload:"Estoy aprendiendo Context bien?."
        })
    }
    return (
        //provider: Le va a dar acceso a todos los components para que tengan el estado global
        <StoreContext.Provider
          value={{
             stores: globalState.stores,
             hello: globalState.hello,
             cambiaTexto
          }
         }
        >
            {props.children}
 
        </StoreContext.Provider>
    )
 }
 
 export default StoreState

