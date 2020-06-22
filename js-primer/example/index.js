"use strict"



// /////
// const obj = {
//   method() {
//     return "this is method."
//   },
//   greet() {
//     return "say hello!"
//   }
// }

// console.log(obj.method())
// console.log(obj.greet())

// /////
// const isTrue = true
// if (isTrue) console.log("hello, hello, true!")

// /////
// const hash = {
//   name: "nob",
//   age: 55
// }

// const key = "name"

// console.log(hash[key])

// /////
// const hash = {
//   name: "nob",
//   age: 55
// };

// console.log(hash.name);
// console.log(hash.age);
// console.log(hash["name"]);
// console.log(hash["age"]);

// /////
// const name = "nob";
// const age = 55;
// const hash = { name, age };
// // const hash = {
// //   name: name
// // };

// console.log(hash);

// //
// const str2arr = (str) => {
//   let arr = []
//   for (const s of str) {
//     arr.push(s)
//   }
//   return arr
// }

// console.log(str2arr("hello"))

// //
// const str = "hello"
// console.log(str.split(""))

// //
// const numsCalc = (...nums) => {
//   let sum = 0
//   for (const n of nums) {
//     sum += n
//   }
//   return sum
// }

// console.log(numsCalc(1, 2, 3, 4, 5))

// /////
// const sum = (...numbers) => {
//   let total = 0;
//   for (let i = 0; i < numbers.length + 1; i++) {
//     total += i;
//   }
//   return total;
// };

// console.log(sum(1, 2, 3, 4, 5));

// /////
// let sum = 0;
// for (let n = 1; n < 11; n++) {
//   console.log(`n: ${n}`);
//   sum = sum + n;
//   console.log(`sum: ${sum}`);
// }

// console.log(`合計は、${sum}。`);

// /////
// let n = 0;
// let sum = 0;

// console.log(`初期値は、${n}。`);

// while (n < 11) {
//   sum += n;
//   n += 1;
// };

// console.log(`合計は、${sum}。`);

// /////
// const object = {
//   greeting(name) {
//     return `hello ${name}`;
//   },
//   joinArray(...arr) {
//     return arr;
//   }
// };

// console.log(object.greeting("takahiro"));
// console.log(object.joinArray("nob", "kazu", "mari"));

// /////
// const arrFor = (...array) => array.forEach(v => console.log(v));
// arrFor(1, 2, 3);

// /////
// const arrCalc = (...array) => array.map(n => n * 2);
// console.log(arrCalc(1, 2, 3));

// /////
// const greet = str => {
//   if (typeof str === "string") {
//     return `Hello, ${str}!`
//   } else {
//     return `Hello!`
//   }
// };
// console.log(greet());

// /////
// const greet = str => `Hello, ${str}!`;
// console.log(greet("nob"));

// /////
// const one = "1";
// console.log(String(one));

// /////
// let x;
// if (x === undefined) {
//   console.log(`x is falsy`, x)
// }

// /////
// console.log(String(1) === "1");
// console.log(1 + true);
// console.log(1 + false);

// function addPrefix(text, prefix) {
//   const pre = typeof prefix === "string" ? prefix : "Beatles";
//   return `${text}, ${pre}`;
// }

// console.log(addPrefix("Hello", "John"));
// console.log(addPrefix("Hello"));

// const obj = {
//   "name": "nobuyuki takahiro",
//   "age": 55,
//   "email": "nob@mail.com"
// };

// const { email, age, name } = obj;
// console.log(age);
// console.log(email);
// console.log(name);

// const { name } = obj;
// console.log(name);

// const name = obj.name;
// console.log(name);

// const arr = ["nob", "kazu", "mari"];
// const [first, last] = arr;
// console.log(first);
// console.log(last);

// console.log(1 == "1")
// console.log(1 === "1")


// const name = {
//   "first": "nob",
//   "last": "takahiro"
// };

// console.log(name.first);
// console.log(name.last);
// console.log(`Hello, ${name.first} ${name.last}.`);
// console.log(`Hello, ${name["first"]} ${name["last"]}.`);


// const name = "nob";
// console.log(`My name is ${name}!`);


// console.log(typeof ture);
// console.log(typeof 31);
// console.log(typeof "takahiro");
// console.log(typeof Symbol("シンボル"));
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof ["nob", "kazu", "mari"]);
// console.log(typeof { "key": "value" });
// console.log(typeof function() {});
