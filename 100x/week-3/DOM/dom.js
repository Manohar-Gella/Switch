// js logic to add two numbers
function calculateSum() {
    let element = document.getElementById("finalSum");
    let x = document.getElementById("firstNumber").value;
    let y = document.getElementById("secondNumber").value;
    let z = parseInt(x) + parseInt(y);

    element.innerHTML = `Sum: ${z}`

}