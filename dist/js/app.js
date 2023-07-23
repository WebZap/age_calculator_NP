"use strict";
const {log} = console;

const addData = () => {
    const date = new Date(2011,2,5);
    return `год: ${date.getFullYear()}, Месяц ${date.getMonth() + 1}`
} 

log(addData())
