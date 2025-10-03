
document.addEventListener("DOMContentLoaded", () => {

    let a = document.getElementById("firstValue");
    let b = document.getElementById("secondValue");
    let add_generator = document.getElementById("add_key");
    let minus_generator = document.getElementById("minus_key");
    let multiply_generator = document.getElementById("multiply_key");
    let division_generator = document.getElementById("divide_key");
    
    let result = document.createElement("p");
    add_generator.addEventListener("click", () => {
        result.textContent = Number(a.value) + Number(b.value);
    });
    minus_generator.addEventListener("click", () => {
        result.textContent = Number(a.value) - Number(b.value);
    });
    multiply_generator.addEventListener("click", () => {
        result.textContent = Number(a.value) * Number(b.value);
    });
    division_generator.addEventListener("click", () => {
        result.textContent = Number(a.value) / Number(b.value);
    });
    document.body.appendChild(result);

})