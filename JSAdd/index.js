
document.addEventListener("DOMContentLoaded", () => {

    let a = document.getElementById("firstValue");
    let b = document.getElementById("secondValue");
    let generator = document.getElementById("add");
    let result = document.createElement("p");
    add_key.addEventListener("click", () => {
        result.textContent = Number(a.value) + Number(b.value);
    })
    document.body.appendChild(result);

})