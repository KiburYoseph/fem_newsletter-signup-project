const submitButton = document.querySelector('.submit');
const emailInput = document.querySelector('#email');
const wrongInput = document.querySelector('.wrongInput');
const form = document.querySelector('.emailInput');
const initialForm = document.querySelector('.initialForm');
const thankYouPage = document.querySelector('.thankYouPage');
let userEmail;

function ValidateEmail(inputText)
    {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputText.value.match(mailformat))
            {
                userEmail = emailInput.value;
                initialForm.style.opacity = "0";
                return true;
            }
        else
            {
                wrongInput.innerHTML = "Valid email required";
                emailInput.style.backgroundColor = "hsl(4, 100%, 95%)";
                emailInput.style.border = "solid 1px hsl(4, 100%, 67%)";
                emailInput.style.color = "hsl(4, 100%, 40%)"
                return false;
            }
    }
