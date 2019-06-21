const initState = {
     userID:null, 
     NAME:null
    ,NATIONALID:null
    ,PHONECANCALL:null
    ,AGE:null,
     BLOODTYPE:null
    ,DESISES:[]
} 
const searchPAtientReducer = (state = initState, action) => {
    switch(action.type){
        case "SEARCH_FOR_HOSPITAL_GET_PATIENT":
            console.log("search here");
            return {
                ...state,
                 userID:action.info.userID,
                 NAME:action.info.NAME
                ,NATIONALID:action.info.NATIONALID
                ,PHONECANCALL:action.info.PHONECANCALL
                ,AGE:action.info.AGE,
                BLOODTYPE:action.info.BLOODTYPE
                ,DESISES:action.info.DESISES
            }
         case "GETIFO_HOstial_patient" :
             return {
                ...state
            }
     
      default:
        return state;
    }
  };
  
  export default searchPAtientReducer;