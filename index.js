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

function login (username,password){
    let name=["sakshi","tina","pooja"]
    const correctpass ="sak@16";

    if(!name.includes(username)){
        return "User Not Found,Please Signup";}
        else if(password !==correctpass){
            return "Wrong password";
        } else{ 
            return "Login Successful..."
        }
        }
        console.log(login('sakshi','sak@16'))
        console.log(login('neha','sak@16'))
        console.log(login('tina','sak@00'))
