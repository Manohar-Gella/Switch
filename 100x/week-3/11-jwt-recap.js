// npm install jsonwebtoken
const jwt = require('jsonwebtoken');

// decode verify generate
const secretCode = 'samosa'
const value = {
    name: "ManoharGella",
    accountNumber: 1234567
}


// jwt creator

// below code is to verify the token data with the secret
const tokenVerify = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWFub2hhckdlbGxhIiwiYWNjb3VudE51bWJlciI6MTIzNDU2NywiaWF0IjoxNzEzNDcxOTI2fQ.cBQy4BeddyqvJZ3lrkye-N6EutcsJiSsrQLty9qlyE8", "samosa");

const token = jwt.sign(value, `${secretCode}`);

// const token = jwt.sign(value, "secret") -> other way to do

console.log(token)
console.log(tokenVerify)

