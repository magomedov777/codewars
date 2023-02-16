//codewars for IT-INCUBATOR______________________________________________________________>>>

function evalObject(value){
  switch(value.operation){
    case'+': return value.a + value.b;
    case'-': return value.a - value.b;
    case'/': return value.a / value.b;
    case'*': return value.a * value.b;
    case'%': return value.a % value.b;
    case'^': return Math.pow(value.a, value.b);
  }};

  
function myFirstKata(a,b) {
if (typeof(a) === 'number' && typeof(b) === 'number') {
return (a % b) + (b % a);
} else {
return false;
}};

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
  for (var i = 1; i < 6; i++) {
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

function firstNonRepeatingLetter(s) {
  return s[s.toLowerCase().split('').findIndex(letter => s.toLowerCase().split('').filter(l => l === letter).length === 1 )] || '';
}

function balancedNum(number) {
  const stringNum = String(number);
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

 function typeOfSum(a, b) {
  return typeof(a + b)
};

function contamination(text, char){
  return char.repeat(text.length)
};

function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2].sort((a,b) => a - b))];
};

function maps(x){
  return x.map(x => x * 2); 
};

String.prototype.isUpperCase = function() {
  return this.toString() === this.toUpperCase();
};

let saleHotdogs = n => n * (n < 5 ? 100 : (n >= 5 && n < 10 ? 95 : 90));


function logs(x , a, b){
return Math.log(a * b) / Math.log(x);
};

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
  return array.filter((element, index) => element % index == 0)
};

function check(a,x){
  return a.includes(x)
};

var joinStrings = (string1, string2) => `${string1} ${string2}`;

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

const largest = (n, array) => array.sort((a,b) => a - b).slice(array.length - n);

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

function invert(array) {
  return array.map(x => -x)
};

function grow(x){
  return x.reduce((a,b) => a * b)
 };

 function howMuchILoveYou(nbPetals) {
  return ["I love you", "a little", "a lot", "passionately", "madly", "not at all"][(nbPetals - 1) %6]
  };

function well(x){
    let good = 0;
     for (const idea of x){
       if(idea === "good"){
         good += 1;
       }}
     return good === 0 ? "Fail!" : good > 2 ? "I smell a series!" : "Publish!"
  };

sumMix = x => x.reduce((a,b) => +b + a, 0);

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

  function first (arr, n = 1){
    if(n == 0){
      return [];
    }else if(n > 0){
      return arr.slice(0, n);
    }};

    function monkeyCount(n) {
      return Array.from({length: n},(_,index) => index + 1)
    };

    getAverage = marks => Math.floor(marks.reduce((a, b) => a + b) / marks.length);

    makeUpperCase = str => str.toUpperCase();

    repeatStr = (n, s) => s.repeat(n);

    const removeExclamationMarks = s => s.replace(/\!/g, '');

    billboard = (name, price = 30) => [...new Array(name.length)].fill(price).reduce((a,b) => a + b);

    function countBy(x, n) {
      let z = [];
      for(let i = 1; i <= n; i++)
       z.push(i * x)
        return z;
    };

    removeEveryOther = arr => arr.filter((_, index) => index % 2 == 0);

    differenceInAges = ages => [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];

    function all( arr, fun ){
      return arr.every(fun)
    };

function positiveSum (arr){
      let sum = 0;
       for(let i = 0; i < arr.length; i++)
        if(arr[i] >= 0) sum += arr[i];
         return sum;
     };

printArray = array => array.join();

     function stairsIn20(s){
  return 20 * s.reduce((a, b) => a + b.reduce((c,d) => c + d, 0) ,0) 
};

function arr2bin(arr) {
      return arr.reduce((a,b) => a + (typeof b == 'number' ? b : 0),0).toString(2)
};

function buildString(...template){
  return `I like ${template.join(', ')}!`
};

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

function twoSort(s) {
  return s.sort()[0].split('').join("***")
};

function gooseFilter (birds) {
var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(b => !geese.includes(b))
};

function squareSum(numbers){
  return numbers.map(x => x * x).reduce((a,b) => a + b, 0)
};

function smash (words) {
  return words.join(' ')
};

smash = words => words.join(' ');

function sum (numbers) {
  return numbers.reduce((a,b) => a + b, 0)
};

sum = numbers => numbers.reduce((a,b) => a + b, 0);

countSheeps = arrayOfSheep => arrayOfSheep.filter(Boolean).length;

digitize = n => String(n).split('').reverse().map(Number);

