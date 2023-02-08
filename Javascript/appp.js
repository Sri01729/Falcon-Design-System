"use strict";
/*  Search list function */
function myFunction() {
    let input = document.getElementById("searchList").value;
        let list = document.getElementById("list");
        let items = list.getElementsByTagName("li");

        for (let i = 0; i < items.length; i++) {
          let item = items[i];
          let text = item.textContent || item.innerText;
          if (text.toUpperCase().indexOf(input.toUpperCase()) > -1) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        }
}

/*  Dialog function */
function clickme() {

  let result;
  if (confirm("Press the button of your choice")) {
    result = "You pressed ok :)";
  }
  else {
    result = "You pressed cancel :(";
  }
  document.getElementById("demo").innerHTML = result;
}
/*  Form submit confirmation */
function confirmMessage() {

  alert("Your form submitted succesfully");

}

/*  Hamburger menu button */
const menuToggle = document.querySelector('.icon');
const menuContainer = document.querySelector('.menu-container');

menuToggle.addEventListener('click', function() {
  menuContainer.classList.toggle('menu-open');
});