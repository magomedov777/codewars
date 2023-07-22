//Codewars for IT-INCUBATOR 
//start 22 January, 2023

function evalObject(value){                   
  switch(value.operation){
    case'+': return value.a + value.b;
    case'-': return value.a - value.b;
    case'/': return value.a / value.b;
    case'*': return value.a * value.b;
    case'%': return value.a % value.b;
    case'^': return Math.pow(value.a, value.b);
}};

function myFirstKata(a, b) {
  if (typeof(a) === 'number' && typeof(b) === 'number') {
    return (a % b) + (b % a);
  } else {
return false;
}};

myFirstKata = (a, b) => typeof(a) === 'number' && typeof(b) === 'number' ? (a % b) + (b % a) : false;

function warnTheSheep(queue) {
  const position = queue.reverse().indexOf('wolf');

  return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
};

function zipWith(fn,a0,a1) {
  let arr = [];
  const short = Math.min(a0.length, a1.length); 
  for (let i=0;i<short;i++){
    arr.push(fn(a0[i],a1[i]))
  }
  return arr
};

function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

const myArray = [];
  for (let i = 1; i < 6; i++) {
  myArray.push(i);
};

function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
};

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
};

function removeFirstTwo(list) {
  const [, , ...shorterList] = list;
  return shorterList;
}

const half = ({ max, min }) => (max + min) / 2.0;

function half({max, min}){
  return (max + min) / 2.0;
};

half = (max, min) => (max + min) / 2.0;

function firstNonRepeatingLetter(s) {
  return s[s.toLowerCase().split('').findIndex(letter => s.toLowerCase().split('').filter(l => l === letter).length === 1 )] || '';
}

function balancedNum(number) {
  let stringNum = String(number);
  const numbers = Array.from(
    { length: (stringNum.length - 1) / 2 },
    (_, idx) => stringNum[idx] - stringNum[stringNum.length - 1 - idx]
  );
      return numbers.reduce((total, number) => total + number, 0) === 0
        ? 'Balanced'
        : 'Not Balanced';
};

function whatday(num) 
  if(num < 1 || num > 7){
    return "Wrong, please enter a number between 1 and 7"
  }else if(num === 1){
   return "Sunday"
 }else if(num === 2){
   return "Monday"
 }else if(num === 3){
   return "Tuesday"
 }else if(num === 4){
   return "Wednesday"
 }else if(num === 5){
   return "Thursday"
 }else if(num === 6){
   return "Friday"
 }else if(num === 7){
   return "Saturday"
 };

 function century(year) {
  return Math.ceil(year / 100)
 };

 century = year => Math.ceil(year / 100);

 function typeOfSum(a, b) {
  return typeof(a + b)
};

typeOfSum = (a,b) => typeOfSum(a + b);

function contamination(text, char){
  return char.repeat(text.length)
};

contamination = (text, char) => char.repeat(text.length);

function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2].sort((a,b) => a - b))];
};

function maps(x){
  return x.map(x => x * 2); 
};

maps = x => x.map(x => x * 2);

String.prototype.isUpperCase = function() {
  return this.toString() === this.toUpperCase();
};

let saleHotdogs = n => n * (n < 5 ? 100 : (n >= 5 && n < 10 ? 95 : 90));

function saleHotdogs(n){
  return n * (n < 5 ? 100 : (n >= 5 && n < 10 ? 95 : 90));
};

function logs(x, a, b){
return Math.log(a * b) / Math.log(x);
};

const logs = (x, a, b) => Math.log(a * b) / Math.log(x);

function basicOp(operation, value1, value2)
{
if(operation === "+"){
   return value1 + value2
}else if(operation === "-"){
    return value1 - value2
}else if(operation === "*"){
    return value1 * value2
}else if(operation === "/"){
    return value1 / value2;}
};

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if(distanceToPump <= mpg * fuelLeft){
    return true;
  }else if(distanceToPump != mpg * fuelLeft){
    return false;
  }
};

function multipleOfIndex(array){
  return array.filter((element, index) => element % index == 0);
};

multipleOfIndex = arr => arr.filter((e, i) => e % i == 0); 

function check(a, x){
  return a.includes(x)
};

check = (a, x) => a.includes(x);

var joinStrings = (string1, string2) => `${string1} ${string2}`;

function joinStrings(string1, string2){
  return `${string1} ${string2}`;
};

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let hisOld = dadYearsOld - sonYearsOld * 2;
  if(hisOld < 0){
    return hisOld * (-1);
  }
    return hisOld
};

function pillars (numPill, dist, width){
  if(numPill < 2){
    return 0;
  } 
    return numPill * ((dist * 100) + width) - (width * 2) - (dist * 100)
};

pillars = (numPill, dist, width) => numPill < 2 ? 0 : numPill * ((dist * 100) + width) - (width * 2) - (dist * 100);

