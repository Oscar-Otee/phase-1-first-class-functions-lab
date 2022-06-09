// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(anArray) {
    return anArray.slice(0, 2);
}

function returnLastTwoDrivers(anArray) {
    return anArray.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(multiplier) {
    return (fare) => fare * multiplier;
}



function fareDoubler(fare) {
    return fare * 2;
}

function fareTripler(fare) {
    return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers, functionName) {
    return functionName(arrayOfDrivers);
}
