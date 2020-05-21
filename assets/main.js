let dieRolls = []
let rollButton = document.querySelector("#roll-button")
let showRollsButton = document.querySelector("#show-rolls")
let userInput = document.querySelector("#number-of-dice")
let sumOfRolls = document.querySelector("#sum-of-rolls")

rollButton.addEventListener("click", function () {
   let newUserInput = Number(userInput.value) ;
   userInput.value = newUserInput;
   let counter = 0
   //let randNum = Math.floor(Math.random() * 7);
   
   while (counter < newUserInput) {
      dieRolls.push(Math.floor(Math.random() * 7) )
      counter += 1
    }
    
    let sum = dieRolls.reduce(function(a,b){
return a + b ;
    },0);
    document.getElementById("sum-of-rolls").innerHTML = "Total: " + (sum)
    //example code of adding an array of numbers together was found here.
    // https://www.tutorialrepublic.com/faq/how-to-find-the-sum-of-an-array-of-numbers-in-javascript.php
    // Can't say I truly understand it but I did learn was document.write does hahaha..ha
    console.log(dieRolls)
    
   })


   showRollsButton.addEventListener("click", function () {
      let counter = 0
      let allRolls = ""
      while (counter < dieRolls.length) {
         allRolls += "<li>" + dieRolls[counter]+ "</li>";
         counter += 1
      }
      document.getElementById("all-rolls").innerHTML = allRolls
      //example code of putting array into an ordered list was found here.
      //https://stackoverflow.com/questions/12607162/javascript-sort-array-into-an-ordered-list
   })