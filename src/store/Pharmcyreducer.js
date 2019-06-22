const initState = {
  
   id:null,
   MEDICIEN:[]
   ,MESSAGETHI:null
} 
const searchPAtientforPharmcyReducer = (state = initState, action) => {
   switch(action.type){
       case "SEARCH_FOR_Pharmcy_GET_PATIENT":
           console.log("search here");
           return {
               ...state,
             id:action.info.id
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
            id:null
            , MEDICIEN:null,
            MESSAGETHI:"THink for Comment"
           }     
    
     default:
       return state;
   }
 };
 
 export default searchPAtientforPharmcyReducer;