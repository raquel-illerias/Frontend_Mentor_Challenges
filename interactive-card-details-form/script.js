//variables
const form = document.querySelector('.form__container');
const holder = document.getElementById('input__holder');
const number = document.getElementById('input__number');
const month = document.getElementById('input__month');
const year = document.getElementById('input__year');
const cvc = document.getElementById('input__cvc');
const confirmation = document.querySelector('.confirmation__wrapper')

const cardHolder = document.querySelector('#card__holder-span')
const cardNumber = document.querySelector('#card__number-span')
const cardMonth = document.querySelector('#card__month-span')
const cardYear = document.querySelector('#card__year-span')
const cardCvc = document.querySelector('#card__cvc')

// CARD CONTENT UPDATE WITH TYPED TEXT
holder.addEventListener('change', () => {
    cardHolder.textContent = holder.value
})
number.addEventListener('change', () => {
    cardNumber.textContent = number.value
})
month.addEventListener('change', () => {
    cardMonth.textContent = month.value
})
year.addEventListener('change', () => {
    cardYear.textContent = year.value
})
cvc.addEventListener('change', () => {
    cardCvc.textContent = cvc.value
})


// FORM VALIDATION 


form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const holderValue = holder.value.trim();
    const numberValue = number.value.trim();
    const monthValue = month.value.trim();
    const yearValue = year.value.trim();
    const cvcValue = cvc.value.trim()

    const numberRGEX = /[0-9]/
    const holderResult = numberRGEX.test(holderValue)
    const numberResult = numberRGEX.test(numberValue)
    const monthResult = numberRGEX.test(monthValue)
    const yearResult = numberRGEX.test(yearValue)
    const cvcResult = numberRGEX.test(cvcValue)

    if (holderValue === '') {
        setErrorFor(holder, "Can't be blank")
    }
    else {
        setSuccessFor(holder);
    }

    if (numberValue === '') {
        setErrorFor(number, "Can't be blank");
    }
    else if (numberResult === false) {
        setErrorFor(number, "Only digits")
    }
    else {
        setSuccessFor(number);
    }

    if (monthValue === '') {
        setErrorFor(month, "Can't be blank");
    } 
    
    else if (monthResult === false) {
        setErrorFor(month, "Only digits")
    }
    else {
        setSuccessFor(month);
    }

    if (yearValue === '') {
        setErrorFor(year, "Can't be blank");
    } 
    else if (yearResult === false) {
        setErrorFor(year, "Only digits")
    }
    else {
        setSuccessFor(year);
    }

    if (cvcValue === '') {
        setErrorFor(cvc, "Can't be blank");
    } 
    else if (cvcResult === false) {
        setErrorFor(cvc, "Only digits")
    }
    else {
        setSuccessFor(cvc);
    }

    if (holderValue && numberValue && monthValue && yearValue &&cvcValue !== '') {
        form.style.display = 'none'
        confirmation.style.display = 'flex'
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form__control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form__control success';
}

//CONTINUE BUTTON: RESETS AND RELOADS PAGE

document.getElementById('button__continue').addEventListener('click', () => {
    window.location.reload()
    form.reset()
})





