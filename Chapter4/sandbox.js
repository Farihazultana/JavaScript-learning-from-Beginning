// Task 7
//get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person =>
    {//create html template
       html += `<li style="color: purple">${person}</li>`;
    }
);

console.log(html);
ul.innerHTML = html;

/*
// Task 6
//Callbacks & forEach

const myFunc = (callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc(value);
};
// myFunc(function(value){
//     do something
//     console.log(value);
// });
myFunc(value =>{
    //do something
    console.log(value);
});

// Practice
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
// people.forEach(function(person){
//     console.log(person);
// });

people.forEach(person =>{
    console.log(person);
});

const logPerson = (person, index) =>{
    console.log(`${index} - hello ${person}`);
};
people.forEach(logPerson);

*/
/*
// Task 5
const name = 'Shaun';
// functions
const greet = () => 'hello';

let resultOne = greet();
console.log(resultOne);

// methods
let resultTwo = name.toUpperCase();
console.log(resultTwo);


*/
/*
// Task 4
// regular function
const calcArea1 = function(radius){
    return 3.14 * radius**2;
}

const area1 = calcArea1(5);
console.log('area is:', area1); 

// arrow function
const calcArea2 = (radius) => {
    return 3.14*radius**2;
};


const area2 = calcArea2(5);
console.log('area is:', area2); 

// practice arrow functions
// example 1
const greet1 = function(){
    return 'hello, world from normal function';
};
const result1 = greet1();
console.log(result1);

const greet2 = () => 'hello, world from arrow function';

const result2 = greet2()
console.log(result2);

// example 2
const bill = function(products, tax){
    let total = 0;
    for(let i=0; i<products.length; i++){
        total += products[i]+products[i]*tax;
    }
    return total;
}
console.log(bill([10,15,30], 0.2));

const bill2 = (products, tax) => {
    let total = 0;
    for(let i=0; i<products.length; i++){
        total += products[i]+products[i]*tax;
    }
    return total;
}
console.log(bill2([15,20,35], 0.2));

*/

/*
//Task 3
//returning values
const calcArea = function(radius){
    //let area = 3.14 * radius**2;
    //console.log(area);
    return 3.14 * radius**2;
}

//calcArea(5); 
//console.log(area); //wont work as area only works inside the function

const area = calcArea(5);
console.log(area);

*/
/*
//Task 2
//arguments and parameters

// const speak = function(name, time){
//     console.log(`good ${time} ${name}`);
// };

// speak('Mario', 'morning');

const speak = function(name = 'Luigi', time = 'Night'){
     console.log(`good ${time} ${name}`);
 };

speak();
speak('shaun','day');

*/
/*
//Task 1
//function declaration
function greet(){
    console.log('hello there');
}

//function expression
const speak=function(){
    console.log('good day!');
};


greet();
greet();
greet();


speak();
speak();
speak();
*/
