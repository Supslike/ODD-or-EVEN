const ODD = document.getElementById("odd-container");
const EVEN = document.getElementById("even-container");
const RES = document.getElementById("res");

let even_list = [];
let odd_list = [];
let TOTAL  = 0;

function calculateY(x) {
    let m = 75;
    let c = 0;
    let y = m * x + c;
    return y;
}

function TOTAL_SOLVE() {
    const INPUTS = document.querySelectorAll("input");
    even_list = [];
    odd_list = []
    for (let i = 0; i < INPUTS.length; i++) {
        if (INPUTS[i].id === "even") {
            even_list.push(Number(INPUTS[i].value))
        }

        else {
            odd_list.push(Number(INPUTS[i].value))
        }
    }
}

for (let i = 0; i < 10; i++) {
    let message;
    if (i + 1 === 1) {
        message = "1ˢᵗ";
    }
    else if (i + 1 === 2) {
        message = "2ⁿᵈ";
    }
    else if (i + 1 === 3) {
        message = "3ʳᵈ";
    }
    else {
        message = `${i + 1}ᵗʰ`
    }

    const new_number = Number(prompt(`Please enter the ${message} number: `))
    const new_input = document.createElement("input");
    new_input.type = "number";
    new_input.value = new_number;
    if (new_number % 2 === 0) {
        new_input.id = "even";
        new_input.className = "even-number"
        EVEN.appendChild(new_input);
        even_list.push(new_number)
    }

    else {
        new_input.id = "odd";
        new_input.className = "odd-number"
        ODD.appendChild(new_input);
        odd_list.push(new_number)
    }

    new_input.addEventListener("input", function(cur_input) {
        return function() {
            if (Number(cur_input.value) < 0) {
                if (cur_input.id === "odd") {
                    cur_input.value = 1;
                }
                
                else {
                    cur_input.value = 0;
                }
            }

            if (cur_input.value === "") {
                return
            }

            if (Number(cur_input.value) % 2 === 0) {
                if (cur_input.id === "odd") {
                    cur_input.id = "even";
                    cur_input.className = "even-number";
                    EVEN.appendChild(cur_input);
                    let index = odd_list.indexOf(Number(cur_input.value));
                    if (index > -1) {
                        odd_list.splice(index, 1);
                    }
                    even_list.push(Number(cur_input.value))
                } 
            }

            else {
                if (cur_input.id === "even") {
                    cur_input.id = "odd";
                    cur_input.className = "odd-number";
                    ODD.appendChild(cur_input);
                    let index = even_list.indexOf(Number(cur_input.value));
                    if (index > -1) {
                        even_list.splice(index, 1);
                    }
                    odd_list.push(Number(cur_input.value))
                } 
            }

            TOTAL_SOLVE()
            TOTAL = 0;
            for (let i = 0; i < even_list.length; i++) {
                TOTAL += even_list[i];
            }
            RES.innerHTML = ""
            for (let i = 0; i < TOTAL + 100; i++) {
                RES.innerHTML += `${i} <br>`;
            }
            document.getElementById("res").style.transform = `matrix(1, 0, 0, 1, 0, -${calculateY(TOTAL)})`;
        }
    }(new_input))
}

TOTAL_SOLVE()
TOTAL = 0;
for (let i = 0; i < even_list.length; i++) {
    TOTAL += even_list[i];
}
RES.innerHTML = ""
for (let i = 0; i < TOTAL + 100; i++) {
    RES.innerHTML += `${i} <br>`;
}
document.getElementById("res").style.transform = `matrix(1, 0, 0, 1, 0, -${calculateY(TOTAL)})`;