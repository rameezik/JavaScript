let counterBox = document.getElementById("counterbox");
let counterText = counterBox.querySelector("#text");
let count = 0 ;

counterBox.addEventListener("click", function(e){
    let id = e.target.id;

    if(id == "plus") count++;
    else if(id =="minus") count--;
    else if(id =="reset") count = 0;
    else return;

    counterText.innerText = count ;  

});