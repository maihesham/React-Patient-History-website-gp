export const LoginTOREDX=(user)=>{
    return {
        type:'LOGIN',
        user:user
    }
   
};

export const LogOUTTOREDX=()=>{
    return {
        type:'LOGOUT'
    }
   
};

export const ERROR=()=>{
    return {
        type:'LOGINERROR'
    }
   
};