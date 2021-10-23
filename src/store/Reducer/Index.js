// const Initial_State={
//     name:"majid",
//     email:"majidshhid474@gmail.com"
// }

// const reducer=(state=Initial_State,action)=>{
//     switch (action.type){
//         case("update"):
//         return{
//             ...state,
//             name:action.name
//         }
//         default:
//             return state
//     }
// }
// export default reducer;


import { combineReducers } from "redux";
import App from "./app";
import Auth from "./auth"
const reducer = combineReducers({
    Auth,
    App,
})
export default reducer