ArrowFunc = arr => arr.map(x => String.fromCharCode(x)).join('');

function findAverage (nums) {
  return nums.reduce((a,b) => a + b) / nums.length
};

function divisibleBy(numbers, divisor){
  return numbers.filter(a => a % divisor == 0)
  };

  const isVow = a => a.map(x => /[aeiou]/.test(String.fromCharCode(x)) ? String.fromCharCode(x) : x);

  index = (array, n) => array[n] ** n || -1;

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

sameCase = (a,b) => /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)) : -1;

function nameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = first + ' ' + last;
  console.log(nameMe)
};

function orderWeight(strng) {
  const sum = (str) => str.split('').reduce((sum,el)=>(sum+(+el)),0);
  function add(a,b){
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
  }
};

function multiply(number){
  return number * 5 ** String(Math.abs(number)).length
};

function correctTail(body, tail){  
  return body[body.length - 1] == tail;
 };


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
  }

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

  function power(x,y){
    return x ** y;
  };

  power = (x,y) => x ** y;

usdcny = usd => `${(usd * 6.75).toFixed(2)} Chinese Yuan`;

function strCount(str, letter){  
  return str.split(letter).length - 1
};


strCount = (str, letter) => str.split(letter).length - 1;

strCount = (str, letter) => str.split('').filter(a => a == letter).length;

function updateLight(current) {
  return ({
    green: 'yellow',
      yellow: 'red',
        red: 'green'
  })[current]
};

parseF = s => isNaN(parseFloat(s)) ? null : parseFloat(s);

iceBrickVolume = (radius, bottleLength, rimLength) =>  (bottleLength - rimLength) * 2 * radius * radius;

function otherAngle(a, b) {
  return 180 - (a + b);
};

otherAngle = (a,b) => 180 - a - b;

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

function mystery() {
  const results = {sanity: 'Hello'};
  return results;
};

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

sixToast = num => Math.abs(num - 6);

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

remainder = (n, m) => n > m ? n % m : m % n;

function remainder(n, m) {
  return n > m ? n % m : m % n;
};

makeNegative = num => num <= 0 ? num : num * -1;

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
  var name;
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

function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
};

function isDivisible(n, x, y) {
  if(n % x === 0 && n % y === 0){
    return true
  }
  return false
};

sumStr = (a,b) => (+a + +b).toString();

function lovefunc(flower1, flower2){
  if(flower1 % 2 != flower2 % 2){
    return true
  }
  return false
};

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

oddCount = n => n % 2 === 0 ? n / 2 : Math.floor(n / 2);

removeChar = str => str.slice(1, -1);

function unusualFive() {
  const arr = ['a', 'b', 'c', 'd','e']
   return arr.length;
 };

 function numberToPower(number, power){
  if(power > 0){
    return number * numberToPower(number, power - 1)
  }
  return 1
};

function testEven(n) {
  if(n % 2 === 0){
    return true
  }
 return false
};

noSpace = x => x.replace(/ /g, '');

function mouthSize(animal) {
  if(animal === 'alligator' || animal === 'ALLIGATOR'){
    return 'small'
  }
  return 'wide'
};

function amIWilson (p){
  return [5, 13, 563].indexOf(p) > -1
  };

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

  function isDigit(s) {
    return s == parseFloat(s)
   };

   isReallyNaN = val => Number.isNaN(val) ? true : false;

   hello = name => !name ? 'Hello, World!' : `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;

   function fourSeven(n){
    const sum ={4 : 7, 7 : 4}
    return sum[n] || 0
   };

Math.round = number => number - parseInt(number) >= 0.5 ? parseInt(number) + 1 : parseInt(number);

Math.ceil = number => parseInt(number) === number ? number : parseInt(number) + 1; 

Math.floor = number => parseInt(number);

squareSum = numbers => numbers.map(a => a * a).reduce((prev, curr) => prev + curr, 0);

function nearestSq(n){
    return Math.pow(Math.round(Math.sqrt(n)) ,2)
};

derive = (coefficient,exponent) => (coefficient * exponent) + "x^" + (exponent - 1);

nthEven = n => (n - 1) * 2;

const cubeChecker = function(volume, side){
  if(volume / side ** 2 == side && side > 0){
    return true
  }
  return false
};

function isPythagoreanTriple (integers){
  let [x, y, z] = integers.sort((x,y) => x - y) 
  return x ** 2 + y ** 2 == z ** 2
  };

  function litres(time) {
  return Math.floor(time * 0.5)
};

litres = time => Math.floor(time * 0.5);









  

 









     


































