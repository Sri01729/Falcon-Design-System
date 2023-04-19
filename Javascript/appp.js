"use strict";
// BMI calculator function

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

window.onload = () => {
	let button = document.querySelector("#btn");

	// Function for calculating BMI
	button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
    console.log("Button clicked");
	/* Getting input from user into height variable.
	Input is string so typecasting is necessary. */
	let height = parseInt(document
			.querySelector("#height").value);

	/* Getting input from user into weight variable.
	Input is string so typecasting is necessary.*/
	let weight = parseInt(document
			.querySelector("#weight").value);

	let result = document.querySelector("#result");

	// Checking the user providing a proper
	// value or not
	if (height === "" || isNaN(height))
		result.innerHTML = "Provide a valid Height!";

	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Provide a valid Weight!";

	// If both input is valid, calculate the bmi
	else {

		// Fixing upto 2 decimal places
		let bmi = (weight / ((height * height)
							/ 10000)).toFixed(2);

		// Dividing as per the bmi conditions
		if (bmi < 18.6) result.innerHTML =
			`Under Weight : <span>${bmi}</span>`;

		else if (bmi >= 18.6 && bmi < 24.9)
			result.innerHTML =
				`Normal : <span>${bmi}</span>`;

		else result.innerHTML =
			`Over Weight : <span>${bmi}</span>`;
	}
}

// Website title animation

// This line creates a variable 'string' and assigns it a string value "IRON SANCTUARY".
var string = "IRON SANCTUARY";

// This line creates a variable 'str' and uses the split() method to convert the string 'string' into an array of characters.
var str = string.split("");

// This line retrieves an HTML element with the ID 'str' and assigns it to the variable 'el'.
var el = document.getElementById('str');

// This is a self-invoking function that uses a setTimeout() method to create an animation effect by continuously adding characters from the 'str' array to the innerHTML of the 'el' element.
(function animate() {
  // This conditional statement checks if there are any characters left in the 'str' array. If there are, it adds the first character to the innerHTML of the 'el' element, and then removes it from the 'str' array using the shift() method. If there aren't any characters left in the 'str' array, it clears the timeout using clearTimeout() method to stop the animation.
  str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
  // This line creates a timeout using the setTimeout() method, which invokes the 'animate' function after a delay of 90 milliseconds and assigns it to the variable 'running'.
  var running = setTimeout(animate, 90);
})();

let result;
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

/*  Form submit confirmation */
function confirmMessage() {

  alert("Your form submitted succesfully");

}

/*  Hamburger menu button */
const menuToggle = document.querySelector('.icon');
const menuContainer = document.querySelector('.menu-container');

menuToggle.addEventListener('click', function () {

    menuContainer.classList.toggle('menu-open');
    menuToggle.style.left = "12px";
     menuToggle.style.top = "-42px";
});

/* Dialog box */
/*Reference:(https://codepen.io/dcode-software/pen/LKywLG) */
const Confirm = {
    open (options) {
        options = Object.assign({}, {
            title: '',
            message: '',
            okText: 'OK',
            cancelText: 'Cancel',
            onok: function () {},
            oncancel: function () {}
        }, options);

    const html = `
            <div class="confirm">
                <div class="confirm__window">
                    <div class="confirm__titlebar">
                        <span class="confirm__title">${options.title}</span>
                        <button class="confirm__close">&times;</button>
                    </div>
                    <div class="confirm__content">${options.message}</div>
                    <div class="confirm__buttons">
                        <button class="confirm__button confirm__button--ok confirm__button--fill">${options.okText}</button>
                        <button class="confirm__button confirm__button--cancel">${options.cancelText}</button>
                    </div>
                </div>
            </div>
        `

        const template = document.createElement('template');
        template.innerHTML = html;

        // Elements
        const confirmEl = template.content.querySelector('.confirm');
        const btnClose = template.content.querySelector('.confirm__close');
        const btnOk = template.content.querySelector('.confirm__button--ok');
        const btnCancel = template.content.querySelector('.confirm__button--cancel');

        confirmEl.addEventListener('click', e => {
            if (e.target === confirmEl) {
                options.oncancel();
                this._close(confirmEl);
            }
        });

        btnOk.addEventListener('click', () => {
            options.onok();
          this._close(confirmEl);
          result = "You pressed ok :)";
          document.getElementById("demo").innerHTML = result;
        });

        [btnCancel, btnClose].forEach(el => {
            el.addEventListener('click', () => {
                options.oncancel();
              this._close(confirmEl);
              result = "You pressed cancel :(";
              document.getElementById("demo").innerHTML = result;
            });
        });

        document.body.appendChild(template.content);
    },

    _close (confirmEl) {
        confirmEl.classList.add('confirm--close');

        confirmEl.addEventListener('animationend', () => {
            document.body.removeChild(confirmEl);
        });
    }
};






