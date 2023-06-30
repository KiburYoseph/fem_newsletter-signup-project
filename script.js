const submitButton = document.querySelector('.submit');
const emailInput = document.querySelector('#email');
const wrongInput = document.querySelector('.wrongInput');
const form = document.querySelector('.emailInput');
const initialForm = document.querySelector('.initialForm');
const thankYouPage = document.querySelector('.thankYouPage');
const confirmationMessage = document.querySelector('.confirmationMessage');
let userEmail;

function ValidateEmail(inputText)
    {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputText.value.match(mailformat))
            {
                userEmail = emailInput.value;
                initialForm.style.opacity = "0";
                setTimeout(() => {
                    initialForm.style.display = "none"
                    thankYouPage.style.display = "block"
                }, 310);
                setTimeout(() => {
                    thankYouPage.style.opacity = "1"
                }, 400);
                confirmationMessage.innerHTML = `A confirmation email has been sent to <strong style="font-weight:500; font-family: 'Roboto-Bold', serif;">${userEmail}</strong>. Please open it and click the button inside to confirm your subscription.`
                

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
