const auth={
Email:"majid shahid@gmail.com "
}

const Auth =(State=auth,action)=>{
switch(action.type){
    case("Update"):
    return{
        ...State,
       
        User:action.User
    }
    case("Add"):
    return{
        ...State,
 
        User:action.User
    }
    default:
        return State
}
}
export default Auth;

