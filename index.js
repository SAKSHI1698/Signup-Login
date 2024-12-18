function signup(username){
    let name =["sakshi","tina","pooja"]
    if(name.includes(username)){
        return "User Already Registered,Please Login"}
    else {
            name.push(username)
            return "Signup Successful,Please Login"
        }
    }
console.log(signup('sakshi'))
console.log(signup('neha'))
