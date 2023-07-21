const name = "yoshi";

console.log(name);

const greet = (name) => {
    console.log('hello, ' + name);
}

greet(name);
//console.log(global);

setTimeout(() => {
    console.log("3 seconds over");
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log("in the interval");
}, 1000);

//ctrl c cancels the program

console.log(__dirname); //pritns out directroy name
console.log(__filename); // pritns out file nae 