function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10){
    return 100;
  }else if(exam > 75 && projects >= 5){
    return 90;
  }else if(exam > 50 && projects >= 2){
    return 75;
  }else {
    return 0;
  }
};

finalGrade = (exam, projects) => exam > 90 || projects > 10 ? 100 :
exam > 75 && projects >= 5 ? 90 :
exam > 50 && projects >= 2 ? 75 : 0;

const quarterOf = (month) => {
  if(month >= 1 && month <= 3){
    return 1;
  }else if(month >= 3 && month <= 6){
    return 2;
  }else if(month >= 7 && month <= 9){
    return 3;
  }else(month >= 10 && month <= 12)
    return 4;
};

function typeValidation(variable, type) {
  return typeof variable === type; 
};

typeValidation = (variable, type) => typeof variable === type;

function likes(names) {
  if(names.length == 0){
    return "no one likes this";
  }else if(names.length == 1){
    return names[0] + " likes this";
  }else if(names.length == 2){
    return names[0] + " and " + names[1] + " like this";
  }else if(names.length == 3){
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  }else{
    return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
  }
};

function ensureQuestion(s) {
  if(s.endsWith('?')){
    return s
  }else{
    return s + '?'
  }
};

ensureQuestion = s => s.endsWith('?') ? s : s = '?';

const largest = (n, array) => array.sort((a,b) => a - b).slice(array.length - n);

function largest(n, array){
  return array.sort((a,b) => a - b).slice(array.length - n);
};

const evenOrOdd = (number) => number % 2 === 0 ? "Even" : "Odd";

const solution = (start, finish, distance = finish - start) => Math.floor(distance / 3) + distance % 3; 

function multiplyAll(arr) {
  return function(num){
    return arr.map(e => e * num)
  }
};

function toCsvText(array) {
  return array.join("\n");
};

toCsvText = arr => arr.join("\n");

function invert(array) {
  return array.map(x => -x)
};

invert = array => array.map(x => -x);

function grow(x){
  return x.reduce((a,b) => a * b)
 };

grow = x => x.reduce((a,b) => a * b);

 function howMuchILoveYou(nbPetals) {
  return ["I love you", "a little", "a lot", "passionately", "madly", "not at all"][(nbPetals - 1) %6]
  };

howMuchILoveYou = nbPetals => ["I love you", "a little", "a lot", "passionately", "madly", "not at all"][(nbPetals - 1) %6];

function well(x){
    let good = 0;
     for (const idea of x){
       if(idea === "good"){
         good += 1;
       }}
     return good === 0 ? "Fail!" : good > 2 ? "I smell a series!" : "Publish!"
  };

sumMix = x => x.reduce((a,b) => +b + a, 0);

function sumMix (x){
  return x.reduce((a,b) => +b + a, 0);
};

const stringToArray = (string) => string.split(' ');

function fakeBin(x){
    let bin = "";
     for(const a of x){
      if(parseInt(a) < 5){
        bin += "0";
        }else{
          bin += "1";
        }
       }
      return bin
  };

function check(a, x) {
    return a.includes(x);
  };

const check = (a, x) => a.includes(x);

function distinct(a) {
    return [...new Set(a)];
  };

distinct = a => [...new Set(a)];

function first (arr, n = 1){
    if(n == 0){
      return [];
    }else if(n > 0){
      return arr.slice(0, n);
    }};

function monkeyCount(n) {
      return Array.from({length: n},(_,index) => index + 1)
}

monkeyCount = n => Array.from({length: n}, (_,index) => index + 1);

getAverage = marks => Math.floor(marks.reduce((a, b) => a + b) / marks.length);

function getAverage(marks){
  return Math.floor(marks.reduce((a,b) => a + b) / marks.length);
};

makeUpperCase = str => str.toUpperCase();

function makeUpperCase(str){
  return str.toUpperCase();
};

repeatStr = (n, s) => s.repeat(n);

function repeatStr(n, s){
  return s.repeat(n);
};

const removeExclamationMarks = s => s.replace(/\!/g, '');

function removeExclamationMarks(s){
  return s.replace(/\!/g, '');
};

billboard = (name, price = 30) => [...new Array(name.length)].fill(price).reduce((a,b) => a + b);

function billboard(name, price = 30){
  return [...new Array(name.length)].fill(price).reduce((a,b) => a + b);
};

function countBy(x, n) {
      let z = [];
      for(let i = 1; i <= n; i++)
       z.push(i * x)
        return z;
    };

removeEveryOther = arr => arr.filter((_, index) => index % 2 == 0);

function removeEveryOther(arr){
  return arr.filter((_, index) => index % 2 == 0);
};

differenceInAges = ages => [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];

function all( arr, fun ){
      return arr.every(fun)
    };

all = (arr, fun) => arr.every(fun);

