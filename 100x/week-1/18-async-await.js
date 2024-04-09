// async awai in js


function countTill100(){
    setTimeout(function(){
        let sol = 0;
        for(let i = 0; i<=100; i++){
            sol+=i;
        }
        console.log("Manohar Gella");
    }, 2000);
    
}

async function display(){
    await countTill100();
};

console.log("Check");
display();
console.log("End");
setTimeout(function(){
    console.log("Coocking");
}, 2000);

console.log("Coocked");