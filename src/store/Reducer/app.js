const app={
    name:"majid shahid "
    }
    
    const App =(State=app,action)=>{
        switch (action.type){
            case("update"):
            return{
                ...State,
                name:action.name
            }
            default:
                return State
        }
    }
    export default App;
   
        
      