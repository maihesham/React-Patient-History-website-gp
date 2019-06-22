const initState = {
  USERNAME:null,
  TYPE:null,
  PASSWORD:null,
  MESSAGEERROR:null,
  NUMOFCOMMENTS:null
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case"LOGIN":
        console.log("logn from here "+action.user+" "+sessionStorage.getItem('username')); 
        return {
          ...state,
          USERNAME:state.USERNAME,
          TYPE:state.TYPE,
          USERNAME:action.user.Username,
          TYPE:action.user.Type,
          PASSWORD:null,
          MESSAGEERROR:null,
          NUMOFCOMMENTS:action.user.numofcomments
      };
     case "LOGINERROR":
        console.log("error"); 
        return {
          ...state,
          MESSAGEERROR:"LogIn is failed , some thing is error , check choose ALL fileds"
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
      case"cOOMENTINCReaseONE":
      console.log("CommentHERE"); 
      return {
        ...state,
        NUMOFCOMMENTS:state.NUMOFCOMMENTS+1
    }; 
    default:
      return state;
  }
};

export default authReducer;