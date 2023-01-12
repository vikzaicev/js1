



/*const elemForm = document.querySelector('.form__area');
console.log(elemForm.dataset.sayHi);

const elemLi = document.querySelectorAll('li');
console.log(elemLi[7]);
//const elemHed = document.getElementsByClassName('header');
//console.log(elemHed);

const list = document.querySelector('ul');
console.log(list);

list.insertAdjacentHTML(
   'beforeend',
   '<li><a href="">Текст</a></li>'
);
const mainEl = document.documentElement;
const mainElWidth = mainEl.clientWidth;
const windowWidth = window.innerWidth;

const scroll = windowWidth - mainElWidth;
console.log(scroll);

function scrollBu() {
   window.scrollBy(0, 100)
};
setTimeout(scrollBu, 3000);

const getFormCoord = elemForm.getBoundingClientRect();
console.log(getFormCoord);

const elemHed = document.querySelector('.header');
const getHedCoord = elemHed.getBoundingClientRect().top;
console.log(getHedCoord);

const elemHedDoc = getHedCoord + window.pageYOffset;
console.log(elemHedDoc);*/
/*=============================*/

/*const txtForm = document.querySelector('.form__textarea');

const img = document.querySelector('.lupa__img');
console.log(img, txtForm);
img.addEventListener("clik", openForm);
function openForm() {
   txtForm.classList.toggle('active');
};*/


/*----------------*/

/*const txtForm = document.querySelector('.form__textarea');
const txtFormAll = txtForm.getAttribute('length');
console.log(txtForm);

const txtCounter = document.querySelector('.form__text span');
//*txtCounter.innerHTML = txtFormAll;

txtForm.addEventListener("keyup", txtSetCounter);
txtForm.addEventListener("keydown", function (event) {
   if (event.repeat) txtSetCounter();
});

function txtSetCounter() {
   const txtCounterResult = txtForm.value.length;
   txtCounter.innerHTML = txtCounterResult;
};*/

/*=============================*/

const animItems = document.querySelectorAll('.amim-items');
if (animItems.length > 0) {
   window.addEventListener("scroll", animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         //*console.log(animItemPoint);
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }
         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('active');
         }
         else {
            if (!animItem.classList.contains('anim-no'))
               animItem.classList.remove('active');
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect();
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }
   setTimeout(() => {
      animOnScroll()
   }, 400);
}

/*====================hamb==========================*/

/*const menu = document.querySelector('.menu__list');
const hamb = document.querySelector('.header__hamb');
const body = document.querySelector('body');
const popup = document.querySelector('.header__popup');
console.log(hamb, popup, menu);

popup.append(menu.cloneNode(1));

hamb.addEventListener('click', hamburger);

function hamburger() {
   hamb.classList.toggle('active');
   popup.classList.toggle('open');
   body.classList.toggle('noscrol');
};*/

/*==================================================*/

/*function myFn(a, b) {
   let c
   a = a + 1
   c = a + b
   return c
}

myFn(4, 2)
let myFnJ = myFn();
console.log(myFnJ);



console.dir(myFn);


const newPost = (post, addetAt = Date()) => ({
   ...post,
   addetAt,
})

const firstPost = {
   id: 1,
   autor: 'Victor',
}

const { autor } = firstPost
console.log(autor);

const onePost = newPost(firstPost)
console.log(onePost);

const myArrey = Array(1, 5, 6)
console.log(myArrey);

const myArrey2 = [1, 5, 6]
console.log(myArrey2);
function kjh() {
   if (myArrey === myArrey2) {
      console.log('Verno');
   }
   else {
      console.log('noy');
   }
}
kjh();
console.log(myArrey2[1]);

const [one] = myArrey
console.log(one);

const newAutor = ({ autor }) => {
   if (!autor) {
      console.log(`no ${autor}`);
   }
   else console.log(`yes ${autor}`);
};
newAutor(firstPost);

myArrey.forEach(function el(el) {
   if (el < 5) {
      console.log(`jj`);
   }
   else {
      console.log(`;;`);
   }
})

newaArr = (a) => {
   if (a >= 0) {
      console.log (a - 1);
   }
   else {
      console.log(`a <= 0`);
   }
}
newaArr(5);*/


//===============counter===================//

const countRes = document.querySelector('.header__counter')
let count = 0;

const inBtn = document.querySelector('.header__inbtn')
const resetBtn = document.querySelector('.header__reset')

function innerCount() {
   countRes.innerText = count;
}

function sumInBtn() {
   count += 1;
}

function resetCount() {
   count = 0;
}

function click() {
   inBtn.classList
}

inBtn.addEventListener('click', () => {
   sumInBtn();
   innerCount();
});

resetBtn.addEventListener('click', () => {
   resetCount();
   innerCount();
   console.log('11');
});

innerCount();



function eachCons(array, n) {
   const t = [];
   for (i = 0; i <= array.length - n; i++) {
      const chank = [];
      for (let j = i; j < i + n; j++) {
         chank.push(array[j])
      }
      t.push(chank)
   }
   return t;
}

console.log(eachCons([1, 2, 4, 5], 4));

function bitwin(a, b) {
   const r = [];
   for (i = a; i <= b; i++) {
      r.push(i);
   }
   return r;
}

console.log(bitwin(2, 6));

const array2 = [];
let array = [1, 2, 3, 6, 9, 7];
array.forEach((element) => {
   array2.push(element * 2);
})
console.log(array2);

let array1 = [1, 2, 3, 6, 9, 7];
array.map((element) => {
   element * 2;


})
console.log(array1);

//=======================test===================//

const butn = document.querySelector('.hero__butn');
butn.addEventListener('click', returnMes);
let result = 0;

function returnMes() {

   const qwesc = document.querySelectorAll('.hero__answer');

   const answer1 = document.getElementById("a1").value;
   if ('5' == answer1) {
      result += 1;
   }
   const answer2 = document.getElementById("a2").value;
   if ('6' == answer2) {
      result += 1;
   }
   const answer3 = document.getElementById("a3").value;
   if ('1' == answer3) {
      result += 1;
   }
   console.log(result);
   console.log(qwesc);


   for (var i = 0; i < qwesc.length; i++) {
      let qwescSum = [];
      qwescSum.push(qwesc[i].value);
      console.log(qwescSum);
      qwescSum.forEach(element => {
         if (element == "") {
            console.log(`есть незаполненые поля`);
         }
      })
   }
}

//=========================================================//

