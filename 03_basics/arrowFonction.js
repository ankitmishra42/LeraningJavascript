// simple arrow function
let a = () => { console.log('simple arrow function') };
a();

// fat arrow function with parameter return
let b = parm => { console.log('fat arrow function with parameter return'+ parm) };
b(45);

let c = (parm, parm2, parm3) => { console.log('fat arrow function with parameter2 return'+ parm + parm2 + parm3) };
c(12, 23, 89);


// fat arrow function with implecit return
let g = () => 645;

console.log(g());


// Template leterals backtick
let x = 24;
let y = 25;
let z = 27;

console.log(`Hey there are three numbers ${x}, ${y}, And ${z} the addition ${x+y+z}`);

// spread/rest
let arr = [1,2,3,4,5,6,7,8,9];
let arrc = [...arr];

let restsr = (a, b, c, ...d) => {
    console.log(a, b, c, d);
}
restsr(1,2,3,4,5,6,7,8,10,23,65);


let arr2 = [1,7,8,9];
let [h, k] = arr2;
let [p,,q] = arr2;

let obj = {name : "ankit", age : 20};
let {age} = obj;
