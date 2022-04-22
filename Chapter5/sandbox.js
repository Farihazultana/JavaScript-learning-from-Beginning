//task 5
// Primitive Values
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// Reference Values
const userOne = {
    name: 'ryu',
    age: 30
};

const userTwo = userOne;

console.log(userOne, userTwo);

userOne.name = 'chun-li';
console.log(userOne, userTwo);

/*
// task 4
// Math Object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);


const area=7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random numbers

const random = Math.random();


console.log(random);
console.log(Math.round(random * 100));  //Multiplying with 100 generates any number between 1 and 100

*/


/*
// task 3
const blogs = [
    { title: 'why mac & cheese rules', likes: 30 },
    { title: '10 things to make with marmite', likes: 50 }
];

let user = {
    name : 'Crystal',
    age : 30,
    email : 'crystal@thenetninja.co.uk',
    location : 'berlin',
    blogs : [
        { title: 'why mac & cheese rules', likes: 30 },
        { title: '10 things to make with marmite', likes: 50 }
    ],
    login : function(){
        console.log('the user logged in');
    },
    logout : function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};

user.logBlogs();

*/
/*

//task 2
let user = {
    name : 'Crystal',
    age : 30,
    email : 'crystal@thenetninja.co.uk',
    location : 'berlin',
    blogs : ['why mac & cheese rules','10 things to make with marmite'],
    login : function(){
        console.log('the user logged in');
    },
    logout : function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

user.login();
user.logout();

user.logBlogs();
console.log(this);

const name = 'mario';
name.toUpperCase();

*/

/*
//Task 1
//object literals
let user = {
    name : 'Crystal',
    age  : 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs : ['why mac & cheese rules', '10 things to make with marmite']
};

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);

console.log(user['email']);
user['name'] = 'chun-li';
console.log(user['name']);
console.log(typeof user);

const key = 'location';
console.log(user[key]);
*/