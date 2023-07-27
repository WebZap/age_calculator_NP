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
const btn = document.querySelector('.button img');

// Validation
const clianingAfterComplete = () => {
    inputElements.forEach((element, index) => {
        element.classList.remove('input-complete');
        labels[index].classList.remove('label-complete');
        btn.classList.remove('complete');
    })
}

const clianing = () =>{
inputElements.forEach((element, index) => {
    element.addEventListener('input', () => {
        btn.classList.remove('err-btn');
        element.classList.remove('err-input');
        labels[index].classList.remove('err-label');
        element.classList.remove('input-hover');
        element.classList.remove('input-focus');
        clianingAfterComplete();
    })
})
}
clianing()

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

btn.addEventListener('click', () =>{
    const classManipulation = (inputElement,inputNumber) => {
        inputElement.classList.add('err-input');
        inputElement.classList.add('input-focus');
        inputElement.classList.add('input-hover');
        btn.classList.add('err-btn');
        labels[inputNumber - 1].classList.add('err-label');
        clianingAfterComplete();
    }
    const conditionDay = (value) =>{
        const testOutDay = value > 31 
        return testOutDay
    }

    const conditionMonth = (value) =>{
        const testOutMonth = value >= 13 || value < 0 
        return testOutMonth
    }

    const conditionYear = (value) => {
        let myYear = (new Date()).getFullYear();
        const testOutYear = value >= myYear || value < 500;
        return testOutYear
    }

    const test =  (value,condition) => {
        const test =  condition(value) || isNaN(value) || value  === undefined || value === "" ;
        return test
    }

    if(test(inputDay.value,conditionDay) && test(inputMonth.value,conditionMonth) && test(inputYear.value,conditionYear)){
        classManipulation(inputDay, 1);
        classManipulation(inputMonth, 2);
        classManipulation(inputYear, 3);
        return;
    }

    if(test(inputDay.value,conditionDay) === true && test(inputMonth.value,conditionMonth) === false && test(inputYear.value,conditionYear) === false){
        classManipulation(inputDay, 1);
        return;
    } 

    if(test(inputDay.value,conditionDay) === false && test(inputMonth.value,conditionMonth) === true && test(inputYear.value,conditionYear) === false){
        classManipulation(inputMonth, 2);
        return;
    } 

    if(test(inputDay.value,conditionDay) === false && test(inputMonth.value,conditionMonth) === false && test(inputYear.value,conditionYear) === true){
        classManipulation(inputYear, 3);
        return;
    } 

    if(test(inputDay.value,conditionDay) === true && test(inputMonth.value,conditionMonth) === true && test(inputYear.value,conditionYear) === false){
        classManipulation(inputDay, 1);
        classManipulation(inputMonth, 2);
        return;
    } 

    if(test(inputDay.value,conditionDay) === false && test(inputMonth.value,conditionMonth) === true && test(inputYear.value,conditionYear) === true){
        classManipulation(inputMonth, 2);
        classManipulation(inputYear, 3);
        return;
    } 

    if(test(inputDay.value,conditionDay) === true && test(inputMonth.value,conditionMonth) === false && test(inputYear.value,conditionYear) === true){
        classManipulation(inputDay, 1);
        classManipulation(inputYear, 3);
        return;
    }
    btn.classList.add('complete')
    inputElements.forEach((element, index) => {
        element.classList.add('input-complete');
        labels[index].classList.add('label-complete');
        element.value = "";
    })
    // тут будет дальнейшая логика
})