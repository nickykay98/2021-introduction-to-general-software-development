let myName: string = "NK";
let myAge: number = 21;
let lovesCoding: boolean = true;

console.log(myName);
console.log(myAge);
console.log(lovesCoding);

let myArray: string[] = ['a', 'b', 'c'];
myArray.push('d');
console.log(myArray);

enum Days {
    MON,
    TUE,
    WED,
    THU,
    FRI,
    SAT,
    SUN
};
let dayOfWeek: Days = Days.FRI; 

interface Person {
    name: string,
    age: number,
}
function sayHello (person: Person) {
    console.log('Hello,', person.name);
}
let me: Person = {
    name: 'NK',
    age: 21,
}
sayHello(me); 

// convert to js using 'tsc testing.ts', then run in cmd using 'node testing.js'