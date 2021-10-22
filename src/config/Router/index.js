import {BrowserRouter as Router,Route, Switch}from "react-router-dom";
import {Home,About} from "../../container/index"


function AppRouter (){
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/About" component={About}/>
            </Switch>
        </Router>
    )
}
export default AppRouter;