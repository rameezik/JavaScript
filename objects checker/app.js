let firstNames = ["Ali", "Sara", "Omar", "Aisha", "Rameez", "Sana", "Eman", "Qirat"];
let lastNames = ["Khan", "Ahmed", "Hussain", "Imran", "Ali", "Shah", "Malik", "Raza"];
let countries = ["Pakistan", "USA", "UK", "Canada", "India", "Australia"];

let users = [];
let adults = [];

// Create 100 user objects
for (let i = 0; i < 100; i++) {
    let age = Math.floor(Math.random() * 60) + 1; // age 1-60
    let fullName = firstNames[Math.floor(Math.random() * firstNames.length)] + " " +
                   lastNames[Math.floor(Math.random() * lastNames.length)];
    let country = countries[Math.floor(Math.random() * countries.length)];

    let user = {
        Age: age,
        FullName: fullName,
        Country: country
    };

    users.push(user);

    // Check if adult
    if (age >= 18) {
        adults.push(user);
    }
}

// Output
console.log("All Users:", users);
console.log("Adults (age >= 18):", adults);
