"use strict";
const {log} = console;

const addData = () => {
    const date = new Date(2011,2,5);
    return `год: ${date.getFullYear()}, Месяц ${date.getMonth() + 1}`
} 


// log(addData())

// add DOM elements

const inputDay = document.getElementById('input-day');
const inputMonth = document.getElementById('input-month');
const inputYear = document.getElementById('input-year');

// btn
const btn = document.getElementById('button');

// Validation

btn.addEventListener('click', () =>{
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
        const test = value === "" || condition(value) || isNaN(value) || value  === undefined;
        return test
    }
    if(test(inputDay.value,conditionDay)){
        alert(hello)
    }
})