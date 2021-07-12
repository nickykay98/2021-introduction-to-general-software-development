var myName = "NK";
var myAge = 21;
var lovesCoding = true;
console.log(myName);
console.log(myAge);
console.log(lovesCoding);
var myArray = ['a', 'b', 'c'];
myArray.push('d');
console.log(myArray);
var Days;
(function (Days) {
    Days[Days["MON"] = 0] = "MON";
    Days[Days["TUE"] = 1] = "TUE";
    Days[Days["WED"] = 2] = "WED";
    Days[Days["THU"] = 3] = "THU";
    Days[Days["FRI"] = 4] = "FRI";
    Days[Days["SAT"] = 5] = "SAT";
    Days[Days["SUN"] = 6] = "SUN";
})(Days || (Days = {}));
;
var dayOfWeek = Days.FRI;
function sayHello(person) {
    console.log('Hello, ', person.name);
}
var me = {
    name: 'NK',
    age: 21
};
sayHello(me);
// convert to js using 'tsc testing.ts', then run in cmd using 'node testing.js'