function positiveSum (arr){
      let sum = 0;
       for(let i = 0; i < arr.length; i++)
        if(arr[i] >= 0) sum += arr[i];
         return sum;
     };

printArray = array => array.join();

function printArray(array){
  return array.join();
};

function stairsIn20(s){
  return 20 * s.reduce((a, b) => a + b.reduce((c,d) => c + d, 0) ,0) 
};

stairsIn20 = s => 20 * s.reduce((a, b) => a + b.reduce((c,d) => c + d, 0) ,0);

function arr2bin(arr) {
      return arr.reduce((a,b) => a + (typeof b == 'number' ? b : 0),0).toString(2)
};

arr2bin = arr => arr.reduce((a,b) => a + (typeof b == 'number' ? b : 0), 0).toString(2);

function buildString(...template){
  return `I like ${template.join(', ')}!`
};

buildString = (...template) => `I like ${template.join(', ')}!`; 

function createArray(number){
  var newArray = [];
  for(var counter = 1; counter <= number; counter++){
     newArray.push(counter);
}
  return newArray;
};

function Warrior(n){
  let name = n;  
  this.name = function(n){
    if(n) name = n;
    return name;
  }
}
  Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
};

function sumOfDifferences(arr) {
  if(arr.length > 1){
    return Math.max(...arr) - Math.min(...arr)
  }else{
    return 0
  }
};

sumOfDifferences = arr => arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;

function twoSort(s) {
  return s.sort()[0].split('').join("***")
};

twoSort = s => s.sort()[0].split('').join('***');

function gooseFilter (birds) {
var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(b => !geese.includes(b))
};

function squareSum(numbers){
  return numbers.map(x => x * x).reduce((a,b) => a + b, 0)
};

squareSum = numbers => numbers.map(x => x * x).reduce((a,b) => a + b, 0);

function smash (words) {
  return words.join(' ')
};

smash = words => words.join(' ');

function sum (numbers) {
  return numbers.reduce((a,b) => a + b, 0)
};

sum = numbers => numbers.reduce((a,b) => a + b, 0);

countSheeps = arrayOfSheep => arrayOfSheep.filter(Boolean).length;

function countSheeps (arrayOfSheep){
  return arrayOfSheep.filter(Boolean).length;
};

function digitize (n){
  return String(n).split('').reverse().map(Number);
};

digitize = n => String(n).split('').reverse().map(Number);

ArrowFunc = arr => arr.map(x => String.fromCharCode(x)).join('');

function newFunc (arr){
  arr.map(x => String.fromCharCode(x)).join('');
};

function findAverage (nums) {
  return nums.reduce((a,b) => a + b) / nums.length
};

findAverage = nums => nums.reduce((a,b) => a + b) / nums.length;

function divisibleBy(numbers, divisor){
  return numbers.filter(a => a % divisor == 0)
  };

divisibleBy = (numbers, divisor) => numbers.filter(a => a % divisor == 0);


function isVow (a){
  return a.map(x => /[aeiou]/.test(String.fromCharCode(x)) ? String.fromCharCode(x) : x);
};

index = (array, n) => array[n] ** n || -1;

function index (array, n){
  return array[n] ** n || -1
};

function findMultiples(integer, limit) {
    let result = [];
    for(let i = integer; i <= limit; i += integer)
      result.push(i)
    return result
  };

function solution(input, markers) {
  let abc = input.split("\n")
  for(let i in markers){
    for(let j in abc){
      let stl = null;
      let def = abc[j].indexOf(markers[i]);
      if(def >= 0){
        abc[j] = abc[j].substring(0, def).trim();
      }
    }
  }
  return abc.join("\n");
};

const capitalizeWord = word => word[0].toUpperCase() + word.slice(1);

function capitalizeWord (word) {
  return word[0].toUpperCase() + word.slice(1);
};

sameCase = (a, b) => /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)) : -1;

function nameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = first + ' ' + last;
};

function orderWeight(strng) {
  const sum = (str) => str.split('').reduce((sum,el)=>(sum+(+el)),0);
  function add(a, b){
    let sA = sum(a);
    let sB = sum(b);
    return sA === sB ? a.localeCompare(b) : sA - sB;
  };
  return strng.split(' ').sort(add).join(' ');
};

function alternate(n, firstValue, secondValue){
  let arr = []
  for(let i = 0; i < n; i++){
    arr.push(i % 2 === 0 ? firstValue : secondValue)
  }
  return arr;
};

function rainAmount(mm){
  if (mm < 40) {
       return "You need to give your plant " + (40 - mm) + "mm of water"
  } else {
       return "Your plant has had more than enough water for today!"
  }};
  
rainAmount = mm => mm < 40 ? "You need to give your plant " + (40 - mm) + "mm of water" :
"Your plant has had more than enough water for today!";

function multiply(number){
  return number * 5 ** String(Math.abs(number)).length
};

