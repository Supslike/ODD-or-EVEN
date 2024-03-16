var even_container = document.getElementById("even-container");
var odd_container = document.getElementById("odd-container");
var res_text = document.getElementById("res");

var sum = 0

for (let i = 0; i < 10; i++) {
    let user_input;
    while (true) {
        user_input = Number(prompt(`Please input a positive integer for ${10 - i} times: `));
        if (user_input < 0) {
            alert("Please input a positive number!");
        }

        else if (isNaN(user_input)) {
            alert("Please input a number!");
        }
        else {
            break
        }
    }
    let new_element = document.createElement("p");
    new_element.textContent = user_input;
    if (user_input % 2 == 0) {
        even_container.appendChild(new_element);
        sum += user_input;
    }
    else {
        odd_container.appendChild(new_element)
    }
}

res_text.textContent = sum;