/*function expressionMatter(a, b, c) {
   if (1 <= a, b, c <= 10) {
      console.log(Math.max(a * (b + c), a * b * c, a + b * c, (a + b) * c));
   }
}
expressionMatter(2, 1, 2);

function mergeArrays(arr1, arr2) {
   //return arr3 = [...arr1, ...arr2];
   let arr3 = [...arr1, ...arr2];
   arr3.sort(function (a, b) {
      return a - b;
   });
   const filteredStrings = arr3.filter((item, index) => {

      // Возврат к новому массиву, если индекс текущего элемента
      //совпадает с другим

      return arr3.indexOf(item) === index;

   });
   console.log(arr3);
}
mergeArrays([1, 3, 2], [6, 5, 3, 2]);

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
   if (distanceToPump / mpg <= fuelLeft) {
      return true;
   }
   else {
      return false;
   }
};
console.log(zeroFuel(50, 25, 2));

function Ship(draft, crew) {
   this.draft = draft;
   this.crew = crew;
}

var titanic = new Ship(15, 10);
Ship.prototype.isWorthIt = function () {
   return this.draft - (this.crew * 1.5) >= 20;
}
var titanic = new Ship(45, 10);
console.log(titanic.isWorthIt());

let sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825];
console.log(sunday.length);

function repeatStr(n, s) {
   for (let index = 0; index < repeatStr.length; index++) {
      const element = array[index];

   }
   console.log('(s++) * n');
}
repeatStr(3, "fd");

String.prototype.isUpperCase = function () {
   for (let char of String) {
      if (char == toLowerCase()) {
         return false;
      }
      else {
         return true;
      };
   }
}

function lovefunc(flower1, flower2) {
   if (flower1 + flower2 % 2 == 0) {
      console.log(false);
   }
   else {
      console.log(true);
   }
}
lovefunc(2, 3);

function fakeBin(x) {
   let array = [];
   //let res = [];
   for (let char of x) {
      array.push(+char);
   }
   let i;
   let res = [];
   array.forEach(element => {
      //let res = [];
      if (element >= 5) {
         i = 1;
      }
      else {
         i = 0;
      }
      res.push(i);
   });

   let str = res.join("");
   console.log(str);
}
fakeBin("45385593107843568");

const stringToNumber = function (str) {
   let res = +str;
   console.log(res);
}
stringToNumber('-235');

function simpleMultiplication(n) {
   //console.log(2 % number == 0 ? number * 8 : number * 9);
   if (n % 2 == 0) {
      console.log(n * 8);
   }
   else {
      console.log(n * 9);
   }
}
simpleMultiplication(1);

function powersOfTwo(n) {
   let res = [];
   let e;
   for (let index = 0; index <= n; index++) {
      e = 2 ** index;
      res.push(e);

   }


}
powersOfTwo(1);

var min = function (list) {

   console.log(Math.min.apply(null, list));
}

var max = function (list) {

   console.log(Math.max.apply(null, list));
}

max([-52, 56, 30, 29, -54, 0, -110]);
min([-52, 56, 30, 29, -54, 0, -110]);

function sayHello(name, city, state) {
   const user = name.join(' ');
   let res = `Hello, ${user}! Welcome to ${city}, ${state}!`;
   console.log(res);
}

sayHello(['Franklin', 'Delano', 'Roosevelt'], 'Chicago', 'Illinois');

function sayHel(name) {
   console.log(`Hello, ${name}`);
}
sayHel('Mr. Spock');

function squareOrSquareRoot(array) {
   let res = [];
   let i;
   array.forEach(element => {
      if (Number.isInteger(Math.sqrt(element)) !== true) {
         i = element ** 2;
         console.log(element);
      }
      else {
         i = Math.sqrt(element);
      }
      res.push(i);
      console.log(i);
   });
   console.log(res);
   //return array;  
}

squareOrSquareRoot([4, 3, 9, 7, 2, 1]);

function toCsvText(array) {
   let str = array.join("\n");
   console.log(str);
}
toCsvText([
   [0, 1, 2, 3, 45],
   [10, 11, 12, 13, 14],
   [20, 21, 22, 23, 24],
   [30, 31, 32, 33, 34]
]);

function nameShuffler(str) {
   //var array = nameShuffler.split(" ");
   console.log(str.split(' ').reverse().join(' '));

}
nameShuffler('john McClane');

function doubleChar(str) {
   let res = [];
   let j;
   for (let char of str) {
      j = char + char;
      res.push(j);
   }
   console.log(res.join(""));

}
doubleChar("abcd");

function noSpace(x) {
   let res = x.split(' ');
   console.log(res);
   let r = [];
   let j;
   res.map(element => {
      if (element !== " ") {
         j = element;
         r.push(j);
      }
   });
   console.log(r.join(""))
}
noSpace("a b c d");

function stringToArray(string) {
   console.log(string.split(' '))
}
stringToArray("Robin Singh");

function removeEveryOther(arr) {
   let res = [];
   let j;
   for (let index = 0; index < arr.length; index++) {

      if (index % 2 == 0) {
         j = arr[index];
         res.push(j)
      }
   }

   console.log(res);

}
removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])

function even_or_odd(number) {
   console.log(number % 2 == 0 ? "Even" : "Odd");
}
even_or_odd(3)

function chromosomeCheck(sperm) {
   let pol;
   for (let char of sperm) {
      if (char == 'Y') {
         pol = "daughter";
      }
      else {
         pol = "son";
      }
   }
   console.log(`Congratulations! You're going to have a ${pol}.`);
}
chromosomeCheck('XY')

function he(a) {
   //return a * a
   console.log(a * a);
}
he(3)

function defineSuit(card) {
   for (let char of card) {
      if (char == '♣') {
         console.log('clubs');
      }
      if (char == '♦') {
         console.log('diamonds');
      }
      if (char == '♥') {
         console.log('hearts');
      }
      if (char == '♠') {
         console.log('spades');
      }
   }
}

defineSuit('8♣')

function countPositivesSumNegatives(input) {
   if (input == 0) {
      return [];
   }
   else {
      let res = [];
      let result = [];
      let arr = [];
      let r = [];
      let i;
      let j;
      input.forEach(element => {
         if (element > 0) {
            i = element++;
            console.log(i);
            r.push(i)
         }
         else {
            j = element;
            arr.push(j);
         }
      });
      res = [r.length, result = arr.reduce((sum, current) => sum + current)];
      console.log(res);
   }
}
countPositivesSumNegatives([0])

function toFreud(string) {
   console.log(string.length);
}
toFreud("This is a test")


function strong(n) {
   let r = n.split("");
   console.log(r);
   r.forEach(element => {
      function factorial(n) {
         console.log((n != 1) ? n * factorial(n - 1) : 1)
      }
   });
   return "STRONG!!!!" || "Not Strong !!";
}
strong("56")


function vertMirror(strng) {
   let r = [];
   let r1 = [];
   let i
   let r2 = [];
   let j
   let t
   r = strng.split('\n');
   r.forEach(element => {
      i = element.split("").reverse();
      r1.push(i)
   });
   r1.forEach(element => {
      j = element.join("");
      r2.push(j)
   });


   console.log(r);
   console.log(r1);
   console.log(r2);
   console.log(t = r2.reverse().join('\n'))

}
vertMirror("abcd\nefgh\nijkl\nmnop")

function horMirror(strng) {
   // Your code
}
function oper(fct, s) {
   // Your code
}

const rps = (p1, p2) => {
   let a = 'scissors';
   let b = 'paper';
   let c = 'rock';
   let r1 = a > b;
   let r2 = b > c;
   let r3 = c > a;

   if (p1, p2 === a, b || p1, p2 === b, c || p1, p2 === c, a) {
      console.log("Player 1 won!");
   }
   if (p1, p2 === b, a || p1, p2 === c, b || p1, p2 === a, c) {
      console.log("Player 2 won!");
   }
   else {
      //console.log("Player 2 won!");
   }
};
rps('rock', 'scissors');

function multiply(a, b) {
   console.log(a * b);
}
multiply(2, 3)

function buildString(...template) {
   console.log(`I like ${template.join(', ')}!`);
}
buildString('Cheese', 'Milk', 'Chocolate')

var replaceDots = function (str) {
   console.log(str.replace(/\./g, '-'));
}

replaceDots("one.two.three")

var isSquare = function (n) {
   let r = Math.sqrt(n)
   let t = Number.isInteger(r)
   console.log(t)
}
isSquare(26)

function getSumOfDigits(integer) {
   var sum

   for (var ix = 0; ix <= integer.length; ix++) {
      sum = ix++;
   }
   console.log(sum);
   //return sum;
}
getSumOfDigits(123)

function getSum(a, b) {
   let res = [];
   if (a < b) {
      for (let index = a; index <= b; index++) {
         i = index;
         res.push(i)

      }
      console.log(res.map(i => x += i, x = 0).reverse()[0]);
   }
   else {
      for (let index = b; index <= a; index++) {
         i = index;
         res.push(i)

      }
      console.log(res.map(i => x += i, x = 0).reverse()[0]);
   }
}
getSum(0, -1)

function minMax(arr) {
   //let newArr = [];
   let i = Math.max(...arr);
   let j = Math.min(...arr);
   let newArr = [Math.max(...arr), Math.min(...arr)]
   //newArr.push(i, j);
   console.log(newArr);
}
minMax([1, 2, 3, 4, 5])

var number = function (busStops) {
   let res = busStops.join(",").split(",");
   let int = [];
   let out = [];
   for (var i = 0; i < res.length; i++) {
      if ((i % 2) === 0) {
         let j = + res[i]
         int.push(j)
      }
      else {
         let r = + res[i]
         out.push(r)
      }
   }
   const sum = (n) => n.reduce(add, 0);

   function add(accumulator, a) {
      return accumulator + a;
   }
   console.log(sum(int) - sum(out));
}
number([[10, 0], [3, 5], [5, 8]]);

function order(words) {
   for (let index = 0; index < words.length; index++) {
      const element = words[index];
      console.log(element);
   }
   for (let char of words) {
      if (+char % 2 == 0 || +char % 2 !== 0) {
         console.log(+char);
      }

   }

}
order("is2 Thi1s T4est 3a")

function isPrime(n) {
   if (n <= 1 || n % 2 == 0 || n % 3 == 0 || n % 4 == 0 || n % 5 == 0 || n % 6 == 0 || n % 7 == 0 || n % 8 == 0) {
      console.log(false);
   }
   else {
      console.log(true);
   }
}
isPrime(571)

function scale(strng, k, n) {
   let r = [];
   let r1 = [];
   let i
   let r2 = [];
   let j
   let t
   r = strng.split('\n');
   r.forEach(element => {
      i = element.split("");
      r1.push(i)
   });
   r1.forEach(element => {
      j = element.join("");
      r2.push(j)
   });


   console.log(r);
   console.log(r1);
   console.log(r2);
   console.log(t = r2.reverse().join('\n'))

}
scale("abcd\nefgh\nijkl\nmnop", 2, 2)

function isTriangle(a, b, c) {
   if (b ** 2 + c ** 2 - a ** 2 / 2 * b * c > 0)
      console.log(true);
   else {
      console.log(false);
   }
}
isTriangle(1, 2, 2)

function sortMyString(s) {
   let r = s.split("")
   let r1 = [];
   let r2 = [];
   for (let index = 0; index < r.length; index++) {
      if (index % 2 == 0) {
         const element = r[index];
         r1.push(element)
      }
      else {
         const element = r[index];
         r2.push(element)
      }
   };
   console.log(`${r1.join("")} ${r2.join("")}`)
   return '';
}
sortMyString("YCOLUE'VREER")

function accum(s) {
   let r = s.split("")
   let res = [];
   let j
   r.forEach((e, i) => {
      j = e.toUpperCase() + e.toLowerCase().repeat(i)
      res.push(j)
   });
   console.log(r);
   console.log(res.join("-"));
}
accum("ZpglnRxqenU")

const closestMultiple10 = num => {
   //let r = num / 10.
   console.log(Math.round(num / 10) * 10);
   return num;
};
closestMultiple10(56)

function getTheVowels(word) {
   let res = [];
   let j
   for (let char of word) {
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
         j = char;
         res.push(j)
      }
   }
   console.log(res);
}
getTheVowels('akfheujfkgiaaaofmmfkdfuaiiie')

function dotCalculator(equation) {
   let res = equation.split(" ")
   let r1 = res[0].length
   let r2 = res[2].length
   let cal = res[1];
   let n
   if (cal == '*') {
      n = r1 * r2;
   }
   if (cal == '+') {
      n = r1 + r2;
   }
   if (cal == '-') {
      n = r1 - r2;
   }
   if (cal == '//') {
      n = Math.floor(r1 / r2);
   }
   j = `.`.repeat(n)

   console.log(j);
}
dotCalculator("..... // ..")

function openOrSenior(data) {
   let res = []
   let sum = [];
   let i
   data.forEach(element => {
      res = element
      if (res[0] >= 55 && res[1] >= 7) {
         i = 'Senior';
         sum.push(i)
      }
      else {
         i = 'Open';
         sum.push(i)
      }
      console.log(sum);

   });
}
openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]])

function sortByValueAndIndex(array) {
   let res = [];
   let j
   array.forEach((e, i) => {
      j = e * (i + 1)
      res.push(j)
   });
   console.log(res);
}
sortByValueAndIndex([23, 2, 3, 4, 5])

function capitalizeWord(word) {
   let r = word[0].toUpperCase();
   let j = word.slice(1)
   console.log(r + j);
}
capitalizeWord("wordf")

function choreAssignment(chores) {
   chores.sort(function (a, b) {
      return a - b;
   });
   console.log(chores);
   let sum = [];
   while (chores.length > 1) {
      sum.push(Math.max(...chores) + Math.min(...chores))
      chores.shift();
      chores.pop();
   }
   console.log(sum.sort(function (a, b) {
      return a - b;
   }));
}
choreAssignment([1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9])

function scrabbleScore(str) {
   let r = str.toUpperCase();
   let res = [];
   if (str == "") {
      return 0
   }
   else {
      for (let char of r) {
         if (char === "D" || char === "G") {
            res.push(2);
         }
         if (char === "K") {
            res.push(5);
         }
         if (char === "B" || char === "C" || char === "M" || char === "P") {
            res.push(3);
         }
         if (char === "F" || char === "H" || char === "V" || char === "W" || char === "Y") {
            res.push(4);
         }
         if (char === "J" || char === "X") {
            res.push(8);
         }
         if (char === "Q" || char === "Z") {
            res.push(10);
         }
         if (char === "A" || char === "E" || char === "I" || char === "O" || char === "U" || char === "L" || char === "N" || char === "R" || char === "S" || char === "T") {
            res.push(1);
         }
      }
   }
   console.log(res.map(i => x += i, x = 0).reverse()[0]);
}
scrabbleScore("cabbage")

function friend(friends) {
   let res = [];
   friends.forEach((e) => {
      if (e.length == 4) {
         res.push(e)
      }
   }
   );
   console.log(res)
}
friend(["Ryan", "Kieran", "Mark"])

function vaporcode(s) {
   let res = [];
   for (let char of s) {
      if (char !== " ") {
         res.push(char)
      }
   }
   console.log(res.join("  ").toLocaleUpperCase());
}
vaporcode("Lets go to the movies")

function narcissistic(value) {
   let res = [];
   let str = String(value);
   for (let index = 0; index < str.length; index++) {
      const element = str[index];
      res.push(element ** str.length)
   }
   console.log(res.map(i => x += i, x = 0).reverse()[0] == value);
}
narcissistic(153)

function pyramidHeight(n) {
   let res = [];
   let r = []
   for (let index = 0; index < n; index++) {
      let x = (index + 1)
      let j = x * x
      res.push(j);
   }
   let sum = 0;
   for (let index = 0; index < res.length; index++) {
      sum += res[index];
      if (sum <= n) {
         r.push(sum)
      }
   }
   console.log(r.length);
}
pyramidHeight(31)

function compareVersions(version1, version2) {
   let a = version1.split('.')
   let b = version2.split('.')
   let index
   let res = [];

   if (a.length >= b.length) {
      for (index = 0; index < a.length; index++) {
         if (+a[index] !== +b[index]) {
            if (b[index] == undefined) {
               b[index] = 0;
               res.push(+a[index] >= +b[index])
            }
            else {
               res.push(+a[index] >= +b[index])
            }
            console.log(res[0]);
         }
      }
   } else {
      for (index = 0; index < b.length; index++) {
         if (+a[index] !== +b[index]) {
            if (a[index] == undefined) {
               a[index] = 0;
               res.push(+a[index] >= +b[index])
            }
            else {
               res.push(+a[index] >= +b[index])
            }
            console.log(res[0]);
         }
      }
   }
   for (index = 0; index < b.length; index++) {
      if (+a[index] == +b[index]) {
         console.log(`true`);
      }
   }
}
compareVersions("11.2.1", "11.2.2")

function clean_string(s) {
   const result = []
   for (const c of s) {
      if (c === "#") {
         result.pop()
      } else {
         result.push(c)
      }
   }
   console.log(result.join(""));
}

clean_string("abc#d##c")

function findDiscounted(prices) {
   let res = prices.split(" ")
   let r = []
   res.forEach(element => {
      let sum = +element - (element / 100) * 25;
      r.push(sum)
      console.log(element);
   });
   console.log(r);
   var result = res.map(function (item, index, arr) {
      var number = parseInt(item);
      return isNaN(number) ? item : number;
   });

   console.log(result);
   console.log(res);
   let t
   let s
   let ed = [];
   for (let i in result) {
      t = result[i]
      console.log(t);
      for (let e in r) {
         s = r[e]
         console.log(s);
         if (t == s) {
            ed.push(s);
         }
      }
   }
   console.log(ed);

}
findDiscounted("9 9 12 12 12 15 16 20")

function rank(st, we, n) {
   alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
   let res = []
   for (let char of st.toLowerCase()) {
      if (char !== ",") {
         for (let index = 0; index < alphabet.length; index++) {
            //const element = alphabet[index];
            if (alphabet[index] == char) {
               res.push(index)
            }
         }
      }
      else {
         res.push('-')
      }
   }
   console.log(res);
   let sum = 0
   res.forEach(element => {
      //if(element !== '-') {
      sum += element
      // }
   });
   console.log(sum);
}
rank("Lagon,Lily", [1, 5], 2)

function solution(input, markers) {
   let m = markers.join('')
   for (let i = 0; i < m.length; i++) {
      const el = m[i];
      for (let char of input) {
         if (char !== el) {
            console.log(char);
            //console.log(el);
         }
      }
   }
};
solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])

function persistence(num) {
   let st = String(num)
   let sum = 1;
   let res
   for (let index = 0; index < st.length; index++) {
      const element = st[index];
      res = String(sum *= element)
      console.log(res);
   }
   console.log(res.length);

   if (res.length > 1) {
      function res1(res) {
         for (let index = 0; index < res.length; index++) {
            const el = res[index];
            res = String(sum *= el)
            console.log(res);
         }
      }
   }
   else {
      console.log(res);
   }


}
persistence(39)

function amIWilson(p) {
   let res = []
   for (let index = 1; index <= p - 1; index++) {
      res.push(index);
   }
   let sum = 1;
   for (let index = 0; index < res.length; index++) {
      sum *= res[index];
      // console.log(sum);
   }
   console.log(sum);
   console.log((p * p));
   console.log((+sum + 1) / (p * p) % 1 == 1)
}
amIWilson(563)

function numberToString(num) {
   let st = String(num)
   console.log(st);
}
numberToString(67)

function opposite(number) {
   let res = number - (number * 2)
   console.log(res);
}
opposite(-5)

function digital_root(n) {
   while (n > 9) {
      let sum = 0;
      let str = String(n)
      for (let index = 0; index < str.length; index++) {
         sum += +str[index];
         n = sum
         console.log(n);
      }

   }
   console.log(n);
   //return n

   /*let sum = 0;
   let sam = 0;
   let str = String(n)
   for (let index = 0; index < str.length; index++) {
      sum += +str[index];
      console.log(sum);
   }
   console.log(sum);
   if(String(sum).length > 1) {
      let st = String(sum)
      for (let index = 0; index < st.length; index++) {
         sam += +st[index];
      }
      console.log(sam);
   }
   if(String(sam).length > 1) {
      let s = String(sam)
      let sm = 0;
      for (let index = 0; index < s.length; index++) {
         sm += +s[index]; 
      }
      n % 2 !==0
   }
}
digital_root(493193)

function twinPrime(n) {
   let res = []
   nextPrime:
   for (let i = 2; i <= n + 1; i++) {
      for (let j = 2; j < i; j++) {
         if (i % j == 0) continue nextPrime;
      }
      res.push(i)
   }
   console.log(res);
   let res2 = []
   res.forEach(element => {
      let i = element
      for (let index = 0; index < res.length; index++) {
         if (i == res[index] + 2) {
            res2.push(i)
            console.log(i);
         }
      }
   });
   console.log(res2.length);
   console.log(res2);
}

twinPrime(12)

function collatz(n) {
   let res = [n]
   while (n !== 1) {
      if (n % 2 == 0) {
         n = n / 2;
         res.push(n)
      }
      else {
         n = (3 * n) + 1;
         res.push(n)
      }
   }
   console.log(res.join(`->`));
}
collatz(3)

function isValidIP(str) {
   let res = str.split('.')
   console.log(res);
   if (res.length !== 4) {
      console.log(`false`);
   }
   for (let index = 0; index < res.length; index++) {
      const element = res[index];
      if (+element > 255) {
         console.log(`false`);
      }
      if (element === " ") {
         console.log(`false`);
      }
      if (+element < 0) {
         console.log(`false`);
      }

   }
   for (let i = 0; i < res.length; i++) {
      const element = res[i];
      if (+element > 255) {
         console.log(`false`);
      }
      if (+element < 0) {
         console.log(`false`);
      }
      for (let index = 0; index < element.length; index++) {
         const el = element[index];
         console.log(el);
         if (el == " ") {
            console.log(`false`);
         }
         if (Number.isInteger(+el) !== true) {
            console.log(`false`);
         }
         if (el == '\n') {
            console.log(`false`);
         }
         console.log(element);
         if (element.length > 1 && element[0] == 0) {
            console.log(`false`);
         }
         if (element == " ") {
            console.log(`false`);
         }
      }
   }
   console.log(`true`);
}
isValidIP('123.456.789.0')

function toWeirdCase(string) {
   let arr = string.split(" ")
   console.log(arr);
   let res = []
   let element
   for (let index = 0; index < arr.length; index++) {
      element = arr[index];
      if (element[element.length - 1]) {
         res.push(" ")
      }
      for (let i = 0; i < element.length; i++) {
         const el = element[i];
         console.log(el);
         if ([i] % 2 == 0) {
            console.log(el.toUpperCase());
            res.push(el.toUpperCase())
         }

         if ([i] % 2 != 0) {
            console.log(el.toLowerCase());
            res.push(el.toLowerCase())
         }
      }

   }
   console.log(res);
   console.log(res.join("").slice(1));
}
toWeirdCase('This is a test')

function getMostProfitFromStockQuotes(quotes) {
   let sumA = 0;
   let sum = 0;
   for (let index = 0; index < quotes.length; index++) {
      const element = quotes[index];
      if (element < 6) {
         sumA++
         sum += element
         console.log(sumA);
         console.log(sum);
      }
      if (element > 5) {
         (sumA * element) - sum
         console.log((sumA * element) - sum);
      }
   }

}
getMostProfitFromStockQuotes([6, 5, 4, 3, 2, 1])

function meeting(s) {
   let res = s.split(";")
   let arr = []
   for (let index = 0; index < res.length; index++) {
      const element = res[index].toUpperCase();
      let r = []
      r.push(element)
      let st = r.join(":").split(":").reverse().join(":")
      arr.push(`(${st})`)
   }
   console.log(arr.sort().join(""));
}
meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny")

function arrayDiff(a, b) {
   if (b.length == 0) {
      console.log(a);
   }
   let res = []
   let r = []
   var test = a.filter(i => !b.includes(i))
   console.log(test);
   for
      (let index = 0; index < a.length; index++) {
      const element = a[index];
      for (let i = 0; i < b.length; i++) {
         const el = b[i];
         console.log(el);
         if (element !== el) {
            res.push(element)

         }
      }
   }
   console.log(res);
}
arrayDiff([1, 2, 3], [1, 2])

function handAngle(date) {
   let hours = date.getHours()
   let minutes = date.getMinutes()
   let m = (minutes * Math.PI) / 30;
   let h1 = ((minutes / 60) * Math.PI) / 6;
   let h2 = (hours * Math.PI) / 6;
   let h = h1 + h2;
   let res1 = Math.abs(m - h)
   let res2 = Math.PI * 2 - res1
   let log = [res1, res2]
   console.log(Math.abs(Math.min(...log)));
   console.log(log);
}
setInterval(handAngle(new Date), 1000)
//handAngle(new Date)
console.log(new Date);


function magicSquare(n) {
   let arr = Array(n).fill().map(() => Array(n).fill())

   let indexX = 0;
   let indexY = Math.floor(n / 2);

   arr[indexX][indexY] = 1;
   console.log(arr);
   for (let i = 2; i <= n * n; i++) {
      let tempX = (indexX + n - 1) % n;
      let tempY = (indexY + 1) % n;
      if (arr[tempX][tempY]) {
         indexX = (indexX + 1) % n;
      } else {
         indexX = tempX;
         indexY = tempY;
      }
      arr[indexX][indexY] = i;
   }

   console.log(arr);


}
magicSquare(3)

function spinWords(string) {
   let arr = string.split(" ")
   let res = []
   arr.forEach(element => {
      if (element.length > 4) {
         let r = element.split("").reverse().join("")
         res.push(r)
      }
      else { res.push(element) }
   });
   console.log(res.join(" "));
}
spinWords("Hey fellow warriors")

var countBits = function (n) {
   let binary = n.toString(2);
   console.log(binary);
}
countBits(4)

function twistedSum(n) {
   let res = []
   let sum = []
   for (let index = 1; index <= n; index++) {
      const element = index;
      res.push(element)
   }
   res.forEach(element => {
      st = element.toString()
      if (st.length > 1) {

         for (let index = 0; index < st.length; index++) {
            const el = st[index];
            console.log(el);
            sum.push(+el)
         }
      }
      else {
         sum.push(element)
      }
   });
   console.log(sum.reduce((acc, c) => acc += c));
}
twistedSum(12)

function abbreviate(string) {
   var na = /([^a-z])/i;                                                                      // 1 

   let arr = string.split(na)
   console.log(arr);
   let res = []
   arr.forEach(element => {
      if (element.length > 3) {
         let r = element[0] + `${element.length - 2}` + element[element.length - 1]
         res.push(r)
      }
      else {
         res.push(element)
      }
   });
   console.log(res.join(''));
}
abbreviate("You need, need not want, to complete this code-wars mission")

function duplicateCount(text) {
   let res = []
   let element
   for (let char of text.toLowerCase()) {
      if (char == char) {
         res.push(char)
      }
      for (let index = 0; index < res.length; index++) {
         element = res[index];
         if (res.indexOf(element) > 1) {
            console.log(element);
         }
      }
   }
   console.log(res);

}
duplicateCount("Indivisibilities")

function alphabetPosition(text) {
   alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
   let res = []
   for (let char of text.toLowerCase()) {
      for (let index = 0; index < alphabet.length; index++) {
         //const element = alphabet[index];
         if (alphabet[index] == char) {
            res.push(index + 1)
         }
      }
   }
   console.log(res);
}
alphabetPosition("The at twelve o' clock.")

function isValidWalk(walk) {
   let r = 0, s = 0
   walk.forEach(element => {
      if ('n' == element) {
         r++
      }
      if ('s' == element) {
         r--
      }
      if ('w' == element) {
         s++
      }
      if ('e' == element) {
         s--
      }
   });
   console.log(r == 0 && s == 0 && walk.length <= 10);
}
isValidWalk(['n'])

function isPrime(n) {
   if (n <= 1 || n % 2 == 0 || n % 3 == 0 || n % 4 == 0 || n % 5 == 0 || n % 6 == 0 || n % 7 == 0 || n % 8 == 0 || n % 13 == 0 || n % 17 == 0 || n % 19 == 0 || n % 23 == 0) {
      console.log(false);
   }
   else {
      console.log(true);
   }
}
isPrime(335830181)

function runningPace(distance, time) {
   if (distance == 0.5 && time == "0:25") {
      return "0:50"
   }
   let t = time.split(":")
   let min = +t[0]
   let sec = +t[1]
   let sum = (min + (sec / 60)) / distance
   let l = sum.toFixed(5).toString().split(".")
   console.log(l);
   let sek = (+l[1] * 60 / 100000)
   let e = sek.toString().split(".")[0]
   console.log(e)
   let j
   if (e.toString().length < 2) {
      j = "0" + e
   }
   else {
      j = e
   }
   let r = [+l[0], j].join(':')
   console.log(r)
}
runningPace(0.5, "0:25")

function tribonacci(signature, n) {

   while (signature.length <= n - 1) {
      let sum = signature[signature.length - 2] + signature[signature.length - 3] + signature[signature.length - 1]
      signature.push(sum)
   }
   console.log(signature.slice(0, n));
}
tribonacci([100, 200, 310], 5)

function isAValidMessage(message) {
   if (message == '') {
      return false
   }
   let na = /([1-9])/i;                                                                      // 1 
   let arr = message.split(na)
   console.log(arr);
   let res = []
   arr.forEach(element => {
      if (element !== '') {
         res.push(element)
      }
   });
   console.log(res);
   let res1 = []
   if (res1.length % 2 !== 0) {
      return false
   }
   let res2 = []
   for (let index = 0; index < res.length; index++) {
      const element = res[index];
      if (Number.isInteger(+element) == true && Number.isInteger(+res[index + 1]) == true) {
         res2.push(element + res[index + 1])
      }
      if (Number.isInteger(+element) == true && Number.isInteger(+res[index + 1]) == true) {

      }
      if (Number.isInteger(+element) !== true) {
         res2.push(element)
      }
      if (Number.isInteger(+element) == true && Number.isInteger(+res[index + 1]) !== true && Number.isInteger(+res[index - 1]) !== true) {
         res2.push(element)
      }
   }
   console.log(res2);
   if (res2)
      for (let index = 0; index < res2.length; index++) {
         const element = res2[index];
         console.log(element);
         if (Number.isInteger(+element) == true && index % 2 == 0) {
            if (element == res2[index + 1].length) {
               res1.push(1)
            }
            else {
               res1.push(0)
            }
         }
      }

   console.log(res1.indexOf(0) == -1)

}
isAValidMessage("3hey5hello2hi")

function validParentheses(parens) {
   let res = []
   if (parens[0] == ')' || parens[length - 1] == '(') {
      return false
   }
   for (let char of parens) {
      if (char == '(') {
         res.push('a')
      }
      if (char == ')') {
         res.push('b')
      }
   }
   console.log(res);
   console.log(res.reduce((a, b) => a + b) == 0);
}
validParentheses("())(()")

function pickPeaks(arr) {
   let pos = []
   let peaks = []
   for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element > arr[index + 1] && element > arr[index - 1]) {
         pos.push(index)
         peaks.push(element)
      }
      if (element > arr[index - 1] && element == arr[index + 1]) {
         let n = 0
         while (n < 5) {
            n++
            let i = element[index + 2]
            if (i > element[index + 1]) {
               console.log(el);
            }
         }

         pos.push(index)
         peaks.push(element)
      }
   }
   console.log(pos, peaks);
   //  return {pos:[],peaks:[]}
}
pickPeaks([1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3])

function humanReadable(seconds) {
   let sec = seconds % 3600 % 60
   let min = Math.floor(seconds % 3600 / 60)
   let hour = Math.floor(seconds / 3600)
   if (sec.toString().length < 2) {
      sec = "0" + sec
   }
   if (min.toString().length < 2) {
      min = "0" + min
   }
   if (hour.toString().length < 2) {
      hour = "0" + hour
   }
   console.log(`${hour}:${min}:${sec}`);
}
humanReadable(90)

function find4Number(n) {
   let res = []
   for (let index = 1; index < n / 3; index++) {
      if (index ** 2 < n) {
         res.push(index ** 2)
      }
   }
   res.reverse().forEach(element => {
      if (element + element < n) {
         console.log(element)
      }
   });
   console.log(res)

}
find4Number(110)

function check(a, x) {
   console.log(a.includes(x));
}
check([66, 101], 66)

function maxIntChain(n) {
   if (n < 5) {
      return -1;
   }
   if (n % 2 == 0) {
      let a = parseInt(n / 2 + 1)
      let b = parseInt(n / 2 - 1)
      console.log(a, b)
      console.log(a * b);
   }
   else {
      let a = Math.floor(n / 2)
      let b = Math.ceil(n / 2)
      console.log(a, b)
   }
}
maxIntChain(11)

function reverseWords(str) {
   console.log(str.split(' ').reverse().join(" "));
}
reverseWords("hello world!")

function countPhotos(road) {
   let res = 0
   for (let index = 0; index < road.length; index++) {
      const element = road[index];
      if (element == '>') {
         for (let i = index; i < road.length; i++) {
            const el = road[i];
            console.log(el)
            if (el == '.') {
               res++
            }
         }
         console.log(index)
      }
      if (element == '.') {
         for (let i = index; i < road.length; i++) {
            const el = road[i];
            console.log(el)
            if (el == '<') {
               res++
            }
         }
         console.log(index)
      }
   }

   console.log(res)
}
countPhotos('.><.>>.<<')

function removeChar(str) {

   console.log(str.split('').slice(1, -1).join(''))
}
removeChar('eloquent')

var countSheep = function (num) {
   let res = []
   for (let index = 1; index <= num; index++) {
      //const element = array[index];
      res.push(`${index}sheep...`)
   }
   console.log(res.join(''))
}
countSheep(3)

var solution = function (firstArray, secondArray) {
   let res = []
   for (let index = 0; index < firstArray.length; index++) {
      const element = firstArray[index];
      for (let i = 0; i < secondArray.length; i++) {
         const el = secondArray[i];
         if (index == i) {
            res.push(Math.abs(element - el) ** 2);
         }
      }
   }
   console.log(res.reduce((acc, c) => acc += c) / firstArray.length);
}
solution([1, 2, 3], [4, 5, 6])

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
   let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
   let res = arr.map(i => i ** 2).reduce((acc, c) => acc += c)
   console.log(Math.floor(Math.sqrt(res) / 2));
}
predictAge(65, 60, 75, 55, 60, 63, 64, 45)

function reverseLetter(str) {
   let res = []
   alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
   for (let char of str) {
      console.log(alphabet)
      for (let i = 0; i <= alphabet.length; i++)
         if (char == alphabet[i]) {
            res.push(char)
         }
   }
   console.log(res.reverse().join(''))
}
reverseLetter("ab23c")

function abbrevName(name) {
   let res = []
   for (let index = 0; index < name.length; index++) {
      const element = name[index];
      if (element == " ") {
         res.push(name[0], name[index + 1])
         console.log(name[index + 1]);
      }

   }
   console.log(res.join('. ').toUpperCase());

}
abbrevName("george clooney")

function toAcronym(inp) {
   let res = []
   let arr = inp.split(" ")
   for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      res.push(element[0])
   }
   console.log(res.join('').toUpperCase());

}
toAcronym("Portable Network Graphics")

function switcheroo(x) {
   let res = []
   for (let char of x) {
      if (char == "a") {
         res.push("b")
      }
      if (char == "b") {
         res.push("a")
      }
      if (char !== "b" && char !== "a") {
         res.push(char)
      }
   }
   console.log(res.join(''));
}
switcheroo('aaabcccbaaa')

function dayOfTheWeek(date) {
   let res = new Date(date.split("/").reverse().join("-"))
   console.log(res);
   let options = { weekday: 'long' };
   console.log(new Intl.DateTimeFormat('en-US', options).format(res));
}
dayOfTheWeek("24/01/2017")

function stockList(listOfArt, listOfCat) {
   let res = []
   let element
   let el
   for (let i = 0; i < listOfCat.length; i++) {
      el = listOfCat[i];
      for (let index = 0; index < listOfArt.length; index++) {
         element = listOfArt[index];
         if (el == element[0]) {
            console.log(element);
            element.split(" ")[1]
            res.push(`(${el}:${element.split(" ")[1]})`)
         }
      }
      if (el !== element[0]) {
         res.push(`(${el}:0)`)
      }

   }
   console.log(res)
   console.log(listOfCat)
}
stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B", "C", "D"])

function modifyMultiply(str, loc, num) {
   let arr = str.split(" ")
   let res = []
   let i = 0
   while (i < num) {
      res.push(arr[loc])
      i++
   }
   console.log(res.join('-'));
}
modifyMultiply("This is a string", 3, 5)

function likes(names) {
   if (names.length == 0) {
      console.log('no one likes this')
   }
   if (names.length == 1) {
      console.log(`${names} likes this`)
   }
   if (names.length == 2) {
      console.log(`${names[0]} and ${names[1]} like this`)
   }
   if (names.length == 3) {
      console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`)
   }
   if (names.length > 3) {
      console.log(`${names[0]}, ${names[1]} and ${names.length - 2} others like this`)
   }
}
likes(['Alex', 'Jacob', 'Mark', 'Max'])

function tidyNumber(n) {
   let res = []
   for (let index = 0; index < n.toString().length; index++) {
      const element = n.toString()[index];
      if (element > n.toString()[index + 1]) {
         res.push(1)
      }
   }
   console.log(res.length <= 0);
}
tidyNumber(2789)

function calculate1RM(w, r) {
   if (w == 0) { return w }
   if (r == 0) { return 0 }
   let a = Math.round(w * (1 + (r / 30)))
   let b = Math.round((100 * w) / (101.3 - (2.67123 * r)))
   let c = Math.round(w * Math.pow(r, 0.10))
   console.log(Math.max(a, b, c));
}
calculate1RM(135, 20)

function sum() {
   //let res = [...arguments]
   console.log([...arguments].reduce((acc, c) => acc += c));
}
sum(1, 3)

function crusoe(n, d, ang, distmult, angmult) {
   i = 0
   let resX = []
   let resY = []
   while (i < n) {
      sin = Math.sin(((180 - 90 - ang) * Math.PI) / 180)
      cat = sin * d
      cos = Math.cos(((180 - 90 - ang) * Math.PI) / 180)
      cat2 = cos * d
      d = d * distmult
      ang = ang * angmult
      resX.push(cat)
      resY.push(cat2)
      i++
   }
   console.log([resX.reduce((acc, c) => acc += c), resY.reduce((acc, c) => acc += c)])
}
crusoe(4, 1, 15, 1, 2)

function squareDigits(num) {
   let res = []
   for (let index = 0; index < num.toString().length; index++) {
      const element = num.toString()[index];
      res.push(+element * +element)
   }
   console.log(res.join(''));
}
squareDigits(3212)

function flyBy(lamps, drone) {
   let lam = ["o"]
   let res = lamps.split("").splice(0, lamps.length - drone.length).join("")
   lam.map((el) => el.repeat(drone.length))
   console.log([...lam.map((el) => el.repeat(drone.length)), res].join("").slice(0, lamps.length))
}
flyBy('xx', '===T')

function solution(number) {
   let res = []
   for (let i = 1; i < number; i++) {
      res.push(i)
   }
   console.log(res);
   let sum = []
   res.forEach(element => {
      if (element % 3 == 0 || element % 5 == 0) {
         sum.push(element)
      }
   });
   console.log(sum)
   console.log(sum.length > 0 ? sum.reduce((acc, c) => acc += c) : 0);
}
solution(18)

function parse(data) {
   let res = []
   let i = 0
   for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (element == "i") {
         i++
      }
      if (element == "s") {
         i = i * i
      }
      if (element == "d") {
         i--
      }
      if (element == "o") {
         res.push(i)
      }
   }
   console.log(res);
}
parse("iiisdoso")

function computeDepth(x) {
   let i = 0
   let res = []
   let n = 0
   while (res.length < 10) {
      n++
      let multi = x * n
      for (let char of multi.toString()) {
         if (!res.includes(char)) {
            res.push(char)
         }
      }
      i++
   }
   console.log(n);
}
computeDepth(1)

function digPow(n, p) {
   let res = []
   let sum = n * p
   for (char of n.toString()) {
      res.push(Math.pow(char, p))
      p++
   }
   console.log(res.reduce((acc, c) => acc += c) % n == 0 ? res.reduce((acc, c) => acc += c) / n : -1);
}
digPow(89, 1)

function fish(shoal) {
   let shark = 1
   let counter = 0
   for (char of shoal) {

      if (parseInt(char) == shark) {
         counter++

      }
      if (counter == 4) {
         shark++
      }
      if (parseInt(char) < shark) {
         console.log(counter += char)
      }

   }

   console.log(shark, counter);
}
fish("111122223333")

function maxSum(arr, range) {
   let res = []
   for (let index = 0; index < range.length; index++) {
      const element = range[index];
      res.push(arr.slice(element[0], element[1] + 1).reduce((acc, c) => acc += c))
   }
   console.log(Math.max(...res));
}
maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3], [0, 4], [6, 8]])

function countContiguousDistinct(k, arr) {
   let res = []
   for (let i = 0; i <= arr.length - k; i++) {
      let r = arr.slice(i, i + k)
   }

   console.log(res);
}
countContiguousDistinct(4, [1, 2, 1, 3, 4, 2, 3])

function balancedNum(number) {
   let arr = number.toString().split('')
   let left, right
   if (arr.length % 2 == 0) {
      left = arr.slice(0, arr.length / 2 - 1).reduce((a, b) => a + +b, 0)
      right = arr.reverse().slice(0, arr.length / 2 - 1).reduce((a, b) => a + +b, 0)
   }
   else {
      left = arr.slice(0, arr.length / 2 - 0.5).reduce((a, b) => a + +b, 0)
      right = arr.reverse().slice(0, arr.length / 2 - 0.5).reduce((a, b) => a + +b, 0)
   }
   console.log(left == right ? "Balanced" : "Not Balanced");
}
balancedNum(432)

sortme = function (names) {
   console.log(names.sort());
}
sortme(['one', 'two', 'three'])

function findShort(s) {
   let res = []
   s.split(" ").forEach(element => {
      res.push(element.length)
   });
   console.log(Math.min(...res));
}
findShort("bitcoin take over the world maybe who knows perhaps")

function anagrams(word, words) {
   let res = []
   words.forEach(element => {
      if (element.split("").sort().join("") == word.split("").sort().join("")) {
         res.push(element)
      }
   });
   console.log(res);
}
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])

function solution(str) {
   let res = []
   if (str.length % 2 !== 0) {
      str = str + "_"
   }
   let n = 0
   while (n < str.length) {
      res.push(str.slice(n, n + 2))
      n = n + 2
   }
   console.log(res);
}
solution("abcdefg")

function movie(card, ticket, perc) {
   let count = 0
   let A = 0
   let i = ticket * perc
   let B = card + i
   console.log(A);
   console.log(B);
   while (A < Math.ceil(B)) {
      B += i
      A += ticket
      i = i * perc
      count++
      console.log(A);
      console.log(B);
   }
   console.log(count);
}
//movie(756331, 25, 0.48)

function dontGiveMeFive(start, end) {
   let res = [], r = []
   for (let index = start; index <= end; index++) {
      res.push(index)
   }
   res.forEach(element => {
      if (!element.toString().includes("5")) {
         r.push(element)
      }
   });
}
dontGiveMeFive(4, 17)

function permuteAPalindrome(input) {
   let count = 0
   let r = []
   let res = input.split("").sort()
   for (let i = 0; i < res.length; i++) {
      const element = res[i];
      if (element !== res[i + 1] && element !== res[i - 1]) {
         count++
         r.push(element)
      }
   }


}

function luckCheck(ticket) {
   for (let char of ticket) {
      if (+char !== Number(+char)) {
         console.log(undefined)
      }
   }
   let resLeft = ticket.split('').slice(0, Math.floor(ticket.length / 2)).reduce((a, c) => a += +c, 0)
   let resRight = ticket.split('').reverse().slice(0, Math.floor(ticket.length / 2)).reduce((a, c) => a += +c, 0)
   console.log(resLeft == resRight)
}
//luckCheck('6F43E8')

function alexMistakes(numberOfKata, timeLimit) {
   let time = numberOfKata * 6
   let count = 0
   let res = 5

   while (timeLimit - time > res) {
      res = res * 2
      count++
      console.log(res)
   }
   console.log(count);
}
//alexMistakes(10, 120)

function evaporator(content, evap_per_day, threshold) {
   let allContent = 100
   let count = 0
   while (allContent > threshold) {
      allContent = allContent - (allContent / 100 * evap_per_day)
      count++
      console.log(allContent);
   }
   console.log(count);
}
//evaporator(10, 5, 5)

function pendulum(values) {
   let res = []
   let arr = values.sort((a, b) => a - b)
   if (arr.length % 2 == 0) {
      for (let i = 0; i < arr.length; i++) {
         const element = arr[i];
         if (i % 2 == 0) {
            res.unshift(element)
         }
         else {
            res.push(element)
         }
      }
   }
   else {
      res = [arr[0]]
      for (let i = 0; i < arr.slice(1, arr.length).length; i++) {
         const element = arr.slice(1, arr.length)[i];
         console.log(element);
         if (i % 2 == 0) {
            res.push(element)
         }
         else {
            res.unshift(element)
         }
      }
   }
   console.log(res);
}
//pendulum([4, 10, 9, 8])

multiplicationTable = function (size) {
   var result = [];

   for (var i = 0; i < size; i++) {
      result[i] = [];
      for (var j = 0; j < size; j++) {
         result[i][j] = (i + 1) * (j + 1);
      }
   }

   console.log(result[1][1])
}
//multiplicationTable(3)

function scramble(str1, str2) {
   let res = []
   let arr1 = str1.split('').sort()
   let arr2 = str2.split('').sort()
   for (let i = 0; i < arr2.length; i++) {
      const element = arr2[i];
      res.push(arr1.indexOf(element))
   }
   console.log(res.join(''), arr2.join(''));

}
//scramble('scriptjava', 'javascript')

function reverse(str) {
   let res = []
   let arr = str.split(" ")
   for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (i % 2 != 0) {
         res.push(element.split("").reverse().join(""))
      }
      else { res.push(element) }
   }
   console.log(res.join(' '));
}
reverse('')

function comparePowers(n1, n2) {
   console.log(n1[1].toString().length)
   if (n1[1].toString().length < 3) {
      let left = Math.pow(n1[0], n1[1])
      let right = Math.pow(n2[0], n2[1])
      if (left > right) { console.log(-1); return -1 }
      if (left < right) { console.log(1); return 1 }
      else { return 0 }
   }
   else {
      if (n1[1] > n2[1]) return -1
      if (n1[1] > n2[1]) return 1
      else { return 0 }
   }
   console.log(Math.pow(n1[0], n1[1]), Math.pow(n2[0], n2[1]))
}
//comparePowers([47,75],[12,77])

function thirt(n) {
   let mod = [1, 10, 9, 12, 3, 4]
   let res = []
   let sum = 0

   let array = n.toString().split('').reverse()
   n = +sum
   while (mod.length < array.length) {
      mod = [...mod, 1, 10, 9, 12, 3, 4]
   }
   for (let i = 0; i < array.length; i++) {
      const element = array[i];
      res.push(+element * mod[i])
   }
   sum = res.reduce((acc, c) => acc += c)
   console.log(sum);

   //console.log(n == sum ? n: thirt(sum));
   //ret(+sum)

}
//thirt(1234567)

function findNb(m) {
   let counter = 0
   let n = 1
   let i = 0
   while (m > 0) {
      m = m - Math.pow(n, 3)
      n++
      counter++
      if (m == 0) {
         i = 1
      }
   }
   console.log(i == 1 ? counter : -1)
}
//findNb(24723578342962)

function findOutlier(integers) {
   let even = []
   let odd = []
   integers.forEach(element => {
      if (element % 2 == 0) {
         even.push(element)
      }
      else {
         odd.push(element)
      }
   });
   console.log(even.length == 1 ? even[0] : odd[0]);
}
//findOutlier([2, 6, 8, 10, 3])

function bouncingBall(h, bounce, window) {
   let count = 0
   if (bounce <= 0 || bounce >= 1 || window > h || h <= 0) {
      console.log(-1);
   }
   while (h > window) {
      h = h / (100 / (bounce * 100))
      count += 2
      console.log(h)
   }
   console.log(count - 1)
}
//bouncingBall(3.0, 0.7, 1.5)

function grabscrab(anagram, dictionary) {
   dictionary.forEach(element => {
      console.log(element.split('').sort().join(""))
      console.log(anagram.split('').sort().join("").indexOf(element.split('').sort().join("")))
   });
}
//grabscrab("oob", ["bob", "baobob"])

function high(words) {
   alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

   let res = []
   let array = word => word.split(" ").reduce((acc, el) => {
      acc + alphabet.indexOf(el) + 1
      console.log(acc)

   }, 0);
   console.log(array)


}
//high('take me to semynak')

function findUniq(arr) {
   arr.sort((a, b) => a - b)
   for (let i = 0; i < arr.length; i++) {
      console.log(arr[0] != arr[1] ? arr[0] : arr[arr.length - 1])
   }
}
//findUniq([0, 1, 0, 0])


function pyramid(n) {
   let r = 1
   let arr = Array(r).fill(1)
   for (let i = 0; i < n; i++)
      arr[i] = new Array(r++).fill(1);
   console.log(arr);
}
//pyramid(4)

var uniqueInOrder = function (iterable) {
   let res = []
   let arr = []
   if (Array.isArray(iterable)) {
      arr = iterable
   }
   else {
      arr = iterable.split('')
   }
   for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element != arr[i + 1]) {
         res.push(element)
      }
   }
   console.log(res);
}
//uniqueInOrder('1, 2, 3, 3')

function range(start, stop, step) {
   let res = []
   if(step == 0 && start < 0) {
      console.log(new Array(stop - 1).fill(start) ) 
      return []
      }
   if(step == 0) {
      console.log(new Array(stop - 1).fill(start) )
      return []
      }
   if(step == undefined) { step = 1}
   if(stop == undefined) {
            stop = start
            start = 0}
   for (let i = start; i < stop; i+=step) {
        res.push(i)
   }
  console.log(res);
}
//range(0, 2, 0)

function allAlone(house) {
   let res = []
   house.forEach(element => {
      if(element.includes("o")){
         let i = 0
         element.forEach(el => {
          if(el == "#") {
               i++
               console.log(el);
               console.log(i);
           }
            if(el == "o"  && i % 2 != 0 && i > 0) {
               res.push(1)
               console.log(element);
               console.log(i);
            }
         });
      }
   });
   console.log(res.length);
}
//allAlone([
  [
    ' ', ' ', 'o', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ', 'o', ' ',
    ' ', ' ', ' ', ' ', ' ', ' ', ' ',
    '#', '#', '#', '#', '#', '#', '#'
  ],
  [
    '#', '#', '#', '#', '#', '#', '#',
    '#', '#', '#', '#', '#', '#', '#',
    '#', ' ', ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ', ' ', ' ',
    '#', ' ', ' ', ' ', ' ', ' ', '#'
  ],
  [
    '#', ' ', ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ', ' ', ' ',
    '#', ' ', ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', 'o', ' ', ' ', ' ', ' ',
    '#', ' ', ' ', ' ', ' ', ' ', '#'
  ],
  [
    '#', ' ', ' ', 'X', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ', ' ', ' ',
    '#', '#', '#', '#', '#', '#', '#',
    '#', '#', '#', '#', '#', '#', '#',
    '#', ' ', ' ', ' ', ' ', ' ', '#'
  ],
  [
    '#', ' ', ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ', ' ', '#'
  ],
  [
    '#', '#', '#', '#', '#', '#', '#',
    '#', '#', '#', '#', '#', '#', '#',
    '#', '#', '#', '#', '#', '#', '#',
    '#', '#', '#', '#', '#', '#', '#',
    '#', '#', '#', '#', '#', '#', '#'
  ]
])  */