multiply = number => number * 5 ** String(Math.abs(number)).length;

function correctTail(body, tail){  
  return body[body.length - 1] == tail;
 };

correctTail = (body, tail) => body[body.length - 1] == tail;

function howManyDalmatians(number){
  let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  return (number <= 10) ? dogs[0] :
         (number <= 50) ? dogs[1] : 
         (number == 101) ? dogs[3] :
          dogs[2]
  };

weatherInfo = temp => `${c = (temp - 32) * 5 / 9} is ${c > 0 ? 'above ' : ''}freezing temperature`;

 const areaOrPerimeter = function(l , w) {
    if(l == w) {
      return l * w
    }
      return (l + w)*2
  };


let humanYearsCatYearsDogYears = function(humanYears) {
    if(humanYears == 1) return [1, 15, 15]
    if(humanYears == 2) return [2, 24, 24]
    return [
      humanYears,
      24 + (humanYears - 2) * 4,
      24 + (humanYears - 2) * 5
    ];
  };

function multiTable(number) {
    let result = "";
       for(let i = 1; i <= 10; i++){
         let a = i * number;
     result += `${i} * ${number} = ${a}\n`;
     }
     return result.trim('\n');
   };

function toBinary(n){
    return +n.toString(2);
  };

toBinary = n => +n.toString(2);

const hero = (bullets, dragons) => bullets / 2 >= dragons;

function hero(bullets,dragons){
  return bullets / 2 >= dragons;
};

function power(x, y){
    return x ** y;
  };

power = (x, y) => x ** y;

usdcny = usd => `${(usd * 6.75).toFixed(2)} Chinese Yuan`;

function usdcny(usd){
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
};

function strCount(str, letter){  
  return str.split(letter).length - 1
};

strCount = (str, letter) => str.split(letter).length - 1;

strCount = (str, letter) => str.split('').filter(a => a == letter).length;

const strCount = function(str, letter){
  return str.split('').filter(a => a == letter).length;
};

function updateLight(current) {
  return ({
    green: 'yellow',
      yellow: 'red',
        red: 'green'
  })[current]
};

parseF = s => isNaN(parseFloat(s)) ? null : parseFloat(s);

function parseF(s){
  return isNaN(parseFloat(s)) ? null : parseFloat(s);
};

iceBrickVolume = (radius, bottleLength, rimLength) =>  (bottleLength - rimLength) * 2 * radius * radius;

function iceBrickVolume(radius, bottleLength, rimLength){
  return (bottleLength - rimLength) * 2 * radius * radius;
};

function otherAngle(a, b) {
  return 180 - (a + b);
};

otherAngle = (a, b) => 180 - a - b;

function isValid (formula) {
  return(
      !(formula.includes(1) && formula.includes(2)) &&
      !(formula.includes(3) && formula.includes(4)) &&
      (formula.includes(5) == formula.includes(6)) &&
      (formula.includes(7) || formula.includes(8)) 
      )};

function distanceBetweenPoints(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
};

const distanceBetweenPoints = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

function mystery() {
  const results = {sanity: 'Hello'};
  return results;
};

mystery = (results = {sanity: 'Hello'}) => results;

function Hero (name) {
  this.name = name || "Hero"
    this.position = "00"
    this.health = 100
    this.damage = 5
    this.experience = 0
};   

function solution(str){
  return str = [...str].reverse().join("")
};

solution = str => [...str].reverse().join("");

simpleMultiplication = number => number % 2===0 ? number * 8 : number * 9;

function simpleMultiplication(number){
  if(number % 2 === 0){
    return number * 8
  }
  return number * 9
};

function position (letters){
const alphbt = ' abcdefghijklmnopqrstuvwxyz';
  return 'Position of alphabet: ' + [...alphbt].indexOf(letters)
 };

position = letters => 'Position of alphabet: ' + [...alphbt].indexOf(letters)
const alphbt = ' abcdefghijklmnopqrstuvwxyz';

function combat(health, damage) {
  if(damage > health){
    return 0
  }
  return health - damage
};

combat = (health, damage) => damage > health ? 0 : health - damage;

sixToast = num => Math.abs(num - 6);

function sixToast(num){
  return Math.abs(num - 6);
};

function switchItUp(number){
  if(number == 0){
    return "Zero"
  }else if(number == 1){
   return "One"
 }else if(number == 2){
   return "Two"
 }else if(number == 3){
   return "Three"
 }else if(number == 4){
   return "Four"
 }else if(number == 5){
   return "Five"
 }else if(number == 6){
   return "Six"
 }else if(number == 7){
   return "Seven"
 }else if(number == 8){
   return "Eight"
 }else if(number == 9){
   return "Nine"
 }};
 
function twoHighest(arr) {
  return [...new Set(arr.sort((a,b) => b - a))].slice(0,2)
 };

