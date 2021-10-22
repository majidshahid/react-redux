import { Link } from "react-router-dom";
import {useSelector} from "react-redux"
function Home (){
    const store =useSelector(state=>state);
    console.log(store)
    return(
        <div>
            <h1>Home</h1>
       <h2>{store.name}</h2>
            <Link to="/About">About</Link>
        </div>
    )
}
export default Home;