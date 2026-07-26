// function PlaindromChecker(str){
//     let left = 0;
//     let right = str.length - 1;

//     while (left < right){
//         if(str[left] !== str[right]){
//             return false;
//          }

//          left++;
//          right--;
//     }

//      return true;
// }

// console.log(PlaindromChecker("MadaM"));


//FILTERED ARRAY 

// let numbers = [ 10 , 20 , 6, 7 , 9 , 18];
// let filterdArray = [];

// for(i=0 ; i <= numbers.length ; i++){
//     num = numbers[i]
//     if (num % 2 == 0){
//     filterdArray.push(num);
   
//     }
   
    
// }
//  console.log(filterdArray);



function PlaindromChecker(string){
    let left = 0;
    let right = string.length - 1

    while (left < right){
        if(string[left] !== string[right]) {return false;}
    left++;
    right--;

    
    }

    return true;

    
}


let Str = prompt("Enter the word:").toLowerCase();
console.log(PlaindromChecker(Str));












