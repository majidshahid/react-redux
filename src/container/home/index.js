import { Link } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import { GetdatafromAPi } from "../../store/Action";
function Home (){

   
    const store =useSelector(state=>state);
    var dispatch = useDispatch()
    console.log(store)


    function update(){
        dispatch(GetdatafromAPi())
        console.log(store)
            }
            // console.log(store.Auth.User[2].name)
    return(
        <div>
            <h1>Home</h1>
       <h2>{store.Auth.Email}</h2>
       {/* <h2>{store.Auth.User[0]}</h2> */}
    
       <h2>{store.App.name}</h2>
            <Link to="/About">About</Link>
            <button onClick={update}>update</button>
        </div>
    )
}
export default Home;