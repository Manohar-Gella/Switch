function todo() {

    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    document.getElementById("end").innerHTML = `
        ${title}
        <br><br>
        ${description}
        <br><br>

    `


}