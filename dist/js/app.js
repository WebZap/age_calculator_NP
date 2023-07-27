"use strict";
const {log} = console;

const addData = () => {
    const date = new Date(2011,2,5);
    return `год: ${date.getFullYear()}, Месяц ${date.getMonth() + 1}`
} 


// log(addData())

// add DOM elements
const inputContainers = document.querySelectorAll('.form__input-wrapper');
const inputElements = document.querySelectorAll('.form__input');

const inputDay = document.getElementById('input-day');
const inputMonth = document.getElementById('input-month');
const inputYear = document.getElementById('input-year');

// labels

const labels = document.querySelectorAll('.form__label');

// btn
const btn = document.getElementById('button');

// Validation
const clianing = () =>{
inputElements.forEach((element, index) => {
    element.addEventListener('input', () => {
        element.classList.remove('err-input');
        labels[index].classList.remove('err-label');
        element.classList.remove('input-hover');
        element.classList.remove('input-focus');
    })
})
}

const inputFocus = () =>{
    inputElements.forEach((element, index) => {
        element.addEventListener('focus', () => {
            labels[index].classList.add('label-focus');
        })
        element.addEventListener('blur', () => {
            labels[index].classList.remove('label-focus');
        })
    })
}

inputFocus()

clianing()


btn.addEventListener('click', () =>{
    const classManipulation = (inputElement,inputNumber) => {
        inputElement.classList.add('err-input');
        inputElement.classList.add('input-focus');
        inputElement.classList.add('input-hover');
        labels[inputNumber - 1].classList.add('err-label');
    }
    const conditionDay = (value) =>{
        const testOutDay = value > 31 
        return testOutDay
    }

    const conditionMonth = (value) =>{
        const testOutMonth = value >= 12 || value < 0 
        return testOutMonth
    }

    const conditionYear = (value) => {
        let myYear = (new Date()).getFullYear();
        const testOutYear = value > myYear || value < 0;
        return testOutYear
    }

    const test =  (value,condition) => {
        const test =  condition(value) || isNaN(value) || value  === undefined || value === "" ;
        return test
    }

    // if(test(inputDay.value,conditionDay) && test(inputMonth.value,conditionMonth) && test(inputMonth.value,conditionYear)){
    //     classManipulation(inputDay, 1);
    //     classManipulation(inputMonth, 2);
    //     classManipulation(inputYear, 3);
    // }

    // if(test(inputDay.value,conditionDay) && test(inputMonth.value,conditionMonth)){
    //     classManipulation(inputYear, 3);
    // }

    if(test(inputDay.value,conditionDay)){
        classManipulation(inputDay, 1);
        return;
    }
    if(test(inputMonth.value,conditionMonth)){
        classManipulation(inputMonth, 2);
        return;
    }
    if(test(inputMonth.value,conditionYear)){
        classManipulation(inputYear, 3);
        return;
    }


})