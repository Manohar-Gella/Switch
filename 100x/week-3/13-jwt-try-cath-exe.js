const jwt = require('jsonwebtoken')


const locker =  {
    name: "Manohar",
    age: 18,
    sex: "male",
    password: 8989
}

const token = jwt.sign(locker, "lanja");
console.log(token);

try {
    const verifyToken = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWFub2hhciIsImFnZSI6MTgsInNleCI6Im1hbGUiLCJwYXNzd29yZCI6ODk4OSwiaWF0IjoxNzEzNDczMDQ2fQ.2AyrwsL-W7MTVVzCTLTTTmdz7RpSr8CzRqOK2NbHbPY", "lana");
    console.log(verifyToken);
}
 
catch(e){
    console.log("Intruder");

}