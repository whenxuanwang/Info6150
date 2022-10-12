let form = document.querySelector("form");
let input = document.querySelector("input");
let result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault()
  let number = input.value;
  let translate = fizzBuzz(number);
  result.textContent = translate;
  input.value = "";
});

function fizzBuzz(number){
    if (number %3 ===0 && number % 5 ===0){
      console.log("fizzbuzz");
    }
    else if (number % 5 === 0){
      console.log("buzz");
    } else if (number % 3 === 0){
      console.log("fize");
    } else {
      return number;
    }
  }
