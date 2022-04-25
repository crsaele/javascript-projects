// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// button's functionality 


// inside the variable btn's 
// run the method forEach which calls a function for each element selected
// the function takes for argument btn and we procede to create the event
// inside btn (our parameter) we add an eventlistener method
// takes in 2 arguments in the first one: the event, so click event.
// the second argument takes the action, in this case a function with (e) as it's argument meaning the event
// and inside that event listener clicked function we create a constant to store styles
// styles which is assigned to the parameter (e) and inside it we return the object and it's class list
// after that we make a conditional statement that asks if styles and use the contains() method 
// and ask if decrease is in our class name if it does it decreases count-- by 1
// else if asks another posibility if the first one is not true, style contains in the class list increase?
// then count++ add 1 to the count else the count is 0
// finally we ask another conditional that takes for argument the count
// if count is more than 0 then the select value and inside of it style then we access color 
// equal green, if count is less than 0 then it's red and if count is strictly 0 then it has no change
// at last we access the value and inside of it textcontent equals to the count

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});