twoHighest = arr => [...new Set(arr.sort((a,b) => b - a))].slice(0,2);

remainder = (n, m) => n > m ? n % m : m % n;

function remainder(n, m) {
  return n > m ? n % m : m % n;
};

const mapKey = (arrNew) => arrNew.map((el) => el !== el.id)

makeNegative = num => num <= 0 ? num : num * -1;

function makeNegative(num){
  return num <= 0 ? num : num * -1
};

function boolToWord( bool ){
  if(bool === true){
    return "Yes"
  }
  return "No"
}

boolToWord = bool => bool === true ? "Yes" : "No";

function numberToString(num) {
  return num.toString()
};

numberToString = num => num.toString();

function getPlanetName(id){
  let name;
  switch(id){
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars';
      break;
    case 5:
      name = 'Jupiter';
      break;
    case 6:
      name = 'Saturn';
      break;
    case 7:
      name = 'Uranus';
      break;
    case 8:
      name = 'Neptune';
      break;
  }
   return name;
};

function problem (x){
  if(typeof(x) === 'number'){
     return x * 50 + 6 
  }
      return "Error"
};

problem = x => typeof(x) === "number" ? x * 50 + 6 : "Error";

function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
};

sayHello = (name, city, state) => `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;

function isDivisible(n, x, y) {
  if(n % x === 0 && n % y === 0){
    return true
  }
  return false
};

isDivisible = (n, x, y) => n % x === 0 && n % y === 0 ? true : false;  

sumStr = (a,b) => (+a + +b).toString();

function sumStr(a,b){
  return (+a + +b).toString();
};

const onInputHandler = (event) => {
  if(event.key === 'Enter'){
    return newFunc;
  }; 
};

function lovefunc(flower1, flower2){
  if(flower1 % 2 != flower2 % 2){
    return true
  }
  return false
};

lovefunc = (flower1, flower2) => flower1 % 2 != flower2 % 2 ? true : false;

function addFive(num) {
  return num + 5
};

addFive = num => num + 5;

function include(arr, item){
  if(arr.includes(item)){
    return true
  }
  return false
};

include = (arr, item) => arr.includes(item) ? true : false;

abbrevName = name => name.toUpperCase().split(' ').map(a => a[0]).join(`.`);

function abbrevName(name){
  return name.toUpperCase().split(' ').map(a => a[0]).join(`.`);
};

oddCount = n => n % 2 === 0 ? n / 2 : Math.floor(n / 2);

function oddCount(n){
  if(n % 2 === 0){
    return n / 2 
  }
  Math.floor(n / 2)
};

removeChar = str => str.slice(1, -1);

function removeChar(str){
  return str.slice(1, -1);
};

function unusualFive() {
  const arr = ['a', 'b', 'c', 'd','e']
   return arr.length;
 };

 unusualFive = (arr = ['a', 'b', 'c', 'd','e']) => arr.length;

 function numberToPower(number, power){
  if(power > 0){
    return number * numberToPower(number, power - 1)
  }
  return 1
};

numberToPower = (number, power) => power > 0 ? number * numberToPower(number, power - 1) : 1;

function testEven(n) {
  if(n % 2 === 0){
    return true
  }
 return false
};

testEven = n => n % 2 === 0 ? true : false;

noSpace = x => x.replace(/ /g, '');

function noSpace(x){
  return x.replace(/ /g, '');
};

function mouthSize(animal) {
  if(animal === 'alligator' || animal === 'ALLIGATOR'){
    return 'small'
  }
  return 'wide'
};

mouthSize = animal => animal === 'alligator' || animal === 'ALLIGATOR' ? small : wide;

function amIWilson(p){
  return [5, 13, 563].indexOf(p) > -1
  };

amIWilson = p => [5, 13, 563].indexOf(p) > -1;

function bonusTime(salary, bonus) {
    if(bonus === true){
     return `£${salary * 10}`
   }
     return `£${salary}`
     };
   
bonusTime = (salary, bonus) => bonus === true ? `£${salary * 10}` : `£${salary}`;

function reverseList(list) {
    return list.reverse()
  };

const reverseList = list => list.reverse();

function isDigit(s) {
    return s == parseFloat(s)
   };

isDigit = s => s == parseFloat(s);

isReallyNaN = val => Number.isNaN(val) ? true : false;

function isReallyNaN(val){
  return Number.isNaN(val) ? true : false;
};

function isReallyNaN(val){
  if(Number.isNaN(val)){
    return true;
  };
  return false;
};

hello = name => !name ? 'Hello, World!' : `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;

function fourSeven(n){
    const sum ={4 : 7, 7 : 4}
    return sum[n] || 0
   };

Math.round = number => number - parseInt(number) >= 0.5 ? parseInt(number) + 1 : parseInt(number);

