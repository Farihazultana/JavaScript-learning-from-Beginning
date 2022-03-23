
// Chapter 2 Ends here
// task 10
// type conversion
let score = '100';

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

//let result = Number('Hello');
//let result = String(50);
//let result = Boolean(10);
//let result = Boolean('0');
let result = Boolean('');
console.log(result, typeof result);


/*
let age = 25;
// loose comparison (different types can still be equal) 
// console.log(age == 25);
// console.log(age == '25');

// console.log(age != 25);
// console.log(age != '25');


// strict comparison (different types cannot be equal)
console.log(age === 25);
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');

*/

/*
//task 9
//booleans and comparisons
console.log(true,false,'true','false');

//methods can return booleans
let email = 'luigi@thenentninja.co.uk';
let names = ['mario', 'luigi', 'toad'];

//let result = email.includes('!');
//let result = names.includes('bowser');
//console.log(result);

//comparison operators
let age = 25;

// console.log(age == 25);
// console.log(age == 35);
// console.log(age != 35);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25);

let name = 'fariha';

console.log(name == 'Fariha');
console.log(name == 'fariha');
console.log(name > 'crystal');
console.log(name > 'Fariha');
console.log(name > 'Crystal');

*/

/*
//task 8
let age=null;

console.log(age, age+3, `the age is ${age}`);

*/
/*
//task 7
let ninjas = ['Fariha', 'Sultana', 'Anannya'];

//ninjas[1]='Fari';
//console.log(ninjas);
//console.log(ninjas[1]);

//let ages=[25, 27, 53, 65];
//console.log(ages[2]);

//console.log(ninjas.length);

//array methods

//let result = ninjas.join(',');
//console.log(result);

//let result = ninjas.indexOf('Anannya');
//console.log(result);

//let result = ninjas.concat(['ken', 'barbie']);
let result = ninjas.push('Ken');

console.log(result);
result = ninjas.pop('Ken');
console.log(result);
console.log(ninjas);

*/

/*
//task 6
//template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

//concatenation way 
let result1 = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(result1);

//template string way (uses bactic quotation)
let result2 = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result2);


//creating html templates
let html=`
    <h2>${title}</h2
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
    `;

    console.log(html);

/*
//task 5
let radius = 10;
let pi = 3.14;

console.log(radius,pi);

// math operation +, -, *, /, **, %

console.log(10/2);
//let result = radius%3;
//console.log(result);
//let result = pi * radius**2;
//console.log(result);

//order of operation - B I D M A S

//let result = 5 * (10-3)**2;
//console.log(result);

let likes = 10;
//likes=likes+1;
//likes++;
//likes--;
//likes += 10;
//likes -=5;
//likes*=5;
likes /= 5;
console.log(likes);

//NaN - not a number

console.log(10/'hello'); //It will print NaN in the console
console.log(5*'hello'); //It will print NaN in the console
console.log('hello'+2); // It will concatenate
console.log('hello' - 2); //It will print NaN in the console 

let result = 'the blog has ' + likes + ' likes';
console.log(result);
*/


/*
//task 4
let email = 'farihasultana237@gmail.com';

let result1 = email.lastIndexOf('a');
let result2 = email.slice(1,6);
let result3 = email.substr(1,12);
let result4 = email.replace('h', 'a');
let result5 = email.replace('a','h');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
*/

/*
//task 3

//strings
console.log('Hello, world!');
let email = 'mario@thenetninja.co.uk';
console.log(email);


//string concatenation
let firstName = 'Fariha';
let lastName = 'Sultana';

let fullName = firstName + ' ' + lastName
console.log(fullName);

//getting characters
console.log(fullName[0]);


//string length
console.log(fullName.length);


//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

*/

//task 2
/*
let age = 25;
let year = 2022;

//log things to console
console.log(age,year);

age = 30;
console.log(age);

const points = 100;
console.log(points);

var score = 75; 
console.log(score);
*/

//task 1
/*
alert('Hello');
console.log(1);
console.log(2);*/