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


// ===============================

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

    if (holderValue === '') {
        setErrorFor(holder, "Can't be blank")
    }
    else {
        setSuccessFor(holder);
    }

    if (numberValue === '') {
        setErrorFor(number, "Can't be blank");
    }
    else {
        setSuccessFor(number);
    }

    if (monthValue === '') {
        setErrorFor(month, "Can't be blank");
    } else {
        setSuccessFor(month);
    }

    if (yearValue === '') {
        setErrorFor(year, "Can't be blank");
    } else {
        setSuccessFor(year);
    }
    if (cvcValue === '') {
        setErrorFor(cvc, "Can't be blank");
    } else {
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

document.getElementById('button__continue').addEventListener('click', () => {
    window.location.reload()
    form.reset()
})