Math.ceil = number => parseInt(number) === number ? number : parseInt(number) + 1; 

Math.floor = number => parseInt(number);

squareSum = numbers => numbers.map(a => a * a).reduce((prev, curr) => prev + curr, 0);

function squareSum(numbers){
  return numbers.map(a => a * a).reduce((prev, curr) => prev + curr, 0);
};

function nearestSq(n){
    return Math.pow(Math.round(Math.sqrt(n)) ,2);
};

nearestSq = n => Math.pow(Math.round(Math.sqrt(n)) ,2);

derive = (coefficient, exponent) => (coefficient * exponent) + "x^" + (exponent - 1);

function derive(coefficient, exponent){
  return (coefficient * exponent) + 'x^' + (exponent - 1);
};

nthEven = n => (n - 1) * 2;

function nthEven(n){
  return (n - 1) * 2
};

const cubeChecker = function(volume, side){
  if(volume / side ** 2 == side && side > 0){
    return true
  }
  return false
};

function cubeChecker(volume, side){
  if(volume / side ** 2 == side && side > 0){
    return true;
  };
    return false;
};

cubeChecker = (volume, side) => volume / side ** 2 == side && side > 0 ? true : false;

function isPythagoreanTriple (integers){
  let [x, y, z] = integers.sort((x,y) => x - y) 
  return x ** 2 + y ** 2 == z ** 2
  };

const litres = (time) => {
  Math.floor(time * 0.5)
};

litres = time => Math.floor(time * 0.5);

function remove (string) {
  return string.replace(/!$/, "")
};

remove = string => string.replace(/!$/, "");

add = (a, b) => a == b ? true : false;

function add(a, b){
  return a == b ? true : false;
};

function add(a, b){
  if(a == b){
    return true
  };
  return false
};

const squareOrSquareRoot = (array) => array.map(el => Math.sqrt(el) % 1 ? el * el : Math.sqrt(el));

function squareOrSquareRoot(array){
  array.map(el => Math.sqrt(el) % 1 ? el * el : Math.sqrt(el));
};

function min(list){
  return Math.min(...list);
};

function max(list){
  return Math.max(...list);
};

min = list => Math.min(...list);
  
max = list => Math.max(...list);

const flip = (d, a) => d === "R" ? a.sort((a,b) => a - b) : a.sort((a, b) => b - a);

function sakuraFall(v) {
  if(v > 0){
    return 400 / v
  }
  return 0
};

function integrate(coefficient, exponent) {
  return coefficient / (exponent + 1) + 'x^' + (exponent + 1)
};

const integrate = (coefficient, exponent) => coefficient / (exponent + 1) + 'x^' + (exponent + 1);

function binToDec(bin){
  return parseInt(bin, 2)
};

binToDec = bin => parseInt(bin, 2);

const binTo = function(bin){
  return parseInt(bin, 2);
};

squareArea = (A) => Math.pow(2 * A / Math.PI , 2);

function squareArea(A){
  return Math.pow(2 * A / Math.PI , 2);
};

opposite = number => number ? -number : +number;

function opposite(number){
  if(-number){
    return +number
  };
};

function reverseWords(str){
  return str.split(' ').reverse().join(' ')
};

reverseWords = str => str.split(' ').reverse().join(' ');

function _if(bool, func1, func2) {
  if(bool){
    return func1()
  }
    return func2()
  };

_if = (bool, func1, func2) => bool ? func1 : func2;

past = (h, m, s) => (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000);

function past(h, m, s){
  return (h * 60 * 60 * 1000) + (m * 60 * 1000) + (s * 1000);
};

powersOfTwo = n => [...Array(n + 1)].map((x ,i) => 2 ** i);

function powersOfTwo(n){
  return [...Array(n + 1)].map((x,i) => 2 ** i);
};

function shortcut (string) {
  return string.replace(/[aeiou]/gi, "");
};

shortcut = s => s.replace(/[aeiou]/gi, '');

const hotpo = function(n){
  if(n === 1){
    return 0
  }
    return 1 + hotpo(n % 2 ? (n * 3 + 1) : n / 2)  
};

hotpo = n => n === 1 ? 0 : 1 + hotpo(n % 2 ? (n * 3 + 1) : n / 2);

function none(arr, fun){
  return !arr.some(fun)
};

none = (arr, fun) => !arr.some(fun);

stringToNumber = str => Number(str);

function stringToNumber(str){
  return Number(str);
};

isPalindrome = x => x.toLowerCase() == x.toLowerCase().split('').reverse().join('');

function isPalindrome(x){
  return x.toLowerCase() == x.toLowerCase().split('').reverse().join('');
};

solution = (a, b) => a.length < b.length ? a + b + a : b + a + b;

function hexToDec(hexString){
  return parseInt(hexString, 16)
};

hexToDec = hexString => parseInt(hexString, 16);

