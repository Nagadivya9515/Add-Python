document.addEventListener("DOMContentLoaded", () => {
    
    let count = 0;
    let generator = document.getElementById("incrementer");
    let output = document.getElementById("output");
    let displayer = document.createElement("h1");
    displayer.textContent = count;
    let saver = document.getElementById("saver");
    let div_save = document.getElementById("div_save");

    let records = document.createElement("p");

    generator.addEventListener("click", () => {
        count = count + 1;
        displayer.textContent = count;
    });

    output.appendChild(displayer);

    saver.addEventListener("click", () => {
        records.textContent += count + " - ";
        // div_save.textContent += records;

    });

    div_save.appendChild(records);

})