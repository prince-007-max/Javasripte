function UserGreeting(props){

    if(props.islogging){
        return <h1> Welcome {props.Username}</h1>
    }else{
        return <h1>Pleace Log in !</h1>
    }

}

export default UserGreeting