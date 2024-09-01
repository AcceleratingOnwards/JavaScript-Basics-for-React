function main(){
    console.log("test1");
    console.log("test2");

    let , const , var  --> scope ;
}

main();


              ----------------------------------------------------------------------------------------------

function addTraditional(a,b){
    return a + b;
}

const value = addTraditional(2,4);

console.log(value);

              -------------------------------------------------------------------------------------------------
const add = (a,b) => a + b;
console.log(add(2,4));
             --------------------------------------------------------------------------------------------------
const ids = [1, 2, 3, 4, 5];

ids.forEach(id => {
    id++;
    console.log(id);
});

             ------------------------------------------------------------------------------------------------

function as declarations or expressions--> difference lies in calling the function before and after.

             ------------------------------------------------------------------------------------------------

Rest operator

function test(firstArgument, secondArgumnet, ...OtherArguments){
    console.log(firstArgument);
    console.log(secondArgumnet);
    console.log(OtherArguments);
}

test('Prakhar', 'Akshat', 'Abhijit', 'Siddarth');
             ------------------------------------------------------------------------------------------------


spread Operator...
const someFruits = ['Apple', 'Grapes'];
const moreFruits = ['Guava', 'orange'];

const ourFruits = [...someFruits, ...moreFruits];
console.log(ourFruits);

const fruitsContent = [...ourFruits, 'Pomegranate'];
console.log(fruitsContent);

              --------------------------------------------------------------------------------------------------

default export of modules
import sum from "./math.js";

console.log(sum(2,7));

             ------------------------------------------------------------------------------------------------------

named export of modules
import {sum, multiply} from "./math.js"
           OR
import * as math from "./math.js";

console.log(math.sum(2,3), multiply(2,3));

           --------------------------------------------------------------------------------------------------------

template literals (refers to backticks), string interpolation, multi line string

const firstName = "john";
const greetings = "hello " + firstName;

console.log(greetings);
Before ES6 double and single quote was used, after backtick came into use as :

const a = 3;
const b = 12;

console.log(`The sum of ${a} and ${b} is ${a + b}`);

multi - line string 
const user = {
    name : "Alok",
    age : 23,
    place : "UP"
}

const desc = `User Information:
name : ${user.name}
age : ${user.age}
place : ${user.place}
`
console.log(desc);
                     
                       -----------------------------------------------------------------------------------------------------------------------


Array find --> return first(single) element if found throughout the array
const todos = [
    {id : 1, task : "Learn JavaScript", isCompleted : true},
    {id : 2, task : "Learn Java", isCompleted : true},
    {id : 3, task : "Learn C++", isCompleted : false},
    {id : 4, task : "Learn React", isCompleted : true},
];

const  todoById = todos.find(todo => todo.id === 2);

console.log(todoById);

                  ---------------------------------------------------------------------------------------------------------------------------

Array filter  ----> return multiple elements if condition evalutes to true throuhout the array.
const todos = [
        {id : 1, task : "Learn JavaScript", isCompleted : true},
        {id : 2, task : "Learn Java", isCompleted : true},
        {id : 3, task : "Learn C++", isCompleted : false},
        {id : 4, task : "Learn React", isCompleted : true},
    ];


const resultedArrays = todos.filter(todo => todo.isCompleted === true);
const resultedArrays = todos.filter(todo => todo.task.includes("J"));
console.log(resultedArrays);

                  ------------------------------------------------------------------------------------------------------------------------------


Array ForEach  --> it modifies the existing arrays. Here it modifies todos. Actually it iterate over Array todo and perform operation defined by us
const todos = [
        {id : 1, task : "Learn JavaScript", isCompleted : true},
        {id : 2, task : "Learn Java", isCompleted : true},
        {id : 3, task : "Learn C++", isCompleted : false},
        {id : 4, task : "Learn React", isCompleted : true},
    ];

const resultedArrays = todos.forEach((todo) => {
    todo.isCompleted = false;
})

todos.forEach((todo, index) => {
    console.log(index + ":" + todo.task);
})

console.log(resultedArrays);
console.log(todos);

          -------------------------------------------------------------------------------------------------------------------------------------------

Array map ---> it transform the arrays in the way you desire  i.e modify, or adding some part


const todos = [
    {id : 1, task : "Learn JavaScript", isCompleted : true},
    {id : 2, task : "Learn Java", isCompleted : true},
    {id : 3, task : "Learn C++", isCompleted : false},
    {id : 4, task : "Learn React", isCompleted : true},
];

const mappedTodos = todos.map((todo) => {
   return {id : todo.id, task : todo.task};
         OR
   return {...todo, priority : "High"};
})

console.log(mappedTodos);

                   -----------------------------------------------------------------------------------------------------------------

PROMISES , ASYNCHRONOUS & AWAIT

Promises
  const promise = new Promise((resolve, rejected) => {

    setTimeout(() => {
        // resolve("Operation Successful");
        rejected("Operation rejected");
    }, 2000)
  });


  promise.then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

             ----------------------------------------------------------------------------------------------------------------

Promises fetch example

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((result) => result.json())
.then((data) => console.log(data))
.catch((err) => {
    console.error(err);
});
  
              ------------------------------------------------------------------------------------------------------------------

Async/Await

function fetchData(){
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((err) => {
        console.error(err);
    });
}

async function fetchDataAsynch() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const json = await response.json();
        console.log(json);

    } catch(err){
        console.log(err);
    }
    
}

fetchDataAsynch();