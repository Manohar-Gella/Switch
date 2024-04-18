// npm install zod

const zod = require('zod');
const usernameSchema = zod.string().min(3);
const emailSchema = zod.string().email();
function signin(username, email){
    const usernameResponse = usernameSchema.safeParse(username);
    const emailRespomse = emailSchema.safeParse(email);
    if(!usernameResponse.success || !emailRespomse.success){
        console.log("User name and passoword are not as per the rules");
    }
    else{
        wish = {
            msg: "Welcome",
            name: `${username}`
        }
        console.log(wish);
    }
}


signin("Manoahr Gella", "manohargella272@gmail.com");