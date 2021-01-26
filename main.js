// TASK 1:

// There are two arrays:

// var dataOld = [34, true, "Peter", 1992];
// var dataNew = [];

// Repack old array to the new one, in the same order

// Console log result

//SOLUTION

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

for (i = 0; i < dataOld.length; i++) {
    dataNew[i] = dataOld[i];
}

console.log(dataNew);

// TASK 2:

// There are two arrays:

// var dataOld = [34, true, "Peter", 1992];
// var dataNew = [];

// Repack old array to the new one, in the reverse order

// Console log result

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

for (i = dataOld.length - 1; i >= 0; i--) {
    dataNew[dataNew.length] = dataOld[i];
}

console.log(dataNew);

// TASK 3:

// There are two arrays:

// var dataOld = [34, true, "Peter", 1992];
// var dataNew = [12, "Jack"];

// Repack old array to the new one, so the data from two arrays is joined, starting with existing data from the new one.

// Console log result

var dataOld = [34, true, "Peter", 1992];
var dataNew = [12, "Jack"];

for (i = 0; i < dataOld.length ; i++) {
    dataNew[dataNew.length] = dataOld[i];
}

console.log(dataNew);

// TASK 4:

// There are two arrays:

// var a = [12, 56, 32, 44, 69];
// var b = [88, 7, 13];

// Create a new array that contains data from both arrays, starting with data from array a.

// Console log result

var a = [12, 56, 32, 44, 69];
var b = [88, 7, 13];
var newArr = [];

for (i = 0; i < a.length; i++) {
    newArr[i] = a[i];
}
for (i = 0; i < b.length; i++) {
    newArr[newArr.length] = b[i];
}

console.log(newArr);

// TASK 5:

// There are two arrays:

// var a = [12, 56, 32, 44];
// var b = [88, 7, 13];

// Create a new array that contains data from both arrays, but in alternating order, one element from array a, then one element from array b, and so on. In the end it should look like this:

// [12, 88, 56, 7, 32, 13, 44]

// Console log result

var a = [12, 56, 32, 44];
var b = [88, 7, 13];
var newArrTaskFive = [];

for (i = 0; i < a.length; i++) {
    newArrTaskFive[i * 2] = a[i];
}
for (i = 0; i < b.length; i++) {
    newArrTaskFive[i * 2 + 1] = b[i];
}

console.log(newArrTaskFive);

// TASK 6:

// Console log next pattern (you're allowed to use only single *)

// *
// **
// ***
// ****
// *****
// ******

var stars = '*';
var star = '*';

for (i = 0; i < 6; i++) {
    console.log(stars);
    stars += star;
}

// TASK 7:

// Console log next pattern (you're allowed to use only single * or empty space)

// **********
// *        *
// *        *
// *        *
// *        *
// **********

var stars = '';
var star = '*';

for (i = 0; i < 6; i++) {

    for (j = 0; j < 10; j++) {
        stars += star;
        console.log(stars);
    }
}







/*
var star = '*';


for (var i = 0; i < 6 ; i++) {
var stars = '';

    for(var j = 0; j < 10; j++) {

    if (i === 0 )
    stars += star;
    
    } else {
    stars
}
console.log(stars);

};
*/






