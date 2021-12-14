const reducer = (globalState, action)=>{

    
  switch(action.type){
      case "CAMBIA_TEXTO":
          return{
              ...globalState,
              hello:action.payload
          }
          default:
              return globalState
  }
}

export default reducer