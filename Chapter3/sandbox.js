
/*
//task 9
//variables & block scope
let age = 30;
if(true){
    let age = 40;
    let name = 'Shaun';
    console.log('inside 1st code block!', age, name);

    if(true){
        let age = 50;
        console.log('inside 2nd code block', age);
    }
}
console.log('outside code block!', age);
*/
/*
// task 8
// switch statements
const grade = 'D';

// using if statements
switch(grade){
    case 'A' :
        console.log('you got an A!');
        break;
    case 'B' :
        console.log('you got an B!');
        break;
    case 'C' :
        console.log('you got an C!');
        break;
    case 'D' :
        console.log('you got an D!');
        break;
    case 'E' :
        console.log('you got an E!');
        break;
    default:
        console.log('not a valid grade!');                

}

*/
/*
// task 7
// break and continue
const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i<scores.length; i++){

if(scores[i]===0){
    continue;
}



    console.log('your scores:', scores[i]);

    if(scores[i]===100){
        console.log('congrats, you got the top score!');
        break;
    }
}
*/

/*
// task 6
// Logical Not
let user = false;

if(!user){
    console.log('you must be logged in to continue');
}

console.log(!true);
console.log(!false);
*/

/*
// task 5
// Logical Oprerators Or || and And &&

const password = 'p@ss12';

if (password.length >= 12 && password.includes('@'))
{
    console.log('that password is mighty strong');
}else if(password.length >= 8 || password.includes('@') && password.length>5){
    console.log('that password is strong enough!');
}else {
    console.log('that password is not strong enough!');
}

*/

/*
// task 4
// If else statement
// const age = 24;

// if(age>20){
//     console.log('you are over 20 years old');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// if (ninjas.length > 3){
//     console.log("that's a lot of ninjas");
// }

const password = 'p@ssword1234';
if(password.length >= 12){
    console.log('that password is mighty strong!');
}

if(password.length >= 8 )
{
    console.log('that password is long enough!');
}else{
    console.log('password is not long enough!');
}

*/


/*
// task 3
// Do While loop
let i = 4;
do{
    console.log('val of i is:', i);
    i++;
}while(i<5);

*/

/*
// task 2

// while loop

const names = ['shaun', 'mario', 'luigi'];
let i = 0;
while(i<5){
    console.log('in loop:', i);
    i++;
}
*/

/*

// task 1
//Control Flow (Loops)

// for loops
// for(let i = 0; i<5 ; i++){
//     console.log('in loop:', i);
// }
// console.log('loop finished');

const names =['shaun', 'mario', 'luigi'];

for (let i = 0; i<names.length; i++){
    //console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html); 
}
*/