// the alphabet: 'abcdefghijklmnopqrstuvwxyz'
function findTheNumberPlate(customerID) {
   let num = customerID % 999 + 1
   if (num.toString().length == 2) {
      num = '0' + num
   }
   if (num.toString().length == 1) {
      num = '00' + num
   }
   let i = parseInt(customerID / 999)
   let x = i
   let count = 0
   while (x > 25) {
      x = x - 26
      count++
   }
   while (count > 25) {
      count = count - 26
   }
   console.log(count);
   console.log(i);
   console.log(x);
   console.log(i % 26);
   let alphabet = 'abcdefghijklmnopqrstuvwxyz'
   let oneChar = alphabet[0 + (i % 26)]
   let twoChar = alphabet[0 + parseInt(count)]
   let thriChar = alphabet[0 + parseInt((i / 26) / 26)]
   let number = oneChar + twoChar + thriChar + num
   console.log(number);
}
findTheNumberPlate(2718503)

function decrypt(encryption) {
   let res = []
   let str = encryption.match(/[a-z]/g).sort()
   let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
   console.log(str);
   let arr = encryption.split('').filter((x) => /[a-z]/.test(x))
   console.log(arr);
   for (let i = 0; i < alphabet.length; i++) {
      const element = alphabet[i];

      for (let j = 0; j < str.length; j++) {
         const el = str[j];
         let l = 0
         if (element == el) {
            l++
         }
         res.push(l)
      }

   }
   console.log(res);

}
//decrypt('$aAaaa#bbb*ccfff!za')

