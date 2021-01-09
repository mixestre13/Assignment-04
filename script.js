//Question 1
const rightButton = document.querySelector("#right-button")
const leftButton = document.querySelector("#left-button")
rightButton.addEventListener("click", (event) => {
    text1.innerText = 'Im right';
})
leftButton.addEventListener("click", (event) => {
    text1.innerText = 'No, I am right!';
})

//Question 2
const text1 = document.querySelector("#text1")
const bigElement = document.querySelector("h1")
bigElement.addEventListener("mouseenter", (event) => {
    alert('Hey, I told you not to hover over me!');
})



//Question 3 & 4
let submit = document.querySelector("#submit");

submit.addEventListener("click", function(){

 let masterPass = "12345678";
    let email = document.querySelector("#email").value;
  let username = document.querySelector("#username").value;
   let password = document.querySelector("#password").value;

  if(password != masterPass){
       alert("Incorrect Password!");
    }
    else    {
      let h1 = document.querySelector("#h1").innerHTML = "Correct Information!";    }
})


//Bonus Question
//let submit = document.querySelector("#submit");

//submit.addEventListener("click", function(){

  //  let radius = document.querySelector("#radius").value;
  //  radius = Math.abs(radius);
   // volume = (4/3) * Math.PI * Math.pow(radius, 3);
  //  volume = volume.toFixed(2);
 //  document.querySelector("#volume").innerHTML = volume;
//})