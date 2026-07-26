// for(let i = 1 ; i <= 5 ;  i++){
//     for(j=1 ; j <= i ; j++){
//         document.write(j ; " ")
//     }
//     document.write("</br>")

// }

// document.write("<hr>");

// for(let i = 1 ; i <= 5 ;  i++){
//     for(j=1 ; j <= i ; j++){
//         document.write("*" , " ")
//     }
//     document.write("</br>")

// }

// document.write("<hr>");

// for(let i = 1 ; i <= 5 ; i++){
//     for(j=1 ; j<=5 ; j++){
//         document.write(j , " ")
//     }
//     document.write("</br>")
// }


// let num = 12345;
// let count = 0;

// while(num>0){
//     count++;
//     num = Math.floor(num/10);
//     console.log(num)
// }

// console.log(`Total digits: ${count}` );



// }
for(let i = 1 ; i<11 ; i++){
    document.write(i, "<br>")
}
document.write("<hr>")

for(let i = 10 ; i>0 ; i--){
    document.write(i, "<br>")
}
document.write("<hr>")


for (let i = 1 ; i <=20 ; i++){
    let num = i
    if( num%2 == 0 ){
        document.write(num);
        document.write("</br>");
    }
}

document.write("<hr>");

for (let i = 1 ; i <=20 ; i++){
    let odd = i
    if( odd%2 == 1 ){
        document.write(odd);
        document.write("</br>");
    }
}

document.write("<hr>");

// Find the sum of numbers from 1 to 100
let sum=0;
for (let i = 1 ; i <= 100 ; i++){
    sum += i;
}
document.write("THE SUM OF 100 NUMBERS IS: ", sum );
document.write("<hr>")

// Find the product of numbers from 1 to 5.
let product = 1;
for (let i = 1 ; i<=5 ; i++){
    product = product  * i ;
}
document.write(`The product of first 5 numbers are: ${product}`);
document.write("<hr>");



// Print the multiplication table of 7;
let num = 7;
for (let i = 1 ; i<=10 ; i++){
    document.write(`${num} x ${i} = ${num*i}`)
    document.write("<br>" )
    

}
document.write("<hr>")

// Print all numbers divisible by 3 between 1 and 50;
for (let i = 1; i<51 ; i++){
    if(i%3 == 0){
        document.write(i, "<br>");
    
    }
}
document.write("<hr>")

// Count how many even numbers exist from 1 to 100.;
let evencounter = 0;
for (let i=1 ; i<=100 ; i++){
    if(i%2 == 0){
        evencounter++;
    }
}
document.write(`Total even number from 1 to 100 are: ${evencounter}`, "<hr>")


let oddSum = 0;
for (let i=1 ; i<51; i++){
    if(i%2 == 1){
        oddSum += i;
    }
}
document.write(`Sum of Odd numbers 1 to 51 is: ${oddSum}`, "<hr>");

/*
*
**
***
****
*****
*/


for (let i= 1 ; i<=5 ; i++){
   for ( let j = 1 ; j<=i ; j++){
    document.write("*", " ")
   }
   document.write("<br>")
}
document.write("<hr>");

for (let i =5 ; i>0 ; i--){
    for(let j=i; j>0 ; j--){
        document.write("*", " ")
    }
    document.write("<br>")
}

document.write("<hr>");

for(let i=1 ; i<=5 ; i++){
    for(let j=1 ; j<=i ; j++){
        document.write(j , " ")
    }
    document.write("<br>")
}

document.write("<hr>");

for(let i = 5 ; i>=1 ; i--){
    for(let j=5 ; j>=i ; j--){
        document.write(j , " " )
    }
    document.write("<br>")
}

document.write("<hr>");


for(let i= 1 ; i<=5 ; i++){
    for(let j=1 ; j<=i ; j++ ){
        document.write(i)
    }
    document.write("<br>")
}

document.write("<hr>");

for(let i= 1 ; i<=5 ; i++){
    for(let j=0 ; j<i ; j++){
        document.write(String.fromCharCode(65 + j));
    }
    document.write("<br>");
}

document.write("<hr>");

let iterate = 1 ;
for(let i=1 ; i<=4 ; i++){
    for(let j=1; j<=i ; j++){
        document.write(iterate, " ")
        iterate++;
    }
    document.write("<br>")
}

document.write("<hr>");

for(let i=1 ; i<=5 ; i++){
    for(let j=1 ; j<=5 ; j++){
        document.write("* ")
    }
    document.write("<br>")
}

document.write("<hr>");

let primeNum = Number(prompt("Enter Number to check it's prime or not:"));
let isprime = true;

if(primeNum<2){
    document.write("Number is not valid")
}

else{
for(let i=2 ; i<Math.sqrt(primeNum) ; i++ ){
     if(primeNum%i == 0){
        isprime = false; 
        break;  
    }
}
if(isprime){
    document.write(`${primeNum}: is Prime Number`)
}
else{
   document.write(`${primeNum}: is NOT Prime Number`) 
}
}


document.write("<hr>")


let Num = 456789;
const Orgnum = Num;
let revNum = 0 ;

while(Num>0){
    lastDigit= Num % 10;
    revNum = (revNum*10) + lastDigit; 
    Num = Math.floor(Num/10)
}
document.write(`Reverse of ${Orgnum} = ${revNum}`);

document.write("<hr>")


let palindromeInput = Number(prompt("Enter any Word: "));
const original = palindromeInput;
let revPalin = 0 ;

while(palindromeInput>0){
    let lastword = palindromeInput%10;
    revPalin = (revPalin * 10 ) + lastword;
    palindromeInput = Math.floor(palindromeInput/10);
}
console.log(revPalin);
console.log(original);

if(revPalin === original){
    document.write("The Number is Palindrome");
}
else{
    document.write("The Number is Not Palindrome");

}

document.write("<hr>")


let userInput = prompt("Enter Any Word").toLocaleLowerCase();
let revString = "";
for(let i=userInput.length-1 ; i>= 0; i--){
    revString = revString + userInput[i];
    // console.log(userInput[i]);
}
// console.log(revString);
if(userInput === revString ){
    document.write("The Word is Palindrome");
}
else{
    document.write("The Word is Not Palindrome");

}


document.write("<hr>");


let factnum = 5;
let fact = 1;

for(let i=factnum ; i>0 ; i--){
    fact = fact * i;

}
document.write(`the factorial of ${factnum} is = ${fact}`)

document.write("<hr>");

console.clear();

let countDigit = 9090787;
let counter = 0;

while(countDigit>0){
    counter++;
    countDigit = Math.floor(countDigit / 10);

}
document.write(`${counter}`)

