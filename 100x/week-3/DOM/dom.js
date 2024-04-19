// js logic to add two numbers
async function calculateSum() {
    // let element = document.getElementById("finalSum");
    let x = document.getElementById("firstNumber").value;
    let y = document.getElementById("secondNumber").value;
    let response = await fetch(`http://localhost:1600/gofind/?x=${x}&y=${y}`)
    let ans = await response.text();
    document.getElementById('finalSum').innerHTML = ans;
    // element.innerHTML = `Sum: ${ans}`

}