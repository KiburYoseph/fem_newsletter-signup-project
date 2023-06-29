const submitButton = document.querySelector('.submit');
const emailInput = document.querySelector('#email');
const wrongInput = document.querySelector('.wrongInput');
const form = document.querySelector('.emailInput');

function ValidateEmail(inputText)
    {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputText.value.match(mailformat))
            {
                form.submit();
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
