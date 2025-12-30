let Userinput = Number(prompt("Enter Year To Check Leap Year:"));

if (Userinput > 0) {

    if (Userinput % 400 === 0) {
        alert("It's a Leap Year");
    }
    else if (Userinput % 100 === 0) {
        alert("It's NOT a Leap Year");
    }
    else if (Userinput % 4 === 0) {
        alert("It's a Leap Year");
    }
    else {
        alert("It's NOT a Leap Year");
    }

} else {
    alert("Invalid Year");
}
