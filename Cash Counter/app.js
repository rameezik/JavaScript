let totalBill = prompt("Enter total bill");
let givenAmount = prompt("Enter given amount");

let returnAmount = givenAmount - totalBill;

if (returnAmount < 0) {
    alert(
        "Total Bill: " + totalBill +
        "\nGiven Amount: " + givenAmount +
        "\nPayment is insufficient"
    );
} 
else if (returnAmount === 0) {
    alert(
        "Total Bill: " + totalBill +
        "\nGiven Amount: " + givenAmount +
        "\nNo return"
    );
} 
else {
    let chocolates = Math.floor(returnAmount / 5);

    if (chocolates > 2) {
        chocolates = 2;
    }

    let remainingRs = returnAmount - (chocolates * 5);

    alert(
        "Total Bill: " + totalBill +
        "\nGiven Amount: " + givenAmount +
        "\nRemaining Amount: " + returnAmount +
        "\nChocolates Given: " + chocolates +
        "\nCash Returned: " + remainingRs + " Rs"
    );
}