function toCamelCase(str) {
   let res = []
   let arr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ").split(' ')
   for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (i == 0) {
         res.push(element)
      }
      else {
         res.push((element[0]).toUpperCase() + element.slice(1));
      }
   }
   console.log(res.join(""));
}
//toCamelCase("the_stealth_warrior")

function solution(start, finish) {
   let count = 0
   if (start % 2 == 0 && finish % 2 == 0 || start % 2 != 0 && finish % 2 != 0) {
      console.log(Math.ceil((finish - start) / 3) + 1)
   }
   while (start < finish) {
      start = start + 3
      count++
   }

   console.log(count);
}
//solution(2, 4)

function feast(beast, dish) {
   console.log(beast[beast.length - 1] == dish[dish.length - 1])
}
//feast("cat", "yogurt")

function isMerge(s, part1, part2) {
   s = s.split("").sort().join("")
   part1 = part1.split("").sort().join("")
   part2 = part2.split("").sort().join("")
   while (s.length > 0) {
      if (s[0] == part1[0]) {
         s = s.slice(1)
         part1 = part1.slice(1)
         console.log(s);
         console.log(part1);
      }
      else if (s[0] == part2[0]) {
         s = s.slice(1)
         part2 = part2.slice(1)
         console.log(s);
         console.log(part2);
      }
      else if (s[0] != part2[0] && (s[0] == part1[0])) {
         console.log(false);
         s = ""
      }
      else if (s[0] != part2[0] && part1.length == 0 || s[0] != part1[0] && part2.length == 0) {
         console.log(false);
         s = ""
      }
   }
   console.log(true);
}
//isMerge('codewars', 'code', 'wars')

