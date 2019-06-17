const initState = {
  
   AGE:null,
   GENDER:null
   ,BLOODTYPE:null
   ,DESISES:[],
   MEDICIEN:[]
   ,MESSAGETHI:null
} 
const searchPAtientforPharmcyReducer = (state = initState, action) => {
   switch(action.type){
       case "SEARCH_FOR_Pharmcy_GET_PATIENT":
           console.log("search here");
           return {
               ...state,
               AGE:action.info.AGE,
               GENDER:action.info.GENDER
               ,BLOODTYPE:action.info.BLOODTYPE
               ,DESISES:action.info.DESISES
               , MEDICIEN:action.info.MEDICIEN,
               MESSAGETHI:null
           }
        case "GETIFO_Pharmcy_patient" :
            return {
               ...state
               ,MESSAGETHI:null
           }
       case "COMMENT":
           return{
            ...state,
            AGE:null,
            GENDER:null
            ,BLOODTYPE:null
            ,DESISES:null
            , MEDICIEN:null,
            MESSAGETHI:"THink for Comment"
           }     
    
     default:
       return state;
   }
 };
 
 export default searchPAtientforPharmcyReducer;