function solve(arr){
var array = arr.reduce((a,b) => (a[b] = a[b] + 1 || 1, a), {})
return arr.sort((a,b) => array[b] - array[a] || a - b)
};

function summation(num) {
  return num * (1 + num) / 2
};

summation = num => num * (1 + num) / 2;

square = arg => arg ** 2;

square = arg => Math.pow(arg, 2);

function padIt(str, n){
  while(n > 0){
    str = n-- % 2 ? '*' + str : str + '*';
}
  return str;
};

function between(a, b) {
  const array = []
    for(i = a; i <= b; i++){
      array.push(i)
    }
    return array
  };

  function addExtra( listOfNumbers ){
    return listOfNumbers.concat(['new'])
 };

 addExtra = listOfNumbers => listOfNumbers.concat(["new"]);

 function howManyLightsabersDoYouOwn(name) {
  if(name === "Zach"){
    return 18
  }
    return 0
};

howManyLightsabersDoYouOwn = name => name === "Zach" ? 18 : 0;

function countSquares(cuts){
  if(cuts === 0){
    return 1
  }
  return 6 * cuts * cuts + 2
};

countSquares = cuts => cuts === 0 ? 1 : 6 * cuts * cuts + 2;

function getAge(inputString){
  return parseInt(inputString);
};

getAge = inputString => parseInt(inputString);

findDifference = (a,b) => Math.abs(a.reduce((x,y) => x * y) - b.reduce((x,y) => x * y));

function findDifference(a, b) {
  return Math.abs(a.reduce((x,y) => x * y) - b.reduce((x,y) => x * y));
};

function cockroachSpeed(s) {
 const speed = s * 1000 * 100 / (60 * 60)
 return Math.floor(speed)
};

cockroach = s => Math.floor(s * 1000 * 100 / (60 * 60));

const stringy = function (size) {
  return "".padStart(size, "10")
};

xor = (a, b) => a === b ? false : true;

function xor(a, b) {
  if(a === b){
    return false;
  }
    return true;
};

const areYouPlayingBanjo = (name) => name + (name.match(/^r/i) ? " plays banjo" : " does not play banjo")

function getGrade (s1, s2, s3) {
  const arr = (s1 + s2 + s3) / 3
  if(arr < 60){
    return 'F'
  }else if(arr < 70){
    return 'D'
  }else if(arr < 80){
    return 'C'
  }else if(arr < 90){
    return 'B'
  }else 
    return 'A'
};

function rentalCarCost(d) {
  if (d >= 7){
  return (d * 40) - 50
  }else if(d >= 3){
    return (d * 40) - 20
  }else if(d < 3)
    return d * 40
  };

  function paperwork(n, m) {
    if(n < 0 || m < 0){
      return 0
    }else if(n > 0 || m > 0){
      return n * m
    }
  };


function checkForFactor(base,factor){
  return base % factor === 0
};

function isToday(date){
  return new Date().toDateString() === date.toDateString();
};


isToday = date => new Date().toDateString() === date.toDateString();

function pickIt(arr){
  var odd=[],even=[];
  for(let i = 0; i < arr.length; i++)
    if(arr[i] % 2){
      odd.push(arr[i])
    }else {
      even.push(arr[i])
    }
  return [odd,even];
};

function alphabet(ns) {
  let srt = ns.sort((a,b) => a - b)
  return srt[7] / srt[srt[0] * srt[1] === srt[2] ? 3 : 2]
};

lastSurvivor = (letters, coords) => coords.reduce((acc,curr) => acc.slice(0, curr) + acc.slice(curr + 1), letters);

function Counter() {
  this.value = 0;
}
Counter.prototype.increase = function() {
  this.value++;
}
Counter.prototype.getValue = function() {
  return this.value;
}
Counter.prototype.reset = function() {
  this.value = 0;
};

function countWords(str) {
  return str.split(/\s+/).filter(a => a).length
};

countWords = str => str.split(/\s+/).filter(a => a).length;

function moveZeros(arr){
  return arr.reduceRight((acc,val) => val === 0 ? [...acc,val] : [val, ...acc], []);
};

alphanumeric = string => /[a-zA-z0-9]/g.test(string)&&!/[\s_!]/.test(string);

function zeros (n) {
  var num = 0;
  while(n > 0){
    n = Math.floor(n / 5); 
    num += n
  }
  return num
};

function incrementString (strng) {
  return strng.replace(/([0-8]|\d?9+)?$/, (x) => x ? + x + 1 : 1);
};

incrementString = strng => {
  return strng.replace(/([0-8]|\d?9+)?$/, (x) => x ? + x + 1 : 1);
};

function formatMoney(amount){
  return '$' + amount.toFixed(2);
};

fm = amount => `$${amount.toFixed(2)}`;

getSumOfDigits = integer => String(integer).split('').reduce((x,y) => x + Number(y), 0);

