const  changeTextButton= document.getElementById("changeTextButton");
const textchange = document.getElementById("textToChange");

// changeTextButton.addEventListener("click",function() {        
//     if (textchange.style.display === "none") {        // if else statement
//         textchange.style.display = "block";
//     }else {
//         textchange.style.display = "none";
//     }
// });

let isVisible = true;
changeTextButton.addEventListener("click", function() {        //using boolean variable
    isVisible = !isVisible;
    textchange.style.display = isVisible ? "block" : "none";    //ternary operator
});