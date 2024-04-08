// promises and async await javascript

function counter(till){
    let sol = new Promise(function(){
        let sum = 0;
        for(let i = 0; i<=till; i++){
            sum+=i;
        }
        console.log(sum);
    });
   
}

async function display(){
    await counter(5);
}

console.log("Manohar")
console.log("Gella")
display()
console.log("After")