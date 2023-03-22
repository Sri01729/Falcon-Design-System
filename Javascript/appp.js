"use strict";

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


/* Display error message for email */


var email = document.getElementById("Email");

email.addEventListener("keyup", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a valid email ");
  } else {
    email.setCustomValidity("");
  }
});


