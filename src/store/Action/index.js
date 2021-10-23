 
function GetdatafromAPi(){
    return(dispatch)=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(responce=>responce.json())
        .then(json=>{
                   dispatch({type:"Add",User:json}) 
        })
        // dispatch({type:"update",name:"bilal"})
    }
}
export{
    GetdatafromAPi,
}