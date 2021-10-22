import { Link } from "react-router-dom";
import {useSelector,useDispatch}from "react-redux"
function About (){
    const A= useSelector(state=>state)
    const dispatch =useDispatch()
    console.log(A)
    return(
        <div>
            <h1>About</h1>
            <h2>{A.name}</h2>
            <button onClick={()=>dispatch({type:"update", name:"shahid"})}>click</button>
            <Link to="/">Home</Link>
        </div>
    )
}
export default About;