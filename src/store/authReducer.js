const initState = {
  USERNAME:null,
  TYPE:null,
  PASSWORD:null,
  MESSAGEERROR:null
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case"LOGIN":
        console.log("logn from here "+action.user); 
        return {
          ...state,
          USERNAME:state.USERNAME,
          TYPE:state.TYPE,
          USERNAME:action.user.Username,
          TYPE:action.user.Type,
          PASSWORD:null,
          MESSAGEERROR:null
      };
     case "LOGINERROR":
        console.log("error"); 
        return {
          ...state,
          MESSAGEERROR:"LOGIN is Filed , some thing is error , check choose ALL fileds"
      };
     case "LOGOUT":
        console.log("eLOGOUT"); 
        return {
          ...state,
          USERNAME:state.USERNAME,
          TYPE:state.TYPE,
          USERNAME:null,
          TYPE:null,
          PASSWORD:null,
          MESSAGEERROR:null
      };
    default:
      return state;
  }
};

export default authReducer;