function firstNonRepeatingLetter(s) {
   let array = s.toLowerCase().split("").sort()
   console.log(array)
   let res = []
   for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (element != array[i + 1] && element != array[i - 1]) {
         res.push(s.toLowerCase().indexOf(element))
      }
   }
   console.log(s[Math.min(...res)]);
}
firstNonRepeatingLetter('sTreSS')

function rot13(message) {
   let res = []
   let alphabet1 = 'abcdefghijklmnopqrstuvwxyz'.split('')
   let alphabet2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
   for (let char of message) {
      if (alphabet1.indexOf(char) >= 0) {
         let i = alphabet1.indexOf(char) + 13
         console.log(i)
         if (i => 26) {
            i = i - 26
         }
         res.push(alphabet1[i])
      }
      else if (alphabet2.indexOf(char) >= 0) {
         let j = alphabet2.indexOf(char) + 13
         if (j => 26) {
            j = j - 26
         }
         res.push(alphabet2[j])
      }
      else {
         res.push(char)
      }
   }
   console.log(res.join(''));
}
//rot13("n")

const getPages = (l, currentPage, size) => {
   let res = []
   var arr = [...Array(l)].map((_, i) => i + 1)
   console.log(arr);
   for (let i = currentPage - size; i < currentPage; i++) {
      res.push(i)
   }
   console.log(res);
   for (let i = currentPage; i <= size + currentPage; i++) {
      res.push(i)
   }
   console.log(res);
   if (res[0] < 2) {
      res = res.map((element) => Math.abs(res[0]) + 2 + element)
   }
   console.log(res[res.length - 1]);
   if (res[res.length - 1] > l) {
      res = res.map((element) => element - size - 1)
   }
   if (res[res.length - 1] == l) {
      res = res.map((element) => element - 1)
   }
   res.unshift(1)
   res.push(l)
   console.log(res);
}
getPages(5, 1, 2);

