//funciones en GuitarReduce



const reducer = (globalState, action) =>{

    switch(action.type){ //ESTE OBJETO SE LE CONOCE COMO ACTION

         case "GET_GUITARRAS":
            return {
				...globalState,
				guitars: action.payload
			}

        case "CHANGE_TEXT":
            return {
                ...globalState,
                hola:action.payload
            }


        default:
            return globalState

    }
}

export default reducer