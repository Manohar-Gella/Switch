// objects in javascript.

const users = [{
    firstname: "Manohar",
    lastname: "Gella",
    gender: "male",
    age: 18
},{
    firstname: "Pavithra",
    lastname: "Gella",
    gender: "female",
    age: 15
},{
    firstname: "Neriyya",
    lastname: "Gella",
    gender: "male",
    age: 45
},{
    firstname: "Nirmala",
    lastname: "Gella",
    gender: "female",
    age: 42

}]

for(let i = 0; i < users.length; i++){
    if(users[i].gender == "female"){
        console.log(users[i]);
    }
}