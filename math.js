let calc = {
    x: "",
    y: "",
    operator: "",
    answer: null
};

function reset() {
    document.getElementById("display").innerText = 0;
    calc.x = "";
    calc.y = "";
    calc.operator = "";
    calc.answer = null;
}

function equals() {
    calc.x = parseInt(calc.x);
    calc.y = parseInt(calc.y);
    switch (calc.operator) {
        case "add":
            calc.answer = calc.x + calc.y;
            break;
        case "subtract":
            calc.answer = calc.x - calc.y;
            break;
        case "divide":
            calc.answer = calc.x / calc.y;
            break;
        case "multiply":
            calc.answer = calc.x * calc.y;
            break;
        default:
            calc.answer = 0;
            break;
    }

    document.getElementById("display").innerHTML = `<span class="answer">${calc.answer}</span>`;
    calc.operator = "";
    calc.answer = null;
    calc.x = "";
    calc.y = "";
}

document.addEventListener("click", (event) => {
    if (event.srcElement.id !== "") {
        console.log(event.srcElement.id.substring(1));
        let btnPressed = event.srcElement.id;
        if (btnPressed.charAt(0) === "b") {
            if (calc.operator == "") {
                calc.x += `${btnPressed.charAt(1)}`;
                document.getElementById("display").innerText = "";
                document.getElementById("display").innerHTML += `<span class="x">${calc.x}</span>`;
            } else {
                calc.y += `${btnPressed.charAt(1)}`;
                document.querySelectorAll('.y').forEach(element => {
                    element.remove();
                });
                document.getElementById("display").innerHTML += `<span class="y">${calc.y}</span>`;
            }
        }
        if (btnPressed.charAt(0) === "Q") {
            calc.operator = btnPressed.substring(1);
            document.querySelectorAll(".operator").forEach(element=>{
                element.remove();
            });
            document.querySelector(".x").insertAdjacentHTML("afterend",`<span class="operator">${event.srcElement.innerText}</span>`);
            //document.getElementById("display").innerHTML += `<span class="operator">${event.srcElement.innerText}</span>`;
        }
        if (btnPressed.charAt(0) === "Z") {
            equals();
        }
        if (btnPressed.charAt(0) === "$") {
            reset();
        }
    }
});