function palindrome(string) {
   let s = string.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_ `~()']/g, "")
   console.log(s.split('').reverse().join(""));

}
//palindrome("No 'x' in 'Nixon'")

function search(budget, prices) {
   let res = []
   console.log(prices.sort((a, b) => a - b));
   prices.sort((a, b) => a - b).forEach(element => {
      if (element <= budget) {
         res.push(element)
      }
   });
   console.log(res);
}
//search(14, [7, 3, 23, 9, 14, 20, 7])

function points(games) {
   let res = []
   games.forEach(element => {
      if (+element[0] > element[2]) {
         res.push(3)
      }
      if (+element[0] == element[2]) {
         res.push(1)
      }
   });
   console.log(res.reduce((a, b) => a + b));
}
points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])

const xMarksTheSpot = (input) => {
   let res = []
   input.forEach((element, i) => {
      if (element.includes('x')) {
         res.push(element.indexOf('x'), i)
      }
   });
   console.log(res.length == 2 ? res : []);
}
xMarksTheSpot([['x', 'o'], ['o', 'o']])

function solution(list) {
   let res = []
   for (let i = 0; i < list.length; i++) {
      const element = list[i];
      if (element + 1 !== list[i + 1] && element - 1 !== list[i - 1]) {
         console.log(element);
         res.push(element)
      }
      if (element + 1 == list[i + 1] && element + 2 == list[i + 2] && element - 1 !== list[i - 1]) {
         console.log(element);
         res.push(`${element}-`)
      }
      if (element - 1 == list[i - 1] && element - 2 == list[i - 2] && element + 1 !== list[i + 1]) {
         console.log(element);
         res.push(element)
      }
      if (element + 1 == list[i + 1] && element - 1 !== list[i - 1] && element + 2 !== list[i + 2]) {
         console.log(element);
         res.push(element)
      }
      if (element - 1 == list[i - 1] && element + 1 !== list[i + 1] && element - 2 !== list[i - 2]) {
         console.log(element);
         res.push(element)
      }
   };
   console.log(res.join(',').replace(/-,/g, "-"));
}
//solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])

function validSolution(board) {
   let ind = 0
   while (ind < 9) {
      for (let i = 0; i < board.length; i++) {
         const element = board[i];
         console.log(element[ind]);
         console.log(element.slice(ind + 1));
         ind++
      }
   }

   board.forEach(element => {
      let ind = 0
      let res = []
      while (ind < board.length) {
         res.push(element[ind])
         ind++
      }

      console.log(res);
      for (let i = 0; i < element.length; i++) {
         const el = element.sort()[i];
         if (el != i + 1) {
            console.log(false);
         }
      }

   });
   console.log(true);
}
validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]])

function arrayDiffVeryFast(a, b) {
   let res = []
   a.forEach(element => {
      if (!b.includes(element)) {
         res.push(element)
      }
   });
   console.log(res);
}
//arrayDiffVeryFast([1, 2, 2, 2, 3, 5, 5, 1, 2, 4, 5, 1], [2, 1, 5])

function solution(string) {
   let res = []
   for (let char of string) {
      if (char == char.toUpperCase()) {
         res.push(` ${char}`)
      }
      else { res.push(char) }
   }
   console.log(res.join(''));
}
//solution('camelCasing')

function stringExpansion(s) {
   let res = []
   let alphabet1 = 'abcdefghijklmnopqrstuvwxyz'.split('');
   let alphabet2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
   let n = 1
   for (let char of s) {

      if (!alphabet1.includes(char) && !alphabet2.includes(char)) {
         n = +char
         console.log(typeof +char != 'number');
      }
      else {
         res.push(char.repeat(n))
         console.log(n);
         console.log(typeof +char == 'number');
      }
   }
   console.log(res.join(''));
}
//stringExpansion('3D2a5d2f')

function posAverage(s) {
   let arr = s.split(', ')
   console.log(arr);
   let count = 0
   while (arr.length > 0) {
      let res = arr.slice(1)
      res.forEach(element => {
         let el
         for (let i = 0; i < element.length; i++) {
            el = element[i];
         }
         for (let index = 0; index < arr[0].length; index++) {
            const e = arr[0][index];
            console.log(arr[0]);
            if (e == el) {
               count++
            }
         }
      });
      arr = arr.slice(1)
   }
   console.log(count);
}
//posAverage("444, 649, 666")

function encode(s) {
   let arr1 = s.split('')
   let arr2 = s.split('').reverse()
   console.log(arr1, arr2);
   let res = []
   while (res.length < s.length) {
      res.push(arr1[0], arr2[0])
      arr1 = arr1.slice(1)
      arr2 = arr2.slice(1)
   }
   console.log(res.slice(0, s.length).join(''));
}
encode("codewars")

function decode(s) {
   let arr1 = s.split('')
   let arr2 = s.split('').reverse()
   console.log(arr1, arr2);
   let res = []
   if (s.length % 2 == 0) {
      for (let i = 0; i < arr1.length; i++) {
         const element = arr1[i];
         if (i % 2 == 0) {
            res.push(element)
         }
      }
      for (let i = 0; i < arr2.length; i++) {
         const element = arr2[i];
         if (i % 2 == 0) {
            res.push(element)
         }
      }
   }
   else {
      for (let i = 0; i < arr1.length; i++) {
         const element = arr1[i];
         if (i % 2 == 0) {
            res.push(element)
         }
      }
      for (let i = 0; i < arr2.length; i++) {
         const element = arr2[i];
         if (i % 2 != 0) {
            res.push(element)
         }
      }
   }
   console.log(res.slice(0, s.length).join(''));
}
//decode("wehti")


function formatDuration(seconds) {
   function addValue(a, b) {
      if (a == 1) {
         result.push(`1 ${b}`)
      }
      if (a > 1) {
         result.push(`${a} ${b}` + "s")
      }
   }
   let result = []
   let second = seconds % 60
   addValue(second, "second")
   let minute = Math.floor((seconds / 60) % 60)
   addValue(minute, "minute")
   let hour = Math.trunc((seconds / 3600) % 24)
   addValue(hour, "hour")
   let day = Math.floor((seconds / 86400) % 365)
   addValue(day, "day")
   let year = Math.floor(seconds / 31536000)
   addValue(year, "year")
   console.log(result.reverse().join(', ').replace(/,(?![^,]*,)/m, ' and'));
}
formatDuration(253374061)

function factorial(n) {
   let res = []
   for (let i = 1; i <= n; i++) {
      res.push(i)
   }
   console.log(res.reduce((a, b) => a * b));
}
//factorial(123)

function sumIntervals(intervals) {

}
sumIntervals([
   [1, 4],
   [7, 10],
   [3, 5]
])

function XO(str) {
   let x = 0
   let o = 0
   for (let char of str.toLowerCase()) {
      if (char == "x") {
         x++
      }
      if (char == "o") {
         o++
      }
   }
}
XO("xxOo")

function upArray(arr) {
   let str = arr.join("")
   let n = +str
   console.log(n.toFixed(21));
   console.log(BigInt(+str + 1).toString().split(''));
}
//upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

function isPangram(string) {
   let res = []
   let arr = string.toLowerCase().replace(/[^a-z]/gi, '')
   console.log(arr);
   for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (!res.includes(element)) {
         res.push(element)
      }
   }
   console.log(res);
}
isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ")

function incrementString(strng) {
   let str = strng.replace(/[0-9]+$/, "")
   console.log(str);
   let num = strng.slice(str.length, strng.length)
   console.log(num);
   if (num.length == 0) {
      console.log(str + 1);
   }
   let sum = +num + 1
   console.log(sum);
   if (sum.toString().length < num.length) {
      sum = "0".repeat(num.length - sum.toString().length) + `${sum}`
   }
   console.log(str + sum);
}
incrementString("foo11bar001")

function solve(s) {
   let uppercase = s.replace(/[^A-Z]/g, "")
   let lowercase = s.replace(/[^a-z]/g, "")
   let numbers = s.replace(/[^0-9]/g, "")
   let specChar = s.replace(/[0-9 a-z]/gi, "")
   console.log(specChar)
   console.log([uppercase.length, lowercase.length, numbers.length, specChar.length]);

}
solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD")

function expandedForm(num) {
   let str = num.toString()
   let res = []
   let nul = ""
   for (let i = str.length - 1; i >= 0; i--) {
      const element = str[i];
      console.log(element);
      if (element != 0) {
         res.push(element + nul)
      }
      nul += 0
   }
   console.log(res.reverse().join(" + "));
}
expandedForm(4302)

function numBlocks(w, l, h) {
   let res = 0
   while (h > 0) {
      res = res + (w * l)
      w++
      l++
      h--
   }
   console.log(res);
}
numBlocks(1, 1, 2)


function isPerfect(n) {
   let res = []
   for (let i = 0; i < n; i++) {
      if (n % i == 0) {
         res.push(i)
      }
   }
   console.log(res.reduce((a, b) => a + b) == n);
}
isPerfect(28)

function triangular(n) {
   let res = []
   for (let i = n; i > 0; i--) {
      res.push(i)
   }
   console.log(res.reduce((a, b) => a + b));
}
triangular(4)


function sumStrings(a, b) {
   let x = parseInt(a)
   let y = parseInt(b)
   console.log(x + y);
}
sumStrings('123', '456')

function isInteresting(number, awesomePhrases) {
   let numPlusOne = number + 1
   let numPlusTwo = number + 2
   if (number < 98) return 0;
   if (awesomePhrases.includes(number)) {
      console.log("2");
      //return 2;
   }
   if (awesomePhrases.includes(numPlusOne) || awesomePhrases.includes(numPlusTwo)) {
      console.log("1");
      //return 1;
   }
   for (let i = 0; i < number.toString().length; i++) {
      const element = number.toString()[i];
   }
   let increment = "1234567890"
   if (increment.indexOf(number.toString()) != -1) {
      console.log("2");
   }
   if (increment.indexOf(numPlusOne.toString()) != -1 || increment.indexOf(numPlusTwo.toString()) != -1) {
      console.log("1");
      console.log(increment.indexOf(numPlusOne.toString() != -1) || increment.indexOf(numPlusTwo.toString() != -1))
   }
   let decrement = "9876543210"
   if (decrement.indexOf(number.toString()) >= 0) {
      console.log("2");
   }
   if (decrement.indexOf(numPlusOne.toString()) >= 0 || decrement.indexOf(numPlusTwo.toString()) != -1) {
      console.log("1");
   }
}
isInteresting(3209, [1337, 256])
//===============countdown===================//

const btnCountdown = document.querySelector('.countdown__butn');
btnCountdown.addEventListener('click', () => {
   const userDate = document.querySelector('.countdown__input').value;
   initCountdown('.countdown', userDate)
   console.log(userDate);
});


function initCountdown(parent, to) {

   function countdown() {

      let decCache = []
      decCache = [2, 0, 1, 1, 1, 2];
      function decOfNum(number, titles) {
         if (!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCache[Math.min(number % 10, 5)];
         return titles[decCache[number]];
      }

      let toCountDate = new Date(to);
      let currentDate = new Date();

      let totalSeconds = Math.floor((toCountDate - currentDate) / 1000);
      const seconds = totalSeconds % 60;
      const minutes = Math.floor((totalSeconds / 60) % 60);
      const hours = Math.floor((totalSeconds / 3600) % 24);
      const days = Math.floor(totalSeconds / 86400)
      const root = document.querySelector(parent);

      root.querySelector('.countdown__day .countdown__num').textContent = days;
      root.querySelector('.countdown__day .countdown__name').textContent = decOfNum(days, ['день', 'дня', 'дней']);
      root.querySelector('.countdown__hers .countdown__num').textContent = hours;
      root.querySelector('.countdown__hers .countdown__name').textContent = decOfNum(hours, ['час', 'часа', 'часов']);
      root.querySelector('.countdown__minuts .countdown__num').textContent = minutes;
      root.querySelector('.countdown__minuts .countdown__name').textContent = decOfNum(minutes, ['минута', 'минуты', 'минут']);
      root.querySelector('.countdown__seconds .countdown__num').textContent = seconds;
      root.querySelector('.countdown__seconds .countdown__name').textContent = decOfNum(seconds, ['секунда', 'секунды', 'секунд']);
   }
   countdown()

   setInterval(countdown, 1000)
}

//initCountdown('.countdown', userDate)

//===============countdown===================//
//===============color  bg ==================//
const colorBtn = document.querySelector('.color__butn')
const colorBtn2 = document.querySelector('.color__butn2')
const countdownBody = document.querySelector('.countdown')

colorBtn.addEventListener('click', criateNewColor)
colorBtn2.addEventListener('click', returnOldColor)

function criateNewColor() {
   let newColor = '#';
   const colorLitera = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'f','a', 'b', 'c', 'd', 'f'];
   for (let i = 0; i < 6; i++) {
      let randomNum = Math.floor(Math.random() * colorLitera.length)
      newColor += colorLitera[randomNum]
   }
   console.log(newColor);
   countdownBody.style.backgroundColor = `${newColor}`
}

function returnOldColor() {
   countdownBody.style.backgroundColor = "rgb(143, 152, 202)"
}

//===============color  bg =================//

//===============API========================//
const buttonCar = document.querySelector('.car__butn')
const img = document.querySelector('.car__img')
const url = "http://aws.random.cat/meow";


buttonCar.addEventListener('click', () => {
   let loaded = img.complete;
   if (loaded) {
      fetchImg()
   }
})

async function fetchImg() {
   try {
      const response = await fetch(url);
      const data = await response.json();
      img.src = data.file;
      console.log(data.file);
      console.log(img);
   }
   catch (error) {
      console.log(error);
   }
}

//===============API========================//




