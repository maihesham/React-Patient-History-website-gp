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
    case "type_OR_id_wrong_TRY_again":
        return{
            ...state,
            MESSAGE:"type_OR_id_wrong_TRY_again"
        }        
    case "user_deleted":
                return{
                    ...state,
                    MESSAGE:"Deleted"
                } 
    case "id_is_wrong_try_again":
        return{
            ...state,
            MESSAGE:"id is wrong TRY again"
        } 
    case "Addes":
                return{
                    ...state,
                    MESSAGE:"Addes"
                } 
    case "server_error_please_try_again":
        return{
            ...state,
            MESSAGE:"server_error_please_try_again"
        }                             
    
     default:
       return state;
   }
 };
 
 export default AddActions ;