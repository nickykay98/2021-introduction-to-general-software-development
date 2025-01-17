console.log("Hello World");

let myVar = "Heyy"
console.log(myVar)

myVar = 10
console.log(myVar)

myVar = true
console.log(myVar)

let myEmpty
console.log(myEmpty)

function myFunction() {
  console.log("myFunction");
}

console.log(myFunction)

myFunction();   // Call my function multiple times
myFunction();

const notLoaded = document.getElementById("btn");
console.log(notLoaded);

window.onload = () => {
  const btn = document.getElementById("btn");
  btn.innerHTML = "Red";
  // btn.style = "color: red";
  console.log(btn);

  let blue = false;

  // Lets call a function when we press the button
  // const handleClick = () => {
  //   console.log("I clicked my btn");
  //   if (blue) {
  //     btn.innerHTML = "Red";
  //     btn.style = "color: red";
  //     blue = false;
  //   } else {
  //     btn.innerHTML = "Blue";
  //     btn.style = "color: blue";
  //     blue = true;
  //   }
  // };

  const handleClick = () => {
    console.log("I clicked my btn");
    if (blue) {
      btn.classList.add("btn-red")
    } else {
      btn.classList.remove("btn-red")
    }
    blue=!blue
  };

  btn.onclick = handleClick;

  const example = document.getElementById("id-example-1");

  // We can remove classnames using
  example.classList.remove("class-example-1")

  // We can also add classnames using
  example.classList.add("new-background");
};
