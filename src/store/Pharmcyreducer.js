const initState = {
  
   id:null,
   MEDICIEN:[]
   ,MESSAGETHI:null,
   numComments:0
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
           console.log(action.info)
           return{
            ...state,
            id:null
            , MEDICIEN:null,
            MESSAGETHI:"THink for Comment",
            numComments:action.info
           }     
    
     default:
       return state;
   }
 };
 
 export default searchPAtientforPharmcyReducer;