const initState = {
    MESSAGE:null
  }
  
  const clinicReducer = (state = initState, action) => {
    switch(action.type){
      case"ERRORMESSAMGE":
         
          return {
            ...state,
            MESSAGE:action.d
        }; 
      default:
        return state;
    }
  };
  
  export default clinicReducer;