const authorizationRole =(...allowedUsers)=>(req,res,next) =>{
    try {
        const role = req.user.role;
        
    
    if (!allowedUsers.includes(role)){
        return res.status(403).send("you are not valid user")
    }next();
}catch(e){
    return res.status(500).send(e)
}

}
export default authorizationRole;