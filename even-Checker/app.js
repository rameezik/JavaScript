let box = document.getElementById("parent");
let Button = box.querySelector("button");
let Input = document.querySelector("#input");
let Text = box.querySelector("#text");
let userNumber = null;


Button.addEventListener("click", getValue);

function getValue() {
    userNumber = Number(Input.value);

    Checker(userNumber, Text);

}

function Checker(userNumber) {
    if (isNaN(userNumber)) { Text.innerText = "Enter a Valid Number"; }
    else if (userNumber % 2 === 0) { Text.innerText = "It's an Even Number" }
    else {
        Text.innerText = "Odd Number";
    }


}