function getSumOfDigits(integer){
  return String(integer).split('').reduce((x,y) => x + Number(y), 0);
};

getNames = data => data.map(item => item.name);

function getNames(data){
  return data.map(item => item.name);
}; 

quotable = (name, quote) => `${name} said: "${quote}"`;

function quotable (name, quote){
  return `${name} said: "${quote}"`;
};

function objectType(obj) {
  return Object.prototype.toString.call(arguments.length === 0 ? null : obj);
};

objectType = obj => Object.prototype.toString.call(arguments.length === 0 ? null : obj);

const calculate = (a, o, b) => {
  if(o === "+") return a + b;
   if(o === "-") return a - b;
   if(o === "/") return b !== 0 ? a / b : null;
   if(o === "*") return a * b;
   return null;
  };

FilterNumbers = str => str.split('').filter(c => c.match(/[a-zA-Z]/)).join('');

function FilterNumbers(str){
    return str.split('').filter(c => c.match(/[a-zA-Z]/)).join('');
  };

multi = arr => arr.reduce((x,y) => x * y);

function multi(arr){
  return arr.reduce((x,y) => x * y);
};

add = arr => arr.reduce((x,y) => x + y, 0);

function add(arr){
  return arr.reduce((x,y) => x + y, 0);
};

reverse = str => str.split('').reverse().join('');

function reverse(str){
  return str.split('').reverse().join('');
};

function myFunction() {
  var myObject = {
    objProperty: "string",
    objMethod: function objMethod() {
      return myObject.objProperty
		}
  }
  return myObject;
};

let reg = /".+?"/g;
function getQuotes(string) {
  return string.match(reg);
};

const regX = /".+?"/g;
getQuotes = string => string.match(regX);

filterWords = phrase => phrase.replace(/(bad|mean|ugly|horrible|hideous)/ig,'awesome');

function filterWords(phrase){
  return phrase.replace(/(bad|mean|ugly|horrible|hideous)/ig,'awesome');
};

flatten = array => [].concat(...array);

const flatten = array => {
  return [].concat(...array);
};

vowelOne = s => s.replace(/[^aeiou]/gi, '0').replace(/[^\d]/g, '1');

function vowelOne(s){
  return s.replace(/[^aeiou]/gi, '0').replace(/[^\d]/g, '1');
};

solution = (str, ending) => str.endsWith(ending);

function solution(str, ending){
  return str.endsWith(ending);
};

const solution = function(str, ending){
  return str.endsWith(ending);
};

describeAge = age => age <= 12 ? "You're a(n) kid" :
age >= 13 && age <= 17 ? "You're a(n) teenager" : 
age >= 18 && age <= 64 ? "You're a(n) adult" : "You're a(n) elderly";

describeAge = (a) => `You're a(n) ${a<13?'kid':a<18?'teenager':a<65?'adult':'elderly'}`;

periodIsLate = (last, today, cycleLength) => Math.floor(today.getTime() - last.getTime()) / 86400000 > cycleLength;

function lasttoday(last, today, cycleLength){
  return Math.floor(today.getTime() - last.getTime()) / 86400000 > cycleLength;
};

function nameShuffler (str){
  return str.split(' ').reverse().join(' ');
};

nameShuffler = str => str.split(' ').reverse().join(' ');

sumArray = array => array ? array.sort((a, b) => a - b).slice(1,-1).reduce((x, y) => x + y, 0) : 0;

correct = string => string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I');

function correct(str){
  return str.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I');
};

function odd(values){
  return values.filter(el => el % 2)
};

const newOdds = (values) => values.filter(el => el % 2);

const enough = (cap, on, wait) => on + wait > cap ?  on + wait - cap : 0;

function enough(cap, on, wait){
  if(on + wait > cap){
    return on + wait - cap
  }else{
    return 0
  };
};

addLength = str => str.split(' ').map(el => `${el} ${el.length}`);

function addLength(str){
  return str.split(' ').map(el => `${el} ${el.length}`)
};

function shortenToDate(longDate) {
  return longDate.split(',')[0]
};

shortenToDate = longDate => longDate.split(',')[0];

function firstNonConsecutive (arr) {
  for(let i = 1; i < arr.length; i++)
    if(arr[i] - arr[i - 1] !== 1){
      return arr[i]
    }
  return null
};

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
};

let any = (arr, fun) => arr.some(fun)

function any (arr, fun) {
  return arr.some(fun)
} 

export function hero(bullets, dragons) {
  if(bullets / 2 >= dragons){
    return true
  }else{
    return false
  }
}

export function stringToArray(s) {
	return s.split(' ');
};

export const arrayPlusArray = (arr1, arr2) => {
  return [...arr1, ...arr2].reduce((acc, cur) => acc + cur)
}











 

 













  

 









     


































