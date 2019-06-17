const initState = {
    MESSAGE:null
} 
const AddActions = (state = initState, action) => {
   switch(action.type){
       case "DoctorIDError":
           return {
               ...state,
               MESSAGE:"ID NOT FOUND"
           }
     case "DoctorIDfound":
            return {
                ...state,
                MESSAGE:"ID Found"
            }  
      
    
     default:
       return state;
   }
 };
 
 export default AddActions ;